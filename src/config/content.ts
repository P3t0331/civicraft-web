/**
 * Herní obsah Civicraftu — čerpá z reálné konfigurace serveru a pluginů
 * (CivicraftGov, CivicraftJobs, Towny, LuckPerms, Iris). Veškerý text je v češtině.
 */

export type Pillar = {
  icon: string;
  title: string;
  text: string;
  accent: "gold" | "emerald" | "civic";
};

export const pillars: Pillar[] = [
  {
    icon: "🏛️",
    title: "Opravdová demokracie",
    text: "Reálné volby každých 7 dní. Hlasuj, kandiduj a vyhraj prezidentské křeslo se skutečnými pravomocemi. Žádný staff ti do politiky nemluví.",
    accent: "gold",
  },
  {
    icon: "🏘️",
    title: "Města & jeden národ",
    text: "Staň se Občanem, založ vlastní město nebo se přidej ke kamarádům. Všechna města zatím tvoří jeden společný národ Civicraft.",
    accent: "emerald",
  },
  {
    icon: "🌍",
    title: "Unikátní svět",
    text: "Běžíme na pokročilém generátoru světa Iris s více než 300 biomy, jaké jinde neuvidíš — a postupně budujeme i vlastní. Každá expedice do divočiny je objevování.",
    accent: "civic",
  },
];

export type Power = {
  title: string;
  text: string;
  icon: string;
};

export const presidentialPowers: Power[] = [
  {
    icon: "🏦",
    title: "Národní pokladna",
    text: "Prezident spravuje státní rozpočet plněný z daní měst a daně z práce. Rozhoduje, kam peníze poputují.",
  },
  {
    icon: "📊",
    title: "Národní daň",
    text: "Nastav daň měst i daň z práce. Vyšší příjmy do pokladny — ale nespokojení občané tě můžou odvolat.",
  },
  {
    icon: "💸",
    title: "Stimul pro občany",
    text: "Vyplať jednorázový balík každému online Občanovi — populární tah, hlavně před volbami.",
  },
  {
    icon: "📜",
    title: "Dekrety (server eventy)",
    text: "Vyhlas celonárodní buffy placené z pokladny — festival XP, žatva, dvojité dropy a další.",
  },
];

export type Decree = {
  name: string;
  icon: string;
  effect: string;
  duration: string;
  cost: string;
};

// Z config.yml sekce `decrees` (startovní sada — viz poznámka o roadmapě).
export const decrees: Decree[] = [
  { name: "Festival XP", icon: "✨", effect: "1.5× XP ze všeho", duration: "24 h", cost: "10 000" },
  { name: "Festival Žatvy", icon: "🌾", effect: "Zrychlený růst plodin", duration: "48 h", cost: "15 000" },
  { name: "Národní Šprint", icon: "🪶", effect: "Speed I ve městech", duration: "12 h", cost: "8 000" },
  { name: "Den Hojnosti", icon: "💎", effect: "Dvojité dropy z bloků", duration: "1 h", cost: "6 000" },
  { name: "Čistka Mobů", icon: "⚔️", effect: "Odstraní příšery ve městech", duration: "Okamžité", cost: "3 000" },
];

export type Job = {
  name: string;
  icon: string;
  color: string;
  desc: string;
};

// Z CivicraftJobs (vlastní plugin) — 7 profesí, výdělek + XP za každou akci.
export const jobs: Job[] = [
  { name: "Horník", icon: "⛏️", color: "text-ink-200", desc: "Těž rudy a kámen. Čím hlouběji se vydáš, tím cennější suroviny a vyšší mzda. Šance na extra dropy." },
  { name: "Dřevorubec", icon: "🪓", color: "text-gold-400", desc: "Kácej stromy a zpracovávej dřevo — základní surovina každého města a stabilní příjem." },
  { name: "Farmář", icon: "🌱", color: "text-emerald-400", desc: "Pěstuj a sklízej plodiny. S vyšším levelem se ti políčka sama znovu zasadí (auto-replant)." },
  { name: "Lovec", icon: "🏹", color: "text-civic-400", desc: "Lov zvířata i nepřátelské moby. Odměny za úlovky a šance na vzácné dropy." },
  { name: "Stavitel", icon: "🧱", color: "text-gold-400", desc: "Pokládej bloky a stavěj. Vyděláváš tím, co tvoří kostru každého města — ideální pro budovatele." },
  { name: "Rybář", icon: "🎣", color: "text-emerald-400", desc: "Rybař v klidu u vody. Šance na vzácný úlovek a poklady, které jinde nezískáš." },
  { name: "Řemeslník", icon: "⚒️", color: "text-civic-400", desc: "Vyráběj a craftěj předměty. Profese pro ty, kdo radši tvoří než dolují." },
];

