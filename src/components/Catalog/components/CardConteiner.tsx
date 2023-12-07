import { ContainerProps } from "postcss"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type CardContainerProps = {
  children: ReactNode,
  className?: string,
}

export const CardContainer = ({ children, className }: CardContainerProps) => {
  return (
    <article className={twMerge("w-11/12 p-5 m-5  gap-5 flex flex-col justify-center items-end  md:flex-row", className)}>{ children }</article>
  )
}
