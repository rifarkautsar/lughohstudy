import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F4EEE2",
        card: "#FBF7EF",
        ink: "#2E1B10",
        brown: {
          700: "#5C3A26",
          600: "#78492E",
          500: "#8E5A38",
        },
        rust: "#A2542E",
        mauve: {
          DEFAULT: "#C7A6AE",
          ink: "#5B3541",
          light: "#EADFE1",
        },
        gold: "#C89B3C",
        line: "#E4D6BE",
      },
      fontFamily: {
        display: ["var(--font-baloo)", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
        body: ["var(--font-jakarta)", "sans-serif"],
        arabic: ["var(--font-amiri)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
