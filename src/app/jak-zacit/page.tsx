import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CopyIp } from "@/components/CopyIp";
import { CtaBand } from "@/components/CtaBand";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Jak začít - připoj se na Civicraft",
  description:
    "Návod krok za krokem, jak se připojit na Civicraft CZ/SK. Stáhni Minecraft Java 26.1.2, přidej IP, zaregistruj se, přežij jako Imigrant a staň se Občanem.",
  alternates: { canonical: "/jak-zacit" },
};

const steps = [
  {
    n: 1,
    title: "Spusť Minecraft: Java Edition",
    text: `Potřebuješ Minecraft Java Edition ve verzi ${siteConfig.serverVersion}. Server běží v offline režimu, takže se připojíš i bez premium účtu.`,
  },
  {
    n: 2,
    title: "Přidej server",
    text: "V menu Multiplayer → Přidat server vlož naši IP adresu. Klidně si server ulož, ať ho máš pořád po ruce.",
    ip: true,
  },
  {
    n: 3,
    title: "Zaregistruj se",
    text: "Při prvním vstupu se zaregistruj příkazem /register <heslo> <heslo>. Příště se přihlásíš přes /login <heslo>. Svůj skin si nastavíš příkazem /skin <jméno>.",
  },
  {
    n: 4,
    title: "Vydej se do divočiny (jsi Imigrant)",
    text: "Začínáš jako Imigrant. Příkazem /rtp nebo /wild se teleportuješ do divočiny. Postav si základnu a rozjeď profese přes /jobs - v divočině se hraje naostro, griefing je tu povolen.",
  },
  {
    n: 5,
    title: "Vydělej první peníze",
    text: "Otevři /jobs, vyber si profesi (horník, farmář, stavitel…) a vydělávej za každou akci. Peníze zkontroluješ přes /balance, nakupovat můžeš v /shop.",
  },
  {
    n: 6,
    title: "Staň se Občanem (po ~10 h)",
    text: "Po odehrání zhruba 10 hodin se automaticky staneš Občanem. Teď můžeš zakládat a vstupovat do měst, hlasovat ve volbách a kandidovat na prezidenta.",
  },
  {
    n: 7,
    title: "Postav město nebo se přidej ke kamarádům",
    text: "Příkazem /town create <název> založíš vlastní město a staneš se starostou, nebo se přidej do existujícího přes /town join <město>. Otevři správu města přes /mesto. Politiku řídíš přes /president.",
  },
];

export default function JakZacitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Jak začít"
        title={<>Připoj se za <span className="text-gradient-gold">pár minut</span></>}
        subtitle="Od stažení hry po vlastní město. Stačí pár kroků a píšeš svůj příběh - od imigranta po prezidenta."
      />

      <Section className="pt-4">
        <div className="mx-auto max-w-3xl">
          {/* IP karta */}
          <div className="mb-12 flex flex-col items-center gap-4 rounded-2xl border border-gold-500/20 bg-navy-850/70 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-gold-400">IP serveru</div>
              <div className="mt-1 font-display text-2xl font-bold text-ink-100">{siteConfig.serverIp}</div>
              <div className="mt-1 text-xs text-ink-400">Verze {siteConfig.serverVersion}</div>
            </div>
            <CopyIp />
          </div>

          {/* Kroky */}
          <ol className="relative space-y-5 border-l border-white/10 pl-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 70} as="li">
                <div className="relative rounded-2xl border border-white/10 bg-navy-850/60 p-6">
                  <span className="absolute -left-[3.05rem] top-6 grid h-9 w-9 place-items-center rounded-full border border-gold-500/40 bg-navy-900 font-display text-sm font-bold text-gold-400">
                    {s.n}
                  </span>
                  <h2 className="font-display text-lg font-bold text-ink-100">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.text}</p>
                  {s.ip && (
                    <div className="mt-4">
                      <CopyIp />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Tip: kamarádi */}
          <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-6">
            <h3 className="font-display text-lg font-bold text-ink-100">🤝 Tip: přiveď kamarády</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-200">
              Civicraft se hraje nejlíp v partě. Společné město roste rychleji a čím víc vás je,
              tím větší šance, že někdo z vás vyhraje prezidentské volby. Pošli jim IP a hrajte spolu.
            </p>
          </div>

          {/* Tip: Iris shadery */}
          <div className="mt-5 rounded-2xl border border-civic-500/20 bg-civic-500/[0.06] p-6">
            <h3 className="font-display text-lg font-bold text-ink-100">🌍 Tip: zapni si Iris shadery</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-200">
              Náš svět běží na pokročilém generátoru Iris s 300+ biomy. S shader modem{" "}
              <a href={siteConfig.irisShaderUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold-400 hover:underline">
                Iris
              </a>{" "}
              bude vypadat ještě nádherněji - nasvícení, stíny a voda jako z pohlednice.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={siteConfig.discordUrl} external>Potřebuju pomoc - Discord</Button>
            <Button href="/jak-se-hraje" variant="secondary">Jak se hraje →</Button>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
