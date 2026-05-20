"use client";
import React from "react";
import { useWide, useMid } from "@/hooks/useMediaQuery";

export default function Hero({ onExploreDetailsClick }: { onExploreDetailsClick?: () => void }) {
  const wide = useWide();
  const mid = useMid();
  const stats = [
    {label:"Messages resolved",  val:"87%",  desc:"without human intervention"},
    {label:"Response time",      val:"<30s", desc:"on WhatsApp & Instagram"},
    {label:"Booking rate",        val:"+47%", desc:"more online bookings vs. phone-only"},
  ];
  return (
    <section data-screen-label="01 Hero" className="relative">
      <div className="relative z-10 px-6 sm:px-8 lg:px-12 pt-24 pb-20 grid grid-cols-12 gap-8">
        <div className={`${mid ? 'col-span-8' : 'col-span-12'} flex flex-col`}>
          <div className="flex flex-wrap items-center gap-2.5 mb-9">
            <span className="pill pill-violet">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--violet)] pulse-dot"></span>
              Websites + AI for Health & Wellness
            </span>
            <span className="pill">Available now · USA & LATAM</span>
          </div>

          <h1 className="display-serif text-[clamp(48px,9vw,150px)] tracking-tight text-[var(--bone)]">
            Your business,<br/>
            <span className="serif-it" style={{color:"oklch(0.85 0.16 285)"}}>always on</span>.
          </h1>

          <div className="mt-12 grid grid-cols-12 gap-8 items-end">
            <p className={`${mid ? 'col-span-7' : 'col-span-12'} text-[16px] leading-[1.7] text-[var(--mute-2)] max-w-lg`}>
              We build websites that turn visitors into booked patients, and AI systems that
              answer calls, handle WhatsApp, and schedule appointments
              <span className="serif-it text-[var(--bone)]"> 24 hours a day — without adding staff</span>.
            </p>
          </div>
        </div>

        <aside className={mid ? 'col-span-4' : 'col-span-12'}>
          <article className="surface p-7">
            <div className="flex items-center justify-between mb-6">
              <span className="pill">Systems live</span>
              <span className="pill pill-violet">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--violet)] pulse-dot"></span>
                Live
              </span>
            </div>
            <div className="space-y-1">
              {stats.map(({label, val, desc}, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-white/8 last:border-b-0">
                  <div>
                    <div className="eyebrow text-[11px] tracking-[0.14em] uppercase text-[var(--mute)] font-mono">{label}</div>
                    <div className="text-[12px] text-[var(--mute-2)] mt-0.5">{desc}</div>
                  </div>
                  <div className="metric-num text-[28px]">{val}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-3">
              <a href="#pricing" className="violet-btn w-full justify-center text-[13px]">
                See plans & pricing
                <svg className="arr" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M0 5 H12 M8 1 L12 5 L8 9" stroke="currentColor" strokeWidth="1.4"/></svg>
              </a>
              <a href="#contact" className="ghost-btn w-full justify-center text-[13px]">
                <span>Watch AI Demo</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{marginLeft:4}}><path d="M8 5v14l11-7z"/></svg>
              </a>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
