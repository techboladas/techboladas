import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type TitleProps = {
  children: ReactNode,
  className?: string,
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h3  className={twMerge("w-full text-pallete-white text-2xl p-5 pl-10 bg-pallete-t10  rounded-r-lg md:ml-10", className)}>{ children }</h3>
  )
}
