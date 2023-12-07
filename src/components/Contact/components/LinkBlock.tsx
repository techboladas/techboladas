import { ReactNode } from "react"
import { IconType } from "react-icons"
import Link from "next/link"

type LinkBlockProps = {
  children: ReactNode,
  href: string,
  Icon: IconType
}

export const LinkBlock = ({ children, href, Icon }: LinkBlockProps) => {
   return (
    <Link href={href} target="_blank" className="text-pallete-white text-xl flex items-center bg-pallete-t10 p-5 mb-2 rounded-xl  md:w-1/2">
       <Icon style={{ fontSize: '25px' }} /> 
      <span className="ml-1">{ children }</span>
    </Link>
  )
}
