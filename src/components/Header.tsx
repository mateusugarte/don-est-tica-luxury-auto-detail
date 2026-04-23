import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#depoimentos", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-40 transition-all duration-500"
      style={
        scrolled
          ? {
              padding: "0.75rem 0",
              background: "rgba(10,10,10,0.92)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid #CC0000",
            }
          : { padding: "1.25rem 0", background: "transparent" }
      }
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Don Estética Automotiva"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-[var(--red)]/60 group-hover:ring-[var(--red)] transition-all"
          />
          <div className="hidden sm:block">
            <p className="font-display text-lg leading-none text-white">DON</p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white-muted font-light">
              Estética Automotiva
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-light text-white-muted hover:text-red transition-colors uppercase tracking-[0.15em]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://donesteticaautomotiva.com.br/catalogo/"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex btn-cta"
        >
          Agendar Serviço
        </a>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-line animate-fade-in">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-red transition-colors uppercase tracking-[0.15em] text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://donesteticaautomotiva.com.br/catalogo/"
              target="_blank"
              rel="noreferrer"
              className="btn-cta mt-2"
            >
              Agendar Serviço
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
