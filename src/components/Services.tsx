import {
  Sparkles, Droplets, Shield, ShieldCheck, Sun, Sofa,
  Wrench, Cog, SprayCan, Package,
} from "lucide-react";

const services = [
  { icon: Sparkles, title: "Polimento e Cristalização", desc: "Restaure o brilho original e proteja a pintura com cristalização profissional." },
  { icon: Droplets, title: "Lavagem Detalhada", desc: "Higienização completa interna e externa com técnicas premium." },
  { icon: Shield, title: "Vitrificação de Pintura", desc: "Camada cerâmica de proteção com durabilidade prolongada e brilho intenso." },
  { icon: ShieldCheck, title: "Proteção PPF", desc: "Película protetora contra riscos, impactos e desgaste do dia a dia." },
  { icon: Sun, title: "Insulfilm / Películas", desc: "Películas de controle solar com diversos níveis de proteção térmica." },
  { icon: Sofa, title: "Higienização de Interior", desc: "Limpeza profunda de bancos, carpetes, teto e todas as superfícies internas." },
  { icon: SprayCan, title: "Revitalização de Plásticos", desc: "Restauração de plásticos e borrachas externas, devolvendo aparência de novo." },
  { icon: Cog, title: "Limpeza de Motor", desc: "Lavagem técnica do compartimento do motor com produtos seguros." },
  { icon: Wrench, title: "Lavagem a Seco", desc: "Limpeza ecológica sem uso de água, ideal para retoques rápidos." },
  { icon: Package, title: "Pacotes Completos", desc: "Combos de detailing personalizados para preservar seu veículo." },
];

export function Services() {
  return (
    <section id="servicos" className="py-28 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50 pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Nossos Serviços</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Excelência em cada <span className="text-gradient italic">detalhe</span>
          </h2>
          <p className="text-muted-foreground">
            Soluções completas para manter seu veículo com aparência e proteção impecáveis.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{ animationDelay: `${i * 0.05}s` }}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/60 hover:-translate-y-2 transition-all duration-500 animate-fade-up overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all mb-5">
                  <s.icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
