# Civicraft.cz - web

Oficiální web pro CZ/SK Minecraft server **Civicraft** (Politický Survival).
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4.

## Vývoj

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produkční build
npm start        # spuštění produkčního buildu
```

## Konfigurace

Zkopíruj `.env.example` → `.env.local` a vyplň reálné hodnoty. Všechny texty/odkazy
jdou jedním místem přes `src/config/site.ts`.

| Proměnná | Význam |
|---|---|
| `NEXT_PUBLIC_SERVER_IP` | IP/hostname serveru (zobrazí se hráčům + live status) |
| `NEXT_PUBLIC_SERVER_VERSION` | Verze serveru (např. `1.21.x (Java)`) |
| `SERVER_STATUS_HOST` | Host pro dotaz na status (jinak = SERVER_IP) |
| `NEXT_PUBLIC_DISCORD_URL` | Pozvánka na Discord |
| `NEXT_PUBLIC_BLUEMAP_URL` | URL živé BlueMap mapy (stránka `/mapa`) |
| `NEXT_PUBLIC_STORE_URL` | Odkaz na pokladnu (Tebex apod.) |
| `NEXT_PUBLIC_LITEBANS_URL` | Veřejný LiteBans web (stránka `/bany`; prázdné = jen příkazy ve hře) |

## Struktura

- `src/app/` - stránky (Domů, Jak začít, Jak se hraje, Obchod, Mapa, Tým, Pravidla)
- `src/app/api/status/` - proxy na [mcsrvstat.us](https://mcsrvstat.us) pro live počet hráčů (cache 60 s)
- `src/components/` - Navbar, Footer, Hero, karty, FAQ, …
- `src/config/site.ts` - centrální konfigurace (env-driven)
- `src/config/content.ts`, `extra.ts` - herní obsah (volby, dekrety, profese, VIP, tým, pravidla)

## Co je potřeba doplnit

- [ ] Reálnou IP + Discord + BlueMap URL + obchod + (volitelně) LiteBans web (`.env.local`)
- [ ] Skutečné ceny VIP balíčků (`src/config/extra.ts` - perky odpovídají LuckPerms)
- [ ] Skutečná jména / avatary členů týmu (`src/config/extra.ts`)

## SEO

- Metadata + Open Graph pro každou stránku, dynamický OG obrázek (`opengraph-image.tsx`)
- `sitemap.xml`, `robots.txt`, JSON-LD (`Organization` + `WebSite` + `VideoGame`)
- `lang="cs"`, statický prerender → rychlé načítání

## Nasazení

Doporučeno **Vercel** (API route pro live status potřebuje Node runtime). Funguje i na
jakémkoliv Node hostingu (`npm run build && npm start`). Nezapomeň nastavit env proměnné.

---
Není přidružený k Mojang Studios ani Microsoft.
