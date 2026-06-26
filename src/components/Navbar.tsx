"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks, siteConfig } from "@/config/site";
import { CopyIp } from "./CopyIp";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // zavřít mobilní menu při změně stránky
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-navy-950/95 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Civicraft — domů" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    active ? "text-gold-400" : "text-ink-200 hover:text-ink-100"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gold-500" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <CopyIp compact />
          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gold-500 px-4 py-2 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            Hrát teď
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-ink-100 lg:hidden"
        >
          <div className="relative h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-navy-950 transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[calc(100dvh-4rem)]" : "max-h-0"
        }`}
      >
        <ul className="max-h-[calc(100dvh-4rem)] space-y-1 overflow-y-auto px-5 py-4 pb-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-4 py-2.5 text-base font-medium ${
                    active ? "bg-gold-500/10 text-gold-400" : "text-ink-200 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="flex flex-col gap-2 pt-3">
            <CopyIp />
            <a
              href={siteConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gold-500 px-4 py-3 text-center text-sm font-semibold text-navy-950"
            >
              Připojit se na Discord
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
