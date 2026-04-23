import aboutImg from "@/assets/about-studio.jpg";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Profissionais certificados em detailing premium",
  "Produtos importados e tecnologia de ponta",
  "Atendimento personalizado e ambiente exclusivo",
];

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
        <div>
          <p className="reveal reveal-fade text-xs uppercase tracking-[0.3em] text-red mb-4 font-medium">
            Sobre Nós
          </p>
          <h2 className="reveal reveal-skew section-title section-title-left text-4xl sm:text-6xl text-white mb-8">
            Onde a paixão encontra a perfeição
          </h2>
          <p className="reveal reveal-fade text-white-muted leading-relaxed mb-4 font-light text-lg" data-delay="100ms">
            A Don Estética Automotiva nasceu do desejo de elevar o padrão da estética automotiva no
            Brasil. Cada veículo que passa por nosso estúdio é tratado como uma obra-prima, com
            olhar atento aos mínimos detalhes e técnicas reconhecidas internacionalmente.
          </p>
          <p className="reveal reveal-fade text-white-muted leading-relaxed mb-8 font-light" data-delay="200ms">
            Trabalhamos com produtos premium, equipamentos profissionais e uma equipe apaixonada
            por entregar resultados que superam expectativas.
          </p>
          <ul className="space-y-3">
            {points.map((p, i) => (
              <li
                key={p}
                className="reveal reveal-left flex items-center gap-3 text-white font-light"
                data-delay={`${i * 80}ms`}
              >
                <CheckCircle2 className="text-red shrink-0" size={20} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="reveal reveal-up relative"
          data-delay="150ms"
          style={{
            clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src={aboutImg}
            alt="Studio Don Estética Automotiva"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full h-[500px] object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(180deg, transparent 60%, rgba(204,0,0,0.15))" }}
          />
        </div>
      </div>
    </section>
  );
}
