import logo from "@/assets/logo.jpg";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Don" className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/40" />
          <div>
            <p className="font-display text-base">Don Estética Automotiva</p>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Todos os direitos reservados</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
