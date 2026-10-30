import { FaWhatsapp, FaLinkedinIn, Gmail } from '../brands';
import { SiGithub } from '../brands';
import { PROFILE, whatsappLink } from '../data';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {PROFILE.fullName} · Lahore, Pakistan</span>
          <div className="socials">
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SiGithub /></a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Gmail /></a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
      </footer>
      <a className="wa-fab" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <FaWhatsapp color="#fff" /><span>Chat on WhatsApp</span>
      </a>
    </>
  );
}
