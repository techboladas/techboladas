import { FaFacebook, FaHtml5, FaInstagram, FaReact, FaWhatsapp } from "react-icons/fa"
import { Card } from "../Card"
import { SiNextdotjs } from "react-icons/si"
import { Title } from "./components/Title"
import { CardContainer } from "./components/CardConteiner"

export const Catalog = () => {
  return (
      <section className="w-full m-5 p-5 pl-10 bg-pallete-t30 flex flex-col  justify-center items-center">
        <Title>Sites</Title>
        <CardContainer>
          <Card Icon={FaHtml5} title="Site simples" description="Criado com HTML5 e CSS3" className="w-full shadow-orange-600" />
          <Card Icon={FaReact} title="Site mediano" description="Usando ReactJS" className="w-full" />
          <Card Icon={SiNextdotjs} title="Site robusto" description="Usando NextJs e Tailwind" className="w-full" />
        </CardContainer>
        <Title>Bots</Title>
       <CardContainer>
          <Card Icon={FaWhatsapp} title="Bot Whatsapp" description="Bot para Whatsapp" className="w-full" />
          <Card Icon={FaInstagram} title="Bot Instagram" description="Bot para Instagram" className="w-full" />
          <Card Icon={FaFacebook} title="Bot Facebook" description="Bot para Facebook" className="w-full" />
        </CardContainer>
      </section>
  )
}
