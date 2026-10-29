import { useEffect, useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';

const LINKS = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Skills', '#skills'],
  ['Automation', '#automation'],
  ['Marketing', '#marketing'],
  ['Work', '#work'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo" aria-label="Affan Sheikh home">
          <span className="logo-mark">A</span>
          <span>Affan Sheikh</span>
        </a>
        <ul className="nav-links">
          {LINKS.map(([label, href]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary nav-cta">Let's talk</a>
        <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <LuX /> : <LuMenu />}
        </button>
      </div>
      <nav className={`mobile-menu ${open ? 'open' : ''}`}>
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>Let's talk</a>
      </nav>
    </header>
  );
}
