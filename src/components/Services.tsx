import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

type Service = {
  title: string;
  short: string;
  description: string;
  highlights: string[];
  gallery: string[];
};

const services: Service[] = [
  {
    title: "Higienização Interna",
    short:
      "Limpeza profunda de todo o interior do veículo, removendo sujeiras, bactérias e odores.",
    description:
      "Protocolo completo de higienização interna: bancos, carpetes, teto, plásticos e couros. Utilizamos extração úmida profissional, escovação técnica e produtos pH neutro para devolver a sensação de carro novo, eliminando ácaros, bactérias e odores acumulados.",
    highlights: [
      "Extração úmida em bancos e carpetes",
      "Limpeza de teto e plásticos internos",
      "Hidratação de couros e revitalização",
      "Eliminação de odores e bactérias",
    ],
    gallery: ["/images/portfolio-3.jpg", "/images/portfolio-1.jpg", "/images/portfolio-6.jpg"],
  },
  {
    title: "Coating Cerâmico",
    short:
      "Proteção avançada para a pintura com duração de até 2 anos, repelindo água e sujeira.",
    description:
      "Camada cerâmica de alta dureza (9H) aplicada em múltiplas etapas após preparação completa da pintura. Cria uma película protetora hidrofóbica, com brilho profundo e maior facilidade de manutenção, repelindo água, contaminantes e raios UV.",
    highlights: [
      "Dureza 9H e brilho profundo prolongado",
      "Efeito hidrofóbico de alta performance",
      "Proteção contra raios UV e contaminantes",
      "Durabilidade de até 24 meses",
    ],
    gallery: ["/images/portfolio-2.jpg", "/images/portfolio-1.jpg", "/images/portfolio-5.jpg"],
  },
  {
    title: "Lavagem Detalhada",
    short:
      "Limpeza minuciosa interna e externa com produtos profissionais e técnicas especiais.",
    description:
      "Lavagem técnica realizada com método dos dois baldes, descontaminação ferrosa e limpeza de detalhes ocultos. Cada centímetro do veículo é tratado com cuidado, restituindo brilho e preparando a pintura para tratamentos posteriores.",
    highlights: [
      "Método dos dois baldes",
      "Descontaminação ferrosa e química",
      "Limpeza de frestas, soleiras e rodas",
      "Secagem com microfibras premium",
    ],
    gallery: ["/images/portfolio-1.jpg", "/images/portfolio-5.jpg", "/images/portfolio-3.jpg"],
  },
  {
    title: "Aplicação de PPF",
    short:
      "Película de proteção transparente que preserva a pintura original contra arranhões e impactos.",
    description:
      "PPF (Paint Protection Film) é uma película de poliuretano autorregenerativa aplicada sobre a pintura. Protege contra riscos de pedras, insetos, abrasão e desgaste do dia a dia, mantendo a pintura original intacta — invisível e removível sem danos.",
    highlights: [
      "Película autorregenerativa",
      "Proteção contra impactos e riscos",
      "Acabamento invisível",
      "Removível sem danificar a pintura",
    ],
    gallery: ["/images/portfolio-4.jpg", "/images/portfolio-2.jpg", "/images/portfolio-5.jpg"],
  },
  {
    title: "Martelinho de Ouro",
    short:
      "Técnica especializada para remoção de amassados sem danificar a pintura original.",
    description:
      "Reparo de pequenos amassados sem necessidade de pintura, preservando o acabamento de fábrica. Técnica precisa, executada com ferramentas específicas que devolvem a forma original da chapa sem comprometer a integridade da pintura.",
    highlights: [
      "Sem necessidade de repintura",
      "Preserva o acabamento de fábrica",
      "Resultado imperceptível",
      "Reparo rápido e preciso",
    ],
    gallery: ["/images/portfolio-6.jpg", "/images/portfolio-4.jpg", "/images/portfolio-1.jpg"],
  },
  {
    title: "Insulfilm",
    short:
      "Aplicação de películas de controle solar e antivandalismo para conforto e segurança.",
    description:
      "Aplicação técnica de películas automotivas de alta qualidade — controle solar, antivandalismo e estética. Reduzem temperatura interna, protegem contra raios UV e oferecem maior privacidade, dentro das normas vigentes.",
    highlights: [
      "Bloqueio de raios UV e infravermelho",
      "Redução de calor e ofuscamento",
      "Maior privacidade e segurança",
      "Aplicação dentro das normas legais",
    ],
    gallery: ["/images/portfolio-5.jpg", "/images/portfolio-2.jpg", "/images/portfolio-6.jpg"],
  },
];

