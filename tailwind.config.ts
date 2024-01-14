import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",

      pallete: {
        60: "#33312B",
        30: "#403B30",
        10: "#DAA520",
        black: "#131313",
        white: "#ffffff",
        t60: "#33312B5E",
        t30: "#403B3059",
        t10: "#DAA5203D",
      },

      tech: {
        main: "#D9A521",
        secondary: "#333230",
        tertiary: "#403B30",
        background: "#161616",
      },
    },
  },
  plugins: [],
};
export default config;
