import React, { useState, useEffect } from "react";
import clsx from "clsx";

interface ProgressIndicatorProps {
  progress: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  progress,
}) => {
  return (
    <div className="max-w-[20rem] max-h-[15rem] w-full h-full flex flex-col justify-center absolute -right-[10rem] gap-1">
      <div className="flex items-center gap-1">
        <div
          className={clsx(
            "h-[0.5rem] px-1 border border-white bg-transparent transition-colors",
            progress >= 0 ? "bg-white" : ""
          )}
        ></div>
        <a
          className="hover:cursor-pointer"
          onClick={(e) => {
            let slide = document.getElementById("title1");
            e.preventDefault();
            slide &&
              slide.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
          }}
        >
          Leads
        </a>
      </div>
      <div className="flex items-center gap-1">
        <div
          className={clsx(
            "h-[0.5rem] px-1 border border-white bg-transparent transition-colors",
            progress >= 1 ? "bg-white" : ""
          )}
        ></div>
        <a
          className="hover:cursor-pointer"
          onClick={(e) => {
            let slide = document.getElementById("title2");
            e.preventDefault();
            slide &&
              slide.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
          }}
        >
          Sales
        </a>
      </div>
      <div className="flex items-center gap-1">
        <div
          className={clsx(
            "h-[0.5rem] px-1 border border-white bg-transparent transition-colors",
            progress >= 2 ? "bg-white" : ""
          )}
        ></div>
        <a
          className="hover:cursor-pointer"
          onClick={(e) => {
            let slide = document.getElementById("title3");
            e.preventDefault();
            slide &&
              slide.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
          }}
        >
          Trust
        </a>
      </div>
      <div className="flex items-center gap-1">
        <div
          className={clsx(
            "h-[0.5rem] px-1 border border-white bg-transparent transition-colors",
            progress >= 3 ? "bg-white" : ""
          )}
        ></div>
        <a
          className="hover:cursor-pointer"
          onClick={(e) => {
            let slide = document.getElementById("title4");
            e.preventDefault();
            slide &&
              slide.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
          }}
        >
          Copy
        </a>
      </div>
      <div className="flex items-center gap-1">
        <div
          className={clsx(
            "h-[0.5rem] px-1 border border-white bg-transparent transition-colors",
            progress >= 4 ? "bg-white" : ""
          )}
        ></div>
        <a
          className="hover:cursor-pointer"
          onClick={(e) => {
            let slide = document.getElementById("title5");
            e.preventDefault();
            slide &&
              slide.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
          }}
        >
          Speed
        </a>
      </div>
    </div>
  );
};
