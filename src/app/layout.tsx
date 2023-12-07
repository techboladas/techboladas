import type { Metadata } from "next";

import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  icons: {
    icon: '/tech_icon.svg'
  },
  title: "Tech Boladas",
  description: "Site pessoal da tech boladas",
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
