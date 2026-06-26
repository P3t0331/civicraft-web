import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Corners } from "@/components/dossier";
import { team } from "@/config/extra";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tým - lidé za Civicraftem",
  description:
    "Poznej tým, který stojí za serverem Civicraft CZ/SK - zakladatele, administrátory a moderátory, kteří se starají o férovou a přátelskou komunitu.",
  alternates: { canonical: "/tym" },
};

const accent: Record<string, { text: string; ring: string; seal: string }> = {
  gold: { text: "text-gold-400", ring: "border-gold-500/30", seal: "foil-seal text-navy-950" },
  emerald: { text: "text-emerald-400", ring: "border-emerald-500/30", seal: "bg-emerald-500/15 text-emerald-400" },
  civic: { text: "text-wax-400", ring: "border-wax-500/30", seal: "wax-seal text-cream-50" },
  ink: { text: "text-ink-200", ring: "border-white/15", seal: "bg-white/10 text-ink-100" },
};

export default function TymPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tým"
        title={<>Lidé za <span className="text-gradient-gold">Civicraftem</span></>}
        subtitle="Parta nadšenců, která se stará o chod serveru, férovost voleb a přátelskou komunitu. Do politiky nikdy nezasahuje."
      />

      <Section className="pt-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => {
            const a = accent[m.color];
            return (
              <Reveal key={m.name} delay={i * 80} as="article">
                <div className={`dossier noise group relative h-full p-6 text-center transition-transform hover:-translate-y-1 ${a.ring}`}>
                  <Corners className="text-blueprint-500/40" />
                  <div className={`mx-auto mt-2 grid h-20 w-20 place-items-center rounded-full ${a.seal}`}>
                    <span className="font-display text-2xl font-black">{m.name.charAt(0)}</span>
                  </div>
                  <h2 className="mt-5 font-display text-lg font-bold text-ink-100">{m.name}</h2>
                  <div className={`label-mono mt-1 ${a.text}`}>{m.role}</div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-400">{m.bio}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="dossier relative mx-auto mt-14 max-w-2xl p-8 text-center">
          <Corners className="text-gold-500/40" />
          <div className="text-3xl">🙌</div>
          <h2 className="mt-3 font-display text-2xl font-bold text-ink-100">Přidej se do týmu</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-300">
            Hledáme spolehlivé moderátory a asistenty, kteří chtějí pomáhat budovat komunitu. Máš zájem?
            Ozvi se nám na Discordu.
          </p>
          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-md bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 ring-1 ring-gold-300/40 transition-colors hover:bg-gold-400"
          >
            Napiš nám na Discord
          </a>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
