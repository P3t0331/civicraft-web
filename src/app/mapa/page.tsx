import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Button } from "@/components/ui";
import { ReconPhoto, Stamp, Seal } from "@/components/dossier";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Živá mapa - kartografie národa",
  description:
    "Interaktivní 3D živá mapa serveru Civicraft (BlueMap). Mapa území se odtajní při spuštění serveru.",
  alternates: { canonical: "/mapa" },
};

const previews = [
  { src: "/world/2026-06-26_12.49.12.png", caption: "Kvetoucí pahorky" },
  { src: "/world/2026-06-26_12.50.17.png", caption: "Ametystová jeskyně" },
  { src: "/world/2026-06-26_12.51.35.png", caption: "Otevřená krajina" },
];

export default function MapaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Živá mapa"
        title={<>Mapa <span className="text-gradient-gold">světa</span></>}
        subtitle="Interaktivní 3D živá mapa (BlueMap) s městy, hranicemi a stavbami v reálném čase."
        stamp={{ label: "Brzy", tone: "wax" }}
      />

      <Section className="pt-4">
        {/* Zapečetěná mapa */}
        <div className="dossier noise relative overflow-hidden rounded-md">
          <div className="bg-contour absolute inset-0 opacity-60" aria-hidden />
          <div className="relative grid gap-3 p-4 sm:grid-cols-3">
            {previews.map((p) => (
              <ReconPhoto key={p.src} src={p.src} caption={p.caption} sizes="(max-width:768px) 100vw, 33vw" />
            ))}
          </div>
          {/* překryv */}
          <div className="absolute inset-0 grid place-items-center bg-navy-950/70 text-center backdrop-blur-[2px]">
            <div className="flex flex-col items-center px-6">
              <Seal label="✦" sub="Civicraft" tone="wax" size="lg" className="animate-[seal-pulse_3s_ease-in-out_infinite]" />
              <div className="mt-5">
                <Stamp tone="wax">Mapa zapečetěna</Stamp>
              </div>
              <h2 className="mt-5 font-display text-2xl font-black text-ink-100 sm:text-3xl">
                Odtajní se při spuštění
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-300">
                Jakmile národ otevře brány, tady ožije celá mapa území - každé město, každá hranice,
                každá stavba v reálném čase. Zatím nahlížíme jen do průzkumných fotografií.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={siteConfig.discordUrl} external>Dej mi vědět o spuštění</Button>
          <Button href="/jak-zacit" variant="secondary">Jak začít →</Button>
        </div>
      </Section>
    </>
  );
}
