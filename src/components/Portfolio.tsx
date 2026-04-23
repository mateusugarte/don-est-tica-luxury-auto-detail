import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const items = [
  { img: p1, title: "Polimento Profissional", tag: "Pintura", h: 380 },
  { img: p2, title: "Vitrificação Cerâmica", tag: "Proteção", h: 520 },
  { img: p4, title: "Aplicação de PPF", tag: "Película", h: 320 },
  { img: p3, title: "Higienização Interna", tag: "Interior", h: 460 },
  { img: p5, title: "Detailing de Rodas", tag: "Detalhes", h: 360 },
  { img: p6, title: "Limpeza de Motor", tag: "Motor", h: 480 },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="reveal reveal-fade text-xs uppercase tracking-[0.3em] text-red mb-4 font-medium">
            Portfólio
          </p>
          <h2 className="reveal reveal-skew section-title text-4xl sm:text-6xl text-white">
            Resultados que impressionam
          </h2>
        </div>

        {/* Masonry: CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {items.map((it, i) => (
            <figure
              key={it.title}
              className="reveal reveal-clip mb-5 break-inside-avoid relative group overflow-hidden border border-line hover:border-red transition-colors"
              data-delay={`${i * 100}ms`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                style={{ height: it.h }}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent opacity-90" />
              <figcaption className="absolute bottom-0 left-0 p-6">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-red mb-2 font-medium">
                  {it.tag}
                </span>
                <h3 className="text-2xl text-white">{it.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
