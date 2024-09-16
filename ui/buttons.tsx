'use client'
import react, { PropsWithChildren } from "react";
import { useFormSwitch } from "@/context/FormSwitch";

export const CTA: React.FC<PropsWithChildren> = ({ children }) => {
  const {formSwitch, setFormSwitch} = useFormSwitch()
  return (
    <button onClick={() => {setFormSwitch(true)}} className="text-[#151E28] font-bold tracking-wider antialiased text-[1.25rem] w-full sm:max-w-64 bg-CTA px-5 py-4 border-transparent">
      {children}
    </button>
  );
};

export const SecondaryCTA: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <button style={{borderStyle: ""}} className=" antialiased text-[1.25rem] w-full tracking-wider sm:max-w-64 text-formBlue font-bold px-5 py-4 bg-[#0F202B]">
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
