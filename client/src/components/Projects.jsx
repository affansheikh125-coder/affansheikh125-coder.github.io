import { LuPlane, LuMegaphone, LuBookOpen } from 'react-icons/lu';

const PROJECTS = [
  {
    icon: LuPlane, type: 'Full-stack · Client', status: ['wip', 'In progress'],
    title: 'Flight Deals Platform',
    text: 'A flight-deals web app built end to end: database, backend API and a React + Tailwind frontend from Figma designs. A React Native mobile app comes next.',
    tags: ['React', 'Node.js', 'Express', 'Database', 'Tailwind'],
  },
  {
    icon: LuMegaphone, type: 'Performance marketing', status: ['live', 'Running'],
    title: 'EdTech App Ad Campaigns',
    text: 'Video ad creatives and paid Meta campaigns for a parent–tutor app, aimed at driving app installs and leads.',
    tags: ['Meta Ads', 'Video ads', 'Lead gen', 'B2C'],
  },
  {
    icon: LuBookOpen, type: 'Social impact', status: ['live', 'Completed'],
    title: 'Zehan Saaz',
    text: 'A community project supporting quality education for orphans (UN SDG 4), built during the U.S. Consulate English Access Scholarship Program.',
    tags: ['SDG 4', 'Education', 'Teamwork'],
  },
];

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head single">
          <span className="label reveal">Selected work</span>
          <h2 className="h2 reveal">Projects I've built <em>and grown.</em></h2>
        </div>
        <div className="projects reveal">
          {PROJECTS.map(({ icon: Icon, type, status, title, text, tags }) => (
            <article key={title} className="project">
              <div className="project-ic"><Icon /></div>
              <div>
                <div className="project-meta">{type}</div>
                <h3>{title}</h3>
              </div>
              <div className="project-desc">
                <p>{text}</p>
                <div className="chips">{tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              </div>
              <span className={`status-tag ${status[0]}`}>{status[1]}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
