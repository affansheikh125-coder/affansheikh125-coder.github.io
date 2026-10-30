// Brand logos in their real colours. Components import icons from here instead of react-icons,
// so every logo on the site looks like the actual brand.
import * as SI from 'react-icons/si';
import * as FA from 'react-icons/fa6';

const tint = (Icon, color) => {
  const C = (props) => <Icon color={color} {...props} />;
  C.displayName = Icon.displayName || Icon.name;
  return C;
};
const FG = 'currentColor'; // black logos follow the text colour, so they also work in dark mode

export const SiReact = tint(SI.SiReact, '#149ECA');
export const SiNodedotjs = tint(SI.SiNodedotjs, '#5FA04E');
export const SiExpress = tint(SI.SiExpress, FG);
export const SiMongodb = tint(SI.SiMongodb, '#47A248');
export const SiMysql = tint(SI.SiMysql, '#4479A1');
export const SiJavascript = tint(SI.SiJavascript, '#E8C400');
export const SiTailwindcss = tint(SI.SiTailwindcss, '#06B6D4');
export const SiRedux = tint(SI.SiRedux, '#764ABC');
export const SiAndroid = tint(SI.SiAndroid, '#3DDC84');
export const SiApple = tint(SI.SiApple, FG);
export const SiExpo = tint(SI.SiExpo, FG);
export const SiPython = tint(SI.SiPython, '#3776AB');
export const SiFastapi = tint(SI.SiFastapi, '#009688');
export const SiFlask = tint(SI.SiFlask, FG);
export const SiLangchain = tint(SI.SiLangchain, '#1C9C8C');
export const SiSelenium = tint(SI.SiSelenium, '#43B02A');
export const SiPandas = tint(SI.SiPandas, '#E70488');
export const SiGithub = tint(SI.SiGithub, FG);
export const SiGithubactions = tint(SI.SiGithubactions, '#2088FF');
export const SiDocker = tint(SI.SiDocker, '#2496ED');
export const SiVercel = tint(SI.SiVercel, FG);
export const SiRender = tint(SI.SiRender, FG);
export const SiNetlify = tint(SI.SiNetlify, '#00AD9F');
export const SiFigma = tint(SI.SiFigma, '#F24E1E');
export const SiPostman = tint(SI.SiPostman, '#FF6C37');
export const SiMeta = tint(SI.SiMeta, '#0081FB');
export const SiGoogleanalytics = tint(SI.SiGoogleanalytics, '#E37400');
export const SiShopify = tint(SI.SiShopify, '#7AB55C');
export const SiWoocommerce = tint(SI.SiWoocommerce, '#96588A');
export const SiZapier = tint(SI.SiZapier, '#FF4F00');
export const SiWhatsapp = tint(SI.SiWhatsapp, '#25D366');
export const FaWhatsapp = tint(FA.FaWhatsapp, '#25D366');
export const FaDatabase = tint(FA.FaDatabase, '#F80000'); // Oracle red
export const FaAmazon = tint(FA.FaAmazon, '#FF9900');

// Multi-colour logos drawn as SVG so they match the real marks.
const svgProps = (p) => ({ width: '1em', height: '1em', 'aria-hidden': true, focusable: 'false', ...p });

export const FaMicrosoft = (p) => (
  <svg viewBox="0 0 23 23" {...svgProps(p)}>
    <path fill="#F25022" d="M1 1h10v10H1z" /><path fill="#7FBA00" d="M12 1h10v10H12z" />
    <path fill="#00A4EF" d="M1 12h10v10H1z" /><path fill="#FFB900" d="M12 12h10v10H12z" />
  </svg>
);

export const SiGoogleads = (p) => (
  <svg viewBox="0 0 24 24" {...svgProps(p)}>
    <rect x="9.6" y="1.2" width="5.6" height="21.6" rx="2.8" fill="#FBBC04" transform="rotate(-30 12.4 12)" />
    <rect x="12.6" y="1.2" width="5.6" height="21.6" rx="2.8" fill="#4285F4" transform="rotate(30 15.4 12)" />
    <circle cx="5.2" cy="19.2" r="3.4" fill="#34A853" />
  </svg>
);

export const Gmail = (p) => (
  <svg viewBox="0 0 24 18" {...svgProps(p)}>
    <path fill="#4285F4" d="M1.6 18h3.8V8.7L0 4.7v11.7C0 17.3.7 18 1.6 18z" />
    <path fill="#34A853" d="M18.6 18h3.8c.9 0 1.6-.7 1.6-1.6V4.7l-5.4 4z" />
    <path fill="#FBBC04" d="M18.6 1.7v7l5.4-4V2.5C24 .5 21.7-.6 20.1.6z" />
    <path fill="#EA4335" d="M5.4 8.7v-7L12 6.6l6.6-4.9v7L12 13.6z" />
    <path fill="#C5221F" d="M0 2.5v2.2l5.4 4v-7L3.9.6C2.3-.6 0 .5 0 2.5z" />
  </svg>
);

export const Ebay = (p) => (
  <svg viewBox="0 0 52 22" {...svgProps({ ...p, width: '2.3em' })}>
    <text x="0" y="17" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="21" letterSpacing="-1.6">
      <tspan fill="#E53238">e</tspan><tspan fill="#0064D2">b</tspan><tspan fill="#F5AF02">a</tspan><tspan fill="#86B817">y</tspan>
    </text>
  </svg>
);

// LinkedIn's white "in" on its blue rounded square.
export const FaLinkedinIn = (p) => (
  <svg viewBox="0 0 24 24" {...svgProps(p)}>
    <rect width="24" height="24" rx="4.5" fill="#0A66C2" />
    <path fill="#fff" d="M6.9 9.2h2.8V18H6.9zM8.3 4.9a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2zM11.4 9.2h2.7v1.2c.4-.7 1.3-1.4 2.7-1.4 2.9 0 3.4 1.9 3.4 4.3V18h-2.8v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V18h-2.8z" />
  </svg>
);
