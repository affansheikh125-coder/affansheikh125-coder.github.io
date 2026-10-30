import { LuLayers, LuSmartphone, LuGitBranch, LuMegaphone, LuCheck, LuBot, LuWorkflow } from 'react-icons/lu';

const SERVICES = [
  {
    icon: LuLayers, title: 'Full-Stack Development',
    text: 'Complete web applications designed and built end to end with the MERN stack and Oracle.',
    points: ['React frontends', 'Node.js + Express APIs', 'MongoDB & Oracle'],
  },
  {
    icon: LuSmartphone, title: 'Mobile App Development',
    text: 'One React Native codebase, native apps on both Android and iOS.',
    points: ['Android & iOS', 'API integration', 'Store-ready builds'],
  },
  {
    icon: LuGitBranch, title: 'CI/CD & Deployment',
    text: 'Automated pipelines that test, build and deploy your product on every push.',
    points: ['GitHub Actions', 'Automated testing', 'Reliable releases'],
  },
  {
    icon: LuWorkflow, title: 'Python Automation',
    text: 'Scripts and bots that take repetitive work off your team: data, reports, scraping and syncing.',
    points: ['Python + FastAPI', 'Scraping & reports', 'Store & sheet sync'],
  },
  {
    icon: LuBot, title: 'AI Chatbots for E-commerce',
    text: 'Ready-made chatbot products for online stores that answer customers and recover sales.',
    points: ['Order tracking', 'Product Q&A', 'WhatsApp & web chat'],
  },
  {
    icon: LuMegaphone, title: 'Performance Marketing',
    text: 'Paid campaigns on Meta, Google and Microsoft, optimized for leads and sales, not just likes.',
    points: ['Meta, Google & Microsoft Ads', 'B2B & B2C lead gen', 'Tracking & optimization'],
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="label reveal">Services</span>
            <h2 className="h2 reveal">From the first line of code <em>to the first customer.</em></h2>
          </div>
          <p className="lead reveal">Build the product, ship it reliably, automate the busywork, then bring in the people who'll pay for it.</p>
        </div>
        <div className="services stagger">
          {SERVICES.map(({ icon: Icon, title, text, points }) => (
            <article key={title} className="service">
              <Icon className="service-icon" />
              <h3 className="h3">{title}</h3>
              <p>{text}</p>
              <ul>{points.map((p) => <li key={p}><LuCheck />{p}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
