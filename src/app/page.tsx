import { Main } from "@/components/Main/";
import { Apresentation } from "@/components/Apresentation/"
import { Card } from "@/components/Card/"
import { SiNextdotjs } from "react-icons/si"
import { FaRobot } from "react-icons/fa"

export default function Home() {

  return (
    <Main>
      <Apresentation />
      <section id="services" className="h-screen w-full mt-60 pl-32 grid grid-cols-2 grid-rows-2">
        <div className="flex items-center justify-center">
          <p className="text-xl p-10 text-pallete-white"> 
            Desenvolvimento de sites profissionais com as melhores tecnologias do mercado. <br/>
            Tudo isso na tech boladas
          </p>
        </div>
        <div className="flex justify-center p-5">
          <Card Icon={SiNextdotjs}  title="Site Robusto" description="Site com NextJS e Tailwind" />
        </div>
        <div>
            <Card Icon={FaRobot} title="Bot de automacao" description="Bot de automaçao whatshapp, telegram, instagram e windows"  />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-xl p-10 text-pallete-white">
            Desenvolvimento de bots personalizados com diversas funcoes que ajudam a automatizar diversas tarefas.
            Tudo isso na tech boladas
          </p>
        </div>
      </section>
    </Main>
  )
}
