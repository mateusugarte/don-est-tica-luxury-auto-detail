import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let dx = tx, dy = ty;
    let rx = tx, ry = ty;
    let raf = 0;

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hover = !!t.closest("a, button, input, textarea, [role='button']");
      ring.classList.toggle("is-hover", hover);
    };
    const tick = () => {
      dx += (tx - dx) * 0.35;
      dy += (ty - dy) * 0.35;
      rx += (tx - rx) * 0.12;
      ry += (ty - ry) * 0.12;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring hidden md:block" aria-hidden />
      <div ref={dotRef} className="cursor-dot hidden md:block" aria-hidden />
    </>
  );
}
