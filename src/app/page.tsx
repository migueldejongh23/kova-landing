"use client";
import React, { useEffect } from "react";
import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import AboutMe from "@/components/AboutMe";
import Metrics from "@/components/Metrics";
import EnergyBeam from "@/components/EnergyBeam";

export default function Home() {
  useEffect(() => {
    function onMove(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const card = target.closest && target.closest(".surface") as HTMLElement;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    }
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  const handleExploreDetailsClick = () => {
    window.scrollTo({
      top: document.getElementById('pricing')?.offsetTop || 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="relative min-h-screen text-[var(--bone)]">
      <div className="ambient-bg" aria-hidden></div>
      <div className="smoke" aria-hidden>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <div className="blob b4"></div>
      </div>
      <div className="beam-canvas" aria-hidden><EnergyBeam/></div>
      
      <div className="flex flex-col" style={{zIndex: 2}}>
        <Topbar/>
        <Hero onExploreDetailsClick={handleExploreDetailsClick}/>
        <TrustBadges/>
        <Services/>
        <Pricing id="pricing"/>
        <Testimonials/>
        <AboutMe/>
        <Metrics/>
      </div>

      <div className="fixed bottom-0 left-0 right-0 sm:bottom-6 sm:right-6 sm:left-auto z-50 p-4 sm:p-0 bg-black/20 backdrop-blur-md sm:bg-transparent sm:backdrop-blur-none border-t border-white/5 sm:border-none">
        <a href="#contact" aria-label="Book a free call" 
           style={{boxShadow:"0 8px 48px -8px oklch(0.72 0.22 285 / 0.65)"}} 
           className="violet-btn flex w-full sm:w-auto justify-center">
          Book a free call
          <svg className="arr" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M0 5 H12 M8 1 L12 5 L8 9" stroke="currentColor" strokeWidth="1.4"/></svg>
        </a>
      </div>
    </main>
  );
}
