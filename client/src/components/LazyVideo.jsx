import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks';

// Muted looping video that only plays while it's on screen (saves data and battery).
export default function LazyVideo({ src, poster, label, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || prefersReducedMotion() || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (v.preload === 'none') { v.preload = 'auto'; v.load(); }
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    }, { threshold: 0.25 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    />
  );
}
