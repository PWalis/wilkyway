"use client";
import react, { useState, useEffect } from "react";
import {
  useAnimate,
  usePresence,
  useMotionValue,
  useTransform,
  motion
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
        [scope.current, { y: "-35%", x: "60%" }, { delay: 0.5 }],
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

  const color = useTransform(
    pointerMotionValue,
    [0, 1],
    ["#5C8FFF", "#A2B8FC"]
  );

  return (
    <div ref={scope2} style={{ opacity: 0 }} className="relative w-full h-full">
      <div
        ref={scope}
        className="w-[2rem] absolute bottom-[25%] left-[50%] z-10 hidden lg:flex"
      >
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 185.29 242.41"
        >
          <defs>
            <style>
              {`
  .cls-100quote {
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
              className="cls-100quote"
              d="M171.32,151.57l-61.41,4.3,20.99,56.22c1.2,3.21-.04,6.62-2.74,7.63l-33.19,12.39c-2.72,1.02-5.89-.75-7.09-3.96l-20.99-56.22-49.21,37c-3.31,2.49-8.1-1.11-7.65-5.73L28.9,13.17c.29-3.03,3.45-4.21,5.68-2.12l138.77,131.18c3.39,3.18,2.13,9.03-2.02,9.34Z"
            />
          </g>
        </svg>
      </div>

      <div className="w-full sm:w-[30rem]">
        <svg
          id="Layer_2quote"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 874 793.96"
        >
          <defs>
            <style>
              {`
      .cls-1quote {
        fill: #606060;
      }

      .cls-2quote {
        fill: #5c8fff;
      }

      .cls-3quote {
        fill: #c4c4c4;
      }

      .cls-4quote {
        fill: #d2d6db;
      }

      .cls-5quote {
        clip-path: url(#clippathQuote);
      }

      .cls-6quote {
        fill: #e6e7e8;
      }

      .cls-7quote {
        fill: #e8e8e8;
        filter: url(#drop-shadow-1quote);
      }`}
            </style>
            <clipPath id="clippathQuote">
              <rect
                className="cls-3quote"
                x="11.25"
                y="8.78"
                width="851.55"
                height="785.18"
                rx="56.84"
                ry="56.84"
              />
            </clipPath>
            <filter id="drop-shadow-1quote" filterUnits="userSpaceOnUse">
              <feOffset dx="1" dy="1" />
              <feGaussianBlur result="blur" stdDeviation="3" />
              <feFlood flood-color="#7f7f7f" flood-opacity=".17" />
              <feComposite in2="blur" operator="in" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Layer_1-2" data-name="Layer_1">
            <g>
              <g>
                <rect
                  className="cls-3quote"
                  x="11.25"
                  y="8.78"
                  width="851.55"
                  height="785.18"
                  rx="56.84"
                  ry="56.84"
                />
                <g className="cls-5quote">
                  <rect
                    className="cls-6quote"
                    x="11.25"
                    y="2.34"
                    width="852.14"
                    height="791.62"
                  />
                  <rect
                    className="cls-7quote"
                    x="8.48"
                    y="8.78"
                    width="854.91"
                    height="75.03"
                  />
                </g>
              </g>
              <rect
                className="cls-4quote"
                x="85.77"
                y="35.68"
                width="676.9"
                height="27.28"
                rx="13.64"
                ry="13.64"
              />
              <rect
                className="cls-4quote"
                x="780"
                y="35.68"
                width="27.28"
                height="27.28"
                rx="13.64"
                ry="13.64"
              />
              <g>
                <path
                  className="cls-1quote"
                  d="M273.83,219.22h20.98v19.2h-7.15v-3.46c-2.93,2.64-6.91,4.42-12.34,4.42-11.67,0-19.39-6.48-19.39-18.96s7.82-18.96,19.92-18.96c9.03,0,15.7,3.65,18.48,10.66l-10.51,3.7c-1.3-3.12-3.7-4.75-7.97-4.75-6,0-8.74,3.41-8.74,9.36s2.74,9.36,8.74,9.36c3.94,0,6.48-1.54,7.68-4.32h-9.7v-6.24Z"
                />
                <path
                  className="cls-1quote"
                  d="M300.18,202.42h30.67v9.6h-19.54v4.46h17.91v7.87h-17.91v4.46h19.54v9.6h-30.67v-36Z"
                />
                <path
                  className="cls-1quote"
                  d="M346.35,212.02h-11.47v-9.6h34.08v9.6h-11.47v26.4h-11.14v-26.4Z"
                />
                <path
                  className="cls-1quote"
                  d="M398.48,202.42h15.94l13.06,36h-11.91l-1.87-5.66h-14.54l-1.87,5.66h-11.86l13.06-36ZM410.82,223.92l-3.6-10.75h-1.58l-3.6,10.75h8.79Z"
                />
                <path
                  className="cls-1quote"
                  d="M464.62,201.31c12.19,0,20.07,6.53,20.07,19.11,0,7.78-3.02,13.3-8.26,16.32l4.71-.38v9.07l-21.22-2.74.72-3.41c-9.89-1.34-16.08-7.73-16.08-18.87,0-12.58,7.87-19.11,20.07-19.11ZM473.36,220.42c0-6.05-2.98-9.5-8.74-9.5s-8.74,3.55-8.74,9.5,3.02,9.5,8.74,9.5,8.74-3.6,8.74-9.5Z"
                />
                <path
                  className="cls-1quote"
                  d="M489.39,202.42h11.14v21.65c0,3.98,2.78,5.71,6.24,5.71s6.14-1.73,6.14-5.71v-21.65h11.14v20.88c0,10.56-6.67,16.08-17.52,16.08s-17.14-5.52-17.14-16.08v-20.88Z"
                />
                <path
                  className="cls-1quote"
                  d="M548.82,201.31c12.19,0,20.07,6.53,20.07,19.11s-7.87,19.11-20.07,19.11-20.07-6.53-20.07-19.11,7.87-19.11,20.07-19.11ZM557.6,220.42c0-6.05-2.98-9.5-8.78-9.5s-8.79,3.55-8.79,9.5,3.02,9.5,8.79,9.5,8.78-3.6,8.78-9.5Z"
                />
                <path
                  className="cls-1quote"
                  d="M583.71,212.02h-11.47v-9.6h34.08v9.6h-11.47v26.4h-11.14v-26.4Z"
                />
                <path
                  className="cls-1quote"
                  d="M610.35,202.42h30.67v9.6h-19.54v4.46h17.91v7.87h-17.91v4.46h19.54v9.6h-30.67v-36Z"
                />
              </g>
              <rect
                className="cls-4quote"
                x="207.38"
                y="286.55"
                width="220.52"
                height="45.47"
              />
              <rect
                className="cls-4quote"
                x="446.15"
                y="286.55"
                width="220.52"
                height="45.47"
              />
              <rect
                className="cls-4quote"
                x="207.38"
                y="352.48"
                width="220.52"
                height="45.47"
              />
              <rect
                className="cls-4quote"
                x="205.49"
                y="416.91"
                width="461.19"
                height="109.89"
              />
              <motion.rect
                className=""
                style={{fill: color}}
                x="341.15"
                y="556.31"
                width="191.76"
                height="51.54"
              />
              <rect
                className="cls-4quote"
                x="444.98"
                y="352.48"
                width="220.52"
                height="45.47"
              />
              <g>
                <path
                  className="cls-1quote"
                  d="M400.03,582.02c1.66.95,4.25,1.6,6.09,1.6,1.13,0,1.8-.27,1.8-.68,0-1.44-8.77-.99-8.77-5.98,0-2.39,2.36-4.21,6.45-4.21s6.12,1.64,6.12,1.64l-1.67,3.06c-1.28-.72-3.4-1.21-4.77-1.21-1.12,0-1.85.27-1.85.76,0,1.44,8.77.9,8.77,6.05,0,1.96-1.87,4.14-6.23,4.14s-7.27-1.58-7.27-1.58l1.35-3.58Z"
                />
                <path
                  className="cls-1quote"
                  d="M414.07,573.2h4.18v8.12c0,1.5,1.04,2.14,2.34,2.14s2.3-.65,2.3-2.14v-8.12h4.18v7.83c0,3.96-2.5,6.03-6.57,6.03s-6.43-2.07-6.43-6.03v-7.83Z"
                />
                <path
                  className="cls-1quote"
                  d="M429.1,573.2h8.97c2.34,0,4.34,1.04,4.34,3.44,0,1.6-.88,2.59-2.16,3.06,1.55.4,2.57,1.39,2.57,3.28,0,2.47-1.87,3.73-4.34,3.73h-9.38v-13.5ZM433.28,576.8v1.8h3.91c.56,0,.94-.34.94-.92s-.38-.88-.94-.88h-3.91ZM433.28,581.21v1.89h4.18c.63,0,1.06-.25,1.06-.95s-.43-.94-1.06-.94h-4.18Z"
                />
                <path
                  className="cls-1quote"
                  d="M444.45,573.2h6.1l2.39,7.87,2.41-7.87h6.1v13.5h-4.18v-7.99l-2.36,7.99h-3.96l-2.34-7.99v7.99h-4.18v-13.5Z"
                />
                <path
                  className="cls-1quote"
                  d="M463.66,573.2h4.18v13.5h-4.18v-13.5Z"
                />
                <path
                  className="cls-1quote"
                  d="M473.85,576.8h-4.3v-3.6h12.78v3.6h-4.3v9.9h-4.18v-9.9Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
