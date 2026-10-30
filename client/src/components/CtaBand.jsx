import { LuArrowRight } from 'react-icons/lu';
import { FaWhatsapp } from '../brands';
import { whatsappLink } from '../data';

export default function CtaBand() {
  return (
    <section className="cta-band-wrap" aria-label="Start a project">
      <div className="container">
        <div className="cta-band reveal">
          <span className="label">Let's work together</span>
          <h2 className="h2">Have an idea? <em>Let's make it real.</em></h2>
          <p className="lead">Tell me about your project today. You'll get a clear plan, timeline and price within 24 hours.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">Book a free call <LuArrowRight /></a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg"><FaWhatsapp /> Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
