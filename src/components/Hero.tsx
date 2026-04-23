import heroCar from "@/assets/hero-car.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <img
        src={heroCar}
        alt="Carro de luxo recebendo polimento profissional"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-fade-in"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-soft)] bg-black/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold mb-8 animate-fade-up">
            <Sparkles size={14} /> Detailing Premium
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl leading-[1.05] text-foreground animate-fade-up [animation-delay:0.1s]">
            <span className="font-light">Transformando</span> <br />
            <span className="font-light">Veículos em</span> <span className="italic text-gold">Arte</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl font-light text-muted-foreground max-w-xl leading-relaxed animate-fade-up [animation-delay:0.2s]">
            Estética automotiva de alto padrão. Polimento, vitrificação, PPF e detailing
            completo executados com precisão e paixão.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:0.3s]">
            <a
              href="https://donesteticaautomotiva.com.br/catalogo/"
              target="_blank"
              rel="noreferrer"
              className="btn-refined group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm uppercase font-normal text-primary-foreground shadow-glow hover:shadow-gold"
            >
              Agendar Serviço
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="btn-refined inline-flex items-center gap-2 rounded-full border border-[var(--gold-soft)] bg-black/30 backdrop-blur px-8 py-4 text-sm uppercase font-normal text-foreground hover:border-[var(--gold)]"
            >
              Nossos Serviços
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md animate-fade-up [animation-delay:0.4s]">
            {[
              { n: "+1.2k", l: "Veículos" },
              { n: "10", l: "Especialidades" },
              { n: "5★", l: "Avaliação" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-4xl text-gold font-light">{s.n}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
