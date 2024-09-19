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
        iphone12pro: "389px",
        iphone14max: "415px",
        "3sm": "430px",
        "2sm": "500px",
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
        "section-background": "#001824",
        CTA: "#FBCF36",
        "hero-color2": "#5A8CF9",
        "hero-checklist": "#7796B9",
        painPoint: "#071D2A",
        painPointAccent: "#CB5246",
        landingPagePackageAccent: "#18B560",
        testimonialAccent: "#ECA653",
        processAccent: "#5BD9D9",
        formBlue: "#3355D1",
        formInput: "#0A202D",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        gunterz: ["var(--font-gunterz)"],
        gunterzBoldItalic: ["var(--font-gunterz-bold-italic)"],
        gunterzBold: ["var(--font-gunterz-bold)"],
        nobelUno: ["var(--font-nobel-uno)"],
        charcoalDance: ["var(--font-charcoal-dance)"],
        gunterzItalic: ["var(--font-gunterz-medium-italic)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  darkMode: ["class", "class"],
  plugins: [],
};
export default config;
