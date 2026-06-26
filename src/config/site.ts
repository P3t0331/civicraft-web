/**
 * Centrální konfigurace webu Civicraft.
 * Reálné hodnoty (IP, Discord, mapa, obchod) se nastavují přes .env.local -
 * dokud nejsou vyplněné, použijí se rozumné placeholdery.
 */

export const siteConfig = {
  name: "Civicraft",
  shortName: "Civicraft",
  domain: "civicraft.cz",
  url: "https://civicraft.cz",
  locale: "cs_CZ",

  // Server připojení
  serverIp: process.env.NEXT_PUBLIC_SERVER_IP ?? "play.civicraft.cz",
  serverVersion: process.env.NEXT_PUBLIC_SERVER_VERSION ?? "26.1.2 (Java)",

  // Odkazy
  discordUrl: process.env.NEXT_PUBLIC_DISCORD_URL ?? "https://discord.gg/civicraft",
  bluemapUrl: process.env.NEXT_PUBLIC_BLUEMAP_URL ?? "https://mapa.civicraft.cz",
  storeUrl: process.env.NEXT_PUBLIC_STORE_URL ?? "https://civicraft.cz/obchod",
  litebansUrl: process.env.NEXT_PUBLIC_LITEBANS_URL ?? "", // veřejný LiteBans web (prázdné = jen info)
  // Iris shaders mod (vylepší vzhled custom světa) - pozor, jiné než Iris generátor světa
  irisShaderUrl: "https://modrinth.com/mod/iris",

  // Pro live status (mcsrvstat.us). Lze přepsat samostatným hostem/portem.
  statusHost: process.env.SERVER_STATUS_HOST ?? process.env.NEXT_PUBLIC_SERVER_IP ?? "play.civicraft.cz",

  // Marketingové
  tagline: "Politický Survival",
  motto: "Vybuduj město. Kandiduj na prezidenta. Vládni.",
  description:
    "Civicraft je CZ/SK Minecraft server s opravdovou demokracií. Založ město, staň se občanem, volej, kandiduj na prezidenta a vládni národní pokladně. Towny, volby, dekrety, profese a ekonomika.",

  maxPlayers: 80,
} as const;

export const navLinks = [
  { href: "/", label: "Domů" },
  { href: "/jak-zacit", label: "Jak začít" },
  { href: "/jak-se-hraje", label: "Jak se hraje" },
  { href: "/obchod", label: "Obchod" },
  { href: "/mapa", label: "Mapa" },
  { href: "/tym", label: "Tým" },
  { href: "/pravidla", label: "Pravidla" },
] as const;

export type NavLink = (typeof navLinks)[number];
