import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type ContainerProps = {
  children: ReactNode,
  className?: string,
}

export const Container = ({children, className }: ContainerProps) => {
  return (
    <div className={twMerge("flex justify-center p-5", className)}>{children}</div>
  )
}
