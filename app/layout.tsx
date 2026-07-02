import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display-src",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body-src",
  display: "swap",
});

const hand = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hand-src",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eduarda Cozinha · Gastronomia Autoral & Sofisticada",
  description:
    "Uma experiência gastronômica memorável e elegante nos Jardins. Alta gastronomia autoral, ambiente clean e drinks exclusivos.",
  openGraph: {
    title: "Eduarda Cozinha · Gastronomia Autoral & Sofisticada",
    description:
      "Uma experiência gastronômica memorável e elegante nos Jardins. Reserve sua mesa.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body className="min-h-screen bg-surface text-text font-body antialiased flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
