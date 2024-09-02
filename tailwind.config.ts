import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      peacock: {
        50: "#F2F7F6",
        100: "#E3EEEB",
        200: "#C9DED9",
        300: "#ADCDC5",
        400: "#93BDB3",
        500: "#77AC9F",
        600: "#5D9889",
        700: "#4D7F72",
        800: "#3C6259",
        900: "#2C4841",
        DEFAULT: "#2C4841",
        950: "#15231F",
      },
      jadeite: {
        50: "#EDF2EF",
        100: "#DFE7E2",
        200: "#BFCFC4",
        300: "#9FB7A7",
        400: "#7F9F89",
        500: "#61826C",
        DEFAULT: "#61826C",
        600: "#4E6957",
        700: "#3B4F42",
        800: "#27352C",
        900: "#141A16",
        950: "#090C0A"
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
