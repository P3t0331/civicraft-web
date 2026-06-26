/**
 * VIP balíčky, tým a pravidla - odpovídá reálnému LuckPerms nastavení serveru.
 * Ceny jsou placeholdery, uprav dle reality. Veškerý text je v češtině.
 */

export type Rank = {
  name: string; // LuckPerms display (prefix)
  group: string; // LuckPerms group (interní)
  price: string;
  tagline: string;
  featured?: boolean;
  color: "emerald" | "gold" | "civic";
  perks: string[];
};

export const ranks: Rank[] = [
  {
    name: "Vážený Občan",
    group: "vip",
    price: "99 Kč",
    tagline: "Vstupní VIP - komfort do začátku",
    color: "emerald",
    perks: [
      "Prefix [Vážený Občan] v chatu",
      "+5 % výdělek a XP ze všech profesí",
      "Sleva v obchodě a lepší výkup surovin",
      "/back, /enderchest, /hat, /feed",
      "Craftovací stoly odkudkoliv (verpánek, bruska, stav…)",
      "Barevný chat i nick, /ptime a /pweather",
      "Více domovů a denní klíč do truhly",
    ],
  },
  {
    name: "Mecenáš",
    group: "vip+",
    price: "199 Kč",
    tagline: "Nejoblíbenější volba",
    featured: true,
    color: "gold",
    perks: [
      "Vše z Vážený Občan",
      "Prefix [Mecenáš] a +10 % výdělek a XP",
      "Větší sleva a výkup v obchodě",
      "/anvil, /smithingtable, /skull odkudkoliv",
      "Po smrti si necháš XP a vrátíš se přes /back",
      "Formátování chatu, nicku a názvů předmětů",
      "Bez čekání při teleportu + skin z vlastní URL",
      "Týdenní klíč do lepší truhly",
    ],
  },
  {
    name: "Honorár",
    group: "vip++",
    price: "349 Kč",
    tagline: "Maximální podpora serveru",
    color: "civic",
    perks: [
      "Vše z Mecenáš",
      "Prefix [Honorár] a +15 % výdělek a XP",
      "Nejvyšší sleva a výkup v obchodě",
      "RGB barvy v chatu, nicku i předmětech",
      "/heal, /repair (i broně a enchanty), /top",
      "Připojení i na plný server",
      "Nejvíce domovů a nejlepší týdenní klíč",
    ],
  },
];

export type Member = {
  name: string;
  role: string;
  bio: string;
  color: "gold" | "emerald" | "civic" | "ink";
};

// Pořadí dle LuckPerms vah (vzestupně). Texty v češtině (Správce, ne „Správca").
export const team: Member[] = [
  { name: "Asistent", role: "Podpora hráčů", bio: "První pomoc novým hráčům a základní moderace. Nezasahuje do politiky serveru.", color: "emerald" },
  { name: "Moderátor", role: "Moderace", bio: "Řeší spory, hlídá dodržování pravidel a pomáhá komunitě v terénu.", color: "civic" },
  { name: "Admin", role: "Správce serveru", bio: "Technické zázemí, správa serveru, pluginů a aktualizací.", color: "gold" },
  { name: "Zakladatel", role: "Owner & vývoj", bio: "Tvůrce Civicraftu a custom pluginů CivicraftGov a CivicraftJobs.", color: "gold" },
];

export type Rule = { icon: string; title: string; text: string };

// Záměrně málo pravidel - Civicraft drží věci jednoduché.
export const rules: Rule[] = [
  {
    icon: "🤝",
    title: "Buď slušný",
    text: "Urážky, rasismus, šikana a toxické chování nemají na serveru místo. Komunikace v češtině nebo slovenštině.",
  },
  {
    icon: "🚫",
    title: "Žádné cheaty",
    text: "Hacky, X-ray a neoprávněné modifikace jsou zakázané a hlídá je anticheat. Zneužívání bugů a dupování nahlas, nezneužívej.",
  },
  {
    icon: "🏘️",
    title: "Griefing jen v divočině",
    text: "V divočině se hraje naostro - griefing je povolen. Uvnitř měst je díky Towny vypnutý, stavby ve městě jsou chráněné.",
  },
  {
    icon: "🗳️",
    title: "Férová politika",
    text: "Volby jsou férové - kupování hlasů reálnými penězi je zakázáno. Staff nikdy nekandiduje a nezasahuje do politiky.",
  },
  {
    icon: "🔒",
    title: "Jeden účet, chraň si ho",
    text: "Jeden hlavní účet na hráče; alty na obcházení banů jsou zakázané. Své heslo k /login nikomu nedávej - staff ho po tobě nikdy nechce.",
  },
  {
    icon: "📢",
    title: "Žádná reklama a spam",
    text: "Spam a propagace cizích serverů do chatu nepatří. Návrhy a problémy řeš na Discordu.",
  },
];
