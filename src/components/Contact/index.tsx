import Link from "next/link"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"
import { LinkBlock } from "./components/LinkBlock"

export const Contact = () => {
  return (
     <section id="contact" className="w-9/12 p-10 ml-20 mr-5 flex flex-col justify-start bg-pallete-t30 rounded">
        <h2 className="text-xl text-pallete-white mb-5">Contacte-nos</h2>
        <article className="">
          <LinkBlock Icon={FaWhatsapp} href="https://wa.me/message/HIOFD5VOTKMRF1">Whatsapp</LinkBlock>
          <LinkBlock Icon={MdAlternateEmail} href="mailto:techboladas@gmail.com">Email</LinkBlock>
          <LinkBlock Icon={FaInstagram} href="https://instagram.com/tech_boladas?igshid=NGVhN2U2NjQ0Yg==">Instagram</LinkBlock>
          <LinkBlock Icon={FaFacebook} href="https://www.facebook.com/profile.php?id=61553282626827&mibextid=3JLxgoXK8XkhKqoE">Facebook</LinkBlock>        
        </article>
      </section>
  )
}
