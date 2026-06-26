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
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-[0_8px_28px_-10px_rgba(234,178,63,0.75)] hover:shadow-[0_12px_38px_-8px_rgba(234,178,63,0.9)] ring-1 ring-gold-300/40",
  secondary:
    "bg-navy-800/40 text-ink-100 border border-blueprint-500/30 hover:border-blueprint-400/60 hover:bg-navy-700/50",
  ghost: "text-ink-200 hover:text-gold-400",
};

export function Button({ href, children, variant = "primary", className = "", external }: ButtonProps) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] ${variants[variant]} ${className}`;
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

/* ---------- Eyebrow / úřední popisek ---------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="label-mono inline-flex items-center gap-2 text-blueprint-400">
      <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" aria-hidden />
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
  index?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="font-display text-3xl font-black leading-[1.05] tracking-tight text-ink-100 sm:text-4xl md:text-[2.9rem]">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed text-ink-300 sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
