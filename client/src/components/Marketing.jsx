import { SiMeta, SiGoogleads, SiGoogleanalytics } from 'react-icons/si';
import { LuBuilding2, LuUsers, LuCheck } from 'react-icons/lu';
import { FaMicrosoft } from 'react-icons/fa6';

// Bar widths and opacity narrow down the funnel; one accent hue throughout.
const FUNNEL = [
  { label: 'Awareness', note: 'Reach & video ads', w: 100, o: 1 },
  { label: 'Interest', note: 'Clicks & engagement', w: 86, o: 0.85 },
  { label: 'Lead', note: 'Forms, calls, DMs', w: 72, o: 0.7 },
  { label: 'Conversion', note: 'Sale or signup', w: 58, o: 0.58 },
  { label: 'Retarget', note: 'Bring them back', w: 46, o: 0.46 },
];

const META_TAGS = ['Lead form ads', 'Video creatives', 'Lookalike audiences', 'Retargeting', 'Pixel & Conversions API', 'A/B testing'];
const MS_TAGS = ['Bing search ads', 'Google Ads import', 'Audience network', 'B2B targeting', 'UET tracking'];
const GOOGLE_TAGS = ['Search campaigns', 'Keyword research', 'YouTube ads', 'Performance Max', 'Conversion tracking'];

export default function Marketing() {
  return (
    <section className="section" id="marketing">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="label reveal">Performance marketing</span>
            <h2 className="h2 reveal">I don't just build products. <em>I help them sell.</em></h2>
          </div>
          <p className="lead reveal">
            Data-driven ad campaigns on Meta, Google and Microsoft, built around measurable results: more leads, more customers,
            and a lower cost per acquisition.
          </p>
        </div>

        <div className="mkt-top">
          <div className="platform-card reveal">
            <div className="platform-head">
              <div className="platform-logo"><SiMeta /></div>
              <div><h3 className="h3">Meta Ads</h3><small>Facebook · Instagram · Messenger · WhatsApp</small></div>
            </div>
            <p>
              I plan and manage campaigns on Facebook and Instagram: audience research, scroll-stopping video creatives,
              lead forms and retargeting. Every campaign is optimized around cost per lead.
            </p>
            <div className="chips">{META_TAGS.map((t) => <span key={t} className="chip">{t}</span>)}</div>
          </div>

          <div className="platform-card reveal">
            <div className="platform-head">
              <div className="platform-logo"><SiGoogleads /></div>
              <div><h3 className="h3">Google Ads</h3><small>Search · YouTube · Display · Performance Max</small></div>
            </div>
            <p>
              I capture people who are already searching for what you sell. That covers keyword research, high-intent
              search campaigns, YouTube video ads and conversion tracking, so you know which clicks become customers.
            </p>
            <div className="chips">
              {GOOGLE_TAGS.map((t) => <span key={t} className="chip">{t}</span>)}
              <span className="chip"><SiGoogleanalytics /> GA4</span>
            </div>
          </div>
          <div className="platform-card reveal">
            <div className="platform-head">
              <div className="platform-logo"><FaMicrosoft /></div>
              <div><h3 className="h3">Microsoft Ads</h3><small>Bing · Edge · Microsoft Audience Network</small></div>
            </div>
            <p>
              Search and audience ads across Bing, Edge and the Microsoft network. Its audience leans professional and
              B2B, and clicks often cost less than on Google, so it's a strong extra channel for lead generation.
            </p>
            <div className="chips">
              {MS_TAGS.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        </div>

        <div className="funnel-wrap">
          <div className="panel reveal">
            <h3 className="h3">The funnel behind every campaign</h3>
            <div className="funnel">
              {FUNNEL.map((f) => (
                <div key={f.label} className="funnel-step">
                  <div className="funnel-bar" style={{ width: `${f.w}%`, opacity: f.o }}>{f.label}</div>
                  <span>{f.note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel lead-cards reveal">
            <div className="lead-card">
              <div className="ic"><LuBuilding2 /></div>
              <div>
                <h4>B2B lead generation</h4>
                <p>Reaching decision-makers at businesses: targeted campaigns, lead magnets and landing pages that bring in qualified sales leads.</p>
                <ul>{['Decision-maker targeting', 'Lead magnets', 'Landing pages', 'Qualified leads'].map((x) => <li key={x}><LuCheck />{x}</li>)}</ul>
              </div>
            </div>
            <div className="lead-card">
              <div className="ic"><LuUsers /></div>
              <div>
                <h4>B2C lead generation</h4>
                <p>Reaching everyday customers at scale: engaging video ads, instant forms and WhatsApp or Messenger campaigns that turn viewers into buyers.</p>
                <ul>{['Video ads', 'Instant forms', 'WhatsApp campaigns', 'Retargeting'].map((x) => <li key={x}><LuCheck />{x}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
