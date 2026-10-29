import { LuCode, LuSmartphone, LuTrendingUp } from 'react-icons/lu';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-text">
          <span className="label reveal">About</span>
          <h2 className="h2 reveal">A developer who also knows <em>how to get users.</em></h2>
          <p className="reveal">
            I design and develop <strong>full-stack software</strong> from database to UI, and <strong>mobile apps</strong> that
            run on both Android and iOS. Every product is deployed through <strong>automated CI/CD pipelines</strong>, so
            updates ship fast and safely.
          </p>
          <p className="reveal">
            A great product still needs customers. That's why I also run <strong>performance marketing</strong> campaigns on
            Meta and Google, turning ad spend into qualified <strong>B2B and B2C leads</strong>. Clients get one person who
            understands both the code and the growth.
          </p>
          <div className="pillars reveal">
            <div className="pillar"><LuCode /><b>Build</b><small>Web & full-stack</small></div>
            <div className="pillar"><LuSmartphone /><b>Ship</b><small>Mobile & CI/CD</small></div>
            <div className="pillar"><LuTrendingUp /><b>Grow</b><small>Ads & leads</small></div>
          </div>
        </div>

        <div className="code-card reveal">
          <div className="code-top"><i /><i /><i /><span>affan.js</span></div>
          <pre className="code-body">
<span className="k">const</span> <span className="p">affan</span> = {'{'}{'\n'}
{'  '}name: <span className="s">'Muhammad Affan Sheikh'</span>,{'\n'}
{'  '}based: <span className="s">'Lahore, Pakistan'</span>,{'\n'}
{'  '}stack: [<span className="s">'React'</span>, <span className="s">'Node'</span>, <span className="s">'Express'</span>,{'\n'}
{'          '}<span className="s">'MongoDB'</span>, <span className="s">'Oracle'</span>],{'\n'}
{'  '}mobile: <span className="s">'React Native'</span>,{'\n'}
{'  '}devops: <span className="s">'CI/CD pipelines'</span>,{'\n'}
{'  '}automate: [<span className="s">'Python'</span>, <span className="s">'AI chatbots'</span>],{'\n'}
{'  '}growth: [<span className="s">'Meta'</span>, <span className="s">'Google'</span>, <span className="s">'Microsoft'</span>],{'\n'}
{'  '}leads: [<span className="s">'B2B'</span>, <span className="s">'B2C'</span>],{'\n'}
{'}'};{'\n'}
<span className="c">// I build it, ship it, then help it sell.</span>
          </pre>
        </div>
      </div>
    </section>
  );
}
