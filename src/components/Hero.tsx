import { Button } from "./ui";
import { CopyIp } from "./CopyIp";
import { LiveStatus } from "./LiveStatus";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Pozadí */}
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="bg-radial-gold absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden
      />
      {/* plovoucí prapory */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="animate-float-slow absolute left-[8%] top-[22%] text-5xl opacity-20">🏛️</div>
        <div className="animate-float absolute right-[10%] top-[30%] text-4xl opacity-20">🗳️</div>
        <div className="animate-float-slow absolute left-[16%] bottom-[14%] text-4xl opacity-15">👑</div>
        <div className="animate-float absolute right-[18%] bottom-[18%] text-5xl opacity-15">🏘️</div>
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            CZ/SK Minecraft server · Politický Survival
          </span>
        </div>

        <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-100 sm:text-6xl md:text-7xl">
          Postav město.
          <br />
          <span className="text-gradient-gold">Staň se prezidentem.</span>
          <br />
          Vládni.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 sm:text-xl">
          Civicraft je <strong className="text-ink-100">politický survival</strong>, kde tvůj hlas
          opravdu rozhoduje. Reálné volby, národní pokladna, dekrety a vlastní města - demokracie
          v Minecraftu, jak ji znáš jen tady.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={siteConfig.discordUrl} external variant="primary" className="px-7 py-3.5 text-base">
            Připoj se k nám
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Button>
          <CopyIp />
        </div>

        <div className="mt-8 flex items-center justify-center">
          <LiveStatus />
        </div>
      </div>
    </section>
  );
}
