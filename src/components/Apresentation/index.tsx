"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

export const Apresentation = () => {
  return (
    <section
      id="apresentation"
      className="flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl self-end text-white font-extrabold mt-44 mb-4 sm:self-center md:text-5xl">
        Tech Boladas
      </h1>
      <p className="w-4/5  p-5 pl-10 grid text-2xl text-pallete-white md:w-1/2 ">
        Ola nos somos uma empresa de prestaçao de servicos .
        <br />
        <Link
          to="contact"
          smooth
          duration={500}
          className="bg-pallete-10 mt-5 w-max p-3 text-pallete-60 text-xl font-bold rounded-full justify-self-end  pinter flex gap-4 items-center"
        >
          <FaWhatsapp />
          Contacte-nos
        </Link>
      </p>
    </section>
  );
};
