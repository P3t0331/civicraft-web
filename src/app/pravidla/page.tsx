import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Corners } from "@/components/dossier";
import { rules } from "@/config/extra";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pravidla serveru",
  description:
    "Pravidla serveru Civicraft CZ/SK. Málo pravidel, jasná pravidla: férová hra, slušná komunita, griefing jen v divočině a čistá politika bez zásahů staffu.",
  alternates: { canonical: "/pravidla" },
};

export default function PravidlaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pravidla"
        title={<>Málo pravidel, <span className="text-gradient-gold">jasná pravidla</span></>}
        subtitle="Držíme to jednoduché. Pár zásad, aby si Civicraft užili všichni. Připojením souhlasíš s jejich dodržováním."
      />

      <Section className="pt-4">
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {rules.map((rule, i) => (
            <Reveal key={rule.title} delay={i * 60} as="article">
              <div className="dossier noise relative flex h-full gap-4 p-6">
                <Corners className="text-blueprint-500/30" />
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-gold-500/10 text-2xl">
                  {rule.icon}
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-ink-100">
                    <span className="file-no mr-2 text-sm text-gold-400">{i + 1}.</span>
                    {rule.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{rule.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="dossier relative mx-auto mt-10 max-w-4xl border-wax-500/25 p-7 text-center">
          <Corners className="text-wax-500/40" />
          <h2 className="font-display text-lg font-bold text-ink-100">⚠️ Porušení pravidel</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-300">
            Podle závažnosti následuje varování, mute, dočasný nebo trvalý ban. Staff řeší jen
            moderaci a vymáhání pravidel - do politiky serveru nikdy nezasahuje. Aktivní bany si můžeš
            ověřit na stránce{" "}
            <Link href="/bany" className="font-semibold text-gold-400 hover:underline">Rejstřík trestů</Link>.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-ink-500">
            Návrhy a problémy řeš na{" "}
            <a href={siteConfig.discordUrl} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">
              Discordu
            </a>{" "}
            - pravidla i obsah serveru upravujeme podle zpětné vazby hráčů.
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
