'use client'
import react, { PropsWithChildren } from "react";
import { useFormSwitch } from "@/context/FormSwitch";

export const CTA: React.FC<PropsWithChildren> = ({ children }) => {
  const {formSwitch, setFormSwitch} = useFormSwitch()
  return (
    <button onClick={() => {setFormSwitch(true)}} className="text-crystal-white font-nobelUno antialiased text-[1.25rem] w-full max-w-64 bg-sun-orange px-5 py-5 border-transparent">
      {children}
    </button>
  );
};

export const SecondaryCTA: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className="border-2 antialiased text-[1.25rem] w-full border-crystal-white max-w-64 bg-transparent text-crystal-white px-5 py-5">
      {children}
    </button>
  );
};

interface LearnMoreInterface {color: string, link: string}

export const LearnMore: React.FC<LearnMoreInterface> = ({ color, link }) => {
  return (
    <button className={`absolute right-10 bottom-5 bg-[#D9D9D9] text-[${color}]`}>Learn More</button>
  )
}
