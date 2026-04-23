import aboutImg from "@/assets/about-studio.jpg";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Profissionais certificados em detailing premium",
  "Produtos importados e tecnologia de ponta",
  "Atendimento personalizado e ambiente exclusivo",
];

export function About() {
  return (
    <section id="sobre" className="py-28 relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-primary opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700" />
          <img
            src={aboutImg}
            alt="Studio Don Estética Automotiva"
            width={1280}
            height={960}
            loading="lazy"
            className="relative rounded-2xl shadow-elegant w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden sm:block bg-card border border-border rounded-2xl p-6 shadow-elegant">
            <p className="font-display text-4xl text-gradient">8+</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
              Anos de excelência
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Sobre Nós</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Onde a paixão por carros encontra a <span className="text-gradient italic">perfeição</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Don Estética Automotiva nasceu do desejo de elevar o padrão da estética automotiva no Brasil.
            Cada veículo que passa por nosso estúdio é tratado como uma obra-prima, com olhar atento
            aos mínimos detalhes e técnicas reconhecidas internacionalmente.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Trabalhamos com produtos premium, equipamentos profissionais e uma equipe apaixonada
            por entregar resultados que superam expectativas.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-foreground/90">
                <CheckCircle2 className="text-primary shrink-0" size={20} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
