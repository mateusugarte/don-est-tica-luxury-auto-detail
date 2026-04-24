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
      {/* Radial red glow background */}
      <BgGradient
        gradientSize={{ width: "75%", height: "60%" }}
        gradientPosition={{ x: "50%", y: "115%" }}
        gradientColors={[
          { color: "rgba(200,22,29,0.35)", start: "0%" },
          { color: "rgba(142,15,20,0.18)", start: "30%" },
          { color: "rgba(6,6,6,0)", start: "70%" },
          { color: "#060606", start: "100%" },
        ]}
      />

      {/* Subtle top vignette to sit under header */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,6,6,0.85) 0%, rgba(6,6,6,0) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center">
        {/* Eyebrow */}
        <AnimatedContainer
          transformDirection="bottom"
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-10"
        >
          <span className="eyebrow">Don — Atelier Automotivo</span>
        </AnimatedContainer>

        {/* Headline */}
        <h1 className="h-display text-[14vw] sm:text-[10vw] lg:text-[8rem] xl:text-[9rem] text-center text-white max-w-5xl">
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
          className="mt-12 max-w-md"
        >
          <p className="text-sm text-white-muted font-light leading-relaxed text-center">
            Um atelier dedicado ao automóvel — onde técnica, paciência e produtos de alta linhagem revelam a essência de cada peça.
          </p>
        </AnimatedContainer>

        {/* CTAs */}
        <AnimatedContainer
          transformDirection="bottom"
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-14 flex flex-wrap gap-10 justify-center"
        >
          <a
            href="https://donesteticaautomotiva.com.br/catalogo/"
            target="_blank"
            rel="noreferrer"
            className="btn-cta"
          >
            Agendar Serviço
          </a>
          <a href="#servicos" className="btn-outline">
            Explorar Serviços
          </a>
        </AnimatedContainer>
      </div>

      {/* Bottom fine line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--red)] to-transparent" />
      </div>
    </HeroAnimated>
  );
}
