import { media } from '../data';
import LazyVideo from './LazyVideo';

const PROJECTS = [
  {
    type: 'Full-stack · Client', status: ['wip', 'In progress'],
    title: 'Flight Deals Platform',
    text: 'A flight-deals web app built end to end: database, backend API and a React + Tailwind frontend from Figma designs. A React Native mobile app comes next.',
    tags: ['React', 'Node.js', 'Express', 'Tailwind'],
    media: { kind: 'video', src: 'flightdeals.mp4', poster: 'flightdeals.webp', fit: 'cover', label: 'Flight Deals web app demo' },
  },
  {
    type: 'Performance marketing', status: ['live', 'Running'],
    title: 'EdTech App Ad Campaigns',
    text: 'Vertical video creatives and paid Meta campaigns for a parent–tutor app, aimed at driving app installs and leads.',
    tags: ['Meta Ads', 'Video ads', 'Lead gen', 'B2C'],
    media: { kind: 'video', src: 'ad-creative.mp4', poster: 'ad-creative.webp', fit: 'portrait', label: 'Sample vertical video ad' },
  },
  {
    type: 'Social impact', status: ['live', 'Completed'],
    title: 'Zehan Saaz',
    text: 'A community project supporting quality education for orphans (UN SDG 4), built during the U.S. Consulate English Access Scholarship Program.',
    tags: ['SDG 4', 'Education', 'Teamwork'],
    media: { kind: 'image', src: 'zehan-saaz.webp', fit: 'cover', label: 'Zehan Saaz project cover' },
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
        <div className="work-grid stagger">
          {PROJECTS.map(({ type, status, title, text, tags, media: m }) => (
            <article key={title} className="work-card">
              <div className={`work-media ${m.fit}`}>
                {m.kind === 'video'
                  ? <LazyVideo src={media(m.src)} poster={media(m.poster)} label={m.label} />
                  : <img src={media(m.src)} alt={m.label} loading="lazy" width="960" height="600" />}
              </div>
              <div className="work-body">
                <div className="work-meta"><span>{type}</span><span className={`status-tag ${status[0]}`}>{status[1]}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="chips">{tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
