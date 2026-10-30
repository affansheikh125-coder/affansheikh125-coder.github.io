import { LuPlus } from 'react-icons/lu';
import { FAQ } from '../faq';

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="label reveal">FAQ</span>
            <h2 className="h2 reveal">Questions clients <em>usually ask.</em></h2>
          </div>
        </div>
        <div className="faq stagger">
          {FAQ.map(({ q, a }, i) => (
            <details key={q} className="faq-item" open={i === 0}>
              <summary><h3>{q}</h3><LuPlus aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
