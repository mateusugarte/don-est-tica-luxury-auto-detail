export function About() {
  return (
    <section id="sobre" className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header row */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-7">
            <p className="reveal reveal-fade eyebrow mb-6">Nossa História</p>
            <h2 className="reveal reveal-skew text-4xl sm:text-5xl lg:text-6xl text-white max-w-2xl font-light tracking-tight leading-[1.05]">
              Um conceito único no cuidado do seu veículo.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              className="reveal reveal-fade text-white-muted font-light text-sm leading-relaxed max-w-md lg:ml-auto"
              data-delay="120ms"
            >
              Sorocaba — SP. Um atelier criado para tratar cada automóvel como peça única, em uma
              estrutura completa e diferenciada.
            </p>
          </div>
        </div>

        {/* Body — split */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Image */}
          <div className="lg:col-span-5 lg:order-1 order-2">
            <div
              className="reveal reveal-clip relative overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src="/images/about-studio.jpg"
                alt="Atelier Don Estética Automotiva"
                loading="lazy"
                decoding="async"
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
          <div className="lg:col-span-7 lg:order-2 order-1 space-y-8 md:space-y-10 max-w-2xl">
            <p className="reveal reveal-fade text-white text-xl sm:text-2xl md:text-[1.65rem] leading-[1.45] font-light tracking-tight">
              Nascemos em Sorocaba com o foco de ser um conceito único e inovador no cuidado do
              seu veículo. Criamos uma estrutura diferenciada e completa para atender nossos
              clientes.
            </p>

            <div className="w-12 h-px bg-red reveal reveal-fade" data-delay="120ms" />

            <p
              className="reveal reveal-fade text-white-muted text-sm sm:text-base leading-[1.9] font-light"
              data-delay="200ms"
            >
              Como empresa, cuidamos do seu veículo com todo o cuidado e dedicação; como pessoas,
              cuidamos de nossa equipe. Nossos colaboradores são treinados e atuam dentro de um
              ambiente familiar — onde pessoas felizes realizam serviços com{" "}
              <span className="text-white">100% de satisfação</span>.
            </p>

            {/* Stats */}
            <div
              className="reveal reveal-up grid grid-cols-3 gap-6 sm:gap-10 pt-6 md:pt-8"
              data-delay="300ms"
            >
              {[
                { n: "08+", l: "Anos de ofício" },
                { n: "1.2K", l: "Veículos atendidos" },
                { n: "100%", l: "Satisfação" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 font-light tracking-tight">
                    {s.n}
                  </p>
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
