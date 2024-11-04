import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

// --turqoise: #29b7ac;
// --navy: #0A3538;
// --black: #000;
// --white: #fdfefe;
// --yellow: #ffc62f;
// --red: #F9755D;
// --beige: #DCCBA7;
// --muted-red:#A65D48;

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
        "footer-texture": "url('/footer-bg.svg')",
      },
    },
    fontFamily: {
      sans: ["Archivo", "sans-serif"],
      serif: ["Peachi", "sans-serif"],
    },
    colors: {
      myTurqoise: {
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
      myNavy: "#0A3538",
      myBlack: "#0a0a0a",
      myWhite: "#fdfefe",
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
      myRed: {
        "50": "#fcf5f4",
        "100": "#faebe9",
        "200": "#f5d7d6",
        "300": "#ecb7b5",
        "400": "#e18e8b",
        "500": "#d26161",
        "600": "#bc4248",
        "700": "#9e323b",
        "800": "#8c2f39",
        "900": "#722933",
        "950": "#3f1217",
      },
      myRust: {
        "50": "#faf5f2",
        "100": "#f3e9e1",
        "200": "#e6d1c2",
        "300": "#d6b29b",
        "400": "#c58d72",
        "500": "#b97356",
        "600": "#a65d48",
        "700": "#8f4c3f",
        "800": "#744038",
        "900": "#5e3730",
        "950": "#321b18",
      },
      myBeige: {
        "50": "#faf7f2",
        "100": "#f3eee1",
        "200": "#e7dbc1",
        "300": "#dccba7",
        "400": "#c6a571",
        "500": "#ba8f55",
        "600": "#ac7b4a",
        "700": "#8f633f",
        "800": "#745138",
        "900": "#5f432f",
        "950": "#322118",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
