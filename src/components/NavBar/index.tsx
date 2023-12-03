"use client"

import { FaWhatsapp, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'
import { IoIosMenu } from 'react-icons/io'
import Link from "next/link"
import { useMenu } from "./hook/useMenu"
import { Menu } from './components/Menu'
import { MenuItem } from './components/MenuItem'

export const NavBar = () => {
  const { open, close, isOpen, grid, width, contentDisplay: display } = useMenu();
  const ICON_STYLE = { fontSize: '42px' }
  return (
    <nav className={`${width} h-screen bg-pallete-30 text-2xl text-white fixed  grid ${grid}  transition-all`}>
      <section className={`${display} flex-col gap-10 text-center w-48 mt-28  justify-self-center  col-span-2`}>
        <Link href="#apresentation">Apresentacao</Link>
        <Link href="#">Servicos</Link>
        <Link href="#">Contacto</Link>
        <p className="items-end">Create by <strong>T</strong></p>
      </section>
      <Menu className="col-span-1">
          <MenuItem className="self-start w-20 h-96 border-0" onClick={(event: MouseEvent) => isOpen ? close() : open()}>
            <p className="h-20 w-min p-1 text-center  ">
              <IoIosMenu style={{ fontSize: '50px'}} />
            </p>
          </MenuItem>
          <MenuItem className="hover:bg-violet-600">
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
            <Link href="https://instagram.com/tech_boladas?igshid=NGVhN2NjQ0Yg==" target="_blank">
              <FaInstagram style={ICON_STYLE}/>
            </Link>
          </MenuItem>
          <MenuItem>
             <Link href="https://wa.me/message/HIOFD5VOTKMRF1" target="_blank">
              <FaWhatsapp style={ICON_STYLE} />
            </Link>
          </MenuItem>
      </Menu>
    </nav>
  )
}
