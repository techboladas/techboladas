import { Main } from "@/components/Main/";
import { Apresentation } from "@/components/Apresentation/"
import { Card } from "@/components/Card/"
import { SiNextdotjs } from "react-icons/si"
import { FaRobot } from "react-icons/fa"
import { Service } from "@/components/Service";

export default function Home() {

  return (
    <Main>
      <Apresentation />
      <Service />
    </Main>
  )
}
