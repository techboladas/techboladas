import { Main } from "@/components/Main/";
import { Apresentation } from "@/components/Apresentation/"
import { Service } from "@/components/Service";
import { Catalog } from "@/components/Catalog";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail} from "react-icons/md"
import Link from "next/link";
import { Contact } from "@/components/Contact";

export default function Home() {

  return (
    <Main>
      <Apresentation />
      <Service />
      <Catalog />
      <Contact />
    </Main>
  )
}
