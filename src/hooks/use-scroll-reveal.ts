import { useEffect } from "react";

/**
 * IntersectionObserver-based reveal. Add `.reveal` + a variant
 * (`.reveal-up`, `.reveal-skew`, `.reveal-left`, `.reveal-clip`, `.reveal-fade`)
 * to any element. One-shot. Optional `data-delay="200ms"`.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) el.style.transitionDelay = delay;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}
