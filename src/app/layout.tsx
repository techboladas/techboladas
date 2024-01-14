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
  openGraph: {
    title: "Tech Boladas - Oficial Site",
    description: "Tech Boladas evoluindo atraves da technologia",
    url: "https://techboladas.vercel.app",
    siteName: "Tech Boladas - Oficial Site",
    images: "./opengraph-image.png",
    type: "website",
  },
  icons: {
    icon: "/tech_icon.svg",
  },
  title: "Tech Boladas - Empresa de prestação de serviços",
  description: "Tech Boladas evoluindo atraves da tecnologia",
  manifest: "https://techboladas.vercel.app/manifest.json",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  keywords: ["TechBoladas", "WebSite", "Negocio"],
  authors: [
    { name: "Winike" },
    { name: "Winike", url: "https://techboladas.vercel.app" },
  ],
  creator: "Winike",
  publisher: "Winike Cuamba",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
      </body>
      <Footer />
    </html>
  );
}
