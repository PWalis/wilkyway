import React, { useState, useEffect } from "react";
import clsx from "clsx";

interface ProgressIndicatorProps {
  progress: number;
}

export const ProgressIndicator2: React.FC<ProgressIndicatorProps> = ({
  progress,
}) => {
  return (
    <div key="PI2" className="max-w-[1rem] max-h-[15rem] w-full h-full flex flex-col justify-center absolute top-10 -left-[47rem] gap-2">
      <div
        className={clsx(
          "h-[15px] w-[15px] px-1 border-2 rounded-full  transition-colors",
          progress >= 0 ? "bg-processAccent border-processAccent" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-[15px] w-[15px] px-1 border-2 rounded-full  transition-colors",
          progress >= 1 ? "bg-processAccent border-processAccent" : ""
        )}
      ></div>
      <div
        className={clsx(
          "h-[15px] w-[15px] px-1 border-2 rounded-full  transition-colors",
          progress >= 2 ? "bg-processAccent border-processAccent" : ""
        )}
      ></div>
    </div>
  );
};
