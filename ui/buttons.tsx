import react, { PropsWithChildren } from "react";

export const CTA: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className="text-crystal-white font-nobelUno antialiased text-[1.25rem] w-full max-w-64 bg-sun-orange px-5 py-5 border-transparent">
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
