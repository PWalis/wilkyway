import React, { PropsWithChildren } from "react";

export const PainPoint: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full max-w-[19rem] min-h-[21rem] bg-painPoint flex flex-col items-center px-5 pt-10 text-center gap-1">
      {children}
    </div>
  );
};
