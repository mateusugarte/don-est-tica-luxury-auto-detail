import {
  Hero as HeroAnimated,
  BgGradient,
  TextStagger,
  AnimatedContainer,
} from "@/components/blocks/hero-animated";

export function Hero() {
  return (
    <HeroAnimated
      id="inicio"
      className="bg-[#060606] text-[var(--white)]"
    >
      {/* Soft radial red glow background */}
      <BgGradient
        gradientSize={{ width: "60%", height: "50%" }}
        gradientPosition={{ x: "50%", y: "120%" }}
        gradientColors={[
          { color: "rgba(176,21,27,0.22)", start: "0%" },
          { color: "rgba(122,15,19,0.10)", start: "35%" },
          { color: "rgba(5,5,5,0)", start: "75%" },
          { color: "#050505", start: "100%" },
        ]}
      />

      {/* Top vignette */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0) 100%)",
        }}
      />

      {/* Editorial frame markers */}
      <div className="pointer-events-none absolute top-32 left-6 lg:left-12 z-10 hidden md:block">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white-muted font-light [writing-mode:vertical-rl] rotate-180">
          Est. Sorocaba — SP
        </p>
      </div>
      <div className="pointer-events-none absolute top-32 right-6 lg:right-12 z-10 hidden md:block">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white-muted font-light [writing-mode:vertical-rl]">
          N° 001 — Atelier
        </p>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-40 pb-32 flex flex-col items-center">
        {/* Eyebrow */}
        <AnimatedContainer
          transformDirection="bottom"
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-12"
        >
          <span className="eyebrow">Don — Atelier Automotivo</span>
        </AnimatedContainer>

        {/* Headline */}
        <h1 className="h-display text-[15vw] sm:text-[11vw] lg:text-[9rem] xl:text-[10.5rem] text-center text-white leading-[0.95]">
          <TextStagger
            text="Transformando"
            className="block"
            stagger={0.04}
            direction="bottom"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            as="span"
          />
          <TextStagger
            text="veículos em arte."
            className="block italic font-serif-italic text-[var(--red-glow)]"
            stagger={0.04}
            direction="bottom"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            as="span"
          />
        </h1>

        {/* Subtitle */}
        <AnimatedContainer
          transformDirection="bottom"
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 max-w-sm"
        >
          <p className="text-[13px] text-white-muted font-light leading-[1.9] text-center tracking-wide">
            Um atelier dedicado ao automóvel — onde técnica, paciência e produtos de alta linhagem revelam a essência de cada peça.
          </p>
        </AnimatedContainer>

        {/* CTAs */}
        <AnimatedContainer
          transformDirection="bottom"
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-16 flex flex-wrap gap-12 justify-center"
        >
          <a href="#contato" className="btn-cta">
            Agendar Serviço
          </a>
          <a href="#servicos" className="btn-outline">
            Explorar Serviços
          </a>
        </AnimatedContainer>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <p className="text-[9px] tracking-[0.5em] uppercase text-white-muted font-light">Scroll</p>
        <div className="w-px h-14 bg-gradient-to-b from-[var(--red)] via-[var(--red)]/40 to-transparent" />
      </div>
    </HeroAnimated>
  );
}
