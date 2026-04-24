// minimal review marquee

const reviews = [
  { name: "Rafael Mendes", car: "BMW 320i", text: "Serviço impecável. Meu carro saiu como novo, brilho de showroom. Recomendo de olhos fechados." },
  { name: "Camila Souza", car: "Audi A4", text: "Atendimento excepcional e atenção aos detalhes. A vitrificação durou muito mais do que eu esperava." },
  { name: "Lucas Ferreira", car: "Porsche Cayman", text: "Profissionais que entendem de carros de alto padrão. Confio meu Porsche apenas à Don." },
  { name: "Patrícia Lima", car: "Range Rover Velar", text: "PPF perfeitamente aplicado. O acabamento ficou invisível e a proteção é incrível." },
  { name: "André Costa", car: "Mercedes C300", text: "Limpeza interna que parecia impossível. Eles fazem mágica. Voltarei sempre." },
  { name: "Beatriz Almeida", car: "Honda Civic", text: "Preço justo para a qualidade entregue. Saí encantada com o resultado e o atendimento." },
];

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <article className="w-[280px] sm:w-[420px] md:w-[480px] shrink-0 px-6 sm:px-12">
      <p className="font-serif-italic text-white text-xl sm:text-2xl md:text-[1.6rem] leading-[1.45] mb-8 sm:mb-10">
        “{r.text}”
      </p>
      <div className="flex items-baseline gap-3">
        <span className="w-6 h-px bg-red translate-y-[-3px]" />
        <p className="text-white text-[11px] tracking-[0.3em] uppercase">{r.name}</p>
        <span className="text-white-muted text-[10px] tracking-[0.25em] uppercase">· {r.car}</span>
      </div>
    </article>
  );
}

export function Testimonials() {
  const loop = [...reviews, ...reviews];
  return (
    <section
      id="depoimentos"
      className="py-28 md:py-40 relative"
      style={{ background: "#0A0A0A", borderTop: "1px solid #1F1F1F", borderBottom: "1px solid #1F1F1F" }}
    >
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="reveal reveal-fade eyebrow mb-6" style={{ display: "inline-flex" }}>
            Testemunhos
          </p>
          <h2 className="reveal reveal-skew h-display text-3xl sm:text-5xl md:text-6xl text-white">
            O que nossos <em>clientes</em> dizem.
          </h2>
        </div>
      </div>

      <div className="marquee-wrapper overflow-hidden relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10" style={{ background: "linear-gradient(90deg, #0A0A0A, transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10" style={{ background: "linear-gradient(-90deg, #0A0A0A, transparent)" }} />
        <div className="marquee-track">
          {loop.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
