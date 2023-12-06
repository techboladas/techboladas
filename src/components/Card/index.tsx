import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge"

type CardProps = {
  Icon:  IconType,
  title: string,
  description: string,
  className?: string
}

const ICON_STYLE = {
  fontSize: 82
}

export const Card = ({ Icon, title, description, className }: CardProps) => {
  return (
    <div className={twMerge("bg-pallete-30 w-2/3 h-full p-5 flex flex-col justify-center items-center rounded-lg", className)}>
      <Icon  style={ICON_STYLE}/>
      <h3 className="text-2xl text-pallete-10 mt-10">{ title }</h3>
      <p className="text-pallete-white">{ description }</p>
    </div>
  )
}
