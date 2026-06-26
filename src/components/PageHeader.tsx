import type { ReactNode } from "react";
import { Eyebrow } from "./ui";
import { Stamp } from "./dossier";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  stamp,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  stamp?: { label: string; tone?: "wax" | "gold" | "cyan" };
}) {
  return (
    <header className="relative overflow-hidden border-b border-white/5 pt-32 pb-14 sm:pt-40 sm:pb-20">
      <div className="bg-grid-fine absolute inset-0 opacity-60" aria-hidden />
      <div className="bg-contour absolute inset-0 opacity-50" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="flex items-center justify-center gap-3">
          <Eyebrow>{eyebrow}</Eyebrow>
          {stamp && <Stamp tone={stamp.tone ?? "cyan"}>{stamp.label}</Stamp>}
        </div>
        <h1 className="mt-4 font-display text-4xl font-black leading-[1.04] tracking-tight text-ink-100 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-300">{subtitle}</p>}
      </div>
    </header>
  );
}
