import { LuGitBranch, LuPackage, LuFlaskConical, LuCloudUpload, LuActivity } from 'react-icons/lu';
import { SiGithubactions, SiDocker, SiVercel, SiRender, SiGithub } from 'react-icons/si';

const STAGES = [
  { icon: LuGitBranch, title: 'Commit', text: 'Code pushed to GitHub', code: 'git push' },
  { icon: LuPackage, title: 'Build', text: 'Install & bundle the app', code: 'npm run build' },
  { icon: LuFlaskConical, title: 'Test', text: 'Automated checks run', code: 'npm test' },
  { icon: LuCloudUpload, title: 'Deploy', text: 'Shipped to the cloud', code: 'deploy --prod' },
  { icon: LuActivity, title: 'Monitor', text: 'Live and watched', code: 'status 200' },
];

export default function Pipeline() {
  return (
    <section className="section" id="cicd">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="label reveal">CI/CD</span>
            <h2 className="h2 reveal">Every push, <em>automatically live.</em></h2>
          </div>
          <p className="lead reveal">
            I deploy tech products through CI/CD pipelines. Code is tested and released automatically, with no manual
            uploads and no surprises in production.
          </p>
        </div>

        <div className="pipeline">
          {STAGES.map(({ icon: Icon, title, text, code }, i) => (
            <div key={title} className="stage">
              <div className="stage-top"><Icon /><span>{String(i + 1).padStart(2, '0')}</span></div>
              <b>{title}</b>
              <small>{text}</small>
              <code>{code}</code>
            </div>
          ))}
          <div className="bar" />
        </div>

        <div className="tool-strip reveal">
          <span>Tools</span>
          <span className="chip"><SiGithub /> GitHub</span>
          <span className="chip"><SiGithubactions /> GitHub Actions</span>
          <span className="chip"><SiDocker /> Docker</span>
          <span className="chip"><SiVercel /> Vercel</span>
          <span className="chip"><SiRender /> Render</span>
        </div>
      </div>
    </section>
  );
}