function ServiceRow({
  s,
  index,
  onOpen,
}: {
  s: Service;
  index: number;
  onOpen: () => void;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <button
      onClick={onOpen}
      className="reveal reveal-up group border-t border-line py-8 md:py-12 grid grid-cols-12 gap-3 md:gap-8 items-baseline hover:bg-white/[0.015] transition-colors duration-500 w-full text-left"
      data-delay={`${index * 60}ms`}
    >
      <div className="col-span-2 md:col-span-1">
        <span className="text-base md:text-xl font-light text-white-muted group-hover:text-red transition-colors tracking-widest">
          {num}
        </span>
      </div>
      <div className="col-span-10 md:col-span-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-light tracking-tight group-hover:text-red transition-colors">
          {s.title}
        </h3>
      </div>
      <div className="col-span-12 md:col-span-4">
        <p className="text-white-muted font-light leading-relaxed text-xs sm:text-sm">
          {s.short}
        </p>
      </div>
      <div className="col-span-12 md:col-span-1 flex md:justify-end">
        <ArrowUpRight
          size={20}
          className="text-white-muted group-hover:text-red group-hover:rotate-12 transition-all duration-500"
        />
      </div>
    </button>
  );
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch justify-end animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" aria-hidden />
      <div
        className="relative w-full md:max-w-3xl bg-[#0A0A0A] border-l border-line overflow-y-auto animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-6 ml-auto mr-6 z-10 h-10 w-10 flex items-center justify-center text-white-muted hover:text-white border border-line hover:border-red transition-colors bg-[#0A0A0A]"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>

        <div className="px-6 sm:px-10 md:px-14 pb-20 -mt-16">
          <p className="eyebrow mb-8">Serviço</p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-white mb-8 font-light tracking-tight">
            {service.title}
          </h3>
          <p className="text-white-muted text-sm sm:text-base leading-[1.85] font-light max-w-xl mb-12">
            {service.description}
          </p>

          <div className="space-y-3 mb-14">
            <p className="text-[10px] tracking-[0.4em] uppercase text-red mb-5">— Inclui</p>
            {service.highlights.map((h) => (
              <div key={h} className="flex items-baseline gap-4 border-t border-line pt-3">
                <span className="text-red text-xs">—</span>
                <p className="text-white text-sm font-light">{h}</p>
              </div>
            ))}
          </div>

          <p className="text-[10px] tracking-[0.4em] uppercase text-red mb-6">— Galeria</p>
          <div className="grid grid-cols-2 gap-3 mb-12">
            <img
              src={service.gallery[0]}
              alt={service.title}
              loading="lazy"
              className="w-full h-56 sm:h-72 object-cover col-span-2 grayscale-[15%]"
            />
            {service.gallery.slice(1).map((g, i) => (
              <img
                key={i}
                src={g}
                alt={service.title}
                loading="lazy"
                className="w-full h-36 sm:h-44 object-cover grayscale-[15%]"
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-8 sm:gap-10 pt-6 border-t border-line">
            <a
              href="https://donesteticaautomotiva.com.br/catalogo/"
              target="_blank"
              rel="noreferrer"
              className="btn-cta"
            >
              Agendar Serviço
            </a>
            <a
              href="https://wa.me/5511994022344"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="servicos" className="py-24 md:py-40 relative bg-[#060606]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-7">
            <p className="reveal reveal-fade eyebrow mb-6">Serviços — Atelier</p>
            <h2 className="reveal reveal-skew text-4xl sm:text-5xl lg:text-6xl text-white max-w-2xl font-light tracking-tight leading-[1.05]">
              Excelência em cada detalhe.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              className="reveal reveal-fade text-white-muted font-light leading-relaxed max-w-md ml-auto text-sm"
              data-delay="120ms"
            >
              Soluções completas para preservar e elevar o seu veículo. Selecione um serviço para
              conhecer detalhes e exemplos.
            </p>
          </div>
        </div>

        <div className="border-b border-line">
          {services.map((s, i) => (
            <ServiceRow key={s.title} s={s} index={i} onOpen={() => setActive(s)} />
          ))}
        </div>
      </div>

      {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
    </section>
  );
}
