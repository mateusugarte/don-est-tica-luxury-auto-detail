import { useEffect, useRef } from "react";
import car from "@/assets/hero-bmw.png";
import { ArrowRight } from "lucide-react";

const TITLE = "DON ESTÉTICA AUTOMOTIVA";

function CharReveal({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((c, i) => (
        <span
          key={i}
          className="char-reveal"
          data-space={c === " " ? "true" : undefined}
          style={{ animationDelay: `${i * 40}ms` }}
        >
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </>
  );
}

function Particles() {
  const items = Array.from({ length: 24 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const dur = 6 + ((i * 7) % 10);
        const delay = (i * 0.3) % 5;
        return (
          <span
            key={i}
            className="particle"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function Hero() {
  const carRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = carRef.current;
        if (!el) return;
        const y = Math.min(window.scrollY, 600);
        const t = y / 600; // 0..1
        const scale = 1 + 0.35 * t;
        const ty = -60 * t;
        const tx = 30 * t;
        const bright = 1 - 0.4 * t;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
        el.style.filter = `brightness(${bright})`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Red radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 60% 80%, rgba(204,0,0,0.25) 0%, transparent 70%)",
        }}
      />
      <Particles />

      {/* Centered text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 pt-20">
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white max-w-5xl leading-[0.95]">
          <CharReveal text={TITLE} />
        </h1>
        <p
          className="subtitle-wipe mt-8 text-base sm:text-lg text-white-muted max-w-xl font-light tracking-[0.15em] uppercase"
        >
          Transformando Veículos em Arte
        </p>
        <div
          className="mt-10 flex flex-wrap gap-4 justify-center subtitle-wipe"
          style={{ animationDelay: "1.4s" }}
        >
          <a
            href="https://donesteticaautomotiva.com.br/catalogo/"
            target="_blank"
            rel="noreferrer"
            className="btn-cta"
          >
            Agendar Serviço
            <ArrowRight size={16} />
          </a>
          <a href="#servicos" className="btn-outline">
            Nossos Serviços
          </a>
        </div>
      </div>

      {/* Car image */}
      <img
        ref={carRef}
        src={car}
        alt="BMW 320i Sport"
        className="hero-car-enter absolute pointer-events-none select-none"
        style={{
          width: "70%",
          right: "5%",
          bottom: 0,
          maxHeight: "65vh",
          objectFit: "contain",
          transition: "transform 0.05s linear, filter 0.05s linear",
          willChange: "transform, filter",
        }}
      />
    </section>
  );
}
