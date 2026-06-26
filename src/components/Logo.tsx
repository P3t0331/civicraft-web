import { siteConfig } from "@/config/site";

/**
 * Civicraft logo - pixelová „koruna nad hlasovací urnou".
 * Spojuje občanský (volby) a Minecraft (blokový) motiv.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Civicraft">
      <defs>
        <linearGradient id="cc-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe0a3" />
          <stop offset="0.5" stopColor="#f4b740" />
          <stop offset="1" stopColor="#e09e1f" />
        </linearGradient>
      </defs>
      {/* urna / blok */}
      <rect x="9" y="22" width="30" height="18" rx="2" fill="#18223d" stroke="#2b3d63" strokeWidth="1.5" />
      {/* štěrbina pro hlas */}
      <rect x="18" y="27" width="12" height="3" rx="1.5" fill="#070b16" />
      {/* lísteček vhozený do urny */}
      <rect x="21" y="18" width="6" height="8" rx="1" fill="#f6f1e7" transform="rotate(8 24 22)" />
      {/* pixelová koruna */}
      <path
        d="M12 16 L12 9 L17 13 L24 6 L31 13 L36 9 L36 16 Z"
        fill="url(#cc-gold)"
        stroke="#e09e1f"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* drahokamy na koruně */}
      <rect x="22.5" y="11" width="3" height="3" fill="#e23b4e" />
      <circle cx="13.5" cy="11" r="1.4" fill="#33c481" />
      <circle cx="34.5" cy="11" r="1.4" fill="#33c481" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-tight text-ink-100">
          Civi<span className="text-gold-500">craft</span>
        </span>
        <span className="label-pixel text-ink-400">{siteConfig.tagline}</span>
      </span>
    </span>
  );
}
