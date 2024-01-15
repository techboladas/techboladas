import { Main } from "@/components/Main/";
import { Apresentation } from "@/components/Apresentation/";
import { Service } from "@/components/Service";
import { Catalog } from "@/components/Catalog";

import { Contact } from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Tech Boladas, uma empresa de prestação de serviços que a sua maior meta e a satisfação do cliente, Tech Boladas evoluindo atraves da tecnologia",
  openGraph: {
    images: ["https://techboladas.vercel.app/opengraph-image.png"],
    authors: ["Winike Cuamba"]
  },
  twitter: {
    images: ["https://techboladas.vercel.app/twitter-image.png"]
  },
}

export default function Home() {
  return (
    <Main>
      <Apresentation />
      <Service />
      <Catalog />
      <Contact />
    </Main>
  );
}
