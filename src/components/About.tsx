import aboutImg from "@/assets/about-studio.jpg";

export function About() {
  return (
    <section id="sobre" className="py-32 md:py-48 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header row */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24 items-end">
          <div className="lg:col-span-7">
            <p className="reveal reveal-fade eyebrow mb-8">Nossa História</p>
            <h2 className="reveal reveal-skew h-display text-5xl sm:text-6xl lg:text-7xl text-white max-w-2xl">
              Um conceito <em>único</em> no cuidado do seu veículo.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="reveal reveal-fade text-white-muted font-light text-sm leading-relaxed max-w-md ml-auto" data-delay="120ms">
              Sorocaba — SP. Um atelier criado para tratar cada automóvel como peça única, em uma estrutura completa e diferenciada.
            </p>
          </div>
        </div>

        {/* Body — split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className="lg:col-span-5 lg:order-1 order-2">
            <div
              className="reveal reveal-clip relative overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={aboutImg}
                alt="Atelier Don Estética Automotiva"
                className="w-full h-full object-cover grayscale-[15%]"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(6,6,6,0) 50%, rgba(6,6,6,0.6) 100%)",
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 lg:order-2 order-1 space-y-10 max-w-2xl">
            <p className="reveal reveal-fade font-serif-italic text-white text-2xl md:text-3xl leading-snug">
              Nascemos em Sorocaba com o foco de ser um conceito único e inovador no cuidado do seu veículo. Criamos uma estrutura diferenciada e completa para atender nossos clientes.
            </p>

            <div className="w-12 h-px bg-red reveal reveal-fade" data-delay="120ms" />

            <p className="reveal reveal-fade text-white-muted text-base leading-[1.9] font-light" data-delay="200ms">
              Como empresa, cuidamos do seu veículo com todo o cuidado e dedicação; como pessoas, cuidamos de nossa equipe. Nossos colaboradores são treinados e atuam dentro de um ambiente familiar — onde pessoas felizes realizam serviços com <span className="font-serif-italic text-white">100% de satisfação</span>.
            </p>

            {/* Stats */}
            <div className="reveal reveal-up grid grid-cols-3 gap-10 pt-8" data-delay="300ms">
              {[
                { n: "08+", l: "Anos de ofício" },
                { n: "1.2K", l: "Veículos atendidos" },
                { n: "100%", l: "Satisfação" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-4xl sm:text-5xl text-white mb-3">{s.n}</p>
                  <div className="w-6 h-px bg-red mb-3" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-white-muted font-light leading-tight">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
