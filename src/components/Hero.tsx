import { useEffect, useRef } from "react";
import car from "@/assets/hero-bmw.png";
import { ArrowDown } from "lucide-react";

function Particles() {
  const items = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const dur = 8 + ((i * 7) % 12);
        const delay = (i * 0.3) % 6;
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

function CharReveal({ text, baseDelay = 0 }: { text: string; baseDelay?: number }) {
  return (
    <>
      {text.split("").map((c, i) => (
        <span
          key={i}
          className="char-reveal"
          data-space={c === " " ? "true" : undefined}
          style={{ animationDelay: `${baseDelay + i * 45}ms` }}
        >
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const carRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 700);
        const t = y / 700;
        const el = carRef.current;
        if (el) {
          const scale = 1 + 0.3 * t;
          const ty = -50 * t;
          const tx = 20 * t;
          const bright = 1 - 0.5 * t;
          el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
          el.style.filter = `brightness(${bright}) saturate(${1 - 0.3 * t})`;
        }
        if (overlayRef.current) {
          overlayRef.current.style.opacity = `${0.3 + 0.5 * t}`;
        }
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
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Vignette + crimson glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 65% 75%, rgba(184,5,14,0.22) 0%, transparent 65%), radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      <Particles />

      {/* Top brand bar */}
      <div className="absolute top-0 inset-x-0 z-20 pt-28 px-8 lg:px-16 flex items-center justify-between text-[10px] tracking-[0.4em] uppercase text-white-muted fade-up-soft" style={{ animationDelay: "0.6s" }}>
        <span>Est. Sorocaba — SP</span>
        <span className="hidden md:inline">Detailing · Coating · PPF</span>
        <span>N° 001 / Collection</span>
      </div>

      {/* Vertical accents */}
      <div
        className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 h-[40vh] w-px bg-gradient-to-b from-transparent via-[var(--red)] to-transparent vline-grow z-20 hidden md:block"
      />
      <div className="absolute left-2 lg:left-10 top-1/2 -translate-y-1/2 z-20 hidden md:block fade-up-soft" style={{ animationDelay: "1.2s" }}>
        <span className="brand-vertical">Don · Atelier Automotivo</span>
      </div>

      {/* Right meta */}
      <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-end gap-2 fade-up-soft" style={{ animationDelay: "1.4s" }}>
        <span className="text-[10px] tracking-[0.4em] uppercase text-white-muted">Showcase</span>
        <span className="font-serif-italic text-2xl text-white">BMW 320i Sport</span>
        <span className="text-[10px] tracking-[0.3em] uppercase text-red">Cerâmica · 9H</span>
      </div>

      {/* Main composition */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
        {/* Eyebrow */}
        <p className="fade-up-soft text-[10px] tracking-[0.6em] uppercase text-white-muted mb-8" style={{ animationDelay: "0.3s" }}>
          — Don Estética Automotiva —
        </p>

        {/* Editorial headline: serif, large, italic accent */}
        <h1 className="h-display text-white max-w-5xl text-[15vw] sm:text-[11vw] lg:text-[8.5rem] xl:text-[10rem]">
          <span className="block">
            <CharReveal text="Transformando" />
          </span>
          <span className="block font-serif-italic" style={{ color: "var(--red-glow)" }}>
            <CharReveal text="veículos" baseDelay={650} />
          </span>
          <span className="block">
            <CharReveal text="em arte" baseDelay={1100} />
          </span>
        </h1>

        {/* Refined subtitle */}
        <div className="mt-10 max-w-md mx-auto">
          <p className="subtitle-wipe text-sm text-white-muted font-light leading-relaxed">
            Um atelier dedicado ao automóvel — onde técnica, paciência e produtos de alta linhagem revelam a essência de cada peça.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center subtitle-wipe" style={{ animationDelay: "1.7s" }}>
          <a
            href="https://donesteticaautomotiva.com.br/catalogo/"
            target="_blank"
            rel="noreferrer"
            className="btn-cta"
          >
            Agendar Serviço
          </a>
          <a href="#servicos" className="btn-outline">
            Explorar
          </a>
        </div>
      </div>

      {/* Car image — anchored, large */}
      <img
        ref={carRef}
        src={car}
        alt="BMW 320i Sport"
        className="hero-car-enter absolute pointer-events-none select-none z-[5]"
        style={{
          width: "85%",
          maxWidth: "1300px",
          left: "50%",
          marginLeft: "-42.5%",
          bottom: "-2%",
          maxHeight: "55vh",
          objectFit: "contain",
          transition: "transform 0.05s linear, filter 0.05s linear",
          willChange: "transform, filter",
          filter: "drop-shadow(0 40px 60px rgba(184,5,14,0.25)) drop-shadow(0 20px 30px rgba(0,0,0,0.8))",
        }}
      />

      {/* Dark gradient overlay strengthening with scroll */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none z-[6]"
        style={{
          background: "linear-gradient(180deg, transparent 50%, rgba(5,5,5,0.6) 80%, #050505 100%)",
          opacity: 0.3,
          transition: "opacity 0.1s linear",
        }}
      />

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 fade-up-soft" style={{ animationDelay: "2.2s" }}>
        <span className="text-[9px] tracking-[0.5em] uppercase text-white-muted">Scroll</span>
        <ArrowDown size={14} className="text-red animate-bounce" />
      </div>
    </section>
  );
}
