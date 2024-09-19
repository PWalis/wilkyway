"use client";
import react, { useState, useEffect } from "react";
import {
  useAnimate,
  usePresence,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

export const SolutionAnimation2: React.FC = () => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [toggle, setToggle] = useState(false);
  const [isPresent, safeToRemove] = usePresence();
  const pointerMotionValue = useMotionValue(0);

  useEffect(() => {
    animate([
      [scope.current, { y: "-55%", x: "30%" }, { delay: 0.5 }],
      [scope.current, { scale: 0.9 }, { duration: 0.1 }],
      [pointerMotionValue, 1, { duration: 0.001 }],
      [scope.current, { scale: 1 }],
      [pointerMotionValue, 0, { duration: 0 }],
      [scope.current, { y: "0%", x: "0%" }, { delay: 0.8 }],
    ], {repeat: Infinity});

    if (isPresent) {
      const enterAnimation = async () => {
        await animate2(scope2.current, { opacity: 1, duration: 1 });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        // await animate2(scope2.current, { opacity: 0, duration: 0.001  });
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
      .cls-100 {
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
              className="cls-100"
              d="M171.32,151.57l-61.41,4.3,20.99,56.22c1.2,3.21-.04,6.62-2.74,7.63l-33.19,12.39c-2.72,1.02-5.89-.75-7.09-3.96l-20.99-56.22-49.21,37c-3.31,2.49-8.1-1.11-7.65-5.73L28.9,13.17c.29-3.03,3.45-4.21,5.68-2.12l138.77,131.18c3.39,3.18,2.13,9.03-2.02,9.34Z"
            />
          </g>
        </svg>
      </div>

      <div className="w-full sm:w-[30rem]">
        {toggle ? (
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 851.55 785.18"
          >
            <defs>
              <style>
                {`
      .cls-19 {
        fill: #5c6fff;
      }

      .cls-2 {
        fill: #e6e7e8;
      }`}
              </style>
            </defs>
            <g id="Layer_1-2" data-name="Layer_1">
              <g>
                <rect
                  className="cls-2"
                  x="0"
                  width="851.55"
                  height="785.18"
                  rx="56.84"
                  ry="56.84"
                />
                <rect
                  className="cls-19"
                  x="68.05"
                  y="269.33"
                  width="715.45"
                  height="260.61"
                  rx="21.27"
                  ry="21.27"
                />
                <g>
                  <path d="M204.17,375.94h21.83c8.33,0,14.66,4.71,14.66,13.29,0,4.82-2.29,8.19-5.84,10.44,5.1,2.07,8.33,6.08,8.33,12.2,0,8.58-6.43,13.32-15.08,13.29h-23.91v-49.22ZM224.63,395.81c3.62,0,6.71-2.67,6.71-6.57s-3.13-6.08-6.71-6.08h-11.11v12.66h11.11ZM226.85,418.03c4.46,0,8.33-3.13,8.33-7.88s-3.83-7.35-8.33-7.35h-13.32v15.22h13.32Z" />
                  <path d="M248.45,400.55c0-15.22,9.81-25.77,25.17-25.77s25.17,10.55,25.17,25.77-9.77,25.73-25.17,25.73-25.17-10.51-25.17-25.73ZM273.62,416.97c9.67,0,16.1-6.93,16.1-16.42s-6.43-16.42-16.1-16.42-16.1,6.89-16.1,16.42,6.43,16.42,16.1,16.42Z" />
                  <path d="M303.17,400.55c0-15.22,9.81-25.77,25.17-25.77s25.17,10.55,25.17,25.77-9.77,25.73-25.17,25.73-25.17-10.51-25.17-25.73ZM328.34,416.97c9.67,0,16.1-6.93,16.1-16.42s-6.43-16.42-16.1-16.42-16.1,6.89-16.1,16.42,6.43,16.42,16.1,16.42Z" />
                  <path d="M360,375.94h9.32v19.3l16.91-19.3h12.09l-20.25,23.1,20.43,26.12h-12.23l-14.2-19.23-2.74,3.09v16.14h-9.32v-49.22Z" />
                  <path d="M438.85,375.94h11.46l18.63,49.22h-9.81l-4.15-10.83h-20.85l-4.11,10.83h-9.84l18.67-49.22ZM451.61,405.51l-7.1-18.49-7.03,18.49h14.13Z" />
                  <path d="M490.81,400.55c0-15.22,9.81-25.77,25.17-25.77,9.84,0,17.37,4.32,21.55,11.39l-8.33,4.46c-2.81-4.04-7.42-6.5-13.22-6.5-9.67,0-16.1,6.89-16.1,16.42s6.43,16.42,16.1,16.42c5.8.04,10.41-2.43,13.22-6.47l8.33,4.46c-4.18,7.07-11.71,11.39-21.55,11.32-15.36,0-25.17-10.51-25.17-25.73Z" />
                  <path d="M561.35,375.94h11.46l18.63,49.22h-9.81l-4.15-10.83h-20.85l-4.11,10.83h-9.84l18.67-49.22ZM574.11,405.51l-7.1-18.49-7.03,18.49h14.13Z" />
                  <path d="M597.96,375.94h9.32v40.39h22.71v8.82h-32.03v-49.22Z" />
                  <path d="M637.6,375.94h9.32v40.39h22.71v8.82h-32.03v-49.22Z" />
                </g>
              </g>
            </g>
          </svg>
        ) : (
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 851.55 785.18"
          >
            <defs>
              <style>
                {`
      .cls-19 {
        fill: #718cff;
      }

      .cls-2 {
        fill: #e6e7e8;
      }`}
              </style>
            </defs>
            <g id="Layer_1-2" data-name="Layer_1">
              <g>
                <rect
                  className="cls-2"
                  x="0"
                  width="851.55"
                  height="785.18"
                  rx="56.84"
                  ry="56.84"
                />
                <rect
                  className="cls-19"
                  x="68.05"
                  y="269.33"
                  width="715.45"
                  height="260.61"
                  rx="21.27"
                  ry="21.27"
                />
                <g>
                  <path d="M204.17,375.94h21.83c8.33,0,14.66,4.71,14.66,13.29,0,4.82-2.29,8.19-5.84,10.44,5.1,2.07,8.33,6.08,8.33,12.2,0,8.58-6.43,13.32-15.08,13.29h-23.91v-49.22ZM224.63,395.81c3.62,0,6.71-2.67,6.71-6.57s-3.13-6.08-6.71-6.08h-11.11v12.66h11.11ZM226.85,418.03c4.46,0,8.33-3.13,8.33-7.88s-3.83-7.35-8.33-7.35h-13.32v15.22h13.32Z" />
                  <path d="M248.45,400.55c0-15.22,9.81-25.77,25.17-25.77s25.17,10.55,25.17,25.77-9.77,25.73-25.17,25.73-25.17-10.51-25.17-25.73ZM273.62,416.97c9.67,0,16.1-6.93,16.1-16.42s-6.43-16.42-16.1-16.42-16.1,6.89-16.1,16.42,6.43,16.42,16.1,16.42Z" />
                  <path d="M303.17,400.55c0-15.22,9.81-25.77,25.17-25.77s25.17,10.55,25.17,25.77-9.77,25.73-25.17,25.73-25.17-10.51-25.17-25.73ZM328.34,416.97c9.67,0,16.1-6.93,16.1-16.42s-6.43-16.42-16.1-16.42-16.1,6.89-16.1,16.42,6.43,16.42,16.1,16.42Z" />
                  <path d="M360,375.94h9.32v19.3l16.91-19.3h12.09l-20.25,23.1,20.43,26.12h-12.23l-14.2-19.23-2.74,3.09v16.14h-9.32v-49.22Z" />
                  <path d="M438.85,375.94h11.46l18.63,49.22h-9.81l-4.15-10.83h-20.85l-4.11,10.83h-9.84l18.67-49.22ZM451.61,405.51l-7.1-18.49-7.03,18.49h14.13Z" />
                  <path d="M490.81,400.55c0-15.22,9.81-25.77,25.17-25.77,9.84,0,17.37,4.32,21.55,11.39l-8.33,4.46c-2.81-4.04-7.42-6.5-13.22-6.5-9.67,0-16.1,6.89-16.1,16.42s6.43,16.42,16.1,16.42c5.8.04,10.41-2.43,13.22-6.47l8.33,4.46c-4.18,7.07-11.71,11.39-21.55,11.32-15.36,0-25.17-10.51-25.17-25.73Z" />
                  <path d="M561.35,375.94h11.46l18.63,49.22h-9.81l-4.15-10.83h-20.85l-4.11,10.83h-9.84l18.67-49.22ZM574.11,405.51l-7.1-18.49-7.03,18.49h14.13Z" />
                  <path d="M597.96,375.94h9.32v40.39h22.71v8.82h-32.03v-49.22Z" />
                  <path d="M637.6,375.94h9.32v40.39h22.71v8.82h-32.03v-49.22Z" />
                </g>
              </g>
            </g>
          </svg>
        )}
      </div>
    </div>
  );
};
