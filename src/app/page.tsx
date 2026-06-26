import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { siteConfig } from "@/config/site";
import { pillars, presidentialPowers, decrees, jobs, journey, faqs } from "@/config/content";

const accentRing: Record<string, string> = {
  gold: "border-gold-500/30 hover:border-gold-500/60",
  emerald: "border-emerald-500/30 hover:border-emerald-500/60",
  civic: "border-civic-500/30 hover:border-civic-500/60",
};
const accentGlow: Record<string, string> = {
  gold: "bg-gold-500/15",
  emerald: "bg-emerald-500/15",
  civic: "bg-civic-500/15",
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Statistiky */}
      <div className="mx-auto -mt-6 max-w-5xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-navy-850/60 p-2 sm:grid-cols-4">
          {[
            { v: "7 dní", l: "volební cyklus" },
            { v: "300+", l: "unikátních biomů" },
            { v: "7", l: "profesí" },
            { v: "100 %", l: "moc v rukou hráčů" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl px-4 py-5 text-center">
              <div className="font-display text-2xl font-extrabold text-gold-400 sm:text-3xl">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-ink-400">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pilíře */}
      <Section id="proc-civicraft">
        <SectionHeading
          eyebrow="Proč Civicraft"
          title={<>Server, kde <span className="text-gradient-gold">tvůj hlas</span> něco znamená</>}
          subtitle="Není to jen další survival. Je to fungující stát, který si hráči řídí sami."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} as="article">
              <div
                className={`group relative h-full overflow-hidden rounded-2xl border bg-navy-850/60 p-7 transition-all duration-300 hover:-translate-y-1 ${accentRing[p.accent]}`}
              >
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-opacity group-hover:opacity-100 ${accentGlow[p.accent]} opacity-50`} aria-hidden />
                <div className="relative">
                  <div className="text-4xl">{p.icon}</div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink-100">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Skutečná moc / žádný staff abuse */}
      <div className="relative border-y border-white/5 bg-navy-950/40">
        <Section>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Moc patří hráčům"
                title={<>Unavuje tě <span className="text-gradient-gold">staff abuse?</span></>}
                subtitle="Servery, kde admini rozhodují o všem a hráči nemají slovo? Tady ne. Na Civicraftu drží otěže volení prezidenti — ne staff."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/jak-se-hraje" variant="secondary">Jak funguje vláda</Button>
                <Button href={siteConfig.discordUrl} external variant="ghost">Připoj se →</Button>
              </div>
            </div>
            <div className="grid gap-3">
              {[
                ["🗳️", "Server řídí volení prezidenti, ne admini."],
                ["🚫", "Staff nikdy nezasahuje do politiky a nekandiduje."],
                ["🛡️", "Staff jen moderuje a vymáhá pravidla — nic víc."],
                ["💬", "Nové funkce přidáváme podle zpětné vazby hráčů."],
              ].map(([icon, text], i) => (
                <Reveal key={text} delay={i * 70}>
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-navy-850/70 p-5">
                    <span className="text-2xl">{icon}</span>
                    <span className="text-sm font-medium text-ink-200">{text}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Cesta hráče */}
      <Section id="cesta">
        <SectionHeading
          eyebrow="Tvoje cesta"
          title={<>Od <span className="text-gradient-gold">imigranta</span> k prezidentovi</>}
          subtitle="Každý začíná stejně — s holýma rukama v divočině. Kam to dotáhneš, záleží jen na tobě."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {journey.map((s, i) => (
            <Reveal key={s.rank} delay={i * 90} as="li">
              <div className="relative h-full rounded-2xl border border-white/10 bg-navy-850/60 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="font-display text-4xl font-extrabold text-white/5">{i + 1}</span>
                </div>
                <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-gold-400">{s.tag}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-ink-100">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Prezidentské pravomoci + dekrety */}
      <div className="relative border-y border-white/5 bg-navy-950/40">
        <Section>
          <SectionHeading
            eyebrow="Prezidentský úřad"
            title={<>Vyhraj volby. <span className="text-gradient-gold">Získej moc.</span></>}
            subtitle="Vítěz voleb nedostane jen titul, ale skutečné páky nad ekonomikou národa."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {presidentialPowers.map((power, i) => (
              <Reveal key={power.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy-850/70 p-5 transition-colors hover:border-gold-500/40">
                  <div className="text-2xl">{power.icon}</div>
                  <h3 className="mt-3 font-display text-base font-bold text-ink-100">{power.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{power.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Dekrety pruh */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {decrees.map((d, i) => (
              <Reveal key={d.name} delay={i * 50}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-navy-850/70 px-4 py-2 text-sm text-ink-200">
                  <span>{d.icon}</span> {d.name}
                </span>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-400">
            A tohle je teprve začátek — dekrety i pravomoci budeme rozšiřovat. V budoucnu si VIP hráči
            odemknou speciální prezidentské bonusy, které aktivují po zvolení.{" "}
            <Link href="/jak-se-hraje" className="font-semibold text-gold-400 hover:underline">Více →</Link>
          </p>
        </Section>
      </div>

      {/* Unikátní svět (Iris) */}
      <Section id="svet">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-civic-500/20 bg-gradient-to-br from-navy-800 to-navy-900 p-8">
              <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
              <div className="relative grid grid-cols-2 gap-3">
                {["Amethyst Cavern", "Azure Wastes", "Glacial", "Mushroom Tunnels", "Crystalized", "Dark Depths"].map((b) => (
                  <span key={b} className="rounded-xl border border-white/10 bg-navy-850/70 px-3 py-3 text-center text-xs font-medium text-ink-200">
                    {b}
                  </span>
                ))}
              </div>
              <div className="relative mt-4 text-center text-xs text-ink-400">…a stovky dalších biomů</div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Generátor světa Iris"
              title={<>Svět, jaký jsi <span className="text-gradient-gold">ještě neviděl</span></>}
              subtitle="Civicraft běží na pokročilém generátoru světa Iris s více než 300 biomy — a postupně přidáváme i vlastní. Žádné nudné placky, každá výprava do divočiny je objevování."
            />
            <p className="mt-5 text-sm leading-relaxed text-ink-300">
              Pro ještě hezčí zážitek doporučujeme shader mod <strong className="text-ink-100">Iris</strong> —
              rozsvítí náš svět nasvícením, stíny a vodou jako z pohlednice.
            </p>
            <div className="mt-6">
              <Button href={siteConfig.irisShaderUrl} external variant="secondary">
                Stáhnout Iris shadery
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Profese */}
      <div className="relative border-y border-white/5 bg-navy-950/40">
        <Section>
          <SectionHeading
            eyebrow="Ekonomika & profese"
            title={<>Vyber si <span className="text-gradient-gold">povolání</span></>}
            subtitle="Každá akce ti vydělává peníze i zkušenosti. Postupuj v levelech, odemykej perky a buduj kapitál pro své město."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, i) => (
              <Reveal key={job.name} delay={i * 60} as="article">
                <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-navy-850/60 p-5 transition-all hover:-translate-y-1 hover:border-gold-500/40">
                  <span className="text-3xl">{job.icon}</span>
                  <div>
                    <h3 className={`font-display font-bold ${job.color}`}>{job.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-400">{job.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="flex items-center justify-center rounded-2xl border border-dashed border-white/15 p-5 text-center text-sm text-ink-400">
              Spravuj přes <span className="mx-1 font-mono text-gold-400">/jobs</span>
            </div>
          </div>
        </Section>
      </div>

      {/* Vezmi kamarády */}
      <Section id="kamaradi">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-navy-800 to-navy-900 px-6 py-14 sm:px-12">
          <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="text-4xl">🤝</div>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-100 sm:text-4xl">
                Vezmi <span className="text-gradient-gold">partu</span> a ovládněte server
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-300">
                Civicraft se hraje nejlíp s kamarády. Společně založíte město, rozdělíte si profese
                a budujete dvakrát rychleji. A hlavně — čím větší a aktivnější vaše parta je, tím
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
                <li key={t} className="flex items-start gap-3 rounded-xl border border-white/10 bg-navy-850/70 p-4 text-sm text-ink-200">
                  <span className="mt-0.5 text-emerald-400">✦</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Jednoduchost + Roadmapa */}
      <div className="relative border-y border-white/5 bg-navy-950/40">
        <Section>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-white/10 bg-navy-850/60 p-8">
                <div className="text-3xl">🧭</div>
                <h2 className="mt-4 font-display text-2xl font-bold text-ink-100">Jednoduchost na prvním místě</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  Žádné zahlcení. Při příchodu na server tě nezasype milion holohramů, příkazů, pravidel
                  ani reklam na VIP. Spawn je čistý a přehledný — hned víš, co dělat. Server stavíme tak,
                  aby byl srozumitelný a aby tě bavil od první minuty. <strong className="text-ink-100">Hráč na prvním místě.</strong>
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-3xl border border-gold-500/20 bg-navy-850/60 p-8">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🚀</div>
                  <span className="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-400">
                    Release fáze 1
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold text-ink-100">Tohle je teprve začátek</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  Jsme v první fázi — zatím běží jen to podstatné a server rozšiřujeme podle zpětné vazby
                  hráčů. Pokud nás bude hrát dost lidí, v dalších fázích zrušíme jeden národ a necháme vás
                  zakládat <strong className="text-ink-100">vlastní národy</strong>, válčit o území a budovat
                  různé formy vlády — demokracii, autokracii a další. Pomoz nám to rozjet. Stačí hrát.
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
