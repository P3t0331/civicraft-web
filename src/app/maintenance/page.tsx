"use client";

import { useState } from "react";
import { MaintenanceLoginModal } from "@/components/MaintenanceLoginModal";
import { Button } from "@/components/ui";
import { CopyIp } from "@/components/CopyIp";
import { ReconPhoto, Seal, Stamp, Corners } from "@/components/dossier";
import { siteConfig } from "@/config/site";

export default function MaintenancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-20">
      {/* Pozadí */}
      <div className="bg-grid-fine absolute inset-0 opacity-60" aria-hidden />
      <div className="bg-contour absolute inset-0 opacity-40" aria-hidden />
      <div className="absolute -top-48 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold-500/[0.08] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="animate-scan h-24 w-full bg-gradient-to-b from-transparent via-blueprint-400/[0.05] to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Stamp tone="wax">Před spuštěním</Stamp>
          </div>

          <h1 className="mt-7 font-display text-[2.5rem] font-black leading-[1.04] tracking-tight text-ink-100 sm:text-5xl md:text-6xl">
            Brány se brzy
            <br />
            <span className="text-gradient-gold">otevřou.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
            Civicraft se právě dolaďuje a spuštění se blíží. Přidej se na Discord, ať ti
            start <span className="text-gold-400">neunikne</span> - a buď u toho od první minuty.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button href={siteConfig.discordUrl} external className="px-7 py-3.5 text-base">
              Přidej se k zakladatelům
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
            <CopyIp />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="label-mono mt-7 inline-flex items-center gap-2 text-ink-500 transition-colors hover:text-gold-400"
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-current" aria-hidden />
            Přístup pro tým
          </button>
        </div>

        {/* Pečeť přes exhibit */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <ReconPhoto
            src="/world/spawn.png"
            caption="Hlavní město (spawn)"
            priority
            tape
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="rotate-[-1.5deg] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.85)]"
          />
          <div className="absolute inset-0 grid place-items-center">
            <Seal label="✦" sub="Utajeno" tone="wax" size="lg" className="animate-[seal-pulse_3s_ease-in-out_infinite] rotate-[-6deg]" />
          </div>
          <Corners className="text-gold-500/0" />
        </div>
      </div>

      {isModalOpen && <MaintenanceLoginModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}
