import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sendMail } from './mailer.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.set('trust proxy', 1);
app.use(express.json({ limit: '20kb' }));
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || true }));

// --- simple in-memory rate limit: 5 messages per IP every 15 minutes ---
const hits = new Map();
function rateLimit(req, res, next) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const list = (hits.get(req.ip) || []).filter((t) => now - t < windowMs);
  if (list.length >= 5) return res.status(429).json({ error: 'Too many messages. Please try again in a few minutes.' });
  list.push(now);
  hits.set(req.ip, list);
  next();
}

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
const clean = (s, max) => String(s ?? '').trim().slice(0, max);
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/contact', rateLimit, async (req, res) => {
  const name = clean(req.body.name, 80);
  const email = clean(req.body.email, 120);
  const phone = clean(req.body.phone, 30);
  const service = clean(req.body.service, 60);
  const message = clean(req.body.message, 3000);

  // Honeypot: real visitors never fill this hidden field.
  if (clean(req.body.company, 100)) return res.json({ ok: true });

  if (!name || !isEmail(email) || message.length < 10) {
    return res.status(400).json({ error: 'Please enter your name, a valid email and a message (10+ characters).' });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px">
      <h2 style="margin:0 0 12px">📩 New portfolio enquiry</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:6px 0;color:#666;width:120px">Name</td><td><b>${esc(name)}</b></td></tr>
        <tr><td style="padding:6px 0;color:#666">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#666">Phone</td><td>${esc(phone) || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#666">Service</td><td>${esc(service) || '—'}</td></tr>
      </table>
      <p style="margin:18px 0 6px;color:#666">Message</p>
      <div style="white-space:pre-wrap;background:#f5f5f7;padding:14px;border-radius:8px">${esc(message)}</div>
    </div>`;

  try {
    await sendMail({
      subject: `New enquiry: ${service || 'Portfolio'} — ${name}`,
      html,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\n${message}`,
      replyTo: email,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Mail error:', err.message);
    res.status(500).json({ error: 'Sorry, the message could not be sent right now.' });
  }
});

// --- serve the built React app in production ---
const dist = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(dist));
app.get(/^(?!\/api).*/, (_req, res) => res.sendFile(path.join(dist, 'index.html')));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
