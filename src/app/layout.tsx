import type { Metadata } from "next";
import { Sora, Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next"


const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"], // Sora se používá jen na nadpisy (semibold/bold/extrabold)
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const pixel = Press_Start_2P({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline} | CZ/SK Minecraft server`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Civicraft",
    "Minecraft server CZ",
    "Minecraft server SK",
    "český Minecraft server",
    "Towny server",
    "politický survival",
    "Minecraft volby",
    "Minecraft prezident",
    "civicraft.cz",
  ],
  authors: [{ name: "Civicraft" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      sameAs: [siteConfig.discordUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "cs-CZ",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "VideoGame",
      name: `${siteConfig.name} — ${siteConfig.tagline}`,
      gamePlatform: "Minecraft: Java Edition",
      applicationCategory: "Game",
      operatingSystem: "Windows, macOS, Linux",
      inLanguage: "cs-CZ",
      description: siteConfig.description,
      url: siteConfig.url,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="cs"
      className={`${sora.variable} ${inter.variable} ${pixel.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-navy-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
