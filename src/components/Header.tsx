import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
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
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-2xl border-b border-[var(--gold-soft)]"
          : "bg-transparent py-5"
      }`}
      style={scrolled ? { backgroundColor: "rgba(0,0,0,0.85)" } : undefined}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Don Estética Automotiva"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/40 group-hover:ring-primary transition-all"
          />
          <div className="hidden sm:block">
            <p className="font-display text-lg leading-none text-foreground">Don</p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              Estética Automotiva
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://donesteticaautomotiva.com.br/catalogo/"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
        >
          Agendar Serviço
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://donesteticaautomotiva.com.br/catalogo/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Agendar Serviço
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
