import React, { useState, useEffect } from "react";
import clsx from "clsx";

interface ProgressIndicatorProps {
  progress: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  progress,
}) => {
  return (
    <div className="max-w-[1rem] max-h-[15rem] w-full h-full flex flex-col justify-center absolute top-10 -left-[47rem] gap-2">
      <div
        className={clsx(
          "h-[15px] w-[15px] px-1 border-2 rounded-full border-white bg-transparent transition-colors",
          progress >= 0 ? "bg-hero-color2 border-hero-color2" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-[15px] w-[15px] px-1 border-2 rounded-full border-white bg-transparent transition-colors",
          progress >= 1 ? "bg-hero-color2 border-hero-color2" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-[15px] w-[15px] px-1 border-2 rounded-full border-white bg-transparent transition-colors",
          progress >= 2 ? "bg-hero-color2 border-hero-color2" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-[15px] w-[15px] px-1 border-2 rounded-full border-white bg-transparent transition-colors",
          progress >= 3 ? "bg-hero-color2 border-hero-color2" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-[15px] w-[15px] px-1 border-2 rounded-full border-white bg-transparent transition-colors",
          progress >= 4 ? "bg-hero-color2 border-hero-color2" : ""
        )}
      ></div>
    </div>
  );
};
