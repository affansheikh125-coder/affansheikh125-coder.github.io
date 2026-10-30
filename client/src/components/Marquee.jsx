import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPython, SiFastapi, SiGithubactions, SiDocker,
  SiTailwindcss, SiMeta, SiGoogleads, SiShopify, SiFigma, SiAndroid, SiApple, SiLangchain,
} from '../brands';
import { FaDatabase, FaMicrosoft, FaAmazon, Ebay, SiNetlify } from '../brands';

const ITEMS = [
  [SiReact, 'React'], [SiNodedotjs, 'Node.js'], [SiExpress, 'Express'], [SiMongodb, 'MongoDB'], [FaDatabase, 'Oracle'],
  [SiAndroid, 'Android'], [SiApple, 'iOS'], [SiPython, 'Python'], [SiFastapi, 'FastAPI'], [SiLangchain, 'LangChain'],
  [SiGithubactions, 'GitHub Actions'], [SiDocker, 'Docker'], [SiTailwindcss, 'Tailwind'], [SiFigma, 'Figma'],
  [SiMeta, 'Meta Ads'], [SiGoogleads, 'Google Ads'], [FaMicrosoft, 'Microsoft Ads'], [SiShopify, 'Shopify'], [FaAmazon, 'Amazon'], [Ebay, 'eBay'], [SiNetlify, 'Netlify'],
];

export default function Marquee() {
  const row = ITEMS.map(([Icon, label]) => <span key={label} className="mq-item"><Icon />{label}</span>);
  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="mq-track">
        <div className="mq-group">{row}</div>
        <div className="mq-group" aria-hidden="true">{row}</div>
      </div>
    </div>
  );
}
