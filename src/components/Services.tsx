import {
  Sparkles, Droplets, Shield, ShieldCheck, Sun, Sofa,
  Wrench, Cog, SprayCan, Package,
} from "lucide-react";

const services = [
  { icon: Sparkles, title: "Polimento e Cristalização", desc: "Restaure o brilho original e proteja a pintura com cristalização profissional de alta durabilidade." },
  { icon: Droplets, title: "Lavagem Detalhada", desc: "Higienização completa interna e externa com técnicas premium." },
  { icon: Shield, title: "Vitrificação de Pintura", desc: "Camada cerâmica de proteção com brilho intenso e durabilidade prolongada." },
  { icon: ShieldCheck, title: "Proteção PPF", desc: "Película protetora contra riscos, impactos e desgaste." },
  { icon: Sun, title: "Insulfilm / Películas", desc: "Películas de controle solar com diversos níveis de proteção térmica." },
  { icon: Sofa, title: "Higienização de Interior", desc: "Limpeza profunda de bancos, carpetes e teto." },
  { icon: SprayCan, title: "Revitalização de Plásticos", desc: "Restauração de plásticos e borrachas externas, devolvendo aparência de novo." },
  { icon: Cog, title: "Limpeza de Motor", desc: "Lavagem técnica do compartimento do motor com produtos seguros." },
  { icon: Wrench, title: "Lavagem a Seco", desc: "Limpeza ecológica sem uso de água, ideal para retoques rápidos." },
  { icon: Package, title: "Pacotes Completos", desc: "Combos de detailing personalizados para preservar seu veículo." },
];

function ServiceCard({
  icon: Icon, title, desc, large, delay,
}: {
  icon: React.ElementType; title: string; desc: string; large?: boolean; delay: number;
}) {
  return (
    <article
      className={`reveal reveal-up bg-surface border border-line p-7 transition-all duration-500 hover:border-red group ${large ? "md:row-span-1" : ""}`}
      style={{ borderLeft: "3px solid #CC0000", paddingLeft: "20px" }}
      data-delay={`${delay}ms`}
    >
      <div className="flex items-start gap-5">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-red/10 text-red group-hover:bg-red group-hover:text-white transition-all">
          <Icon size={22} />
        </div>
        <div>
          <h3 className={`text-white mb-2 ${large ? "text-2xl sm:text-3xl" : "text-xl"}`}>{title}</h3>
          <p className={`text-white-muted font-light leading-relaxed ${large ? "text-base" : "text-sm"}`}>
            {desc}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="reveal reveal-fade text-xs uppercase tracking-[0.3em] text-red mb-4 font-medium">
            Nossos Serviços
          </p>
          <h2 className="reveal reveal-skew section-title text-4xl sm:text-6xl text-white">
            Excelência em cada detalhe
          </h2>
          <p className="reveal reveal-fade text-white-muted font-light mt-6" data-delay="120ms">
            Soluções completas para manter seu veículo com aparência e proteção impecáveis.
          </p>
        </div>

        {/* Asymmetric grid: first card spans 2 cols on lg, others in 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          <div className="lg:col-span-4">
            <ServiceCard {...services[0]} large delay={0} />
          </div>
          <div className="lg:col-span-2">
            <ServiceCard {...services[1]} delay={80} />
          </div>
          {services.slice(2).map((s, i) => (
            <div key={s.title} className="lg:col-span-2">
              <ServiceCard {...s} delay={(i + 2) * 80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
