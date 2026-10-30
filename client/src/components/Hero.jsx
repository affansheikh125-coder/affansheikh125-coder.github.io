import { SiReact, SiNodedotjs, SiMongodb, SiMeta, SiGoogleads, SiPython, SiGithubactions, SiShopify, FaMicrosoft, FaWhatsapp } from '../brands';
import { LuArrowRight, LuCheck } from 'react-icons/lu';
import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../hooks';
import { whatsappLink, media } from '../data';

const WORDS = ['web apps.', 'mobile apps.', 'AI chatbots.', 'ads that sell.'];
const HOLD = 2800; // ms each word stays on screen

// Swaps the headline word with a soft fade + blur, instead of typing.
function useRotatingWord(words) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), HOLD);
    return () => clearInterval(id);
  }, [words]);
  return [words[i], i];
}

// Faded advertising reel behind the hero. Autoplays muted; shows a still frame if the visitor prefers less motion.
function HeroVideo() {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (prefersReducedMotion()) { v.pause(); return; }
    v.play().catch(() => {});
  }, []);
  return (
    <video ref={ref} className="hero-video" src={media('hero-reel.mp4')} poster={media('hero-reel.webp')}
      autoPlay muted loop playsInline preload="auto" aria-hidden="true" tabIndex={-1} />
  );
}

// Semicircle gauge split into three segments (sample campaign split).
function Gauge() {
  const segs = [[0, 0.52, '#22c55e'], [0.535, 0.845, '#4ade80'], [0.86, 1, '#86efac']];
  const arc = (a0, a1) => {
    const R = 70, cx = 90, cy = 86;
    const p = (t) => { const a = Math.PI * (1 - t); return [cx + R * Math.cos(a), cy - R * Math.sin(a)]; };
    const [x0, y0] = p(a0); const [x1, y1] = p(a1);
    return `M${x0.toFixed(1)} ${y0.toFixed(1)} A${R} ${R} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  };
  return (
    <svg viewBox="0 0 180 96" className="gauge" aria-hidden="true">
      <path d={arc(0, 1)} className="gauge-track" />
      {segs.map(([a, b, c], i) => <path key={i} d={arc(a, b)} stroke={c} className="gauge-seg" style={{ '--d': `${0.3 + i * 0.25}s` }} pathLength="1" />)}
    </svg>
  );
}

export default function Hero() {
  const [word, wi] = useRotatingWord(WORDS);

  return (
    <section className="hero" id="top">
      <HeroVideo />
      <div className="hero-video-shade" aria-hidden="true" />
      <div className="hero-rays" aria-hidden="true" />

      <div className="container hero-center">
        <a href="#contact" className="hero-pill reveal"><span className="dot" /> Available for new projects · reply within 24h <LuArrowRight /></a>
        <h1 className="h1 reveal">
          Hi, I'm Affan. I build
          <span className="typed-line"><span className="rot-word" key={wi} style={{ '--hold': `${HOLD}ms` }}>{word}</span></span>
          <span className="sr-only">web apps, mobile apps, AI chatbots and ads that sell.</span>
        </h1>
        <p className="hero-sub reveal">
          Full-stack and mobile developer from Lahore. I build products with React, Node.js and React Native, ship them
          with CI/CD, automate the busywork with Python, and grow them with Meta, Google and Microsoft ads.
        </p>
        <div className="hero-actions reveal">
          <a href="#contact" className="btn btn-primary btn-lg">Book a free call <LuArrowRight /></a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg"><FaWhatsapp /> WhatsApp me</a>
        </div>
      </div>

      <div className="container hero-widgets" aria-hidden="true">
        <div className="hw hw-left">
          <div className="hw-head"><b>Tech stack</b><span className="hw-tag">Full-stack</span></div>
          <div className="hw-logos">
            {[SiReact, SiNodedotjs, SiMongodb, SiPython, SiGithubactions, SiShopify].map((Icon, i) => (
              <span key={i} style={{ '--i': i }}><Icon /></span>
            ))}
          </div>
          <small>Web · Mobile · Automation</small>
        </div>

        <div className="hw hw-center">
          <div className="hw-head"><b>Campaign leads</b><span className="hw-tag">Sample</span></div>
          <div className="gauge-wrap">
            <Gauge />
            <div className="gauge-num"><b>412</b><small>leads / month</small></div>
          </div>
          <div className="hw-legend"><span><SiMeta /> Meta</span><span><SiGoogleads /> Google</span><span><FaMicrosoft /> Microsoft</span></div>
        </div>

        <div className="hw hw-right">
          <div className="hw-head"><b>Every release</b><span className="hw-tag live"><i className="dot" /> Live</span></div>
          <ul className="hw-steps">
            <li><LuCheck /> Build passed</li>
            <li><LuCheck /> Tests passed</li>
            <li><LuCheck /> Deployed with CI/CD</li>
          </ul>
          <div className="hw-bars">{[38, 52, 46, 64, 58, 76, 90].map((h, i) => <i key={i} style={{ '--h': `${h}%`, '--i': i }} />)}</div>
        </div>
      </div>
    </section>
  );
}
