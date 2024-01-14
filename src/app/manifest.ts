import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tech Boladas - Oficial Site",
    short_name: "Tech Boladas",
    description: "Tech Boladas evoluindo atraves da technologia",
    start_url: "/",
    display: "standalone",
    background_color: "#D9A521",
    theme_color: "#D9A521",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
