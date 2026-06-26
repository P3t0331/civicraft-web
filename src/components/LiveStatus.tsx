"use client";

import { useEffect, useState } from "react";

type Status = {
  online: boolean;
  players: { online: number; max: number };
  version: string | null;
};

export function LiveStatus({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch("/api/status", { cache: "no-store" });
        const data = (await res.json()) as Status;
        if (active) setStatus(data);
      } catch {
        if (active) setStatus({ online: false, players: { online: 0, max: 80 }, version: null });
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    const id = setInterval(load, 60_000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  const online = status?.online ?? false;
  const count = status?.players.online ?? 0;

  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-md border border-blueprint-500/30 bg-navy-900/70 px-4 py-2 ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        {online && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            loading ? "bg-ink-400" : online ? "bg-emerald-500" : "bg-wax-500"
          }`}
        />
      </span>
      <span className="label-mono text-ink-300">
        {loading ? (
          "Spojení…"
        ) : online ? (
          <>
            <span className="font-bold text-emerald-400">{count}</span> online
          </>
        ) : (
          "Před spuštěním"
        )}
      </span>
    </div>
  );
}
