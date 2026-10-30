import { useEffect, useRef, useState } from 'react';
import { SiPython, SiFastapi, SiFlask, SiLangchain, SiSelenium, SiPandas, SiShopify, SiWoocommerce, SiWhatsapp, SiZapier, FaAmazon, Ebay } from '../brands';
import { LuBot, LuPackageCheck, LuShoppingCart, LuMessageCircle, LuFileSpreadsheet, LuRepeat, LuSearch, LuSparkles, LuStore, LuSend } from 'react-icons/lu';

const SCRIPT = [
  { who: 'user', text: "Hi, where's my order #4821?" },
  { who: 'bot', text: 'Hi Sara! Order #4821 was shipped yesterday and arrives on Thursday.', card: { icon: LuPackageCheck, title: 'Out for delivery', sub: 'Lahore · ETA Thursday' } },
  { who: 'user', text: 'Do you have the black hoodie in medium?' },
  { who: 'bot', text: 'Yes, 6 left in M. Should I add it to your cart?', action: 'Add to cart' },
  { who: 'user', text: 'Yes please' },
  { who: 'bot', text: 'Added. Use code WELCOME10 at checkout for 10% off.' },
];

// Plays the conversation one message at a time, then loops.
function useConversation() {
  const [count, setCount] = useState(1);
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    let t;
    if (count >= SCRIPT.length) {
      t = setTimeout(() => setCount(1), 4200);
    } else if (SCRIPT[count].who === 'bot') {
      setTyping(true);
      t = setTimeout(() => { setTyping(false); setCount((c) => c + 1); }, 1400);
    } else {
      t = setTimeout(() => setCount((c) => c + 1), 1500);
    }
    return () => clearTimeout(t);
  }, [count]);
  return { messages: SCRIPT.slice(0, count), typing };
}

const FEATURES = [
  { icon: LuPackageCheck, title: 'Order tracking bot', text: 'Answers "where is my order?" around the clock.' },
  { icon: LuMessageCircle, title: 'Product Q&A', text: 'Sizes, stock and prices, straight from your store.' },
  { icon: LuShoppingCart, title: 'Cart recovery', text: 'Follows up on abandoned carts and brings sales back.' },
  { icon: SiWhatsapp, title: 'WhatsApp & Messenger', text: 'The same bot on the channels customers already use.' },
  { icon: LuSearch, title: 'Scraping & monitoring', text: 'Tracks competitor prices and product data.' },
  { icon: LuFileSpreadsheet, title: 'Report automation', text: 'Daily sales and stock reports in Sheets or Excel.' },
];

export default function Automation() {
  const { messages, typing } = useConversation();
  const bodyRef = useRef(null);
  useEffect(() => { const el = bodyRef.current; if (el) el.scrollTop = el.scrollHeight; }, [messages, typing]);

  return (
    <section className="section" id="automation">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="label reveal">Python automation & AI</span>
            <h2 className="h2 reveal">Chatbots and automation, <em>sold as products to online stores.</em></h2>
          </div>
          <p className="lead reveal">
            I build Python automation and AI chatbots as ready-made products for e-commerce stores. I also run my own
            stores on Amazon, eBay and Shopify, so every tool is tested on real orders before a client gets it.
          </p>
        </div>

        <div className="auto-grid">
          <div className="chat reveal" aria-label="Example store chatbot conversation">
            <div className="chat-head">
              <div className="chat-avatar"><LuBot /></div>
              <div><b>Store Assistant</b><small><span className="dot" /> Online · replies instantly</small></div>
              <span className="chat-badge"><LuSparkles /> AI</span>
            </div>
            <div className="chat-body" ref={bodyRef}>
              {messages.map((m, i) => (
                <div key={i} className={`msg ${m.who}`}>
                  <p>{m.text}</p>
                  {m.card && (
                    <div className="msg-card"><m.card.icon /><div><b>{m.card.title}</b><small>{m.card.sub}</small></div></div>
                  )}
                  {m.action && <span className="msg-action">{m.action}</span>}
                </div>
              ))}
              {typing && <div className="msg bot typing"><i /><i /><i /></div>}
            </div>
            <div className="chat-input"><span>Type a message</span><LuSend /></div>
          </div>

          <div className="auto-side">
            <div className="auto-features stagger">
              {FEATURES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="auto-feature">
                  <Icon />
                  <div><b>{title}</b><small>{text}</small></div>
                </div>
              ))}
            </div>

            <div className="stores reveal">
              <span>Stores I run</span>
              <div className="store-logos">
                <span className="store"><FaAmazon /><b>Amazon</b></span>
                <span className="store"><Ebay /></span>
                <span className="store"><SiShopify /><b>Shopify</b></span>
              </div>
            </div>

            <div className="auto-flow reveal">
              <div><LuStore /><b>Your store</b><small>Amazon · eBay · Shopify</small></div>
              <span className="arrow-r" />
              <div><SiPython /><b>Python bot</b><small>FastAPI + AI model</small></div>
              <span className="arrow-r" />
              <div><LuRepeat /><b>Customers</b><small>Website · WhatsApp</small></div>
            </div>

            <div className="chips reveal">
              <span className="chip"><SiPython /> Python</span>
              <span className="chip"><SiFastapi /> FastAPI</span>
              <span className="chip"><SiFlask /> Flask</span>
              <span className="chip"><SiLangchain /> LangChain</span>
              <span className="chip"><LuSparkles /> LLM APIs</span>
              <span className="chip"><SiSelenium /> Selenium</span>
              <span className="chip"><SiPandas /> Pandas</span>
              <span className="chip"><SiShopify /> Shopify</span>
              <span className="chip"><FaAmazon /> Amazon</span>
              <span className="chip"><Ebay /></span>
              <span className="chip"><SiWoocommerce /> WooCommerce</span>
              <span className="chip"><SiZapier /> Zapier</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
