import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { team } from "@/config/extra";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tým - lidé za Civicraftem",
  description:
    "Poznej tým, který stojí za serverem Civicraft CZ/SK - zakladatele, administrátory a moderátory, kteří se starají o férovou a přátelskou komunitu.",
  alternates: { canonical: "/tym" },
};

const accent: Record<string, string> = {
  gold: "from-gold-500/25 text-gold-400 border-gold-500/30",
  emerald: "from-emerald-500/25 text-emerald-400 border-emerald-500/30",
  civic: "from-civic-500/25 text-civic-400 border-civic-500/30",
  ink: "from-ink-400/20 text-ink-200 border-white/15",
};

export default function TymPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tým"
        title={<>Lidé za <span className="text-gradient-gold">Civicraftem</span></>}
        subtitle="Parta nadšenců, která se stará o chod serveru, férovost voleb a přátelskou komunitu."
      />

      <Section className="pt-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80} as="article">
              <div className={`group h-full rounded-3xl border bg-navy-850/60 p-6 text-center transition-transform hover:-translate-y-1 ${accent[m.color]}`}>
                <div className={`mx-auto grid h-20 w-20 place-items-center rounded-2xl border bg-gradient-to-b to-transparent ${accent[m.color]}`}>
                  <span className="font-display text-2xl font-extrabold">{m.name.charAt(0)}</span>
                </div>
                <h2 className="mt-5 font-display text-lg font-bold text-ink-100">{m.name}</h2>
                <div className={`text-sm font-semibold ${accent[m.color].split(" ")[1]}`}>{m.role}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-gold-500/20 bg-navy-850/70 p-8 text-center">
          <div className="text-3xl">🙌</div>
          <h2 className="mt-3 font-display text-2xl font-bold text-ink-100">Přidej se do týmu</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-300">
            Hledáme spolehlivé moderátory a helpery, kteří chtějí pomáhat budovat komunitu. Máš zájem?
            Ozvi se nám na Discordu.
          </p>
          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            Napiš nám na Discord
          </a>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
