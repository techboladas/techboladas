import { Main } from "@/components/Main/";
import { Apresentation } from "@/components/Apresentation/";
import { Service } from "@/components/Service";
import { Catalog } from "@/components/Catalog";

import { Contact } from "@/components/Contact";

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
