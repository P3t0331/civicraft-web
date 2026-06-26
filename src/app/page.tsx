import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { ReconPhoto, Stamp, FileTag, Corners, Sealed } from "@/components/dossier";
import { siteConfig } from "@/config/site";
import { pillars, presidentialPowers, decrees, jobs, journey, faqs } from "@/config/content";

const recon = [
  { src: "/world/2026-06-26_12.49.12.png", caption: "Kvetoucí pahorky" },
  { src: "/world/2026-06-26_12.49.34.png", caption: "Hornaté vnitrozemí" },
  { src: "/world/2026-06-26_12.49.54.png", caption: "Divoký les" },
  { src: "/world/2026-06-26_12.50.17.png", caption: "Ametystová jeskyně" },
  { src: "/world/2026-06-26_12.51.35.png", caption: "Otevřená krajina" },
  { src: "/world/2026-06-26_12.50.32.png", caption: "Otevřené moře" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Registr — statistiky jako úřední souhrn */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="hairline" />
        <div className="grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { v: "7 dní", l: "volební cyklus" },
            { v: "300+", l: "unikátních biomů" },
            { v: "7", l: "profesí" },
            { v: "100 %", l: "moc v rukou hráčů" },
          ].map((s) => (
            <div key={s.l} className="px-4 py-7 text-center">
              <div className="font-display text-2xl font-black text-gold-400 sm:text-3xl">{s.v}</div>
              <div className="label-mono mt-2 text-ink-400">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="hairline" />
      </div>

      {/* § 01 — Manifest: moc patří hráčům */}
      <Section id="manifest">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              index="§ 01"
              eyebrow="Manifest"
              title={<>Unavuje tě <span className="text-gradient-gold">staff abuse?</span></>}
              subtitle="Servery, kde admini rozhodují o všem a hráč nemá slovo, znáš až moc dobře. Civicraft je postavený na opačném principu."
            />
            <blockquote className="mt-8 border-l-2 border-gold-500/60 pl-5">
              <p className="font-display text-xl italic leading-snug text-ink-100 sm:text-2xl">
                „Otěže drží volení prezidenti - ne staff. Staff jen moderuje a vymáhá pravidla.
                Do politiky nikdy nezasahuje."
              </p>
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/jak-se-hraje" variant="secondary">Jak funguje vláda</Button>
              <Button href={siteConfig.discordUrl} external variant="ghost">Připoj se →</Button>
            </div>
          </div>

          {/* ledger výčet */}
          <div className="dossier dossier-edge relative">
            <Corners />
            <ul className="bg-ledger divide-y divide-white/5">
              {[
                ["🗳️", "Server řídí volení prezidenti, ne admini."],
                ["🚫", "Staff nikdy nezasahuje do politiky a nekandiduje."],
                ["🛡️", "Staff jen moderuje a vymáhá pravidla - nic víc."],
                ["💬", "Nové funkce přidáváme podle zpětné vazby hráčů."],
              ].map(([icon, text], i) => (
                <Reveal key={text} delay={i * 70} as="li">
                  <div className="flex items-center gap-4 px-6 py-5">
                    <span className="file-no text-xs text-ink-500">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-xl">{icon}</span>
                    <span className="text-sm font-medium text-ink-200">{text}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* § 02 — Pilíře */}
      <div className="relative border-y border-white/5 bg-navy-950/40">
        <Section id="proc-civicraft">
          <SectionHeading
            index="§ 02"
            eyebrow="Tři pilíře"
            title={<>Fungující stát, který si <span className="text-gradient-gold">řídí hráči</span></>}
            subtitle="Není to jen další survival. Je to národ s vlastní ekonomikou, politikou a územím."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} as="article">
                <div className="dossier noise group relative h-full p-7 transition-transform duration-300 hover:-translate-y-1">
                  <Corners className="text-blueprint-500/40" />
                  <div className="text-4xl">{p.icon}</div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink-100">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* § 03 — Cesta hráče */}
      <Section id="cesta">
        <SectionHeading
          index="§ 03"
          eyebrow="Služební postup"
          title={<>Od <span className="text-gradient-gold">přistěhovalce</span> k prezidentovi</>}
          subtitle="Každý začíná stejně - s holýma rukama v divočině. Kam to dotáhneš, záleží jen na tobě."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {journey.map((s, i) => (
            <Reveal key={s.rank} delay={i * 90} as="li">
              <div className="dossier relative h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="font-display text-4xl font-black text-white/[0.06]">{i + 1}</span>
                </div>
                <span className="label-mono mt-4 block text-gold-400">{s.tag}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-ink-100">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.text}</p>
                {i < journey.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-gold-500/40 md:block" aria-hidden>
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* § 04 — Prezidentský úřad */}
      <div className="relative border-y border-white/5 bg-navy-950/40">
        <Section>
          <SectionHeading
            index="§ 04"
            eyebrow="Prezidentský úřad"
            title={<>Vyhraj volby. <span className="text-gradient-gold">Získej moc.</span></>}
            subtitle="Vítěz voleb nedostane jen titul, ale skutečné páky nad ekonomikou národa."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {presidentialPowers.map((power, i) => (
              <Reveal key={power.title} delay={i * 70}>
                <div className="dossier h-full p-5 transition-colors hover:border-gold-500/40">
                  <div className="text-2xl">{power.icon}</div>
                  <h3 className="mt-3 font-display text-base font-bold text-ink-100">{power.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{power.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Dekrety + utajený teaser */}
          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="dossier relative p-7">
              <Corners className="text-gold-500/40" />
              <div className="flex items-center gap-3">
                <Stamp tone="gold">Dekrety</Stamp>
                <FileTag>aktivních: {decrees.length}</FileTag>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {decrees.map((d) => (
                  <span key={d.name} className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-navy-900/60 px-3 py-2 text-sm text-ink-200">
                    <span>{d.icon}</span> {d.name}
                  </span>
                ))}
              </div>
            </div>

            <Sealed
              label="Utajené dekrety"
              note="Odtajní se s další fází"
              className="min-h-[12rem]"
            >
              <div className="space-y-3 text-left">
                <div className="h-4 w-3/4 rounded bg-white/20" />
                <div className="h-4 w-2/3 rounded bg-white/20" />
                <div className="h-4 w-1/2 rounded bg-white/20" />
              </div>
            </Sealed>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-400">
            Tohle je teprve začátek - dekrety i pravomoci budeme rozšiřovat. V budoucnu si VIP hráči
            odemknou speciální prezidentské bonusy.{" "}
            <Link href="/jak-se-hraje" className="font-semibold text-gold-400 hover:underline">Více →</Link>
          </p>
        </Section>
      </div>

      {/* § 05 — Svět: recon galerie */}
      <Section id="svet">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            align="left"
            index="§ 05"
            eyebrow="Průzkum území · Generátor Iris"
            title={<>Svět, jaký jsi <span className="text-gradient-gold">ještě neviděl</span></>}
            subtitle="Pokročilý generátor Iris s více než 300 biomy - a postupně přidáváme i vlastní. Každá výprava do divočiny je objevování."
          />
          <div className="hidden lg:block">
            <Button href={siteConfig.irisShaderUrl} external variant="secondary">Stáhnout Iris shadery</Button>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recon.map((r, i) => (
            <Reveal key={r.src} delay={(i % 3) * 80}>
              <ReconPhoto src={r.src} caption={r.caption} sizes="(max-width:768px) 100vw, 33vw" />
            </Reveal>
          ))}
        </div>

        <p className="mt-7 text-center text-sm text-ink-400">
          Pro pohádkové nasvícení, stíny a vodu doporučujeme shader mod{" "}
          <strong className="text-ink-100">Iris</strong>.{" "}
          <a href={siteConfig.irisShaderUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold-400 hover:underline lg:hidden">
            Stáhnout →
          </a>
        </p>
      </Section>

      {/* § 06 — Profese */}
      <div className="relative border-y border-white/5 bg-navy-950/40">
        <Section>
          <SectionHeading
            index="§ 06"
            eyebrow="Ekonomika & profese"
            title={<>Vyber si <span className="text-gradient-gold">povolání</span></>}
            subtitle="Každá akce ti vydělává peníze i zkušenosti. Postupuj v levelech, odemykej perky a buduj kapitál pro své město."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, i) => (
              <Reveal key={job.name} delay={i * 60} as="article">
                <div className="dossier flex h-full items-start gap-4 p-5 transition-all hover:-translate-y-1 hover:border-gold-500/40">
                  <span className="text-3xl">{job.icon}</span>
                  <div>
                    <h3 className={`font-display font-bold ${job.color}`}>{job.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-400">{job.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="flex items-center justify-center border border-dashed border-white/15 p-5 text-center text-sm text-ink-400">
              Spravuj přes <span className="mx-1 font-mono text-gold-400">/jobs</span>
            </div>
          </div>
        </Section>
      </div>

      {/* § 07 — Vezmi partu */}
      <Section id="kamaradi">
        <div className="dossier noise relative overflow-hidden px-6 py-14 sm:px-12">
          <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
          <Corners className="text-emerald-500/40" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <Stamp tone="cyan">Hraj s partou</Stamp>
              <h2 className="mt-5 font-display text-3xl font-black tracking-tight text-ink-100 sm:text-4xl">
                Vezmi <span className="text-gradient-gold">partu</span> a ovládněte národ
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-300">
                Civicraft se hraje nejlíp s kamarády. Společně založíte město, rozdělíte si profese
                a budujete dvakrát rychleji. A hlavně - čím větší a aktivnější vaše parta je, tím
                větší šance, že někdo z vás vyhraje prezidentské volby a bude vládnout celému národu.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Postavte si vlastní město a braňte ho společně",
                "Rozdělte si role: horník, farmář, stavitel…",
                "Víc hlasů = větší politická síla",
                "Společná pokladna města vás posune dál",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 border border-white/10 bg-navy-900/60 p-4 text-sm text-ink-200">
                  <span className="mt-0.5 text-emerald-400">✦</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* § 08 — Jednoduchost + Roadmapa */}
      <div className="relative border-y border-white/5 bg-navy-950/40">
        <Section>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="dossier h-full p-8">
                <div className="text-3xl">🧭</div>
                <h2 className="mt-4 font-display text-2xl font-bold text-ink-100">Jednoduchost na prvním místě</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  Žádné zahlcení. Při příchodu tě nezasype milion hologramů, příkazů, pravidel ani reklam
                  na VIP. Spawn je čistý a přehledný - hned víš, co dělat. Server stavíme tak, aby tě bavil
                  od první minuty. <strong className="text-ink-100">Hráč na prvním místě.</strong>
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="dossier relative h-full overflow-hidden p-8">
                <Corners className="text-gold-500/40" />
                <div className="flex items-center gap-3">
                  <Stamp tone="gold">Plán</Stamp>
                  <FileTag>Připravujeme</FileTag>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold text-ink-100">Tohle je teprve začátek</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  Jsme v první fázi - zatím běží jen to podstatné a server rozšiřujeme podle zpětné vazby.
                  V dalších fázích chceme zrušit jeden národ a nechat vás zakládat{" "}
                  <span className="redact px-1">vlastní národy</span>, válčit o{" "}
                  <span className="redact px-1">území</span> a budovat různé formy vlády -
                  demokracii, autokracii i další. Pomoz nám to rozjet. Stačí hrát.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>

      {/* FAQ */}
      <Section id="faq">
        <SectionHeading eyebrow="FAQ" title="Časté dotazy" />
        <div className="mt-12">
          <FaqAccordion items={faqs.slice(0, 6)} />
          <p className="mt-6 text-center text-sm text-ink-400">
            Nenašel jsi odpověď?{" "}
            <Link href="/jak-zacit" className="font-semibold text-gold-400 hover:underline">
              Mrkni na návod Jak začít
            </Link>
            .
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
