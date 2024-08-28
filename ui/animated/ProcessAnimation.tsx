"use client";
import react, { useState, useEffect } from "react";
import {
  useAnimate,
  usePresence,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

export const ProcessAnimation: React.FC = () => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [toggle, setToggle] = useState(true);
  const [isPresent, safeToRemove] = usePresence();
  const pointerMotionValue = useMotionValue(0);

  useEffect(() => {
    animate(
      [
        [scope.current, { y: "-55%", x: "30%" }, { delay: 0.5 }],
        [scope.current, { scale: 0.9 }, { duration: 0.1 }],
        [pointerMotionValue, 1, { duration: 0.001 }],
        [scope.current, { scale: 1 }],
        [pointerMotionValue, 0, { duration: 0 }],
        [scope.current, { y: "0%", x: "0%" }, { delay: 0.8 }],
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

  useMotionValueEvent(pointerMotionValue, "change", () => {
    if (pointerMotionValue.get() > 0) {
      setToggle(true);
    } else if (pointerMotionValue.get() === 0) {
      setToggle(false);
    }
  });

  return (
    <div ref={scope2} style={{ opacity: 0 }} className="relative w-full h-full">
      <div
        ref={scope}
        className="w-[3rem] sm:w-[4rem] absolute top-[53%] sm:top-[64%] left-[50%] z-10"
      >
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 185.29 242.41"
        >
          <defs>
            <style>
              {`
  .cls-1quote100 {
    fill: #f2f2f2;
    stroke: #333;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }`}
            </style>
          </defs>
          <g id="Layer_1-2" data-name="Layer_1">
            <path
              style={{ fill: "#f2f2f2", strokeWidth: "20px" }}
              className="cls-1quote100"
              d="M171.32,151.57l-61.41,4.3,20.99,56.22c1.2,3.21-.04,6.62-2.74,7.63l-33.19,12.39c-2.72,1.02-5.89-.75-7.09-3.96l-20.99-56.22-49.21,37c-3.31,2.49-8.1-1.11-7.65-5.73L28.9,13.17c.29-3.03,3.45-4.21,5.68-2.12l138.77,131.18c3.39,3.18,2.13,9.03-2.02,9.34Z"
            />
          </g>
        </svg>
      </div>

      <div className="w-full sm:w-[30rem] px-3">
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 851.55 785.18"
        >
          <defs>
            <style>
              {`
            .cls-1quote2 {
              font-size: 18px;
            }
      
            .cls-1quote2, .cls-2quote2 {
              fill: #606060;
              font-family: Gunterz-Bold, Gunterz;
              font-weight: 700;
            }
      
            .cls-2quote2 {
              font-size: 48px;
            }
      
            .cls-3quote2 {
              fill: #c4c4c4;
            }
      
            .cls-4quote2 {
              fill: #d2d6db;
            }
      
            .cls-5quote2 {
              fill: #bbd4ff;
            }
      
            .cls-6quote2 {
              clip-path: url(#clippath);
            }
      
            .cls-7quote2 {
              fill: #e6e7e8;
            }
      
            .cls-8quote2 {
              fill: #e8e8e8;
              filter: url(#drop-shadow-1quote2);
            }`}
            </style>
            <clipPath id="clippath">
              <rect
                className="cls-3quote2"
                width="851.55"
                height="785.18"
                rx="56.84"
                ry="56.84"
              />
            </clipPath>
            <filter id="drop-shadow-1quote2" filterUnits="userSpaceOnUse">
              <feOffset dx="1" dy="1" />
              <feGaussianBlur result="blur" stdDeviation="3" />
              <feFlood flood-color="#7f7f7f" flood-opacity=".17" />
              <feComposite in2="blur" operator="in" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Layer_1-2" data-name="Layer_1">
            <g>
              <rect
                className="cls-3quote2"
                width="851.55"
                height="785.18"
                rx="56.84"
                ry="56.84"
              />
              <g className="cls-6quote2">
                <rect
                  className="cls-7quote2"
                  y="-6.44"
                  width="852.14"
                  height="791.62"
                />
                <rect
                  className="cls-8quote2"
                  x="-2.77"
                  width="854.91"
                  height="75.03"
                />
              </g>
            </g>
            <rect
              className="cls-4quote2"
              x="74.51"
              y="26.91"
              width="676.9"
              height="27.28"
              rx="13.64"
              ry="13.64"
            />
            <rect
              className="cls-4quote2"
              x="768.75"
              y="26.91"
              width="27.28"
              height="27.28"
              rx="13.64"
              ry="13.64"
            />
            <text className="cls-2quote2" transform="translate(242.65 229.64)">
              <tspan x="0" y="0">
                Get A Quote
              </tspan>
            </text>
            <rect
              className="cls-4quote2"
              x="196.13"
              y="277.77"
              width="220.52"
              height="45.47"
            />
            <rect
              className="cls-4quote2"
              x="434.9"
              y="277.77"
              width="220.52"
              height="45.47"
            />
            <rect
              className="cls-4quote2"
              x="196.13"
              y="343.71"
              width="220.52"
              height="45.47"
            />
            <rect
              className="cls-4quote2"
              x="194.24"
              y="408.13"
              width="461.19"
              height="109.89"
            />
            <rect
              className="cls-5quote2"
              x="329.89"
              y="547.53"
              width="191.76"
              height="51.54"
            />
            <rect
              className="cls-4quote2"
              x="433.72"
              y="343.71"
              width="220.52"
              height="45.47"
            />
            <text className="cls-1quote2" transform="translate(386.65 577.92)">
              <tspan x="0" y="0">
                submit
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};
