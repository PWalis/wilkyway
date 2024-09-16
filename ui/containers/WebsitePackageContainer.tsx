import react, { PropsWithChildren } from "react";

export const WebsitePackageContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="max-w-[20rem] max-h-[20rem] flex flex-col items-center bg-transparent text-center">{children}</div>
  );
};
