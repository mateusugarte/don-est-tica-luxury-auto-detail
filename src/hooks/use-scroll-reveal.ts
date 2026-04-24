import { useEffect } from "react";

/**
 * IntersectionObserver-based reveal. Add `.reveal` + a variant
 * (`.reveal-up`, `.reveal-skew`, `.reveal-left`, `.reveal-clip`, `.reveal-fade`)
 * to any element. One-shot. Optional `data-delay="200ms"`.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reveal = (el: HTMLElement) => {
      const delay = el.dataset.delay;
      if (delay) el.style.transitionDelay = delay;
      el.classList.add("is-visible");
    };

    // Fallback: if IntersectionObserver isn't available, reveal everything.
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((el) => reveal(el));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    const observe = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => io.observe(el));
    };

    observe();

    // Re-scan on DOM mutations (handles routes / dynamic content).
    const mo = new MutationObserver(() => observe());
    mo.observe(document.body, { childList: true, subtree: true });

    // Hard safety net: if anything is still hidden after 2.5s, force-show it.
    // Prevents content from being invisible if the observer never fires
    // (e.g. zero-height container at observe time on a fast hydration path).
    const safety = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => reveal(el));
    }, 2500);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(safety);
    };
  }, []);
}
