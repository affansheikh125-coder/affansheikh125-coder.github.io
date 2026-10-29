import { SiReact, SiNodedotjs, SiMongodb, SiMeta, SiGoogleads, SiPython } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa6';
import { LuArrowRight } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';
import { useTypewriter } from '../hooks';
import { PROFILE, whatsappLink } from '../data';

const WORDS = ['web apps.', 'mobile apps.', 'AI chatbots.', 'ads that sell.'];

export default function Hero() {
  const typed = useTypewriter(WORDS);

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="status reveal"><span className="dot" /> Available for new projects</div>
          <h1 className="h1 reveal">
            <span className="soft">Hi, I'm Affan.</span><br />
            I build
            <span className="typed-line">{typed}<span className="caret" /></span>
          </h1>
          <p className="hero-sub reveal">
            Full-stack developer working with <strong>React, Node.js, Express, MongoDB and Oracle</strong>. I build
            mobile apps in <strong>React Native</strong>, ship with <strong>CI/CD</strong>, and grow products through
            <strong> performance marketing</strong> on Meta, Google and Microsoft. I also build <strong>Python automation and AI
            chatbots</strong> for online stores.
          </p>
          <div className="hero-actions reveal">
            <a href="#contact" className="btn btn-primary">Start a project <LuArrowRight /></a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-ghost"><FaWhatsapp /> WhatsApp</a>
          </div>
        </div>

        <aside className="facts reveal" aria-label="At a glance">
          <div className="facts-head"><span>At a glance</span><span>2026</span></div>
          <div className="fact"><span>Based in</span><b>{PROFILE.location}</b></div>
          <div className="fact"><span>Builds</span>
            <div className="chips">
              <span className="chip"><SiReact />React</span>
              <span className="chip"><SiNodedotjs />Node.js</span>
              <span className="chip"><SiMongodb />MongoDB</span>
            </div>
          </div>
          <div className="fact"><span>Mobile</span><b>React Native · Android & iOS</b></div>
          <div className="fact"><span>Ships with</span><b>CI/CD pipelines</b></div>
          <div className="fact"><span>Automates</span><div className="chips"><span className="chip"><SiPython />Python</span><span className="chip">AI chatbots</span></div></div>
          <div className="fact"><span>Grows with</span>
            <div className="chips">
              <span className="chip"><SiMeta />Meta</span>
              <span className="chip"><SiGoogleads />Google</span>
              <span className="chip"><FaMicrosoft />Microsoft</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
