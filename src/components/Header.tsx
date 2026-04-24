import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Atelier" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#depoimentos", label: "Testemunhos" },
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
              padding: "0.85rem 0",
              background: "rgba(5,5,5,0.85)",
              backdropFilter: "blur(20px) saturate(140%)",
              WebkitBackdropFilter: "blur(20px) saturate(140%)",
              borderBottom: "1px solid rgba(184,5,14,0.4)",
            }
          : { padding: "1.5rem 0", background: "transparent" }
      }
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Don Estética Automotiva"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-[var(--red)]/40 group-hover:ring-[var(--red)] transition-all"
          />
          <div className="hidden sm:block">
            <p className="font-display text-xl leading-none text-white tracking-wide">Don</p>
            <p className="text-[9px] tracking-[0.4em] uppercase text-white-muted font-light mt-1">
              Estética Automotiva
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link text-[11px] font-light text-white-muted hover:text-white transition-colors uppercase tracking-[0.3em]"
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
          Agendar
        </a>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#050505]/97 backdrop-blur-xl border-t border-line animate-fade-in">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-red transition-colors uppercase tracking-[0.3em] text-xs"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://donesteticaautomotiva.com.br/catalogo/"
              target="_blank"
              rel="noreferrer"
              className="btn-cta mt-4"
            >
              Agendar Serviço
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