export type JourneyStep = {
  rank: string;
  tag: string;
  title: string;
  text: string;
  icon: string;
};

// Postup hráče dle LuckPerms (default→obcan→starosta→prezident).
export const journey: JourneyStep[] = [
  {
    rank: "Imigrant",
    tag: "Start · prvních ~10 hodin",
    title: "Přežij v divočině",
    icon: "🧳",
    text: "Začínáš jako Imigrant. Vydej se do divočiny, postav si základnu, rozjeď profese přes /jobs a vydělej první peníze. V divočině je griefing povolen — hraje se naostro.",
  },
  {
    rank: "Občan",
    tag: "Po 10 hodinách hry",
    title: "Získej občanství",
    icon: "🪪",
    text: "Po odehrání ~10 hodin se automaticky staneš Občanem. Teď můžeš založit vlastní město nebo vstoupit do existujícího, hlasovat ve volbách a kandidovat na prezidenta.",
  },
  {
    rank: "Starosta",
    tag: "Volitelně",
    title: "Postav město s kamarády",
    icon: "🏘️",
    text: "Příkazem /town create <název> založíš město a staneš se starostou. Pozvi kamarády — čím víc vás je, tím silnější město a tím větší šance, že jeden z vás usedne do prezidentského křesla.",
  },
  {
    rank: "Prezident",
    tag: "Vrchol",
    title: "Vyhraj volby a vládni",
    icon: "👑",
    text: "Vyhraj volby a získej národní pokladnu, daně a dekrety. Tvoje rozhodnutí ovlivní celý server — dokud tě voliči nechají vládnout.",
  },
];

export type Step = {
  step: string;
  title: string;
  text: string;
};

export const electionTimeline: Step[] = [
  {
    step: "Dny 1–5",
    title: "Kandidatura",
    text: "Zaplať registrační poplatek 2 000 a přihlas se jako kandidát. Veď kampaň a získej podporu Občanů.",
  },
  {
    step: "Posledních 48 h",
    title: "Hlasování",
    text: "Občané hlasují přes /president. Pro platné volby je potřeba minimálně 3 hlasů.",
  },
  {
    step: "Konec cyklu",
    title: "Inaugurace",
    text: "Vítěz se na celé funkční období stává prezidentem se všemi pravomocemi a přístupem k pokladně.",
  },
  {
    step: "Kdykoliv",
    title: "Kontrola moci",
    text: "Občané mohou spustit referendum nebo petici nedůvěry. 30 % podpisů vyvolá hlasování o odvolání.",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Jak se připojím na Civicraft?",
    a: "Spusť Minecraft: Java Edition ve verzi 26.1.2, přidej server s naší IP a připoj se. Při prvním vstupu se zaregistruješ příkazem /register. Podrobný návod najdeš na stránce Jak začít.",
  },
  {
    q: "Je server zdarma?",
    a: "Ano, hraní je kompletně zdarma. Server podpoříš dobrovolně koupí VIP nebo klíčů do truhel — přidávají komfort a kosmetiku, nikdy ne herní převahu. Žádné pay-to-win.",
  },
  {
    q: "Jak se stanu Občanem a můžu volit?",
    a: "Začínáš jako Imigrant. Po odehrání zhruba 10 hodin se automaticky staneš Občanem. Teprve Občan může založit nebo vstoupit do města, hlasovat ve volbách a kandidovat na prezidenta.",
  },
  {
    q: "Je povolený griefing?",
    a: "V divočině ano — hraje se naostro. Uvnitř měst je griefing díky Towny vypnutý, takže tvoje stavby ve městě jsou v bezpečí. Chceš klid? Postav nebo si najdi město.",
  },
  {
    q: "Můžu hrát s kamarády?",
    a: "Rozhodně, a vyplatí se to. Společně založíte město, rozdělíte si profese a budujete rychleji. Čím větší a aktivnější parta, tím větší šance, že někdo z vás vyhraje prezidentské volby.",
  },
  {
    q: "Co je na světě tak unikátního?",
    a: "Civicraft běží na pokročilém generátoru světa Iris s více než 300 biomy, které v běžném Minecraftu neuvidíš — a postupně budujeme i vlastní. Pro nejlepší zážitek doporučujeme shader mod Iris.",
  },
  {
    q: "Podporujete cracked / nepremium účty?",
    a: "Server běží v offline režimu s přihlašováním přes AuthMe, takže se připojíš i bez premium účtu. Svůj skin si nastavíš příkazem /skin.",
  },
];
