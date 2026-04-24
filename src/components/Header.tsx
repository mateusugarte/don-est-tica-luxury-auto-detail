import { useEffect, useState } from "react";
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
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        <a href="#inicio" className="group flex items-center gap-3 sm:gap-4">
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-sm border border-line bg-surface transition-all duration-300 group-hover:border-red/60 group-hover:bg-surface-2">
            <img
              src="/images/logo.jpg"
              alt="Don Estética Automotiva"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base sm:text-lg leading-none text-ivory tracking-[0.08em] font-normal">
              Don
            </p>
            <p className="mt-1 text-[8px] sm:text-[9px] leading-[1.45] tracking-[0.38em] uppercase text-white-muted font-light">
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
