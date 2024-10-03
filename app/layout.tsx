import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/ui/Header";
import { Footer } from "@/ui/Footer";
import { Form } from "@/ui/form/Form";

const gunterz = localFont({
  src: "../public/fonts/Gunterz-Regular.otf",
  variable: "--font-gunterz",
});
const gunterzBoldItalic = localFont({
  src: "../public/fonts/Gunterz-BoldItalic.otf",
  variable: "--font-gunterz-bold-italic",
});
const gunterzBold = localFont({
  src: "../public/fonts/Gunterz-Bold.otf",
  variable: "--font-gunterz-bold",
});

const gunterzItalic = localFont({
  src: "../public/fonts/Gunterz-MediumItalic.otf",
  variable: "--font-gunterz-medium-italic",
});

export const metadata: Metadata = {
  title: "WilkyWay",
  description:
    "Expert crafted conversion websites built for businesses who want a branded digital presence. At WilkyWay we craft websites that stand out with your business values and mission as our north star. From the look and feel of your website to the messaging to your customers everything is built to get the right people to buy into your brand. Don't settle for a template with your logo on it, get it done the WilkyWay. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${gunterz.variable} ${gunterzBold.variable} ${gunterzBoldItalic.variable} ${gunterzItalic.variable}`}
      >
        <Header />
        {children}
        <Form />
        <Footer />
      </body>
    </html>
  );
}
