import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { MenuItem } from "./MenuItem"

const menuItem = typeof MenuItem

type MenuProps = {
  children: menuItem[]
  className?: string,
}

export const Menu = ({ children, className }: MenuProps) => {
  return (
    <menu className="align-end justify-self-end bg-pallete-t10">
      <ul  className={twMerge("w-max flex flex-col list-none justify-between", className)}>
        {children}
      </ul>
    </menu>
  )
}
