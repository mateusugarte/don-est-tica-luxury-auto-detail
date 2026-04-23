import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { CustomCursor } from "@/components/CustomCursor";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Don Estética Automotiva — Transformando Veículos em Arte" },
      {
        name: "description",
        content:
          "Estética automotiva premium: polimento, vitrificação, PPF, insulfilm, higienização e detailing completo. Agende agora.",
      },
      { property: "og:title", content: "Don Estética Automotiva" },
      { property: "og:description", content: "Detailing premium e proteção de pintura para o seu veículo." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}
