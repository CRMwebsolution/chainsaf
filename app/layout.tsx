import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const displayFont = localFont({
  src: "../public/assets/display.ttf",
  variable: "--font-haul-display",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "ChainSaf | Trailer Chain Storage & Securement — Concept",
  description:
    "Explore ChainSaf trailer-mounted chain storage and securement. See how it works and prepare an inquiry about sizes, rated limits, installation, and pricing.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={displayFont.variable}>
      <body>{children}</body>
    </html>
  );
}
