import logo from "@/assets/logo.jpg";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line py-12 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Don" className="h-10 w-10 rounded-full object-cover ring-2 ring-[var(--red)]/60" />
          <div>
            <p className="font-display text-base text-white">DON ESTÉTICA AUTOMOTIVA</p>
            <p className="text-xs text-white-muted font-light">© {new Date().getFullYear()} Todos os direitos reservados</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="h-10 w-10 border border-line flex items-center justify-center text-white hover:text-red hover:border-red transition-colors duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
