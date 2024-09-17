"use client";
import react, { useState, useEffect } from "react";
import {
  useAnimate,
  usePresence,
  useMotionValue,
  motion,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

export const SolutionAnimation: React.FC = () => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  // const [toggle, setToggle] = useState(true);
  const [isPresent, safeToRemove] = usePresence();
  const pointerMotionValue = useMotionValue(0);

  useEffect(() => {
    animate(
      [
        [
          scope.current,
          { x: "250%", y: "-115%" },
          { duration: 0.25, ease: "easeIn", delay: 1.5 },
        ],
        [pointerMotionValue, 1, { duration: 0.001 }],
        [
          scope.current,
          { x: "320%", y: "-150%" },
          { duration: 0.1, ease: "easeOut" },
        ],
        [
          scope.current,
          { x: "310%", y: "-140%" },
          { duration: 0.1, ease: "easeOut" },
        ],
        [
          scope.current,
          { x: "250%", y: "-115%" },
          { duration: 0.1, ease: "easeIn", delay: 1 },
        ],
        [pointerMotionValue, 0, { duration: 0.001 }],
        [
          scope.current,
          { x: "-10%", y: "10%" },
          { duration: 0.2, ease: "easeOut" },
        ],
        [
          scope.current,
          { x: "0%", y: "0%" },
          { duration: 0.2, ease: "easeOut" },
        ],
      ],
      { repeat: Infinity }
    );

    if (isPresent) {
      const enterAnimation = async () => {
        await animate2(scope2.current, { opacity: 1, duration: 1 });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        // await animate2(scope2.current, {opacity: 0, duration: 0.1 })
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent]);

  const color = useTransform(
    pointerMotionValue,
    [0, 1],
    ["#c1c6d3", "#ba3e38"]
  );

  return (
    <div ref={scope2} style={{ opacity: 0 }} className="relative w-full">
      <motion.div
        ref={scope}
        className="w-[3rem] sm:w-[4rem] absolute top-[50%] left-[40%] z-10"
      >
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 185.29 242.41"
        >
          <defs>
            <style>
              {`
      .cls-100 {
        fill: #f2f2f2;
        stroke: #333;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 24px;
      }`}
            </style>
          </defs>
          <g id="Layer_1-2" data-name="Layer_1">
            <path
              style={{ fill: "#f2f2f2", strokeWidth: "20px" }}
              className="cls-100"
              d="M171.32,151.57l-61.41,4.3,20.99,56.22c1.2,3.21-.04,6.62-2.74,7.63l-33.19,12.39c-2.72,1.02-5.89-.75-7.09-3.96l-20.99-56.22-49.21,37c-3.31,2.49-8.1-1.11-7.65-5.73L28.9,13.17c.29-3.03,3.45-4.21,5.68-2.12l138.77,131.18c3.39,3.18,2.13,9.03-2.02,9.34Z"
            />
          </g>
        </svg>
      </motion.div>

      <div className="w-full sm:w-[30rem]">
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 851.55 785.18"
        >
          <defs>
            <style>
              {`
      .cls-1, .cls-2 {
        stroke: #333;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 10px;
      }

      .cls-1, .cls-3 {
        fill: none;
      }

      .cls-2 {
        fill: #494949;
      }

      .cls-4 {
        fill: #c1c6d3;
      }

      .cls-5 {
        clip-path: url(#clippath-1);
      }

      .cls-6 {
        fill: #d2d6db;
      }

      .cls-7 {
        fill: #ba3e38;
      }

      .cls-8 {
        fill: #e6e6e8;
        filter: url(#drop-shadow-1);
      }

      .cls-9 {
        clip-path: url(#clippath);
      }

      .cls-10 {
        fill: #e6e7e8;
      }`}
            </style>
            <clipPath id="clippath">
              <rect
                className="cls-3"
                width="851.55"
                height="785.18"
                rx="56.84"
                ry="56.84"
              />
            </clipPath>
            <clipPath id="clippath-1">
              <rect
                className="cls-3"
                x="-8.55"
                y="-5.74"
                width="867.41"
                height="292.55"
              />
            </clipPath>
            <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
              <feOffset dx="7" dy="7" />
              <feGaussianBlur result="blur" stdDeviation="5" />
              <feFlood flood-color="#cccaca" flood-opacity=".5" />
              <feComposite in2="blur" operator="in" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Layer_1-2" data-name="Layer_1">
            <g>
              <g className="cls-9">
                <rect
                  className="cls-10"
                  x="-2.87"
                  y="-2.33"
                  width="857.18"
                  height="787.51"
                />
                <g className="cls-5">
                  <rect
                    className="cls-4"
                    x="0"
                    y="-1.83"
                    width="284.53"
                    height="271.35"
                  />
                  <motion.rect
                    className=""
                    style={{ fill: color }}
                    x="569.05"
                    y="-1.83"
                    width="284.53"
                    height="293.55"
                  />
                  <rect
                    className="cls-4"
                    x="284.53"
                    y="-1.83"
                    width="284.53"
                    height="271.35"
                  />
                </g>
                <path
                  className="cls-8"
                  d="M-1.35,264.72h819.59c19.07,0,34.53,15.46,34.53,34.53v374.09H-1.35"
                />
                <path
                  className="cls-6"
                  d="M0,363.22h105.39c59.86,0,108.38,48.52,108.38,108.38h0c0,59.86-48.52,108.38-108.38,108.38H0"
                />
              </g>
              <line
                className="cls-2"
                x1="756.35"
                y1="94.12"
                x2="657.26"
                y2="193.21"
              />
              <line
                className="cls-2"
                x1="657.26"
                y1="94.12"
                x2="756.35"
                y2="193.21"
              />
              <line
                className="cls-1"
                x1="73.63"
                y1="138.72"
                x2="213.77"
                y2="138.72"
              />
              <rect
                className="cls-1"
                x="375.77"
                y="84.72"
                width="100.99"
                height="100.99"
                rx="5.6"
                ry="5.6"
              />
              <circle className="cls-6" cx="447.77" cy="471.72" r="108" />
              <circle className="cls-6" cx="713.27" cy="472.23" r="22.5" />
              <circle className="cls-6" cx="713.27" cy="548.22" r="22.5" />
              <circle className="cls-6" cx="713.27" cy="399.63" r="22.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
