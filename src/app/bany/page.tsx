import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Button } from "@/components/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Bany - historie trestů",
  description:
    "Veřejná historie banů, mute a varování na serveru Civicraft (LiteBans). Ověř si stav trestu online nebo přímo ve hře.",
  alternates: { canonical: "/bany" },
};

const inGame = [
  { cmd: "/checkban <hráč>", desc: "Zjisti, zda je hráč zabanovaný a proč." },
  { cmd: "/checkmute <hráč>", desc: "Zkontroluj, jestli má hráč mute." },
  { cmd: "/checkwarn <hráč>", desc: "Zobraz varování hráče." },
];

export default function BanyPage() {
  const hasWeb = Boolean(siteConfig.litebansUrl);

  return (
    <>
      <PageHeader
        eyebrow="Bany"
        title={<>Historie <span className="text-gradient-gold">trestů</span></>}
        subtitle="Transparentní moderace. Aktivní bany, mute a varování si můžeš kdykoliv ověřit - online i přímo ve hře."
      />

      <Section className="pt-4">
        {hasWeb ? (
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-navy-850/60 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-navy-800/60 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-civic-500" />
                <span className="h-3 w-3 rounded-full bg-gold-500" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
              </div>
              <span className="font-mono text-xs text-ink-400">{siteConfig.litebansUrl.replace(/^https?:\/\//, "")}</span>
              <span className="w-12" />
            </div>
            <div className="relative aspect-[16/11] w-full bg-navy-900">
              <iframe
                src={siteConfig.litebansUrl}
                title="Civicraft - historie banů (LiteBans)"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl rounded-3xl border border-gold-500/20 bg-navy-850/70 p-8 text-center">
            <div className="text-4xl">🛡️</div>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink-100">Ověř si trest přímo ve hře</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-300">
              Server používá <strong className="text-ink-100">LiteBans</strong>. Stav banu, mute nebo
              varování zjistíš jednoduchými příkazy ve hře. Veřejný webový přehled zprovozníme brzy.
            </p>
          </div>
        )}

        {/* In-game příkazy */}
        <div className="mx-auto mt-12 max-w-3xl">
          <h2 className="text-center font-display text-xl font-bold text-ink-100">Příkazy ve hře</h2>
          <div className="mt-6 space-y-3">
            {inGame.map((x) => (
              <div key={x.cmd} className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-navy-850/60 p-5 sm:flex-row sm:items-center sm:justify-between">
                <code className="font-mono text-sm font-semibold text-gold-400">{x.cmd}</code>
                <span className="text-sm text-ink-300">{x.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button href={siteConfig.discordUrl} external variant="secondary">
            Odvolání trestu řeš na Discordu
          </Button>
        </div>
      </Section>
    </>
  );
}
