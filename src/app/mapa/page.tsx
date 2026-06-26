import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Button } from "@/components/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Živá mapa — prozkoumej svět Civicraftu",
  description:
    "Interaktivní 3D živá mapa serveru Civicraft (BlueMap). Prohlédni si města, hranice národa a stavby v reálném čase přímo v prohlížeči.",
  alternates: { canonical: "/mapa" },
};

export default function MapaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Živá mapa"
        title={<>Prozkoumej <span className="text-gradient-gold">svět</span></>}
        subtitle="Interaktivní 3D mapa národa Civicraft v reálném čase. Najdi města, hranice a nejlepší stavby."
      />

      <Section className="pt-4">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-navy-850/60 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
          <div className="flex items-center justify-between border-b border-white/10 bg-navy-800/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-civic-500" />
              <span className="h-3 w-3 rounded-full bg-gold-500" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
            </div>
            <span className="font-mono text-xs text-ink-400">{siteConfig.bluemapUrl.replace(/^https?:\/\//, "")}</span>
            <span className="w-12" />
          </div>
          <div className="relative aspect-[16/10] w-full bg-navy-900">
            <iframe
              src={siteConfig.bluemapUrl}
              title="Civicraft — živá mapa (BlueMap)"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-sm text-ink-400">
            Mapa se nenačítá? Otevři ji v samostatné záložce.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={siteConfig.bluemapUrl} external>Otevřít mapu v novém okně</Button>
            <Button href="/jak-zacit" variant="secondary">Připoj se na server</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
