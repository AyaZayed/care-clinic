import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

// --turqoise: #29b7ac;
// --navy: #08262d;
// --black: #000;
// --white: #fdfefe;
// --yellow: #ffc62f;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["Archivo", "sans-serif"],
      serif: ["Peachi", "sans-serif"],
    },
    colors: {
      turqoise: {
        "50": "#f1fcf9",
        "100": "#d1f6ef",
        "200": "#a3ece0",
        "300": "#6ddbce",
        "400": "#3fc2b6",
        "500": "#29b7ac",
        "600": "#1b867f",
        "700": "#1a6b68",
        "800": "#195654",
        "900": "#194847",
        "950": "#09292a",
      },
      navy: "#08262d",
      black: "#000",
      white: "#fdfefe",
      myYellow: {
        "50": "#fffbeb",
        "100": "#fff4c6",
        "200": "#ffe888",
        "300": "#ffd64a",
        "400": "#ffc62f",
        "500": "#f9a007",
        "600": "#dd7802",
        "700": "#b75406",
        "800": "#94400c",
        "900": "#7a350d",
        "950": "#461a02",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
