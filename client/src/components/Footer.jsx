import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import { LuMail } from 'react-icons/lu';
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
            <a href={`mailto:${PROFILE.email}`} aria-label="Email"><LuMail /></a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
      </footer>
      <a className="wa-fab" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <FaWhatsapp /><span>Chat on WhatsApp</span>
      </a>
    </>
  );
}
