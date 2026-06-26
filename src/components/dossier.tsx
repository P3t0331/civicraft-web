import Image from "next/image";
import type { ReactNode } from "react";

/* ============================================================
   Civicraft — diegetické „dossier" primitivy
   Razítka, pečetě, spisové značky, recon fotky, zapečetěné sekce.
   ============================================================ */

/* ---------- Inkové razítko ---------- */
export function Stamp({
  children,
  tone = "wax",
  rotate = true,
  className = "",
}: {
  children: ReactNode;
  tone?: "wax" | "gold" | "cyan";
  rotate?: boolean;
  className?: string;
}) {
  const toneCls = tone === "gold" ? "stamp-gold" : tone === "cyan" ? "stamp-cyan" : "";
  return (
    <span className={`stamp ${toneCls} ${rotate ? "stamp-rot" : ""} text-[0.62rem] sm:text-xs ${className}`}>
      {children}
    </span>
  );
}

/* ---------- Spisová značka ---------- */
export function FileTag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`file-no text-[0.66rem] uppercase tracking-[0.2em] text-ink-400 ${className}`}>
      {children}
    </span>
  );
}

/* ---------- Mono „úřední" nadřazený popisek ---------- */
export function MonoLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`label-mono inline-flex items-center gap-2 text-blueprint-400 ${className}`}>
      <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" aria-hidden />
      {children}
    </span>
  );
}

/* ---------- Rohové registrační značky (na panely) ---------- */
export function Corners({ className = "text-blueprint-500/50" }: { className?: string }) {
  const base = "absolute h-3 w-3 border-current";
  return (
    <span aria-hidden className={className}>
      <span className={`${base} left-1.5 top-1.5 border-l-2 border-t-2`} />
      <span className={`${base} right-1.5 top-1.5 border-r-2 border-t-2`} />
      <span className={`${base} bottom-1.5 left-1.5 border-b-2 border-l-2`} />
      <span className={`${base} bottom-1.5 right-1.5 border-b-2 border-r-2`} />
    </span>
  );
}

/* ---------- Vosková / zlatá pečeť ---------- */
export function Seal({
  label,
  sub,
  tone = "gold",
  size = "md",
  className = "",
}: {
  label: ReactNode;
  sub?: ReactNode;
  tone?: "gold" | "wax";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dim = size === "lg" ? "h-28 w-28" : size === "sm" ? "h-16 w-16" : "h-20 w-20";
  const ring = tone === "wax" ? "wax-seal" : "foil-seal";
  const ink = tone === "wax" ? "text-cream-50" : "text-navy-950";
  return (
    <span
      className={`relative grid shrink-0 place-items-center rounded-full ${dim} ${ring} ${className}`}
    >
      <span className={`text-center ${ink}`}>
        <span className="block font-display text-lg font-black leading-none">{label}</span>
        {sub && <span className="label-mono mt-0.5 block text-[0.5rem] tracking-[0.15em] opacity-80">{sub}</span>}
      </span>
    </span>
  );
}

/* ---------- Recon fotka (svět) ---------- */
export function ReconPhoto({
  src,
  caption,
  coords,
  className = "",
  priority = false,
  tape = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  caption?: string;
  coords?: string;
  className?: string;
  priority?: boolean;
  tape?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden border border-blueprint-500/25 bg-navy-900 ${tape ? "tape" : ""} ${className}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={src}
          alt={caption ?? "Civicraft — fotografie světa"}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* modrotiskový nádech + vinětace */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{ background: "linear-gradient(120deg, rgba(43,167,198,0.12), transparent 60%)" }} aria-hidden />
        <Corners className="text-blueprint-300/70" />
      </div>
      {(caption || coords) && (
        <figcaption className="flex items-center justify-between gap-3 border-t border-blueprint-500/20 bg-navy-950/80 px-3 py-2">
          {caption && <span className="label-mono text-[0.6rem] text-ink-300">{caption}</span>}
          {coords && <span className="file-no text-[0.6rem] text-blueprint-400">{coords}</span>}
        </figcaption>
      )}
    </figure>
  );
}

/* ---------- Zapečetěná sekce (locked teaser) ---------- */
export function Sealed({
  children,
  label = "Zapečetěno",
  note = "Odtajněno při spuštění",
  className = "",
}: {
  children?: ReactNode;
  label?: string;
  note?: string;
  className?: string;
}) {
  return (
    <div className={`dossier noise relative overflow-hidden ${className}`}>
      {/* obsah „pod pečetí" — rozmazaný náznak */}
      {children && (
        <div className="pointer-events-none select-none px-6 py-10 opacity-30 blur-[3px]" aria-hidden>
          {children}
        </div>
      )}
      {/* překryv */}
      <div className="absolute inset-0 grid place-items-center bg-navy-950/55 px-6 text-center">
        <div className="flex flex-col items-center">
          <Seal label="✦" sub="CIVICRAFT" tone="wax" className="animate-[seal-pulse_3s_ease-in-out_infinite]" />
          <div className="mt-5">
            <Stamp tone="wax">{label}</Stamp>
          </div>
          <p className="label-mono mt-4 text-[0.6rem] tracking-[0.2em] text-ink-300">{note}</p>
        </div>
      </div>
      <Corners className="text-wax-500/50" />
    </div>
  );
}
