import { Star } from "lucide-react";

const reviews = [
  { name: "Rafael Mendes", car: "BMW 320i", text: "Serviço impecável. Meu carro saiu como novo, brilho de showroom. Recomendo de olhos fechados." },
  { name: "Camila Souza", car: "Audi A4", text: "Atendimento excepcional e atenção aos detalhes. A vitrificação durou muito mais do que eu esperava." },
  { name: "Lucas Ferreira", car: "Porsche Cayman", text: "Profissionais que entendem de carros de alto padrão. Confio meu Porsche apenas à Don." },
  { name: "Patrícia Lima", car: "Range Rover Velar", text: "PPF perfeitamente aplicado. O acabamento ficou invisível e a proteção é incrível." },
  { name: "André Costa", car: "Mercedes C300", text: "Limpeza interna que parecia impossível. Eles fazem mágica. Voltarei sempre." },
  { name: "Beatriz Almeida", car: "Honda Civic", text: "Preço justo para a qualidade entregue. Saí encantada com o resultado e o atendimento." },
];

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  const initials = r.name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  return (
    <article className="bg-[#0A0A0A] border border-line p-7 w-[340px] sm:w-[400px] shrink-0">
      <div className="flex items-center gap-4 mb-5">
        <div className="h-12 w-12 rounded-full border-2 border-red bg-surface flex items-center justify-center text-red font-display text-lg">
          {initials}
        </div>
        <div>
          <p className="text-white font-medium text-sm">{r.name}</p>
          <p className="text-white-muted text-xs">{r.car}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="fill-red text-red" />
        ))}
      </div>
      <p className="text-white-muted font-light leading-relaxed text-sm">"{r.text}"</p>
    </article>
  );
}

export function Testimonials() {
  const loop = [...reviews, ...reviews];
  return (
    <section
      id="depoimentos"
      className="py-20 md:py-32"
      style={{ background: "#141414", borderTop: "1px solid #CC0000" }}
    >
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="reveal reveal-fade text-xs uppercase tracking-[0.3em] text-red mb-4 font-medium">
            Depoimentos
          </p>
          <h2 className="reveal reveal-skew section-title text-4xl sm:text-6xl text-white">
            O que nossos clientes dizem
          </h2>
        </div>
      </div>

      <div className="marquee-wrapper overflow-hidden relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: "linear-gradient(90deg, #141414, transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: "linear-gradient(-90deg, #141414, transparent)" }} />
        <div className="marquee-track">
          {loop.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
