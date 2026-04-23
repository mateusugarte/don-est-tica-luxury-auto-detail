import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(80),
  email: z.string().trim().email("Email inválido").max(120),
  phone: z.string().trim().min(8, "Telefone inválido").max(30),
  message: z.string().trim().min(5, "Mensagem muito curta").max(800),
});

export function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="reveal reveal-fade text-xs uppercase tracking-[0.3em] text-red mb-4 font-medium">
            Contato
          </p>
          <h2 className="reveal reveal-skew section-title text-4xl sm:text-6xl text-white">
            Vamos transformar seu veículo
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <form onSubmit={onSubmit} className="reveal reveal-up space-y-5 bg-surface border border-line p-8">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white-muted font-medium">Nome</label>
              <input name="name" className="mt-2 w-full bg-[#0A0A0A] border border-line px-4 py-3 focus:border-red outline-none transition-colors text-white" />
              {errors.name && <p className="text-red text-xs mt-1">{errors.name}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white-muted font-medium">Email</label>
                <input name="email" type="email" className="mt-2 w-full bg-[#0A0A0A] border border-line px-4 py-3 focus:border-red outline-none transition-colors text-white" />
                {errors.email && <p className="text-red text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white-muted font-medium">Telefone</label>
                <input name="phone" className="mt-2 w-full bg-[#0A0A0A] border border-line px-4 py-3 focus:border-red outline-none transition-colors text-white" />
                {errors.phone && <p className="text-red text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white-muted font-medium">Mensagem</label>
              <textarea name="message" rows={5} className="mt-2 w-full bg-[#0A0A0A] border border-line px-4 py-3 focus:border-red outline-none transition-colors resize-none text-white" />
              {errors.message && <p className="text-red text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="btn-cta w-full">
              Enviar Mensagem <Send size={16} />
            </button>
            {status === "ok" && (
              <p className="text-red text-sm text-center">Mensagem enviada! Entraremos em contato em breve.</p>
            )}
          </form>

          <div className="reveal reveal-up space-y-6" data-delay="120ms">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+S%C3%A3o+Francisco%2C+236+-+Jardim+Santa+Ros%C3%A1lia%2C+Sorocaba+-+SP%2C+18095-450"
              target="_blank"
              rel="noreferrer"
              className="bg-surface border border-line p-6 flex items-start gap-4 hover:border-red transition-colors"
              style={{ borderLeft: "3px solid #CC0000" }}
            >
              <div className="h-11 w-11 bg-red/10 flex items-center justify-center text-red shrink-0"><MapPin size={20} /></div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white-muted font-medium">Endereço</p>
                <p className="text-white mt-1">Av. São Francisco, 236 — Jardim Santa Rosália</p>
                <p className="text-white-muted text-sm">Sorocaba - SP, 18095-450</p>
              </div>
            </a>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="https://wa.me/5511994022344"
                target="_blank"
                rel="noreferrer"
                className="bg-surface border border-line p-6 flex items-start gap-4 hover:border-red transition-colors"
                style={{ borderLeft: "3px solid #CC0000" }}
              >
                <div className="h-11 w-11 bg-red/10 flex items-center justify-center text-red shrink-0"><Phone size={20} /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white-muted font-medium">WhatsApp</p>
                  <p className="text-white mt-1">(11) 99402-2344</p>
                </div>
              </a>
              <a
                href="mailto:contato@donesteticaautomotiva.com.br"
                className="bg-surface border border-line p-6 flex items-start gap-4 hover:border-red transition-colors"
                style={{ borderLeft: "3px solid #CC0000" }}
              >
                <div className="h-11 w-11 bg-red/10 flex items-center justify-center text-red shrink-0"><Mail size={20} /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white-muted font-medium">Email</p>
                  <p className="text-white mt-1 text-sm break-all">contato@donesteticaautomotiva.com.br</p>
                </div>
              </a>
            </div>
            <div className="overflow-hidden border border-line h-64">
              <iframe
                title="Mapa Don Estética Automotiva"
                src="https://www.google.com/maps?q=Av.+S%C3%A3o+Francisco%2C+236+-+Jardim+Santa+Ros%C3%A1lia%2C+Sorocaba+-+SP%2C+18095-450&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
