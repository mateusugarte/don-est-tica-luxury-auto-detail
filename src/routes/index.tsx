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
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Don Estética Automotiva — Atelier Automotivo em Sorocaba" },
      {
        name: "description",
        content:
          "Atelier dedicado ao detailing premium: polimento, vitrificação cerâmica, PPF, insulfilm, higienização e proteção de pintura. Sorocaba — SP.",
      },
      { property: "og:title", content: "Don Estética Automotiva — Atelier" },
      { property: "og:description", content: "Detailing premium e proteção de pintura para o seu veículo." },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-[#050505] text-white relative">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}
