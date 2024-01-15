import type { Metadata } from "next";

import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://acme.com"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/pt-PT",
    },
  },
 
  icons: {
    icon: "https://techboladas.vercel.app/favicon.ico",
  },
  title: {
    default: "Tech Boladas",
    template: "%s | Tech Boladas",
    absolute: "Oficial Site - Tech Boladas"
  },
  manifest: "https://techboladas.vercel.app/manifest.json",
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
  referrer: "origin-when-cross-origin",
  keywords: ["TechBoladas", "tech-boladas", "Moçambique"],
  authors: [
    { name: "Winike Cuamba" },
  ],
  creator: "Winike",
  publisher: "Winike Cuamba",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <NavBar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
