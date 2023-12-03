import { IconType } from "react-icons"

type CardProps = {
  icon:  IconType,
  title: string,
  description: string,
}

export const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="bg-pallete-30 w-2/3 h-full p-5 flex flex-col justify-center items-center rounded-lg">
      { icon }
      <h3 className="text-2xl text-pallete-10 mt-10">{ title }</h3>
      <p className="text-pallete-white">{ description }</p>
    </div>
  )
}
