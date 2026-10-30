import { useCountUp } from '../hooks';
import { SiMeta, SiGoogleads } from '../brands';
import { FaMicrosoft } from '../brands';

// Sample data only: an illustration of the reporting clients get, not real results.
const LEADS = [6, 8, 7, 9, 11, 10, 12, 11, 13, 15, 14, 13, 16, 18, 17, 16, 19, 21, 20, 22, 21, 23, 25, 24, 26, 25, 27, 29, 28, 31];

function chartPaths(data, w = 600, h = 180, pad = 8) {
  const max = Math.max(...data) * 1.1;
  const step = (w - pad * 2) / (data.length - 1);
  const pts = data.map((v, i) => [pad + i * step, h - pad - (v / max) * (h - pad * 2)]);
  const line = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)},${h} L${pts[0][0].toFixed(1)},${h} Z`;
  return { line, area, last: pts[pts.length - 1], max };
}

function Kpi({ label, to, prefix = '', suffix = '', decimals = 0, delta }) {
  const [ref, text] = useCountUp(to, { duration: 1500, decimals });
  return (
    <div className="kpi" ref={ref}>
      <small>{label}</small>
      <b>{prefix}{text}{suffix}</b>
      <span className="delta">{delta}</span>
    </div>
  );
}

export default function AdsDashboard() {
  const { line, area, last, max } = chartPaths(LEADS);
  const gridY = [0.25, 0.5, 0.75].map((k) => 8 + k * (180 - 16));
  return (
    <div className="dash reveal" aria-label="Sample campaign dashboard">
      <div className="dash-head">
        <div>
          <h3 className="h3">Campaign dashboard</h3>
          <small>Sample data · how I report results to clients</small>
        </div>
        <div className="dash-tabs" role="presentation">
          <span className="on"><SiMeta /> Meta</span>
          <span><SiGoogleads /> Google</span>
          <span><FaMicrosoft /> Microsoft</span>
          <span className="range">Last 30 days</span>
        </div>
      </div>

      <div className="kpis stagger">
        <Kpi label="Impressions" to={248310} delta="+18%" />
        <Kpi label="Clicks" to={6904} delta="+22%" />
        <Kpi label="CTR" to={2.78} decimals={2} suffix="%" delta="+0.4 pts" />
        <Kpi label="Leads" to={412} delta="+31%" />
        <Kpi label="Cost per lead" to={312} prefix="Rs " delta="−14%" />
      </div>

      <div className="dash-body">
        <div className="dash-chart">
          <div className="dash-chart-head"><b>Leads per day</b><span>Peak {Math.max(...LEADS)} · {LEADS.length} days</span></div>
          <svg viewBox="0 0 600 180" preserveAspectRatio="none" className="draw-on-view" role="img" aria-label="Leads per day rising over 30 days">
            <defs>
              <linearGradient id="dashArea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="var(--accent)" stopOpacity="0.18" />
                <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {gridY.map((y) => <line key={y} x1="0" x2="600" y1={y} y2={y} className="grid" />)}
            <path d={area} fill="url(#dashArea)" className="area" />
            <path d={line} fill="none" className="line" pathLength="1" />
            <circle cx={last[0]} cy={last[1]} r="4.5" className="end" />
          </svg>
          <div className="dash-axis"><span>Day 1</span><span>Day 15</span><span>Day 30</span></div>
        </div>
        <div className="dash-split">
          <b>Spend by network</b>
          {[['Meta', 52, SiMeta], ['Google', 33, SiGoogleads], ['Microsoft', 15, FaMicrosoft]].map(([name, pct, Icon]) => (
            <div key={name} className="split-row">
              <span><Icon /> {name}</span>
              <div className="split-bar draw-on-view"><i style={{ '--w': `${pct}%` }} /></div>
              <em>{pct}%</em>
            </div>
          ))}
          <p className="dash-note">Budget moves toward the network with the lowest cost per lead, every week.</p>
        </div>
      </div>
      <span className="sr-only">Chart max {Math.round(max)} leads.</span>
    </div>
  );
}
