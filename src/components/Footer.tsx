import Link from "next/link";
import { Logo } from "./Logo";
import { CopyIp } from "./CopyIp";
import { Seal, FileTag } from "./dossier";
import { navLinks, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-blueprint-500/20 bg-navy-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
            CZ/SK Minecraft server, kde tvůj hlas něco znamená. Postav město, staň se občanem
            a bojuj o prezidentské křeslo.
          </p>
          <div className="mt-5">
            <CopyIp />
          </div>
        </div>

        <div>
          <h3 className="label-mono text-ink-300">Rejstřík</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink-400 transition-colors hover:text-gold-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label-mono text-ink-300">Komunita</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={siteConfig.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-gold-400"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.2.5c1.6.4 2.9 1 4.2 1.8a14 14 0 0 0-11-.0C9.7 4.5 11 3.9 12.6 3.5L12.4 3a19.7 19.7 0 0 0-4.9 1.4C3.3 8.6 2.5 12.6 2.9 16.6a19.6 19.6 0 0 0 6 3l.7-1.2c-.7-.3-1.4-.6-2-1l.5-.4a13.3 13.3 0 0 0 11.4 0l.5.4c-.6.4-1.3.7-2 1l.7 1.2a19.5 19.5 0 0 0 6-3c.5-4.6-.8-8.6-3.3-12.2ZM9.2 14.3c-.9 0-1.7-.9-1.7-2s.7-2 1.7-2 1.7.9 1.7 2-.8 2-1.7 2Zm5.6 0c-.9 0-1.7-.9-1.7-2s.8-2 1.7-2 1.7.9 1.7 2-.7 2-1.7 2Z" />
                </svg>
                Discord
              </a>
            </li>
            <li>
              <Link href="/mapa" className="text-sm text-ink-400 transition-colors hover:text-gold-400">Živá mapa</Link>
            </li>
            <li>
              <Link href="/bany" className="text-sm text-ink-400 transition-colors hover:text-gold-400">Rejstřík trestů</Link>
            </li>
            <li>
              <Link href="/obchod" className="text-sm text-ink-400 transition-colors hover:text-gold-400">Podpoř server</Link>
            </li>
            <li className="pt-1">
              <FileTag>Verze {siteConfig.serverVersion}</FileTag>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <Seal label="CC" sub="MMXXVI" tone="gold" size="sm" />
            <p className="text-xs text-ink-500">
              © {new Date().getFullYear()} Civicraft.cz · Všechna práva vyhrazena.
            </p>
          </div>
          <p className="max-w-md text-center text-[0.7rem] leading-relaxed text-ink-500 sm:text-right">
            Není přidružený k Mojang Studios ani Microsoft. Minecraft je ochranná známka Mojang Studios.
          </p>
        </div>
      </div>
    </footer>
  );
}
