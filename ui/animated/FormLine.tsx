"use client";
import react, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const FormLine: React.FC = () => {
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
        className="absolute -top-[60px] w-[2px] overflow-visible"
        ref={line}
      >
        <defs>
          <style>
            {`
      .cls-1LineIcon {
        fill: none;
        stroke: #3355D1;
        stroke-miterlimit: 10;
        stroke-width: 2px;
      }`}
          </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer_1">
          <motion.line
            variants={pathVariants}
            animate={lineInView ? "visible" : "hidden"}
            className="cls-1LineIcon"
            x1="1"
            x2="1"
            y2="453"
          />
        </g>
      </svg>
    </>
  );
};

export const FormCircle: React.FC = () => {
  const circle1 = useRef(null);
  const circle1InView = useInView(circle1);

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

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
      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 39.57 39.57"
        className="absolute top-0 -left-[15px] w-[32px]"
        ref={circle1}
      >
        <defs>
          <style>
            {`
.cls-1Circle {
  fill: none;
  stroke: #3355D1;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}

.cls-2Circle {
  fill: #3355D1;
}`}
          </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer_1">
          <motion.path
            className="cls-1Circle"
            d="M19.78,38.57C9.41,38.57,1,30.16,1,19.78S9.41,1,19.78,1"
            variants={pathVariants}
            animate={circle1InView ? "visible" : "hidden"}
          />
          <motion.path
            className="cls-1Circle"
            d="M19.78,1c10.37,0,18.78,8.41,18.78,18.78s-8.41,18.78-18.78,18.78"
            variants={pathVariants}
            animate={circle1InView ? "visible" : "hidden"}
          />
          <motion.circle
            className="cls-2Circle"
            cx="19.78"
            cy="19.78"
            r="8.68"
            variants={circleVariants}
            animate={circle1InView ? "visible" : "hidden"}
          />
        </g>
      </svg>
    </>
  );
};
