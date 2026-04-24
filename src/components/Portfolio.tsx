import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const items = [
  { img: p1, title: "Polimento Profissional", tag: "Pintura", h: 420 },
  { img: p2, title: "Vitrificação Cerâmica", tag: "Proteção", h: 560 },
  { img: p4, title: "Aplicação de PPF", tag: "Película", h: 360 },
  { img: p3, title: "Higienização Interna", tag: "Interior", h: 500 },
  { img: p5, title: "Detailing de Rodas", tag: "Detalhes", h: 400 },
  { img: p6, title: "Limpeza de Motor", tag: "Motor", h: 520 },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 md:py-44 bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="reveal reveal-fade eyebrow mb-8">Portfólio — Arquivo</p>
            <h2 className="reveal reveal-skew h-display text-4xl sm:text-6xl lg:text-7xl text-white max-w-2xl">
              Resultados que <em>impressionam</em>.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="reveal reveal-fade text-white-muted font-light text-sm leading-relaxed max-w-md ml-auto" data-delay="120ms">
              Uma seleção de trabalhos executados em nosso atelier — cada peça documentada como parte do nosso arquivo permanente.
            </p>
          </div>
        </div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {items.map((it, i) => (
            <figure
              key={it.title}
              className="reveal reveal-clip mb-6 break-inside-avoid relative group overflow-hidden"
              data-delay={`${i * 90}ms`}
            >
              <div className="overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
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
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.4em] text-red mb-2">
                    — {it.tag}
                  </span>
                  <h3 className="font-display text-2xl text-white">{it.title}</h3>
                </div>
                <span className="font-display text-xs text-white-muted">
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
