import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Stamp, Corners } from "@/components/dossier";
import { ranks } from "@/config/extra";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Podpora serveru - VIP a klíče",
  description:
    "Podpoř Civicraft a získej komfort a kosmetiku - nikdy ne herní převahu. VIP úrovně Vážený Občan, Mecenáš a Honorár. Detaily a ceny se odtajní při spuštění.",
  alternates: { canonical: "/obchod" },
};

const accent: Record<string, { badge: string; glow: string }> = {
  emerald: { badge: "bg-emerald-500/15 text-emerald-400", glow: "bg-emerald-500/10" },
  gold: { badge: "bg-gold-500/15 text-gold-400", glow: "bg-gold-500/15" },
  civic: { badge: "bg-wax-500/15 text-wax-400", glow: "bg-wax-500/10" },
};

const values = [
  "Komfort a kvalita života",
  "Exkluzivní kosmetika a prefixy",
  "Bonus k výdělku z profesí",
  "Klíče do truhel jako kit",
];

export default function ObchodPage() {
  return (
    <>
      <PageHeader
        eyebrow="Podpoř server"
        title={<>Podpoř server, <span className="text-gradient-gold">získej výhody</span></>}
        subtitle="Server poběží díky vám. Podpořit nás půjde dvěma způsoby - VIP nebo klíči do truhel. Vše je komfort a kosmetika, nikdy herní převaha."
        stamp={{ label: "Detaily brzy", tone: "gold" }}
      />

      <Section className="pt-4">
        {/* No pay-to-win */}
        <div className="mx-auto mb-12 flex max-w-3xl items-center justify-center gap-3 rounded-md border border-emerald-500/20 bg-emerald-500/[0.06] px-6 py-4 text-center text-sm text-emerald-200">
          <span className="text-lg">✅</span>
          <span><strong>Žádné pay-to-win.</strong> Volby ani moc si nekoupíš - ty se získávají jen hrou.</span>
        </div>

        {/* VIP teasery */}
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {ranks.map((rank, i) => {
            const a = accent[rank.color];
            return (
              <Reveal key={rank.name} delay={i * 90}>
                <div className={`dossier noise relative flex h-full flex-col p-7 ${rank.featured ? "lg:-translate-y-3 border-gold-500/40" : ""}`}>
                  <Corners className={rank.color === "gold" ? "text-gold-500/40" : "text-blueprint-500/40"} />
                  <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl ${a.glow}`} aria-hidden />
                  {rank.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Stamp tone="gold">Vlajková loď</Stamp>
                    </span>
                  )}
                  <div className="relative">
                    <span className={`inline-flex w-fit rounded-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider ${a.badge}`}>
                      {rank.name}
                    </span>
                  </div>
                  <p className="relative mt-4 text-sm leading-relaxed text-ink-300">{rank.tagline}</p>

                  {/* zapečetěné detaily */}
                  <div className="relative mt-6 flex-1 rounded-md border border-dashed border-white/15 bg-navy-900/50 p-5">
                    <div className="label-mono text-ink-500">Rozsah výhod</div>
                    <div className="mt-3 space-y-2.5" aria-hidden>
                      <div className="h-3 w-11/12 rounded bg-white/[0.07]" />
                      <div className="h-3 w-3/4 rounded bg-white/[0.07]" />
                      <div className="h-3 w-5/6 rounded bg-white/[0.07]" />
                      <div className="h-3 w-2/3 rounded bg-white/[0.07]" />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-base">🔒</span>
                      <span className="label-mono text-gold-400">Odtajní se při spuštění</span>
                    </div>
                  </div>

                  <div className="relative mt-6">
                    <Button href={siteConfig.discordUrl} external variant={rank.featured ? "primary" : "secondary"} className="w-full">
                      Chci vědět víc
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Hodnoty */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {values.map((v) => (
            <div key={v} className="dossier flex items-center gap-2 p-4 text-sm text-ink-200">
              <span className="text-emerald-400">✦</span> {v}
            </div>
          ))}
        </div>

        {/* Klíče */}
        <div className="dossier noise relative mx-auto mt-10 max-w-4xl overflow-hidden p-8">
          <Corners className="text-gold-500/40" />
          <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr_auto]">
            <div className="text-5xl">🔑</div>
            <div>
              <Stamp tone="cyan">Klíče do truhel</Stamp>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Nechceš celé VIP? Podpoříš nás i koupí klíčů a otevíráš truhly s kosmetikou, bonusy
                a dočasnými perky. Přesný obsah a ceny zveřejníme při spuštění.
              </p>
            </div>
            <Button href={siteConfig.discordUrl} external variant="secondary">Sledovat novinky</Button>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-ink-500">
          Ceny a kompletní rozsah výhod dolaďujeme a zveřejníme je při spuštění serveru. Sleduj Discord,
          ať ti nic neuteče.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
