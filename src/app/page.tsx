import { Main } from "@/components/Main/";
import { Apresentation } from "@/components/Apresentation/"
import { Card } from "@/components/Card/"
import { FaFacebook, FaHtml5, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FaRobot, FaReact } from "react-icons/fa"
import { SiNextdotjs } from "react-icons/si";
import { Service } from "@/components/Service";

export default function Home() {

  return (
    <Main>
      <Apresentation />
      <Service />
      <section className="w-full m-10 bg-pallete-t30 flex flex-col  justify-center items-center">
        <h3 className="w-full text-pallete-white text-2xl p-5 pl-20 bg-pallete-t10  text-center">Sites</h3>
        <article className="w-11/12 p-5 m-5  gap-5 flex flex-col justify-center items-end  md:flex-row">
          <Card Icon={FaHtml5} title="Site simples" description="Criado com HTML5 e CSS3" className="w-full" />
          <Card Icon={FaReact} title="Site mediano" description="Usando ReactJS" className="w-full" />
          <Card Icon={SiNextdotjs} title="Site robusto" description="Usando NextJs e Tailwind" className="w-full" />
        </article>
        <h3>Bots</h3>
       <article className="w-11/12 p-5 m-5  gap-5 flex flex-col justify-center items-end  md:flex-row">
          <Card Icon={FaWhatsapp} title="Bot Whatsapp" description="Bot para Whatsapp" className="w-full" />
          <Card Icon={FaInstagram} title="Bot Instagram" description="Bot para Instagram" className="w-full" />
          <Card Icon={FaFacebook} title="Bot Facebook" description="Bot para Facebook" className="w-full" />
        </article>
      </section>
    </Main>
  )
}
