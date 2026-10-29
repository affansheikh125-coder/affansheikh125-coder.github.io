import { useEffect, useState } from 'react';
import { SiAndroid, SiApple, SiReact } from 'react-icons/si';
import {
  LuCheck, LuSearch, LuPlane, LuHouse, LuTicket, LuHeart, LuUser, LuPlus, LuBell, LuSlidersHorizontal,
} from 'react-icons/lu';

// Live clock for the status bars (updates every 15s).
function useClock() {
  const fmt = () => new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).replace(/\s?[AP]M/i, '');
  const [t, setT] = useState(fmt);
  useEffect(() => { const id = setInterval(() => setT(fmt()), 15000); return () => clearInterval(id); }, []);
  return t;
}

// Demo deal data; prices tick every few seconds so the screens feel live.
const BASE = [
  { from: 'LHE', to: 'DXB', city: 'Dubai', price: 54200, airline: 'Emirates', date: '12 Nov' },
  { from: 'LHE', to: 'IST', city: 'Istanbul', price: 98500, airline: 'Turkish', date: '20 Nov' },
  { from: 'KHI', to: 'JED', city: 'Jeddah', price: 71900, airline: 'Saudia', date: '3 Dec' },
  { from: 'ISB', to: 'KUL', city: 'Kuala Lumpur', price: 83400, airline: 'Malaysia', date: '9 Dec' },
  { from: 'LHE', to: 'LHR', city: 'London', price: 189900, airline: 'PIA', date: '18 Dec' },
];
function useDeals() {
  const [deals, setDeals] = useState(BASE.map((d) => ({ ...d, delta: 0 })));
  useEffect(() => {
    const id = setInterval(() => {
      setDeals((ds) => {
        const i = Math.floor(Math.random() * ds.length);
        const delta = (Math.random() > 0.5 ? -1 : 1) * (Math.floor(Math.random() * 8) + 2) * 100;
        return ds.map((d, j) => (j === i ? { ...d, price: d.price + delta, delta } : { ...d, delta: 0 }));
      });
    }, 2600);
    return () => clearInterval(id);
  }, []);
  return deals;
}
const pkr = (n) => 'Rs ' + n.toLocaleString('en-US');

function Bars() { return <span className="sb-bars"><i /><i /><i /><i /></span>; }
function Battery() { return <span className="sb-batt"><i /></span>; }

function IOSScreen({ time, deals }) {
  return (
    <div className="device ios">
      <div className="screen">
        <div className="ios-status"><b>{time}</b><span className="island" /><span className="sb-right"><Bars /><span className="sb-wifi" /><Battery /></span></div>
        <div className="ios-body">
          <div className="ios-nav"><span>Good evening</span><LuBell /></div>
          <h4 className="ios-title">Deals</h4>
          <div className="ios-search"><LuSearch /> Where to?</div>
          <div className="ios-seg"><span className="on">Trending</span><span>Weekend</span><span>Umrah</span></div>
          <div className="ios-list">
            {deals.map((d) => (
              <div key={d.to} className="ios-row">
                <div className="ios-ic"><LuPlane /></div>
                <div className="ios-mid"><b>{d.from} → {d.to}</b><small>{d.airline} · {d.date}</small></div>
                <div className={`price ${d.delta < 0 ? 'down' : d.delta > 0 ? 'up' : ''}`}>{pkr(d.price)}</div>
              </div>
            ))}
          </div>
          <div className="live-pill"><span className="dot" /> Live prices</div>
        </div>
        <div className="ios-tabs">
          <span className="on"><LuHouse /><small>Home</small></span>
          <span><LuTicket /><small>Trips</small></span>
          <span><LuHeart /><small>Saved</small></span>
          <span><LuUser /><small>Profile</small></span>
        </div>
        <div className="home-ind" />
      </div>
    </div>
  );
}

function AndroidScreen({ time, deals }) {
  return (
    <div className="device android">
      <div className="screen">
        <div className="and-status"><b>{time}</b><span className="punch" /><span className="sb-right"><span className="sb-wifi" /><Bars /><Battery /></span></div>
        <div className="and-body">
          <div className="and-appbar"><LuSearch /><span>Search flights</span><span className="avatar">A</span></div>
          <div className="and-chips"><span className="on"><LuCheck /> Cheapest</span><span>Direct</span><span><LuSlidersHorizontal /></span></div>
          <div className="and-label">Deals from Pakistan</div>
          {deals.map((d) => (
            <div key={d.to} className="and-card">
              <div><b>{d.city}</b><small>{d.from} → {d.to} · {d.date}</small></div>
              <div className={`price ${d.delta < 0 ? 'down' : d.delta > 0 ? 'up' : ''}`}>{pkr(d.price)}</div>
            </div>
          ))}
          <button className="fab" tabIndex={-1}><LuPlus /></button>
        </div>
        <div className="and-nav">
          <span className="on"><i><LuHouse /></i><small>Home</small></span>
          <span><i><LuTicket /></i><small>Trips</small></span>
          <span><i><LuHeart /></i><small>Saved</small></span>
        </div>
        <div className="gesture" />
      </div>
    </div>
  );
}

export default function Mobile() {
  const time = useClock();
  const deals = useDeals();
  return (
    <section className="section" id="mobile">
      <div className="container mobile-grid">
        <div>
          <span className="label reveal">Mobile apps</span>
          <h2 className="h2 reveal">Native-feeling apps <em>for Android and iOS.</em></h2>
          <p className="lead reveal" style={{ marginTop: 20 }}>
            I design and develop mobile apps with React Native. One shared codebase runs on both platforms, and each one
            follows its own design rules: iOS tab bars and large titles, Android Material cards and floating buttons.
          </p>
          <div className="chips lg reveal">
            <span className="chip"><SiReact /> React Native</span>
            <span className="chip"><SiAndroid /> Android</span>
            <span className="chip"><SiApple /> iOS</span>
          </div>
          <ul className="check-list reveal">
            <li><LuCheck /><span><strong>Shared code:</strong> one team, one codebase, two app stores</span></li>
            <li><LuCheck /><span><strong>Connected</strong> to the same Node.js API as your website</span></li>
            <li><LuCheck /><span><strong>Store-ready</strong> builds for Google Play and the App Store</span></li>
          </ul>
        </div>

        <div className="devices reveal">
          <figure><IOSScreen time={time} deals={deals} /><figcaption><SiApple /> iOS</figcaption></figure>
          <figure><AndroidScreen time={time} deals={deals} /><figcaption><SiAndroid /> Android</figcaption></figure>
        </div>
      </div>
    </section>
  );
}
