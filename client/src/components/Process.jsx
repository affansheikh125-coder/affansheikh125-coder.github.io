import { useEffect, useRef, useState } from 'react';
import { SiFigma, SiReact, SiNodedotjs, SiGithubactions, SiMeta, SiGoogleads, FaMicrosoft, SiShopify } from '../brands';
import { LuCheck } from 'react-icons/lu';

const STEPS = [
  { tag: 'Design', icons: [SiFigma], title: 'It starts with a clear design.', text: 'User flows and wireframes first, then a clean visual design in Figma that you approve before any code is written.' },
  { tag: 'Develop', icons: [SiReact, SiNodedotjs], title: 'Then I build it properly.', text: 'React on the front, Node.js and Express on the back, connected to MongoDB or Oracle. Clean, tested code you own.' },
  { tag: 'Deploy', icons: [SiGithubactions], title: 'Shipped automatically.', text: 'A CI/CD pipeline tests every change and puts it live on your domain within minutes. No manual uploads.' },
  { tag: 'Grow', icons: [SiMeta, SiGoogleads, FaMicrosoft], title: 'And then it starts selling.', text: 'Meta, Google and Microsoft ads bring in customers, and Python automation handles the repetitive work.' },
];

// Scroll-driven story: the section is tall, the inner stage is sticky, and scroll position (--p, 0→1)
// drives the animation. Text changes by step so it is always readable.
export default function Process() {
  const ref = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / (total || 1)));
      el.style.setProperty('--p', p.toFixed(4));
      setStep(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  const s = STEPS[step];
  return (
    <section className="process" id="process" ref={ref} aria-label="How I work">
      <div className="process-sticky">
        <div className="container process-grid">
          <div className="process-text">
            <span className="label">How I work</span>
            <div className="process-steps" role="tablist" aria-label="Steps">
              {STEPS.map((x, i) => (
                <span key={x.tag} className={`ps ${i === step ? 'on' : ''} ${i < step ? 'done' : ''}`}>
                  <i style={{ '--i': i }} />{x.tag}
                </span>
              ))}
            </div>
            <div className="process-copy" key={step} aria-live="polite">
              <div className="process-icons">{s.icons.map((Icon, i) => <Icon key={i} />)}</div>
              <h2 className="h2">{s.title}</h2>
              <p className="lead">{s.text}</p>
            </div>
          </div>

          <div className="pstage" aria-hidden="true">
            <div className="pbar">
              <i /><i /><i />
              <span className="url"><b className="u1">localhost:5173</b><b className="u2">yourstore.com</b></span>
            </div>
            <div className="pbody">
              {/* 1. wireframe draws itself */}
              <svg className="wire" viewBox="0 0 800 470" preserveAspectRatio="none">
                {[[24, 20, 752, 40], [24, 96, 360, 34], [24, 142, 300, 16], [24, 168, 260, 16], [24, 206, 140, 42], [420, 96, 356, 170], [24, 300, 236, 150], [282, 300, 236, 150], [540, 300, 236, 150]].map(([x, y, w, h], i) => (
                  <rect key={i} x={x} y={y} width={w} height={h} rx="8" pathLength="1" />
                ))}
              </svg>

              {/* 2. real interface */}
              <div className="ui">
                <div className="ui-nav"><b>◆ Nova</b><span>Shop</span><span>New in</span><span>About</span><em>Cart · 2</em></div>
                <div className="ui-hero">
                  <div>
                    <h4>Everyday essentials, made better.</h4>
                    <p>Free delivery across Pakistan on orders over Rs 3,000.</p>
                    <span className="ui-btn">Shop now</span>
                  </div>
                  <div className="ui-img" />
                </div>
                <div className="ui-cards">
                  {[['Linen shirt', 'Rs 3,490', '#e8dccb'], ['Canvas tote', 'Rs 1,990', '#d9e4ec'], ['Leather wallet', 'Rs 2,750', '#e9d6d0']].map(([n, p, c]) => (
                    <div key={n}><i style={{ background: c }} /><b>{n}</b><span>{p}</span></div>
                  ))}
                </div>
              </div>

              {/* 2b. code editor slides in */}
              <div className="code">
                <div className="code-tabs"><span className="on">ProductGrid.jsx</span><span>server.js</span></div>
                {[
                  ['k', 'export default function', ' ProductGrid() {'],
                  ['', '  const ', 'products = useProducts();'],
                  ['k', '  return', ' ('],
                  ['t', '    <Grid cols={3}>', ''],
                  ['', '      {products.map(p =>', ''],
                  ['t', '        <Card key={p.id} {...p} />', ''],
                  ['', '      )}', ''],
                  ['t', '    </Grid>', ''],
                  ['', '  );', ''],
                  ['', '}', ''],
                ].map(([c, a, b], j) => (
                  <div key={j} className="cl" style={{ '--j': j }}><em>{j + 1}</em><span className={c}>{a}</span>{b}</div>
                ))}
              </div>

              {/* 3. deploy pipeline */}
              <div className="deploy">
                <div className="dl" style={{ '--j': 0 }}><LuCheck /> Build passed <small>32s</small></div>
                <div className="dl" style={{ '--j': 1 }}><LuCheck /> 24 tests passed <small>11s</small></div>
                <div className="dl" style={{ '--j': 2 }}><LuCheck /> Deployed to production <small>8s</small></div>
                <div className="live"><span className="dot" /> Live · 200 OK</div>
              </div>

              {/* 4. growth */}
              <div className="grow">
                <div className="grow-card">
                  <small>Orders this week</small>
                  <div className="bars">{[30, 42, 38, 55, 61, 74, 92].map((h, i) => <i key={i} style={{ '--h': h, '--j': i }} />)}</div>
                </div>
                <div className="toast t1"><SiMeta /> <span><b>New lead</b> from Meta Ads</span></div>
                <div className="toast t2"><SiShopify /> <span><b>Order #1042</b> · Rs 6,240</span></div>
                <div className="toast t3"><SiGoogleads /> <span><b>+38% clicks</b> this week</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
