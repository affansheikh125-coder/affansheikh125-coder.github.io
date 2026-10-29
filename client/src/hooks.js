import { useEffect, useState } from 'react';

// Adds the "in" class to every .reveal element when it scrolls into view.
export function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .pipeline');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Cycles through words with a typewriter effect.
export function useTypewriter(words, { type = 70, erase = 40, hold = 1600 } = {}) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t;
    if (!deleting && text === word) t = setTimeout(() => setDeleting(true), hold);
    else if (deleting && text === '') {
      setDeleting(false);
      setI((n) => n + 1);
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? erase : type
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words, type, erase, hold]);

  return text;
}
