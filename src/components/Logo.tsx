import { siteConfig } from "@/config/site";

/**
 * Civicraft znak - „koruna nad hlasovací urnou" v pečetním stylu.
 * Spojuje občanský (volby) a Minecraft (blokový) motiv.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Civicraft">
      <defs>
        <linearGradient id="cc-foil" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe6ad" />
          <stop offset="0.5" stopColor="#eab23f" />
          <stop offset="1" stopColor="#c98f22" />
        </linearGradient>
      </defs>
      {/* pečetní rám */}
      <rect x="2.5" y="2.5" width="43" height="43" rx="4" fill="#0c1322" stroke="#20304f" strokeWidth="1.5" />
      <rect x="6" y="6" width="36" height="36" rx="2" fill="none" stroke="#2ba7c6" strokeOpacity="0.35" strokeWidth="1" />
      {/* urna / blok */}
      <rect x="12" y="24" width="24" height="14" rx="1" fill="#16223a" stroke="#2b3d63" strokeWidth="1.3" />
      <rect x="20" y="28" width="8" height="2.4" rx="1.2" fill="#060a13" />
      {/* lísteček */}
      <rect x="22" y="20" width="5" height="7" rx="0.6" fill="#f3ecda" transform="rotate(8 24 23)" />
      {/* koruna */}
      <path
        d="M14 19 L14 13 L18.5 16 L24 10 L29.5 16 L34 13 L34 19 Z"
        fill="url(#cc-foil)"
        stroke="#c98f22"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      <rect x="22.7" y="14" width="2.6" height="2.6" fill="#b3303a" />
      <circle cx="15.5" cy="14.5" r="1.2" fill="#2fbf8f" />
      <circle cx="32.5" cy="14.5" r="1.2" fill="#2fbf8f" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-black tracking-tight text-ink-100">
          Civi<span className="text-gold-500">craft</span>
        </span>
        <span className="label-mono mt-1 text-ink-400">{siteConfig.tagline}</span>
      </span>
    </span>
  );
}
