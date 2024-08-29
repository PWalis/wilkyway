import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(calendar|input|button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "xs": "375px",
        "iphone14max": "415px",
        "iphone12pro": "389px", 
        "lg1/2": "964px",
        "lg3/4": "1155px",
        "xl1/2": "1355px",
        "xl3/4": "1421px",
      },
      colors: {
        "storm-black": "#141414",
        "storm-gray": "#272727",
        "cool-stone": "#3D3D3D",
        "sun-orange": "#FF9900",
        "crystal-white": "#FFFFF",
      },
      fontFamily: {
        gunterz: ["var(--font-gunterz)"],
        gunterzBoldItalic: ["var(--font-gunterz-bold-italic)"],
        gunterzBold: ["var(--font-gunterz-bold)"],
        nobelUno: ["var(--font-nobel-uno)"],
        charcoalDance: ["var(--font-charcoal-dance)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {primary: "#FF9900"},
        },
        dark: {
          // ...
          colors: {primary: "#FF9900"},
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
