import aboutImg from "@/assets/about-studio.jpg";

const stats = [
  { n: "08+", l: "Anos de ofício" },
  { n: "1.2K", l: "Veículos atendidos" },
  { n: "100%", l: "Produtos premium" },
];

export function About() {
  return (
    <section id="sobre" className="py-28 md:py-44 relative">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Image side */}
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

        {/* Text side */}
        <div className="lg:col-span-7 lg:order-2 order-1">
          <p className="reveal reveal-fade eyebrow mb-8">O Atelier</p>
          <h2 className="reveal reveal-skew h-display text-5xl sm:text-6xl lg:text-7xl text-white mb-10">
            Onde a paixão <br />
            <em>encontra</em> a perfeição.
          </h2>

          <div className="space-y-6 max-w-xl">
            <p className="reveal reveal-fade text-white-muted leading-[1.9] font-light text-base" data-delay="100ms">
              A Don Estética Automotiva nasceu do desejo silencioso de tratar o automóvel como uma obra. Cada veículo que cruza nossa porta é estudado, compreendido e devolvido — não apenas limpo, mas <span className="font-serif-italic text-white">restaurado em sua essência</span>.
            </p>
            <p className="reveal reveal-fade text-white-muted leading-[1.9] font-light text-sm" data-delay="200ms">
              Trabalhamos com produtos de alta linhagem, técnicas reconhecidas internacionalmente e a paciência exigida pelo verdadeiro detailing.
            </p>
          </div>

          {/* Stats */}
          <div className="reveal reveal-up mt-14 grid grid-cols-3 gap-8 max-w-md" data-delay="300ms">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="font-display text-4xl sm:text-5xl text-white mb-2">{s.n}</p>
                <div className="w-6 h-px bg-red mb-2" />
                <p className="text-[10px] tracking-[0.25em] uppercase text-white-muted font-light leading-tight">
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
