import { Button } from "./ui";
import { CopyIp } from "./CopyIp";
import { Stamp, Corners } from "./dossier";
import { siteConfig } from "@/config/site";

export function CtaBand() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
      <div className="dossier noise relative overflow-hidden px-6 py-14 text-center sm:px-12">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" aria-hidden />
        <Corners className="text-gold-500/40" />
        <div className="relative">
          <Stamp tone="gold">Před spuštěním</Stamp>
          <h2 className="mt-6 font-display text-3xl font-black tracking-tight text-ink-100 sm:text-4xl md:text-5xl">
            Buď u toho od <span className="text-gradient-gold">první minuty</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
            Civicraft se právě zakládá. Připoj se a piš svůj příběh - od přistěhovalce přes
            občana až po prezidenta.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={siteConfig.discordUrl} external className="px-7 py-3.5 text-base">
              Vstoupit přes Discord
            </Button>
            <CopyIp />
          </div>
        </div>
      </div>
    </section>
  );
}
