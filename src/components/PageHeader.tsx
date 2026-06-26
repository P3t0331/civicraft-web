import type { ReactNode } from "react";
import { Eyebrow } from "./ui";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="bg-radial-gold absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-ink-100 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-300">{subtitle}</p>}
      </div>
    </header>
  );
}
