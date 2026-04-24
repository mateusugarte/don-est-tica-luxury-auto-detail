import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

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
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
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

    const text = [
      `Olá, sou ${data.name}.`,
      `Email: ${data.email}`,
      `Telefone: ${data.phone}`,
      ``,
      data.message,
    ].join("\n");
    const url = `https://api.whatsapp.com/send/?phone=5511994022344&text=${encodeURIComponent(
      text,
    )}&type=phone_number&app_absent=0`;
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  };

  return (
    <section id="contato" className="py-28 md:py-44 bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="reveal reveal-fade eyebrow mb-8">Contato — Agendamento</p>
            <h2 className="reveal reveal-skew h-display text-5xl sm:text-6xl lg:text-7xl text-white max-w-2xl">
              Vamos transformar <em>seu</em> veículo.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="reveal reveal-fade text-white-muted font-light text-sm leading-relaxed max-w-md ml-auto" data-delay="120ms">
              Atendimento personalizado mediante agendamento. Entre em contato pelos canais abaixo ou utilize o formulário.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact info column */}
          <div className="lg:col-span-5 reveal reveal-up space-y-10">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+S%C3%A3o+Francisco%2C+236+-+Jardim+Santa+Ros%C3%A1lia%2C+Sorocaba+-+SP%2C+18095-450"
              target="_blank"
              rel="noreferrer"
              className="block group border-t border-line pt-8 hover:border-red transition-colors"
            >
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-red mt-1 shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white-muted mb-3">— Endereço</p>
                  <p className="font-display text-2xl text-white group-hover:text-red-glow transition-colors leading-tight">Av. São Francisco, 236</p>
                  <p className="text-white-muted text-sm mt-2 font-light">Jardim Santa Rosália · Sorocaba — SP, 18095-450</p>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/5511994022344"
              target="_blank"
              rel="noreferrer"
              className="block group border-t border-line pt-8 hover:border-red transition-colors"
            >
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-red mt-1 shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white-muted mb-3">— WhatsApp</p>
                  <p className="font-display text-2xl text-white group-hover:text-red-glow transition-colors">(11) 99402-2344</p>
                </div>
              </div>
            </a>

            <a
              href="mailto:contato@donesteticaautomotiva.com.br"
              className="block group border-t border-line pt-8 hover:border-red transition-colors"
            >
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-red mt-1 shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white-muted mb-3">— Email</p>
                  <p className="font-display text-xl text-white group-hover:text-red-glow transition-colors break-all">contato@donesteticaautomotiva.com.br</p>
                </div>
              </div>
            </a>

            <div className="overflow-hidden border border-line h-64">
              <iframe
                title="Mapa Don Estética Automotiva"
                src="https://www.google.com/maps?q=Av.+S%C3%A3o+Francisco%2C+236+-+Jardim+Santa+Ros%C3%A1lia%2C+Sorocaba+-+SP%2C+18095-450&output=embed"
                className="w-full h-full"
                style={{ filter: "grayscale(60%) invert(92%) contrast(95%)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form column */}
          <form onSubmit={onSubmit} className="lg:col-span-7 reveal reveal-up space-y-8" data-delay="100ms">
            <div className="border-b border-line pb-6">
              <label className="text-[10px] uppercase tracking-[0.4em] text-white-muted">— Nome</label>
              <input name="name" placeholder="Seu nome completo" className="mt-3 w-full bg-transparent border-0 px-0 py-2 focus:outline-none text-white placeholder:text-white-muted/40 font-display text-2xl" />
              {errors.name && <p className="text-red text-xs mt-2">{errors.name}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="border-b border-line pb-6">
                <label className="text-[10px] uppercase tracking-[0.4em] text-white-muted">— Email</label>
                <input name="email" type="email" placeholder="seu@email.com" className="mt-3 w-full bg-transparent border-0 px-0 py-2 focus:outline-none text-white placeholder:text-white-muted/40 text-base" />
                {errors.email && <p className="text-red text-xs mt-2">{errors.email}</p>}
              </div>
              <div className="border-b border-line pb-6">
                <label className="text-[10px] uppercase tracking-[0.4em] text-white-muted">— Telefone</label>
                <input name="phone" placeholder="(00) 00000-0000" className="mt-3 w-full bg-transparent border-0 px-0 py-2 focus:outline-none text-white placeholder:text-white-muted/40 text-base" />
                {errors.phone && <p className="text-red text-xs mt-2">{errors.phone}</p>}
              </div>
            </div>

            <div className="border-b border-line pb-6">
              <label className="text-[10px] uppercase tracking-[0.4em] text-white-muted">— Mensagem</label>
              <textarea name="message" rows={4} placeholder="Conte-nos sobre seu veículo e o serviço desejado…" className="mt-3 w-full bg-transparent border-0 px-0 py-2 focus:outline-none text-white placeholder:text-white-muted/40 resize-none text-base font-light" />
              {errors.message && <p className="text-red text-xs mt-2">{errors.message}</p>}
            </div>

            <div className="flex items-center justify-between pt-4">
              {status === "ok" ? (
                <p className="text-white-muted text-xs font-serif-italic">Abrindo WhatsApp — finalize o envio por lá.</p>
              ) : <span />}
              <button type="submit" className="btn-cta">
                Enviar via WhatsApp <ArrowRight size={14} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
