import { Main } from "@/components/Main/";
import { Apresentation } from "@/components/Apresentation/"
import { Service } from "@/components/Service";
import { Catalog } from "@/components/Catalog";

export default function Home() {

  return (
    <Main>
      <Apresentation />
      <Service />
      <Catalog />
    </Main>
  )
}
