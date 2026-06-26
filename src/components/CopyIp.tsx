"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export function CopyIp({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.serverIp);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard nedostupný — ignoruj */
    }
  };

  return (
    <button
      onClick={copy}
      title="Kliknutím zkopíruješ IP serveru"
      className={`group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-navy-800/60 font-medium text-ink-100 transition-colors hover:border-gold-500/40 hover:bg-navy-700/70 ${
        compact ? "px-3 py-2 text-sm" : "px-4 py-3 text-base"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <span className="font-mono">{copied ? "Zkopírováno!" : siteConfig.serverIp}</span>
    </button>
  );
}
