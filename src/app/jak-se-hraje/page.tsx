import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ReconPhoto, Corners } from "@/components/dossier";
import { siteConfig } from "@/config/site";
import { presidentialPowers, decrees, jobs, electionTimeline } from "@/config/content";

export const metadata: Metadata = {
  title: "Jak se hraje - volby, města, ekonomika",
  description:
    "Kompletní průvodce Civicraftem: cesta od Imigranta k Občanovi, Towny města, prezidentské volby, dekrety, národní pokladna, referenda, 7 profesí a unikátní svět.",
  alternates: { canonical: "/jak-se-hraje" },
};

export default function JakSeHrajePage() {
  return (
    <>
      <PageHeader
        eyebrow="Jak se hraje"
        title={<>Mechaniky <span className="text-gradient-gold">státu</span></>}
        subtitle="Towny survival propojený s reálnou politikou. Tady je vše, co Civicraft nabízí."
      />

      {/* Rychlá navigace */}
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {[
            ["#obcanstvi", "🪪 Občanství"],
            ["#mesta", "🏘️ Města"],
            ["#volby", "🗳️ Volby"],
            ["#pravomoci", "🏛️ Pravomoci"],
            ["#dekrety", "📜 Dekrety"],
            ["#kontrola", "⚖️ Kontrola moci"],
            ["#profese", "💼 Profese"],
            ["#svet", "🌍 Svět"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-sm border border-blueprint-500/25 bg-navy-900/60 px-4 py-2 text-sm font-medium text-ink-200 transition-colors hover:border-gold-500/40 hover:text-gold-400"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Občanství */}
      <Section id="obcanstvi">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              index="§ 01"
              eyebrow="Cesta hráče"
              title={<>Nejdřív <span className="text-gradient-gold">Imigrant</span>, pak Občan</>}
              subtitle="Občanství se nezískává členstvím ve městě - vyhraje se časem a aktivitou."
            />
            <ul className="mt-6 space-y-3 text-sm text-ink-300">
              {[
                "Začínáš jako Imigrant - přežíváš v divočině a vyděláváš přes /jobs",
                "Po zhruba 10 hodinách hry se automaticky staneš Občanem",
                "Teprve Občan může zakládat/vstupovat do měst a volit",
                "Občan může také kandidovat na prezidenta",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 text-emerald-400">✦</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <div className="space-y-3">
              {[
                { icon: "🧳", t: "Imigrant", d: "Start - divočina, profese, první peníze. Bez měst." },
                { icon: "🪪", t: "Občan", d: "Po ~10 h - města, hlasování, kandidatura." },
                { icon: "🏘️", t: "Starosta", d: "Kdo založí město přes /town create." },
                { icon: "👑", t: "Prezident", d: "Vítěz voleb s pokladnou a dekrety." },
              ].map((x, i) => (
                <div key={x.t} className="dossier flex items-center gap-4 p-5">
                  <span className="file-no text-xs text-ink-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-2xl">{x.icon}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink-100">{x.t}</h3>
                    <p className="text-sm text-ink-400">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Města */}
      <div className="border-y border-white/5 bg-navy-950/40">
        <Section id="mesta">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                index="§ 02"
                eyebrow="Towny"
                title={<>Založ <span className="text-gradient-gold">město</span>, postav národ</>}
                subtitle="Civicraft stojí na Towny. Zakládáš města, zabíráš pozemky a spravuješ obyvatele přes přehledné menu."
              />
              <ul className="mt-6 space-y-3 text-sm text-ink-300">
                {[
                  "/town create <název> - založ vlastní město a staň se starostou",
                  "/town join <město> - přidej se ke kamarádům do existujícího města",
                  "Ve městech je griefing vypnutý - stavby jsou chráněné",
                  "Město spravuješ přes /town a jeho menu",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1 text-emerald-400">✦</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Reveal>
              <div className="dossier noise relative p-8">
                <Corners className="text-emerald-500/40" />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { k: "🏘️", v: "Města", d: "Tvůj domov" },
                    { k: "🗺️", v: "Pozemky", d: "Claim území" },
                    { k: "🛡️", v: "Ochrana", d: "Žádný grief" },
                    { k: "🚩", v: "1 národ", d: "Civicraft" },
                  ].map((x) => (
                    <div key={x.v} className="border border-white/10 bg-navy-900/60 p-5 text-center">
                      <div className="text-3xl">{x.k}</div>
                      <div className="mt-2 font-display font-bold text-ink-100">{x.v}</div>
                      <div className="text-xs text-ink-400">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>

      {/* Volby */}
      <Section id="volby">
        <SectionHeading
          index="§ 03"
          eyebrow="Volební cyklus"
          title={<>Volby každých <span className="text-gradient-gold">7 dní</span></>}
          subtitle="Kandidatura, kampaň, hlasování a inaugurace - celý demokratický proces přímo ve hře přes /president."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {electionTimeline.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} as="li">
              <div className="dossier relative h-full p-6">
                <div className="font-display text-5xl font-black text-white/[0.06]">{i + 1}</div>
                <div className="-mt-7">
                  <span className="label-mono text-gold-400">{s.step}</span>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink-100">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ["2 000", "registrační poplatek kandidáta"],
            ["48 h", "délka hlasování"],
            ["min. 3", "hlasy pro platné volby"],
          ].map(([v, l]) => (
            <div key={l} className="dossier p-5 text-center">
              <div className="font-display text-2xl font-black text-gold-400">{v}</div>
              <div className="label-mono mt-1.5 text-ink-400">{l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pravomoci */}
      <div className="border-y border-white/5 bg-navy-950/40">
        <Section id="pravomoci">
          <SectionHeading
            index="§ 04"
            eyebrow="Prezidentské pravomoci"
            title={<>Co může <span className="text-gradient-gold">prezident</span></>}
            subtitle="Vítěz získává na celé období skutečnou moc nad ekonomikou národa."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {presidentialPowers.map((power, i) => (
              <Reveal key={power.title} delay={i * 70}>
                <div className="dossier h-full p-6 transition-colors hover:border-gold-500/40">
                  <div className="text-3xl">{power.icon}</div>
                  <h3 className="mt-4 font-display text-base font-bold text-ink-100">{power.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{power.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="dossier mx-auto mt-8 max-w-2xl border-gold-500/20 p-5 text-center text-sm text-ink-200">
            🚀 Tohle je startovní sada. Pravomoci i dekrety budeme rozšiřovat a v budoucnu si VIP hráči
            odemknou speciální prezidentské bonusy aktivovatelné po zvolení.
          </div>
        </Section>
      </div>

      {/* Dekrety */}
      <Section id="dekrety">
        <SectionHeading
          index="§ 05"
          eyebrow="Národní dekrety"
          title={<>Server <span className="text-gradient-gold">buffy</span> z pokladny</>}
          subtitle="Prezident vyhlašuje celonárodní eventy. Každý dekret má cenu, délku trvání a cooldown."
        />
        <div className="dossier mx-auto mt-12 max-w-4xl overflow-hidden rounded-md">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy-800 text-ink-400">
              <tr className="label-mono">
                <th className="px-5 py-3 font-normal">Dekret</th>
                <th className="px-5 py-3 font-normal">Efekt</th>
                <th className="px-5 py-3 font-normal">Trvání</th>
                <th className="px-5 py-3 text-right font-normal">Cena</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {decrees.map((d) => (
                <tr key={d.name} className="transition-colors hover:bg-navy-800/60">
                  <td className="px-5 py-4 font-display font-semibold text-ink-100">
                    <span className="mr-2">{d.icon}</span>
                    {d.name}
                  </td>
                  <td className="px-5 py-4 text-ink-300">{d.effect}</td>
                  <td className="px-5 py-4 text-ink-300">{d.duration}</td>
                  <td className="px-5 py-4 text-right font-mono text-gold-400">{d.cost} 🪙</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Kontrola moci */}
      <div className="border-y border-white/5 bg-navy-950/40">
        <Section id="kontrola">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="dossier noise relative p-8">
                <Corners className="text-wax-500/40" />
                <div className="space-y-4">
                  {[
                    { t: "Referendum", d: "Občané hlasují o návrzích. Pro platnost je potřeba kvórum 25 % aktivních občanů.", icon: "📊" },
                    { t: "Petice nedůvěry", d: "30 % podpisů aktivních občanů spustí hlasování o odvolání prezidenta.", icon: "✍️" },
                    { t: "Odvolání", d: "Pokud 60 % hlasujících řekne ANO, prezident je odvolán z funkce.", icon: "⚖️" },
                  ].map((x) => (
                    <div key={x.t} className="flex gap-4 border border-white/10 bg-navy-900/60 p-5">
                      <div className="text-2xl">{x.icon}</div>
                      <div>
                        <h3 className="font-display font-bold text-ink-100">{x.t}</h3>
                        <p className="mt-1 text-sm text-ink-400">{x.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                index="§ 06"
                eyebrow="Brzdy a protiváhy"
                title={<>Moc má vždy <span className="text-gradient-gold">pojistku</span></>}
                subtitle="Prezident není neomezený vládce. Občané drží v rukou nástroje přímé demokracie - referenda i možnost odvolání."
              />
              <p className="mt-5 text-sm leading-relaxed text-ink-300">
                Špatná vláda? Občané se mohou bránit. Dobrá vláda? Bude znovuzvolena. A staff? Ten do
                politiky nikdy nezasahuje - server žije vlastním životem a my jen moderujeme a vymáháme pravidla.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* Profese */}
      <Section id="profese">
        <SectionHeading
          index="§ 07"
          eyebrow="Ekonomika & profese"
          title={<>7 <span className="text-gradient-gold">profesí</span>, jedna ekonomika</>}
          subtitle="Vyber si povolání přes /jobs, vydělávej za každou akci a postupuj v levelech s lepšími odměnami a perky."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {jobs.map((job, i) => (
            <Reveal key={job.name} delay={i * 50} as="article">
              <div className="dossier flex h-full items-start gap-4 p-5 transition-all hover:-translate-y-1 hover:border-gold-500/40">
                <span className="text-3xl">{job.icon}</span>
                <div>
                  <h3 className={`font-display font-bold ${job.color}`}>{job.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-400">{job.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Svět */}
      <div className="border-y border-white/5 bg-navy-950/40">
        <Section id="svet">
          <SectionHeading
            index="§ 08"
            eyebrow="Průzkum území · Generátor Iris"
            title={<>Svět s <span className="text-gradient-gold">300+ biomy</span></>}
            subtitle="Civicraft běží na pokročilém generátoru Iris. Žádné nudné placky - divočina je plná míst, jaká v běžném Minecraftu neuvidíš. A časem přidáme i vlastní biomy."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/world/2026-06-26_12.49.34.png", caption: "Hornaté vnitrozemí" },
              { src: "/world/2026-06-26_12.49.54.png", caption: "Divoký les" },
              { src: "/world/2026-06-26_12.50.17.png", caption: "Ametystová jeskyně" },
            ].map((r, i) => (
              <Reveal key={r.src} delay={i * 80}>
                <ReconPhoto src={r.src} caption={r.caption} sizes="(max-width:768px) 100vw, 33vw" />
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="flex flex-wrap justify-center gap-2">
              {["Amethyst Cavern", "Azure Wastes", "Glacial", "Mushroom Tunnels", "Crystalized Overgrown", "Dark Depths", "Mantle Core", "Spider Infestation", "Dripstone Cavern", "Ice Cavern"].map((b) => (
                <span key={b} className="rounded-sm border border-white/10 bg-navy-900/60 px-4 py-2 text-sm text-ink-200">
                  {b}
                </span>
              ))}
              <span className="rounded-sm border border-dashed border-white/15 px-4 py-2 text-sm text-ink-400">+ stovky dalších</span>
            </div>
            <div className="mt-8 text-center">
              <Button href={siteConfig.irisShaderUrl} external variant="secondary">
                Doporučený shader: Iris ↗
              </Button>
            </div>
          </div>
        </Section>
      </div>

      <Section className="text-center">
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/jak-zacit">Začni hrát →</Button>
          <Link href="/pravidla" className="text-sm font-semibold text-gold-400 hover:underline">
            Přečíst stanovy
          </Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
