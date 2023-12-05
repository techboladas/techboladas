"use client"

import { FaWhatsapp, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'
import { IoIosMenu } from 'react-icons/io'
import Link from "next/link"
import { useMenu } from "./hook/useMenu"
import { Menu } from './components/Menu'
import { MenuItem } from './components/MenuItem'

export const NavBar = () => {
  const { handleClick, grid, width, contentDisplay: display } = useMenu();
  const ICON_STYLE = { fontSize: '42px' }
  return (
    <nav className={`${width} h-screen bg-tech-secondary  p-1 text-2xl text-white fixed  grid ${grid} auto-rows-max  transition-all`}>
      <section className={`${display} flex-col gap-10 text-center w-48 mt-28  justify-self-end  row-span-2`}>
        <Link href="#">Apresentacao</Link>
        <Link href="#">Servicos</Link>
        <Link href="#">Contacto</Link>
        <p className="h-full self-end ">Create by <strong>T</strong></p>
      </section>
      <Menu className="col-span-1">
          <MenuItem className=" self-start justify-self-center w-full h-full border-0" onClick={handleClick}>
           <IoIosMenu style={{ fontSize: '60px'}}  /> 
          </MenuItem>
          <MenuItem>
            <Link href="https://github.com/techboladas/" target="_blank" >
              <FaGithub style={ICON_STYLE} />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="https://facebook.com/techboladas/" target="_blank">
            <FaFacebook style={ICON_STYLE} />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="@techboladas">
              <FaInstagram style={ICON_STYLE}/>
            </Link>
          </MenuItem>
          <MenuItem>
             <Link href="https://whatshap.com/send=872204494">
              <FaWhatsapp style={ICON_STYLE} />
            </Link>
          </MenuItem>
      </Menu>
    </nav>
  )
}
