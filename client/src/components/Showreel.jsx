import { useRef } from 'react';
import { useScrollProgress } from '../hooks';
import { media } from '../data';
import LazyVideo from './LazyVideo';

// Laptop tilts up and the phone floats in as you scroll, like a product launch page.
export default function Showreel() {
  const ref = useRef(null);
  useScrollProgress(ref, { start: 1, end: 0.2 });

  return (
    <section className="showreel" ref={ref} aria-label="Showreel">
      <div className="container">
        <div className="reel-stage">
          <div className="laptop">
            <div className="laptop-screen">
              <div className="browser-bar"><i /><i /><i /><span>flightdeals.app</span></div>
              <LazyVideo className="laptop-video" src={media('flightdeals.mp4')} poster={media('flightdeals.webp')} label="Flight Deals web app demo" />
            </div>
            <div className="laptop-base" />
          </div>
          <div className="float-phone">
            <div className="float-phone-screen">
              <LazyVideo src={media('ad-creative.mp4')} poster={media('ad-creative.webp')} label="Sample vertical video ad" />
            </div>
          </div>
        </div>
        <div className="showreel-captions">
          <p><b>Flight Deals web app</b><span>React + Node.js · built from Figma</span></p>
          <p><b>Vertical video ad</b><span>Meta Ads creative for an EdTech app</span></p>
        </div>
      </div>
    </section>
  );
}
