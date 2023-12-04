import { twMerge } from "tailwind-merge";

type MenuProps = {
  children: JSX.Element[];
  className?: string;
};



export const Menu = ({ children, className }: MenuProps) => {
  return (
    <menu className="align-end justify-self-end bg-pallete-t10">
      <ul
        className={twMerge(
          " flex flex-col list-none justify-between",
          className
        )}
      >
        {children}
      </ul>
    </menu>
  );
};
