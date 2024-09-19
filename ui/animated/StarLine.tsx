"use client";
import react, { useRef } from "react";
import { motion, inView, useInView, delay } from "framer-motion";

export const StarLine: React.FC = () => {
  const line = useRef(null);
  const lineInView = useInView(line);
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <>
      <svg //LINE
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2 655.96"
        className="absolute -top-[5px] w-[2px] overflow-visible hidden sm:flex"
        ref={line}
      >
        <defs>
          <style>
            {`
      .cls-1LineIcon1 {
        fill: none;
        stroke: #b05ccd;
        stroke-miterlimit: 10;
        stroke-width: 2px;
      }`}
          </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer_1">
          <motion.line
            variants={pathVariants}
            animate={lineInView ? "visible" : "hidden"}
            className="cls-1LineIcon1"
            x1="1"
            x2="1"
            y2="655.96"
          />
        </g>
      </svg>
    </>
  );
};

export const StarLineMobile: React.FC = () => {
  const line = useRef(null);
  const lineInView = useInView(line);
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <>
      <svg //LINE
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2 655.96"
        className="absolute -top-[5px] w-[2px] overflow-visible sm:hidden"
        ref={line}
      >
        <defs>
          <style>
            {`
      .cls-1LineIcon1 {
        fill: none;
        stroke: #b05ccd;
        stroke-miterlimit: 10;
        stroke-width: 2px;
      }`}
          </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer_1">
          <motion.line
            variants={pathVariants}
            animate={lineInView ? "visible" : "hidden"}
            className="cls-1LineIcon1"
            x1="1"
            x2="1"
            y2="900"
          />
        </g>
      </svg>
    </>
  );
};

export const StarCircle: React.FC = () => {
  const circle1 = useRef(null);
  const circle1InView = useInView(circle1);

  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39.57 39.57"
      className="absolute -top-[3px] -left-[15px] w-[32px]"
      ref={circle1}
    >
      <defs>
        <style>
          {`
  .cls-1Circle1 {
    fill: none;
    stroke: #b05ccd;
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }

  .cls-2Circle1 {
    fill: #b05ccd;
  }`}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer_1">
        <motion.path
          className="cls-1Circle1"
          d="M19.78,38.57C9.41,38.57,1,30.16,1,19.78S9.41,1,19.78,1"
          variants={pathVariants}
          animate={circle1InView ? "visible" : "hidden"}
        />
        <motion.path
          className="cls-1Circle1"
          d="M19.78,1c10.37,0,18.78,8.41,18.78,18.78s-8.41,18.78-18.78,18.78"
          variants={pathVariants}
          animate={circle1InView ? "visible" : "hidden"}
        />
        <motion.circle
          className="cls-2Circle1"
          cx="19.78"
          cy="19.78"
          r="8.68"
          variants={circleVariants}
          animate={circle1InView ? "visible" : "hidden"}
        />
      </g>
    </svg>
  );
};
