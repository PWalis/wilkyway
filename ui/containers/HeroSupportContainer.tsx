import react, { PropsWithChildren } from "react";

export const HeroSupportContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div
      style={{ background: "-webkit-linear-gradient(45deg, #223142 0%, #001824 40%,  #001824 60%, #223142 100%)" }}
      className="rounded-[31px] w-full h-full max-w-[26rem] max-h-[22rem] flex flex-col px-12 py-16"
    >
      {children}
    </div>
  );
};
