import nodemailer from 'nodemailer';

const TO = process.env.CONTACT_TO || 'affansheikh125@gmail.com';

/**
 * Sends the enquiry to your inbox.
 * Option A (default): Gmail + App Password  -> set GMAIL_USER and GMAIL_APP_PASSWORD
 * Option B: Resend HTTP API                 -> set RESEND_API_KEY
 *   (use B if your host blocks SMTP ports, e.g. some free hosting tiers)
 */
export async function sendMail({ subject, html, text, replyTo }) {
  if (process.env.RESEND_API_KEY) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || 'Portfolio <onboarding@resend.dev>',
        to: [TO],
        reply_to: replyTo,
        subject,
        html,
        text,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    return;
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('No mail credentials set. Add GMAIL_USER + GMAIL_APP_PASSWORD (or RESEND_API_KEY) to .env');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: TO,
    replyTo,
    subject,
    html,
    text,
  });
}
