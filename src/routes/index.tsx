import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Don Estética Automotiva — Atelier Automotivo em Sorocaba" },
      {
        name: "description",
        content:
          "Atelier dedicado ao detailing premium: vitrificação cerâmica, PPF, insulfilm, higienização e proteção de pintura. Sorocaba — SP.",
      },
      { property: "og:title", content: "Don Estética Automotiva — Atelier" },
      { property: "og:description", content: "Detailing premium e proteção de pintura para o seu veículo." },
    ],
  }),
  component: Index,
});

function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) * 100 : 0;
      setW(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${w}%` }} />;
}

function Index() {
  useScrollReveal();

  useEffect(() => {
    // Em alguns hosts (ex: Vercel) o hash da URL faz o navegador pular direto
    // para a seção ao recarregar. Forçamos o topo no primeiro carregamento.
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const hash = window.location.hash;
    window.scrollTo(0, 0);
    if (hash) {
      // Remove o hash da URL sem recarregar e rola suavemente após o layout.
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#060606] text-white relative">
      <ScrollProgress />
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
