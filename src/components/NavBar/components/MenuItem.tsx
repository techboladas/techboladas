import { DOMAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type MenuItemProps = {
  children: ReactNode
  className?: string,
} & DOMAttributes<HTMLLIElement>

export const MenuItem = ({ children, className, ...rest }: MenuItemProps) => {
  return <li {...rest}  className={twMerge("flex justify-center p-5 h-20 border-2 border-pallete-30", className)}>{children}</li>
}
