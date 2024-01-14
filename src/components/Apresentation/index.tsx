"use client";

import { Link } from "react-scroll";

export const Apresentation = () => {
  return (
    <section id="apresentation" className="flex justify-center">
      <p className="w-4/5 mt-44 p-5 pl-10 grid text-2xl text-pallete-white md:w-1/2 ">
        Ola nos somos a tech boladas uma empresa de prestaçao de servicos de
        software.
        <br />
        <Link
          to="contact"
          smooth
          duration={500}
          className="bg-pallete-10 mt-5 w-max p-3 text-pallete-white text-xl rounded-full justify-self-end  pinter"
        >
          Contacte-nos
        </Link>
      </p>
    </section>
  );
};
