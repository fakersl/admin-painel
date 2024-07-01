import { withUt } from "uploadthing/tw";

const config = withUt({
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
        pink: "#604bfd", // Cor Rosa
      },

      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
});

export default config;
