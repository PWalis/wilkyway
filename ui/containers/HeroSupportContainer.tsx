import react, { PropsWithChildren } from "react";

export const HeroSupportContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div
      style={{ backgroundImage: "url(../../public/)" }}
      className="rounded-[31px] w-full h-full max-w-[26rem] max-h-[22rem] flex flex-col px-12 py-16"
    >
      {children}
    </div>
  );
};
