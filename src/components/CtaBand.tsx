import { Button } from "./ui";
import { CopyIp } from "./CopyIp";
import { siteConfig } from "@/config/site";

export function CtaBand() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-br from-navy-800 to-navy-900 px-6 py-14 text-center sm:px-12">
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
        <div
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-100 sm:text-4xl">
            Připraven vstoupit do <span className="text-gradient-gold">politiky</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-300 sm:text-lg">
            Spusť Minecraft, připoj se a napiš svůj příběh - od obyvatele přes občana až po prezidenta.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={siteConfig.discordUrl} external className="px-7 py-3.5 text-base">
              Připojit se na Discord
            </Button>
            <CopyIp />
          </div>
        </div>
      </div>
    </section>
  );
}
