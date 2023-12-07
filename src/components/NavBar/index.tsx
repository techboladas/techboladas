"use client"

import { FaWhatsapp, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'
import { IoIosMenu } from 'react-icons/io'
import { useMenu } from "./hook/useMenu"
import { Menu } from './components/Menu'
import { MenuItem } from './components/MenuItem'
import { Link } from 'react-scroll'
import A from 'next/link'

export const NavBar = () => {
  const { handleClick, grid, width, contentDisplay: display } = useMenu();
  const ICON_STYLE = { fontSize: '42px' }
  return (
    <nav className={`${width} h-screen bg-tech-secondary  p-1 text-2xl text-white fixed  grid ${grid} auto-rows-max  transition-all`}>
      <section className={`${display} flex-col gap-10 text-center w-48 mt-28  justify-self-end  col-span-2`}>
        <Link to="apresentation" smooth duration={500} >Apresentacao</Link>
        <Link to="service" smooth duration={500}>Servicos</Link>
        <Link to="catalog" smooth duration={500}>Catalogo</Link>
        <Link to="contact"smooth duration={500}>Contacto</Link>
      </section>
      <Menu className="col-span-1">
          <MenuItem className=" self-start justify-self-center w-full h-full border-0" onClick={handleClick}>
           <IoIosMenu style={{ fontSize: '60px'}}  /> 
          </MenuItem>
          <MenuItem>
            <A href="https://github.com/techboladas/" target="_blank" >
              <FaGithub style={ICON_STYLE} />
            </A>
          </MenuItem>
          <MenuItem>
            <A href="https://www.facebook.com/profile.php?id=61553282626827&mibextid=3JLxgoXK8XkhKqoE" target="_blank">
            <FaFacebook style={ICON_STYLE} />
            </A>
          </MenuItem>
          <MenuItem>
            <A href="https://instagram.com/tech_boladas?igshid=NGVhN2U2NjQ0Yg==">
              <FaInstagram style={ICON_STYLE}/>
            </A>
          </MenuItem>
          <MenuItem>
             <A href="https://wa.me/message/HIOFD5VOTKMRF1">
              <FaWhatsapp style={ICON_STYLE} />
            </A>
          </MenuItem>
      </Menu>
    </nav>
  )
}
