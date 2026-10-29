import {
  SiReact, SiJavascript, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiMongodb,
  SiAndroid, SiApple, SiExpo, SiGithubactions, SiDocker, SiGithub, SiVercel, SiRender, SiFigma, SiPostman,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa6';
import { SiPython, SiFastapi, SiLangchain, SiSelenium, SiPandas } from 'react-icons/si';
import { LuServer, LuKeyRound, LuGlobe } from 'react-icons/lu';

const GROUPS = [
  { title: 'Frontend', note: 'Web interfaces', items: [[SiReact, 'React.js'], [SiJavascript, 'JavaScript'], [SiTailwindcss, 'Tailwind CSS'], [SiRedux, 'Redux']] },
  { title: 'Backend', note: 'APIs & business logic', items: [[SiNodedotjs, 'Node.js'], [SiExpress, 'Express.js'], [LuServer, 'REST APIs'], [LuKeyRound, 'Auth & JWT']] },
  { title: 'Databases', note: 'Data layer', items: [[SiMongodb, 'MongoDB'], [FaDatabase, 'Oracle'], [FaDatabase, 'SQL'], [SiMongodb, 'Mongoose']] },
  { title: 'Mobile', note: 'Cross-platform', items: [[SiReact, 'React Native'], [SiAndroid, 'Android'], [SiApple, 'iOS'], [SiExpo, 'Expo']] },
  { title: 'Automation & AI', note: 'Python bots & chatbots', items: [[SiPython, 'Python'], [SiFastapi, 'FastAPI'], [SiLangchain, 'LangChain'], [SiSelenium, 'Selenium'], [SiPandas, 'Pandas']] },
  { title: 'DevOps & CI/CD', note: 'Build, test, deploy', items: [[SiGithubactions, 'GitHub Actions'], [SiDocker, 'Docker'], [SiVercel, 'Vercel'], [SiRender, 'Render']] },
  { title: 'Tools', note: 'Daily drivers', items: [[SiGithub, 'Git & GitHub'], [SiFigma, 'Figma'], [SiPostman, 'Postman'], [LuGlobe, 'Hosting & DNS']] },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="label reveal">Tech stack</span>
            <h2 className="h2 reveal">The tools I use to design, <em>develop and deploy.</em></h2>
          </div>
          <p className="lead reveal">Full-stack software with React, Node.js, Express, MongoDB and Oracle, React Native for mobile, and Python for automation.</p>
        </div>

        <div className="skills-table reveal">
          {GROUPS.map((g) => (
            <div key={g.title} className="skill-row">
              <h3>{g.title}<small>{g.note}</small></h3>
              <div className="skill-list">
                {g.items.map(([Icon, label]) => <span key={label} className="skill"><Icon />{label}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="arch reveal">
          <div className="arch-title">
            <h3 className="h3">How I build a full-stack product</h3>
            <span>request → response, end to end</span>
          </div>
          <div className="arch-flow">
            <div className="arch-node">
              <div className="icons"><SiReact /><SiAndroid /><SiApple /></div>
              <b>Client apps</b><small>React web + React Native</small>
            </div>
            <div className="arch-arrow" />
            <div className="arch-node">
              <div className="icons"><SiNodedotjs /><SiExpress /></div>
              <b>API server</b><small>Node.js + Express</small>
            </div>
            <div className="arch-arrow" />
            <div className="arch-node">
              <div className="icons"><SiMongodb /><FaDatabase /></div>
              <b>Database</b><small>MongoDB / Oracle</small>
            </div>
            <div className="arch-arrow" />
            <div className="arch-node">
              <div className="icons"><SiGithubactions /><SiDocker /></div>
              <b>CI/CD → Cloud</b><small>Auto-deploy on push</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
