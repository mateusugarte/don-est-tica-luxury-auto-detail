import {
  Sparkles, Droplets, Shield, ShieldCheck, Sun, Sofa,
  Wrench, Cog, SprayCan, Package,
} from "lucide-react";

const services = [
  { icon: Sparkles, title: "Polimento & Cristalização", desc: "Restauro do brilho original com técnica multi-etapa e cristalização de alta longevidade." },
  { icon: Droplets, title: "Lavagem Detalhada", desc: "Higienização profunda interna e externa com método dos dois baldes e produtos pH neutro." },
  { icon: Shield, title: "Vitrificação Cerâmica", desc: "Camada cerâmica de proteção, dureza 9H e brilho profundo prolongado." },
  { icon: ShieldCheck, title: "Proteção PPF", desc: "Película de poliuretano contra riscos, impactos e desgaste cotidiano." },
  { icon: Sun, title: "Insulfilm & Películas", desc: "Películas de controle solar com diversos níveis de proteção térmica e visibilidade." },
  { icon: Sofa, title: "Higienização de Interior", desc: "Limpeza profunda de bancos, carpetes, teto e couros — extração úmida profissional." },
  { icon: SprayCan, title: "Revitalização de Plásticos", desc: "Restauração de plásticos e borrachas externas, devolvendo aparência de fábrica." },
  { icon: Cog, title: "Limpeza de Motor", desc: "Lavagem técnica do compartimento do motor com produtos específicos e seguros." },
  { icon: Wrench, title: "Lavagem a Seco", desc: "Limpeza ecológica sem uso de água, ideal para retoques rápidos e ambientes urbanos." },
  { icon: Package, title: "Pacotes Completos", desc: "Combos de detailing personalizados e contínuos para preservar seu veículo." },
];

function ServiceRow({
  icon: Icon, title, desc, index,
}: {
  icon: React.ElementType; title: string; desc: string; index: number;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article
      className="reveal reveal-up group border-t border-line py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-start hover:border-red transition-colors duration-500"
      data-delay={`${index * 60}ms`}
    >
      <div className="col-span-2 md:col-span-1">
        <span className="font-display text-2xl text-white-muted group-hover:text-red transition-colors">{num}</span>
      </div>
      <div className="col-span-10 md:col-span-1 flex md:justify-center">
        <Icon size={20} className="text-red" />
      </div>
      <div className="col-span-12 md:col-span-5">
        <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-red-glow transition-colors">
          {title}
        </h3>
      </div>
      <div className="col-span-12 md:col-span-5">
        <p className="text-white-muted font-light leading-relaxed text-sm">
          {desc}
        </p>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="servicos" className="py-28 md:py-44 relative bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28 items-end">
          <div className="lg:col-span-7">
            <p className="reveal reveal-fade eyebrow mb-8">Serviços — Selecionados</p>
            <h2 className="reveal reveal-skew h-display text-5xl sm:text-6xl lg:text-7xl text-white max-w-2xl">
              Excelência em <em>cada</em> detalhe.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="reveal reveal-fade text-white-muted font-light leading-relaxed max-w-md ml-auto" data-delay="120ms">
              Soluções completas para preservar e elevar a aparência do seu veículo. Cada protocolo é executado com tempo, atenção e produtos de alta linhagem.
            </p>
          </div>
        </div>

        {/* Editorial list */}
        <div className="border-b border-line">
          {services.map((s, i) => (
            <ServiceRow key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
