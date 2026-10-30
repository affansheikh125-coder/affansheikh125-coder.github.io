import { useState } from 'react';
import { FaWhatsapp, FaLinkedinIn, Gmail } from '../brands';
import { SiGithub } from '../brands';
import { LuArrowUpRight, LuArrowRight, LuCircleCheck, LuCircleAlert, LuPhone, LuMapPin, LuClock } from 'react-icons/lu';
import { PROFILE, whatsappLink } from '../data';

// Same server in production (Express serves the React build), so '' works.
// Set VITE_API_URL only if you host the API on a different domain.
const API = (import.meta.env && import.meta.env.VITE_API_URL) || '';

const EMPTY = { name: '', email: '', phone: '', service: 'Full-stack web app', message: '', company: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [state, setState] = useState({ status: 'idle', msg: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // 1) Try our own Node/Express API (when hosted on Render).
  // 2) If there is no API (e.g. hosted on GitHub Pages), send through FormSubmit,
  //    a free service that emails the form to PROFILE.email.
  async function sendViaApi() {
    const res = await fetch(`${API}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.status === 404 || res.status === 405) return null; // no API here
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'The message could not be sent.');
    return true;
  }
  async function sendViaFormSubmit() {
    const res = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `New enquiry: ${form.service} — ${form.name}`,
        _template: 'table',
        _captcha: 'false',
        _honey: form.company,
        name: form.name, email: form.email, phone: form.phone, service: form.service, message: form.message,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || String(data.success) === 'false') throw new Error('The message could not be sent right now.');
  }

  async function submit(e) {
    e.preventDefault();
    if (form.company) return; // bot
    setState({ status: 'sending', msg: '' });
    try {
      let sent = null;
      try { sent = await sendViaApi(); } catch (err) { if (err.message !== 'Failed to fetch' && !(err instanceof TypeError)) throw err; }
      if (!sent) await sendViaFormSubmit();
      setState({ status: 'ok', msg: "Message sent. I'll reply within 24 hours." });
      setForm(EMPTY);
    } catch (err) {
      setState({ status: 'err', msg: err instanceof TypeError ? 'The message could not be sent right now.' : err.message });
    }
  }

  const methods = [
    { icon: FaWhatsapp, tone: 'wa', title: 'Chat on WhatsApp', text: 'The fastest way to reach me. Send a message and we can talk right away.', value: PROFILE.whatsappDisplay, cta: 'Start chat', href: whatsappLink() },
    { icon: Gmail, tone: 'mail', title: 'Send an email', text: 'Share your brief, files or questions and I will reply in detail.', value: PROFILE.email, cta: 'Compose email', href: `mailto:${PROFILE.email}?subject=${encodeURIComponent('Project enquiry')}` },
    { icon: LuPhone, tone: 'call', title: 'Call me', text: 'Prefer to talk it through? Give me a call.', value: '+92 312 4243627', cta: 'Call now', href: 'tel:+923124243627' },
  ];

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="label reveal">Contact</span>
          <h2 className="h2 reveal">Let's build something <em>great together.</em></h2>
          <p className="lead reveal">Tell me what you're building or what you want to grow. Pick whichever way suits you best.</p>
        </div>

        <div className="methods stagger">
          {methods.map(({ icon: Icon, tone, title, text, value, cta, href }) => (
            <div key={title} className={`method ${tone}`}>
              <div className="method-ic"><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <b className="method-value">{value}</b>
              <a className={`btn ${tone === 'wa' ? 'btn-wa' : 'btn-ghost'}`} href={href} target={tone === 'call' ? undefined : '_blank'} rel="noreferrer">
                {cta} <LuArrowUpRight />
              </a>
            </div>
          ))}
        </div>

        <div className="contact-grid">
          <div className="contact-side reveal">
            <h3 className="h3">Prefer a form?</h3>
            <p className="muted">Send a detailed query and it lands straight in my inbox.</p>
            <ul className="contact-facts">
              <li><LuClock /> Reply within 24 hours</li>
              <li><LuMapPin /> Based in Lahore, Pakistan · available for remote projects</li>
            </ul>
            <div className="contact-socials">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="chip"><FaLinkedinIn /> LinkedIn</a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="chip"><SiGithub /> GitHub</a>
            </div>
          </div>

        <form className="form reveal" onSubmit={submit}>
          <h3 className="h3">Send a query</h3>
          <p>All fields except phone are required.</p>

          <div className="row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" required maxLength={80} value={form.name} onChange={set('name')} placeholder="Ali Khan" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required value={form.email} onChange={set('email')} placeholder="you@company.com" />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="phone">Phone / WhatsApp <span className="muted">(optional)</span></label>
              <input id="phone" maxLength={30} value={form.phone} onChange={set('phone')} placeholder="+92 3xx xxxxxxx" />
            </div>
            <div className="field">
              <label htmlFor="service">I need help with</label>
              <select id="service" value={form.service} onChange={set('service')}>
                <option>Full-stack web app</option>
                <option>Mobile app (Android / iOS)</option>
                <option>CI/CD &amp; deployment</option>
                <option>Python automation / AI chatbot</option>
                <option>Meta / Google / Microsoft Ads</option>
                <option>B2B / B2C lead generation</option>
                <option>Something else</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" required minLength={10} maxLength={3000} value={form.message} onChange={set('message')} placeholder="Tell me about your project, goals and timeline" />
          </div>
          {/* honeypot field: hidden from humans, catches spam bots */}
          <input id="company" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.company} onChange={set('company')} />

          <button className="btn btn-primary" disabled={state.status === 'sending'}>
            {state.status === 'sending' ? <><span className="spinner" /> Sending</> : <>Send message <LuArrowRight /></>}
          </button>

          {state.status === 'ok' && <div className="alert ok" role="status"><LuCircleCheck />{state.msg}</div>}
          {state.status === 'err' && (
            <div className="alert err" role="alert">
              <LuCircleAlert />
              <span>
                {state.msg} Please reach me on{' '}
                <a href={whatsappLink(form.message || undefined)} target="_blank" rel="noreferrer">WhatsApp ({PROFILE.whatsappDisplay})</a>{' '}
                or email {PROFILE.email}.
              </span>
            </div>
          )}
        </form>
        </div>
      </div>
    </section>
  );
}
