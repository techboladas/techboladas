import { ReactNode } from "react"

type MainProps = {
  children: ReactNode
}

export const Main = ({children}: MainProps) => {
  return (
    <main className="flex flex-col min-h-scren w-screen justify-center bg-pallete-60  items-center md:w-screen ">
      {children}
    </main>
  )
}
