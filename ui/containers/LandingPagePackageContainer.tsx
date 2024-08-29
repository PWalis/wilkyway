"use client";
import Link from "next/link";
import react, { PropsWithChildren, ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface LandingPagePackageContainerProps extends PropsWithChildren {
  title: string;
}

export const LandingPagePackageContainer: React.FC<
  LandingPagePackageContainerProps
> = ({ children, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const linkVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const colorVariants = {
    hover: { color: "#FF9900" },
    noHover: { color: "#FFF" },
  };
  const svgVariants = { hover: { fill: "#FF9900" }, noHover: { fill: "#FFF" } };

  return (
    <div
      onTouchStart={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      onMouseEnter={() => handleMouseEnter()}
      className="w-[17rem] h-[19.5rem] bg-storm-gray py-10 px-5 flex flex-col items-center gap-3 relative"
    >
      <div className="w-full max-w-[4rem] ">
        <svg
          id="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 78 78"
        >
          <defs>
            <style>
              {`
  .cls-2check {
    fill: #303030;
    filter: url(#drop-shadow-1check);
  }`}
            </style>
            <filter id="drop-shadow-1check" filterUnits="userSpaceOnUse">
              <feOffset dx="1" dy="3" />
              <feGaussianBlur result="blur" stdDeviation="2" />
              <feFlood flood-color="#000" flood-opacity=".5" />
              <feComposite in2="blur" operator="in" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Layer_1-2" data-name="Layer_1">
            <rect
              className="cls-2check"
              x="5.42"
              y="3.51"
              width="64.93"
              height="64.93"
              rx="8.5"
              ry="8.5"
            />
            <g>
              <motion.rect
                variants={svgVariants}
                initial="noHover"
                animate={isHovered ? "hover" : "noHover"}
                x="12.56"
                y="33.88"
                width="29.27"
                height="16.59"
                transform="translate(37.79 -6.88) rotate(45)"
              />
              <motion.rect
                variants={svgVariants}
                initial="noHover"
                animate={isHovered ? "hover" : "noHover"}
                x="18.97"
                y="27.68"
                width="46.81"
                height="16.59"
                transform="translate(-13.03 40.5) rotate(-45)"
              />
            </g>
          </g>
        </svg>
      </div>
      <motion.h5
        variants={colorVariants}
        animate={isHovered ? "hover" : "noHover"}
        className="font-gunterz text-[1.25rem] text-center mt-2"
      >
        {title}
      </motion.h5>
      {children}
      <motion.div
        className="flex justify-center"
        variants={linkVariants}
        animate={isHovered ? "visible" : "hidden"}
        initial="hidden"
      >
        <Link
          style={{
            color: "#FF9900",
          }}
          className="absolute bottom-4 font-nobelUno text-[1.1rem]"
          href="/LandingPagePackage"
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  );
};
