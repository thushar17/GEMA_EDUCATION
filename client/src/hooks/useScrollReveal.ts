import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches Intersection Observer to trigger
 * the `.reveal → .visible` CSS transition on elements.
 */
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      },
      { threshold: 0.15 }
    );

    // Observe the root element and all children with .reveal class
    const targets = el.querySelectorAll<HTMLElement>('.reveal');
    targets.forEach((t) => observer.observe(t));
    // Also observe root if it has .reveal
    if (el.classList.contains('reveal')) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
