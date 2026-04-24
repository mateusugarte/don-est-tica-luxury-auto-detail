const items = [
  { img: "/images/portfolio-1.jpg", title: "Polimento Profissional", tag: "Pintura", h: 420 },
  { img: "/images/portfolio-2.jpg", title: "Vitrificação Cerâmica", tag: "Proteção", h: 560 },
  { img: "/images/portfolio-4.jpg", title: "Aplicação de PPF", tag: "Película", h: 360 },
  { img: "/images/portfolio-3.jpg", title: "Higienização Interna", tag: "Interior", h: 500 },
  { img: "/images/portfolio-5.jpg", title: "Detailing de Rodas", tag: "Detalhes", h: 400 },
  { img: "/images/portfolio-6.jpg", title: "Limpeza de Motor", tag: "Motor", h: 520 },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="reveal reveal-fade eyebrow mb-6">Portfólio — Arquivo</p>
            <h2 className="reveal reveal-skew text-4xl sm:text-5xl lg:text-6xl text-white max-w-2xl font-light tracking-tight leading-[1.05]">
              Resultados que impressionam.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              className="reveal reveal-fade text-white-muted font-light text-sm leading-relaxed max-w-md ml-auto"
              data-delay="120ms"
            >
              Uma seleção de trabalhos executados em nosso atelier — cada peça documentada como
              parte do nosso arquivo permanente.
            </p>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <figure
              key={it.title}
              className="reveal reveal-clip mb-4 md:mb-6 break-inside-avoid relative group overflow-hidden"
              data-delay={`${i * 90}ms`}
            >
              <div className="overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  decoding="async"
                  style={{ height: it.h }}
                  className="w-full object-cover grayscale-[15%] transition-all duration-[1200ms] group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(5,5,5,0.95) 100%)",
                }}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.4em] text-red mb-2">
                    — {it.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl text-white font-light tracking-tight">
                    {it.title}
                  </h3>
                </div>
                <span className="text-xs text-white-muted font-light tracking-widest">
                  N° {String(i + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
