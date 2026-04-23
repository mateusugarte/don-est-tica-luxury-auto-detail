import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { CustomCursor } from "@/components/CustomCursor";
import { WaveDivider } from "@/components/WaveDivider";
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
  useScrollReveal();
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <WaveDivider />
        <About />
        <WaveDivider flip />
        <Services />
        <WaveDivider />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}
