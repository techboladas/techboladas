import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type TextProps = {
  children: ReactNode
  className?: string,
}

export const Text = ({ children, className }: TextProps) => {
  return (
     <p className={twMerge("text-xl  text-pallete-white p-7", className)}> 
          {children}
    </p>
  )
}
