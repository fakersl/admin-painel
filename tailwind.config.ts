import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#4709ff",
        topHeadingPrimary: "#06011c",
        topHeadingSecondary: "#0c0235",
        pink: "#F26938", // Cor Rosa

        // pink: "#DD91F2" --> Cor Rosa
        // pink: "#559BD9" --> Cor Azul
        // pink: "#63F295" --> Cor Verde
        // pink: "#D9BA5F" --> Cor Amarela
        // pink: "#F26938" --> Cor Laranja
      },

      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
};
export default config;
