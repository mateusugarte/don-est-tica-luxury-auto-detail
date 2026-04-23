import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const items = [
  { img: p1, title: "Polimento Profissional", tag: "Pintura" },
  { img: p2, title: "Vitrificação Cerâmica", tag: "Proteção" },
  { img: p4, title: "Aplicação de PPF", tag: "Película" },
  { img: p3, title: "Higienização Interna", tag: "Interior" },
  { img: p5, title: "Detailing de Rodas", tag: "Detalhes" },
  { img: p6, title: "Limpeza de Motor", tag: "Motor" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-[120px]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Portfólio</p>
          <h2 className="section-title text-4xl sm:text-5xl font-light mb-4 leading-tight">
            Resultados que <span className="italic text-gold">impressionam</span>
          </h2>
          <p className="text-muted-foreground font-light mt-6">
            Uma seleção de trabalhos realizados em nosso estúdio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              data-delay={`${i * 100}ms`}
              className="animate-on-scroll scale-in group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-[var(--gold-soft)]"
            >
              <img
                src={it.img}
                alt={it.title}
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                  {it.tag}
                </span>
                <h3 className="text-2xl font-light text-foreground">
                  {it.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
