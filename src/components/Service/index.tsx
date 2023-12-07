import { FaRobot } from "react-icons/fa"
import { Card } from "../Card"
import { SiNextdotjs } from "react-icons/si"
import { Text } from "./components/Text"
import { Container } from "./components/Container"


export const Service = () => {
   return (
      <section id="service" className=" w-full mt-60 pl-10 grid grid-cols-1 grid-rows-4 justify-end content-center items-center md:grid-cols-2 md:grid-rows-2 md:h-screen">
        <Container className="items-center">
          <Text>
            Desenvolvimento de sites profissionais com as melhores tecnologias do mercado. 
            <br/> 
            Tudo isso na tech boladas
          </Text>
        </Container>
        <Container>
          <Card Icon={SiNextdotjs}  title="Site Robusto" description="Site com NextJS e Tailwind" />
        </Container>
        <Container>
            <Card Icon={FaRobot} title="Bot de automacao" description="Bot de automaçao whatshapp, telegram, instagram e windows"  />
        </Container>
        <Container className="items-center">
          <Text>
            Desenvolvimento de bots personalizados com diversas funcoes que ajudam a automatizar diversas tarefas.
            Tudo isso na tech boladas
          </Text>
        </Container>
      </section>
  )
}
