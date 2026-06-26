import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Civicraft - Politický Survival CZ/SK Minecraft server";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b1020 0%, #111a30 60%, #18223d 100%)",
          color: "#eef2fb",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(244,183,64,0.25), transparent 70%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ fontSize: 70 }}>🏛️</div>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, letterSpacing: -2 }}>
            <span>Civi</span>
            <span style={{ color: "#f4b740" }}>craft</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#f8cf6e",
          }}
        >
          Politický Survival
        </div>
        <div style={{ marginTop: 30, fontSize: 34, color: "#aab6d4", display: "flex" }}>
          Postav město · Staň se prezidentem · Vládni
        </div>
        <div
          style={{
            marginTop: 44,
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: "14px 28px",
            fontSize: 28,
          }}
        >
          <span style={{ color: "#33c481" }}>●</span>
          <span style={{ fontFamily: "monospace" }}>{siteConfig.serverIp}</span>
          <span style={{ color: "#647097" }}>· CZ / SK</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
