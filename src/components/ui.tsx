import Link from "next/link";
import type { ReactNode } from "react";

/* ---------- Button ---------- */
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variants: Record<string, string> = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-[0_10px_30px_-10px_rgba(244,183,64,0.7)] hover:shadow-[0_14px_40px_-8px_rgba(244,183,64,0.85)]",
  secondary:
    "bg-navy-700/70 text-ink-100 border border-white/10 hover:bg-navy-600 hover:border-white/20",
  ghost: "text-ink-200 hover:text-gold-400",
};

export function Button({ href, children, variant = "primary", className = "", external }: ButtonProps) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ---------- Section ---------- */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

/* ---------- Eyebrow / kicker ---------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
      {children}
    </span>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && <div className="mb-4">{<Eyebrow>{eyebrow}</Eyebrow>}</div>}
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-100 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
