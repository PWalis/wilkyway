import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "375px",
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
      }
    },
  },
  plugins: [],
};
export default config;
