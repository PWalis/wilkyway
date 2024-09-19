"use client";
import react, { PropsWithChildren } from "react";
import Link from "next/link";

export const CTA: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className="hover:bg-yellow-200 transition-all text-[#151E28] font-bold tracking-wider antialiased text-[1.25rem] w-full sm:max-w-64 bg-CTA shadow-CTA shadow-[0px_0px_10px_-2px] px-5 py-4 border-transparentt">
      <Link  href="/#AwesomeWebsite">{children}</Link>
    </button>
  );
};

export const SecondaryCTA: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <button
      style={{ borderStyle: "" }}
      className=" antialiased text-[1.25rem] w-full tracking-wider sm:max-w-64 text-formBlue font-bold px-5 py-4 bg-[#0F202B] hover:bg-blue-700/20 transition-all"
      >
      {children}
    </button>
    // just to redeploy
  );
};

interface LearnMoreInterface {
  color: string;
  link: string;
}

export const LearnMore: React.FC<LearnMoreInterface> = ({ color, link }) => {
  return (
    <button
      className={`absolute right-10 bottom-5 bg-[#D9D9D9] text-[${color}]`}
    >
      Learn More
    </button>
  );
};
