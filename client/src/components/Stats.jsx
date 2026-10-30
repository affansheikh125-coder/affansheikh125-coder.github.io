import { useCountUp } from '../hooks';

function Stat({ to, suffix = '', label, note }) {
  const [ref, text] = useCountUp(to, { duration: 1300 });
  return (
    <div className="stat" ref={ref}>
      <b>{text}{suffix}</b>
      <span>{label}</span>
      <small>{note}</small>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-band" aria-label="At a glance">
      <div className="container stats stagger">
        <Stat to={6} label="Services" note="Web, mobile, CI/CD, automation, AI, ads" />
        <Stat to={2} label="Mobile platforms" note="Android & iOS from one codebase" />
        <Stat to={3} label="Ad networks" note="Meta, Google & Microsoft" />
        <Stat to={24} suffix="h" label="Reply time" note="On WhatsApp or email" />
      </div>
    </section>
  );
}
