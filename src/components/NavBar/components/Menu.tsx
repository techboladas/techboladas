import { twMerge } from "tailwind-merge";

type MenuProps = {
  children: JSX.Element[];
  className?: string;
};



export const Menu = ({ children, className }: MenuProps) => {
  return (
    <menu className="w-16 h-screen  justify-self-end bg-pallete-t10 md:w-20 ">
      <ul
        className={twMerge(
        "w-full h-screen flex flex-col",
          className
        )}
      >
        {children}
      </ul>
    </menu>
  );
};
