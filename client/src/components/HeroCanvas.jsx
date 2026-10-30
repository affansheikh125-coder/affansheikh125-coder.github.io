import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks';

// Subtle dot-grid "wave" behind the hero. Dots near the cursor light up in the accent colour.
export default function HeroCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const reduce = prefersReducedMotion();
    let w = 0, h = 0, dpr = 1, raf = 0, visible = true;
    const mouse = { x: -9999, y: -9999 };
    const GAP = 28;

    const colors = () => {
      const cs = getComputedStyle(document.documentElement);
      return { dot: cs.getPropertyValue('--line-2').trim() || '#d6d8de', accent: cs.getPropertyValue('--accent').trim() || '#2448d6' };
    };
    let c = colors();

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (let y = GAP / 2; y < h; y += GAP) {
        for (let x = GAP / 2; x < w; x += GAP) {
          const wave = reduce ? 0 : Math.sin(x * 0.012 + t * 0.0006) * Math.cos(y * 0.014 - t * 0.0005);
          const dx = x - mouse.x, dy = y - mouse.y;
          const near = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 170);
          const r = 1 + wave * 0.45 + near * 1.6;
          ctx.globalAlpha = 0.55 + wave * 0.25 + near * 0.45;
          ctx.fillStyle = near > 0.05 ? c.accent : c.dot;
          ctx.beginPath(); ctx.arc(x, y, Math.max(0.4, r), 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t) => { if (visible) draw(t); raf = requestAnimationFrame(loop); };
    const onMove = (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const onLeave = () => { mouse.x = mouse.y = -9999; };
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onScheme = () => { c = colors(); if (reduce) draw(0); };

    resize();
    if (reduce) draw(0); else raf = requestAnimationFrame(loop);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    mq.addEventListener && mq.addEventListener('change', onScheme);
    return () => {
      cancelAnimationFrame(raf); io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      mq.removeEventListener && mq.removeEventListener('change', onScheme);
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
