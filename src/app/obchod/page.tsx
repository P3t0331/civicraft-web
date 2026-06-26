import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ranks } from "@/config/extra";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Obchod — VIP a klíče, podpoř server",
  description:
    "Podpoř Civicraft koupí VIP (Vážený Občan, Mecenáš, Honorár) nebo klíčů do truhel. Komfort, kosmetika a bonusy k profesím — žádné pay-to-win.",
  alternates: { canonical: "/obchod" },
};

const accent: Record<string, { ring: string; badge: string; price: string; btn: string }> = {
  emerald: { ring: "border-emerald-500/30", badge: "bg-emerald-500/15 text-emerald-400", price: "text-emerald-400", btn: "secondary" },
  gold: { ring: "border-gold-500/50 ring-1 ring-gold-500/30", badge: "bg-gold-500/15 text-gold-400", price: "text-gold-400", btn: "primary" },
  civic: { ring: "border-civic-500/30", badge: "bg-civic-500/15 text-civic-400", price: "text-civic-400", btn: "secondary" },
};

export default function ObchodPage() {
  return (
    <>
      <PageHeader
        eyebrow="Obchod"
        title={<>Podpoř server, <span className="text-gradient-gold">získej výhody</span></>}
        subtitle="Server udržujeme v chodu díky vám. Podpořit nás můžeš dvěma způsoby — koupí VIP nebo klíčů do truhel. Vše je komfort a kosmetika, nikdy herní převaha."
      />

      <Section className="pt-4">
        {/* No pay-to-win pruh */}
        <div className="mx-auto mb-12 max-w-3xl rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] px-6 py-4 text-center text-sm text-emerald-200">
          ✅ <strong>Žádné pay-to-win.</strong> VIP přidává komfort, slevy a malý bonus k výdělku z profesí. Vyhrát volby si nekoupíš.
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {ranks.map((rank, i) => {
            const a = accent[rank.color];
            return (
              <Reveal key={rank.name} delay={i * 90}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl border bg-navy-850/70 p-7 transition-transform hover:-translate-y-1 ${a.ring} ${
                    rank.featured ? "lg:-translate-y-3" : ""
                  }`}
                >
                  {rank.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">
                      Nejoblíbenější
                    </span>
                  )}
                  <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${a.badge}`}>
                    {rank.name}
                  </span>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={`font-display text-4xl font-extrabold ${a.price}`}>{rank.price}</span>
                    <span className="text-sm text-ink-400">/ jednorázově</span>
                  </div>
                  <p className="mt-2 text-sm text-ink-400">{rank.tagline}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {rank.perks.map((perk) => (
                      <li key={perk} className="flex gap-3 text-sm text-ink-200">
                        <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <Button href={siteConfig.storeUrl} external variant={a.btn as "primary" | "secondary"} className="w-full">
                      Koupit {rank.name}
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Klíče do truhel */}
        <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-gold-500/20 bg-gradient-to-br from-navy-800 to-navy-900 p-8">
          <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr_auto]">
            <div className="text-5xl">🔑</div>
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-100">Klíče do truhel</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                Nechceš celé VIP? Podpoř server koupí klíčů a otevírej truhly s kosmetikou, bonusy,
                penězi a dočasnými perky. VIP navíc dostávají klíče pravidelně zdarma jako kit.
              </p>
            </div>
            <Button href={siteConfig.storeUrl} external variant="secondary">Koupit klíče</Button>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-ink-500">
          Platby zpracovává externí pokladna. Výhody se připíší automaticky do několika minut po
          připojení na server. V případě potíží nás kontaktuj na Discordu.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
