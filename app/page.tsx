import Image from "next/image";
import { Header } from "@/ui/Header"
import { Hero } from "@/ui/sections/Hero";
import localFont from "next/font/local"
import local from "next/font/local";
import { PainPoints } from "@/ui/sections/PainPoints";
import { Solution } from "@/ui/sections/Solution";
import { LandingPagePackage } from "@/ui/sections/LandingPagePackage";
import { Testimonials } from "@/ui/sections/Testimonials";
import { Process } from "@/ui/sections/Process";
import { OurValues } from "@/ui/sections/OurValues";

const charcoalDance = localFont({
  src: "../public/fonts/Charcoal Dance-SVG.otf",
  variable: "--font-charcoal-dance",
})
const gunterz = localFont({
  src: '../public/fonts/Gunterz-Regular.otf',
  variable: "--font-gunterz",
})
const gunterzBoldItalic = localFont({
  src: '../public/fonts/Gunterz-BoldItalic.otf',
  variable: "--font-gunterz-bold-italic",
})
const gunterzBold = localFont({
  src: '../public/fonts/Gunterz-Bold.otf',
  variable: '--font-gunterz-bold',
})

export default function Home() {
  return (
    <main className={`${charcoalDance.variable} ${gunterz.variable} ${gunterzBold.variable} ${gunterzBoldItalic.variable}`}>
        <Hero />
        <PainPoints />
        <Solution />
        <LandingPagePackage />
        <Testimonials />
        <Process /> 
        <OurValues />
    </main>
  );
}
