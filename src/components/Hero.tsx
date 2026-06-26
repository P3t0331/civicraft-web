import { Button } from "./ui";
import { CopyIp } from "./CopyIp";
import { LiveStatus } from "./LiveStatus";
import { ReconPhoto, Seal, Stamp, Corners } from "./dossier";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Pozadí — ink paper */}
      <div className="bg-grid-fine absolute inset-0 opacity-70" aria-hidden />
      <div className="bg-contour absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute -top-48 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-gold-500/[0.08] blur-3xl"
        aria-hidden
      />
      {/* skenovací linka */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="animate-scan h-24 w-full bg-gradient-to-b from-transparent via-blueprint-400/[0.05] to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Listina — text */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Stamp tone="wax">Před spuštěním</Stamp>
          </div>

          <h1 className="mt-7 font-display text-[2.7rem] font-black leading-[1.02] tracking-tight text-ink-100 sm:text-6xl md:text-[4.2rem]">
            Civicraft
            <br />
            <span className="text-gradient-gold">se právě zakládá.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
            Politický survival, kde <strong className="text-ink-100">moc patří hráčům</strong> -
            ne adminům. Reálné volby, prezidentské dekrety, Towny města a svět, jaký jsi v Minecraftu
            ještě neviděl. A tohle je teprve <span className="text-gold-400">první kapitola</span>.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button href={siteConfig.discordUrl} external variant="primary" className="px-7 py-3.5 text-base">
              Připoj se k zakladatelům
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
            <CopyIp />
          </div>

          <div className="mt-7 flex items-center gap-3">
            <LiveStatus />
            <span className="label-mono text-ink-500">Buď u toho od první kapitoly</span>
          </div>
        </div>

        {/* Nástěnka — recon fotky */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative">
            <ReconPhoto
              src="/world/spawn.png"
              caption="Hlavní město (spawn)"
              priority
              tape
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="rotate-[-1.5deg] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.85)]"
            />

            {/* překrývající menší fotka */}
            <div className="absolute -bottom-10 -right-4 hidden w-48 rotate-[4deg] sm:block lg:w-56">
              <ReconPhoto
                src="/world/2026-06-26_12.50.32.png"
                caption="Otevřené moře"
                sizes="220px"
                className="shadow-[0_24px_60px_-26px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* pečeť */}
            <div className="absolute -left-5 -top-6 hidden rotate-[-8deg] sm:block">
              <Seal label="✦" sub="Utajeno" tone="gold" size="md" className="animate-[seal-pulse_3s_ease-in-out_infinite]" />
            </div>

            {/* koordinátový štítek */}
            <div className="absolute -top-3 right-6 rotate-[2deg] rounded-sm border border-blueprint-500/30 bg-navy-950/90 px-2.5 py-1">
              <span className="file-no text-[0.6rem] text-blueprint-400">Iris · 300+ biomů</span>
            </div>

            <Corners className="text-gold-500/0" />
          </div>
        </div>
      </div>
    </section>
  );
}
