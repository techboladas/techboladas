import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tech Boladas - Oficial Site",
    short_name: "Tech Boladas",
    description: "Tech Boladas, uma empresa de prestação de serviços que a sua maior meta e a satisfação do cliente, Tech Boladas evoluindo atraves da tecnologia",
    start_url: "/",
    display: "standalone",
    background_color: "#D9A521",
    theme_color: "#D9A521",
    icons: [
      {
        src: "https://techboladas.vercel.app/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
