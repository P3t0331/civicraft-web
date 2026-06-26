import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

/**
 * Proxy na mcsrvstat.us pro live status serveru.
 * Cachuje se 60 s, takže API třetí strany nezahltíme a stránka zůstává rychlá.
 */
export const revalidate = 60;

type StatusResponse = {
  online: boolean;
  players: { online: number; max: number };
  version: string | null;
};

export async function GET() {
  const host = siteConfig.statusHost;
  const fallback: StatusResponse = {
    online: false,
    players: { online: 0, max: siteConfig.maxPlayers },
    version: null,
  };

  try {
    const res = await fetch(`https://api.mcsrvstat.us/3/${encodeURIComponent(host)}`, {
      next: { revalidate: 60 },
      headers: { "User-Agent": "civicraft.cz status widget" },
    });

    if (!res.ok) return NextResponse.json(fallback);

    const data = (await res.json()) as {
      online?: boolean;
      players?: { online?: number; max?: number };
      version?: string;
    };

    return NextResponse.json<StatusResponse>({
      online: Boolean(data.online),
      players: {
        online: data.players?.online ?? 0,
        max: data.players?.max ?? siteConfig.maxPlayers,
      },
      version: data.version ?? null,
    });
  } catch {
    return NextResponse.json(fallback);
  }
}
