import logo from "@/assets/logo.jpg";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-line">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Don" className="h-12 w-12 rounded-full object-cover ring-1 ring-[var(--red)]/40" />
              <div>
                <p className="font-display text-2xl text-white">Don</p>
                <p className="text-[10px] tracking-[0.4em] uppercase text-white-muted font-light mt-1">Estética Automotiva</p>
              </div>
            </div>
            <p className="font-serif-italic text-white-muted text-base max-w-sm leading-relaxed">
              Um atelier dedicado ao automóvel — onde técnica, paciência e produtos de alta linhagem revelam a essência de cada peça.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.4em] uppercase text-red mb-5">— Atelier</p>
            <p className="text-white-muted text-sm font-light leading-relaxed">
              Av. São Francisco, 236<br />
              Jardim Santa Rosália<br />
              Sorocaba — SP
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.4em] uppercase text-red mb-5">— Contato</p>
            <a href="https://wa.me/5511994022344" className="block text-white-muted hover:text-white text-sm font-light transition-colors mb-2">(11) 99402-2344</a>
            <a href="mailto:contato@donesteticaautomotiva.com.br" className="block text-white-muted hover:text-white text-xs font-light transition-colors break-all">contato@donesteticaautomotiva.com.br</a>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.4em] uppercase text-red mb-5">— Social</p>
            <div className="flex flex-col gap-3">
              {[
                { I: Instagram, l: "Instagram", href: "https://instagram.com/donesteticaautomotiva" },
                { I: Facebook, l: "Facebook", href: "https://facebook.com/donesteticaautomotiva" },
                { I: MessageCircle, l: "WhatsApp", href: "https://wa.me/5511994022344" },
              ].map(({ I, l, href }) => (
                <a
                  key={l}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white-muted hover:text-red transition-colors duration-300 text-sm font-light group"
                >
                  <I size={14} />
                  <span className="uppercase tracking-[0.2em] text-xs">{l}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-line pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white-muted font-light">
            © {new Date().getFullYear()} Don Estética Automotiva — Todos os direitos reservados
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white-muted font-light font-serif-italic">
            Crafted with patience.
          </p>
        </div>
      </div>
    </footer>
  );
}
