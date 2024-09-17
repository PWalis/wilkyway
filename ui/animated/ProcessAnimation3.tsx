"use client";
import react, { useState, useEffect } from "react";
import { useAnimate, usePresence, motion } from "framer-motion";
import { useMotionTimeline } from "@/lib/UseMotionTimeline";

export const ProcessAnimation3: React.FC = () => {
  const [scope2, animate2] = useAnimate();
  const [toggle, setToggle] = useState(true);
  const [isPresent, safeToRemove] = usePresence();

  const scope = useMotionTimeline([
    ["#redLine1", { pathLength: 1, opacity: 1 }],
    ["#redLine2", { pathLength: 1, opacity: 1 }],
    ["#redLine3", { pathLength: 1, opacity: 1 }],
    [
      ["#launchLine", { pathLength: 1, opacity: 1 }],
      ["#launch", { opacity: 1, scale: 1 }],
      ["#launchText", { opacity: 1, scale: 1 }]
    ],
    [
      ["#check1", { pathLength: 1, opacity: 1 }],
      ["#checkBox1", { fill: "#8bb3cc" }],
    ],
    [
      ["#check2", { pathLength: 1, opacity: 1 }],
      ["#checkBox2", { fill: "#8bb3cc" }],
    ],
    [
      ["#check3", { pathLength: 1, opacity: 1 }],
      ["#checkBox3", { fill: "#8bb3cc" }],
    ],
    [
      ["#check4", { pathLength: 1, opacity: 1 }],
      ["#checkBox4", { fill: "#8bb3cc" }],
    ],
    [
      ["#check5", { pathLength: 1, opacity: 1 }],
      ["#checkBox5", { fill: "#8bb3cc" }],
    ],
  ]);

  useEffect(() => {
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

  const pathVariant = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2 },
    },
  };

  const checkBoxVariant = {
    gray: { fill: "#d2d6db" },
  };

  const launchVariant = {
    initial: { opacity: 0, scale: 1.3 },
  };

  return (
    <div
      ref={scope2}
      style={{ opacity: 0 }}
      className="flex justify-center w-full "
    >
      <div className="relative w-full lg:max-w-[30rem] px-3 ">
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 904.4 830.25"
          ref={scope}
        >
          <defs>
            <style>
              {`
      .cls-1calendar {
        stroke: #af3737;
        stroke-width: 7px;
      }

      .cls-1calendar, .cls-2calendar {
        fill: #8c2626;
      }

      .cls-1calendar, .cls-3calendar, .cls-4calendar {
        stroke-miterlimit: 10;
      }

      .cls-5calendar {
        fill: #8bb3cc;
      }

      .cls-6calendar, .cls-7calendar, .cls-3calendar, .cls-4calendar {
        fill: none;
      }

      .cls-8calendar {
        fill: #d2d6db;
      }

      .cls-7calendar {
        stroke: #7496af;
        stroke-linejoin: round;
      }

      .cls-7calendar, .cls-3calendar {
        stroke-linecap: round;
      }

      .cls-7calendar, .cls-3calendar, .cls-4calendar {
        stroke-width: 6px;
      }

      .cls-9calendar {
        fill: #557284;
      }

      .cls-3calendar, .cls-4calendar {
        stroke: #ba3e38;
      }

      .cls-1calendar0, .cls-1calendar1 {
        fill: #ba3e38;
      }

      .cls-1calendar1 {
        filter: url(#drop-shadow-1Calendar);
      }

      .cls-1calendar2 {
        fill: #7496af;
      }

      .cls-1calendar3 {
        clip-path: url(#clippathCalendar);
      }

      .cls-1calendar4 {
        fill: #e6e7e8;
      }`}
            </style>
            <clipPath id="clippathCalendar">
              <rect
                className="cls-6calendar"
                x="21.08"
                y="56.17"
                width="883.32"
                height="774.09"
                rx="33.04"
                ry="33.04"
              />
            </clipPath>
            <filter id="drop-shadow-1Calendar" filterUnits="userSpaceOnUse">
              <feOffset dx="7" dy="3" />
              <feGaussianBlur result="blur" stdDeviation="5" />
              <feFlood flood-color="#576666" flood-opacity=".36" />
              <feComposite in2="blur" operator="in" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Layer_1-2" data-name="Layer_1">
            <g>
              <rect
                className="cls-1calendar2"
                y="50.01"
                width="889.42"
                height="777.89"
                rx="41.44"
                ry="41.44"
              />
              <g className="cls-1calendar3">
                <rect
                  className="cls-1calendar4"
                  x="21.08"
                  y="52.26"
                  width="883.32"
                  height="778"
                />
                <rect
                  className="cls-1calendar1"
                  x="18.84"
                  y="52.26"
                  width="885.57"
                  height="138.79"
                />
                <g>
                  <rect
                    className="cls-8calendar"
                    x="189.24"
                    y="242.39"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="302.77"
                    y="242.39"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="416.3"
                    y="242.39"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="529.83"
                    y="242.39"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="643.36"
                    y="242.39"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="756.89"
                    y="242.39"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="75.7"
                    y="355.77"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="189.24"
                    y="355.77"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <motion.rect //checkBox 1
                    id="checkBox1"
                    className=""
                    variants={checkBoxVariant}
                    initial="gray"
                    x="302.77"
                    y="355.77"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <motion.rect //checkBox 2
                    id="checkBox2"
                    className=""
                    variants={checkBoxVariant}
                    initial="gray"
                    x="416.3"
                    y="355.77"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <motion.rect //checkBox 3
                    id="checkBox3"
                    className=""
                    variants={checkBoxVariant}
                    initial="gray"
                    x="529.83"
                    y="355.77"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <motion.rect //checkBox 4
                    id="checkBox4"
                    className=""
                    variants={checkBoxVariant}
                    initial="gray"
                    x="643.36"
                    y="355.77"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <motion.rect //checkBox 5
                    id="checkBox5"
                    className=""
                    variants={checkBoxVariant}
                    initial="gray"
                    x="756.89"
                    y="355.77"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="75.7"
                    y="467.84"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="189.24"
                    y="467.84"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="302.77"
                    y="467.84"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="416.3"
                    y="467.84"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="529.83"
                    y="467.84"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="643.36"
                    y="467.84"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="756.89"
                    y="467.84"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="75.7"
                    y="581.22"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="189.24"
                    y="581.22"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="302.77"
                    y="581.22"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="416.3"
                    y="581.22"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="529.83"
                    y="581.22"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="643.36"
                    y="581.22"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="756.89"
                    y="581.22"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="75.7"
                    y="693.29"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="189.24"
                    y="693.29"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="302.77"
                    y="693.29"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="416.3"
                    y="693.29"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="529.83"
                    y="693.29"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                  <rect
                    className="cls-8calendar"
                    x="643.36"
                    y="693.29"
                    width="92.89"
                    height="92.89"
                    rx="5.49"
                    ry="5.49"
                  />
                </g>
                <path
                  className="cls-1calendar2"
                  d="M842.29,831.24c-133.86,3.37-267.78,4.27-401.68,2.72,85.8-4.53,176.71-11.74,246.34-62.08,43.4-31.38,75.2-78.44,88.13-130.41,12.62,27.84,36.73,49.63,64.75,61.4,27.83,11.68,55.89,5.8,82.17,19.28-3.91,34.53-7.82,69.07-11.73,103.6"
                />
                <path
                  className="cls-9calendar"
                  d="M918.2,731.22c-78.9,80.39-184.5,111.12-313.1,99.07l32.1,101.45,313.1-99.07-32.1-101.45Z"
                />
              </g>
              <line
                className="cls-1calendar"
                x1="146.72"
                y1="150.47"
                x2="778.76"
                y2="150.47"
              />
              <g>
                <path
                  className="cls-2calendar"
                  d="M186.12,104.97c0,9.77-7.89,17.68-17.66,17.68-6.95,0-12.95-4.01-15.84-9.84-1.17-2.36-1.82-5.02-1.82-7.84,0-.24,0-.48.02-.72.38-9.42,8.13-16.94,17.64-16.94,5.12,0,9.73,2.17,12.93,5.66,1.99,2.13,3.46,4.76,4.2,7.69.34,1.38.53,2.82.53,4.32Z"
                />
                <path
                  className="cls-1calendar2"
                  d="M207.02,56.43c0,17.9-8.39,33.89-21.42,44.22-9.13,7.24-20.55,11.71-32.96,12.16-1.17-2.36-1.82-5.02-1.82-7.84,0-.24,0-.48.02-.72,11.64-.05,22.3-4.28,30.57-11.28,10.4-8.77,17.02-21.89,17.02-36.54,0-26.38-21.44-47.84-47.82-47.84s-47.84,21.46-47.84,47.84h-8.6C94.17,25.31,119.48,0,150.6,0s56.42,25.31,56.42,56.43Z"
                />
              </g>
              <g>
                <path
                  className="cls-2calendar"
                  d="M341.13,104.97c0,9.77-7.89,17.68-17.66,17.68-6.95,0-12.95-4.01-15.84-9.84-1.17-2.36-1.82-5.02-1.82-7.84,0-.24,0-.48.02-.72.38-9.42,8.13-16.94,17.64-16.94,5.12,0,9.73,2.17,12.93,5.66,1.99,2.13,3.46,4.76,4.2,7.69.34,1.38.53,2.82.53,4.32Z"
                />
                <path
                  className="cls-1calendar2"
                  d="M362.02,56.43c0,17.9-8.39,33.89-21.42,44.22-9.13,7.24-20.55,11.71-32.96,12.16-1.17-2.36-1.82-5.02-1.82-7.84,0-.24,0-.48.02-.72,11.64-.05,22.3-4.28,30.57-11.28,10.4-8.77,17.02-21.89,17.02-36.54,0-26.38-21.44-47.84-47.82-47.84s-47.84,21.46-47.84,47.84h-8.6c0-31.12,25.31-56.43,56.43-56.43s56.42,25.31,56.42,56.43Z"
                />
              </g>
              <g>
                <path
                  className="cls-2calendar"
                  d="M496.14,104.97c0,9.77-7.89,17.68-17.66,17.68-6.95,0-12.95-4.01-15.84-9.84-1.17-2.36-1.82-5.02-1.82-7.84,0-.24,0-.48.02-.72.38-9.42,8.13-16.94,17.64-16.94,5.12,0,9.73,2.17,12.93,5.66,1.99,2.13,3.46,4.76,4.2,7.69.34,1.38.53,2.82.53,4.32Z"
                />
                <path
                  className="cls-1calendar2"
                  d="M517.03,56.43c0,17.9-8.39,33.89-21.42,44.22-9.13,7.24-20.55,11.71-32.96,12.16-1.17-2.36-1.82-5.02-1.82-7.84,0-.24,0-.48.02-.72,11.64-.05,22.3-4.28,30.57-11.28,10.4-8.77,17.02-21.89,17.02-36.54,0-26.38-21.44-47.84-47.82-47.84s-47.84,21.46-47.84,47.84h-8.6c0-31.12,25.31-56.43,56.43-56.43s56.42,25.31,56.42,56.43Z"
                />
              </g>
              <g>
                <path
                  className="cls-2calendar"
                  d="M651.14,104.97c0,9.77-7.89,17.68-17.66,17.68-6.95,0-12.95-4.01-15.84-9.84-1.17-2.36-1.82-5.02-1.82-7.84,0-.24,0-.48.02-.72.38-9.42,8.13-16.94,17.64-16.94,5.12,0,9.73,2.17,12.93,5.66,1.99,2.13,3.46,4.76,4.2,7.69.34,1.38.53,2.82.53,4.32Z"
                />
                <path
                  className="cls-1calendar2"
                  d="M672.03,56.43c0,17.9-8.39,33.89-21.42,44.22-9.13,7.24-20.55,11.71-32.96,12.16-1.17-2.36-1.82-5.02-1.82-7.84,0-.24,0-.48.02-.72,11.64-.05,22.3-4.28,30.57-11.28,10.4-8.77,17.02-21.89,17.02-36.54,0-26.38-21.44-47.84-47.82-47.84s-47.84,21.46-47.84,47.84h-8.6c0-31.12,25.31-56.43,56.43-56.43s56.42,25.31,56.42,56.43Z"
                />
              </g>
              <g>
                <path
                  className="cls-2calendar"
                  d="M806.15,104.97c0,9.77-7.89,17.68-17.66,17.68-6.95,0-12.95-4.01-15.84-9.84-1.17-2.36-1.82-5.02-1.82-7.84,0-.24,0-.48.02-.72.38-9.42,8.13-16.94,17.64-16.94,5.12,0,9.73,2.17,12.93,5.66,1.99,2.13,3.46,4.76,4.2,7.69.34,1.38.53,2.82.53,4.32Z"
                />
                <path
                  className="cls-1calendar2"
                  d="M827.04,56.43c0,17.9-8.39,33.89-21.42,44.22-9.13,7.24-20.55,11.71-32.96,12.16-1.17-2.36-1.82-5.02-1.82-7.84,0-.24,0-.48.02-.72,11.64-.05,22.3-4.28,30.57-11.28,10.4-8.77,17.02-21.89,17.02-36.54,0-26.38-21.44-47.84-47.82-47.84s-47.84,21.46-47.84,47.84h-8.6c0-31.12,25.31-56.43,56.43-56.43s56.42,25.31,56.42,56.43Z"
                />
              </g>
              <motion.g
                id="launchText"
                variants={launchVariant}
                initial="initial"
              >
                <path
                  className="cls-1calendar0"
                  d="M98.18,412.48l5.4-1.79,5.75,17.33,12.16-4.03,1.56,4.7-17.56,5.83-7.31-22.03Z"
                />
                <path
                  className="cls-1calendar0"
                  d="M126.06,403.23l8.28-2.75,15.3,19.38-5.76,1.91-2.69-3.58-10.07,3.34v4.46s-5.74,1.91-5.74,1.91l.68-24.68ZM138.32,414.36l-5.84-7.78-1.32.44-.03,9.73,7.2-2.39Z"
                />
                <path
                  className="cls-1calendar0"
                  d="M144.57,397.09l5.4-1.79,4.48,13.51c1.04,3.14,3.69,3.67,6.13,2.86,2.41-.8,4.19-2.79,3.15-5.94l-4.48-13.51,5.43-1.8,4.29,12.92c2.1,6.31-.57,10.95-6.98,13.07-6.37,2.11-11.05-.08-13.14-6.4l-4.29-12.92Z"
                />
                <path
                  className="cls-1calendar0"
                  d="M168.92,389.01l5.4-1.79,14.93,10.31-4.56-13.75,5.4-1.79,7.31,22.03-5.4,1.79-14.9-10.22,4.53,13.66-5.4,1.79-7.31-22.03Z"
                />
                <path
                  className="cls-1calendar0"
                  d="M222.38,388.09c.22,5.37-3.11,9.31-9.04,11.28-7.37,2.45-13.36.03-15.89-7.61-2.53-7.64.79-13.14,8.19-15.6,6.11-2.03,11.26-.74,14.29,4.06l-5.04,2.68c-1.72-2.43-4.37-3.15-7.69-2.05-4.29,1.42-5.74,4.71-4.29,9.08,1.45,4.38,4.58,6.14,8.87,4.72,3.17-1.05,4.87-3.12,4.96-5.88l5.64-.7Z"
                />
                <path
                  className="cls-1calendar0"
                  d="M241.85,379.64l-10.81,3.59,2.88,8.67-5.4,1.79-7.31-22.03,5.4-1.79,2.88,8.66,10.81-3.59-2.87-8.66,5.4-1.79,7.31,22.03-5.4,1.79-2.88-8.67Z"
                />
              </motion.g>
              <motion.path //check 5
                variants={pathVariant}
                initial="hidden"
                id="check5"
                className="cls-7calendar"
                d="M770.83,409.49c4.14.97,10.93,3.11,17.93,8.16,6.49,4.68,10.51,9.93,12.76,13.4,2.33-7.5,6.64-18.29,14.83-29.51,7.15-9.79,14.82-16.58,20.66-21"
              />
              <motion.path //check 4
                variants={pathVariant}
                initial="hidden"
                id="check4"
                className="cls-7calendar"
                d="M659.42,409.49c4.14.97,10.93,3.11,17.93,8.16,6.49,4.68,10.51,9.93,12.76,13.4,2.33-7.5,6.64-18.29,14.83-29.51,7.15-9.79,14.82-16.58,20.66-21"
              />
              <motion.path //check 3
                variants={pathVariant}
                initial="hidden"
                id="check3"
                className="cls-7calendar"
                d="M544.06,409.49c4.14.97,10.93,3.11,17.93,8.16,6.49,4.68,10.51,9.93,12.76,13.4,2.33-7.5,6.64-18.29,14.83-29.51,7.15-9.79,14.82-16.58,20.66-21"
              />
              <motion.path //check 2
                variants={pathVariant}
                initial="hidden"
                id="check2"
                className="cls-7calendar"
                d="M428.58,409.49c4.14.97,10.93,3.11,17.93,8.16,6.49,4.68,10.51,9.93,12.76,13.4,2.33-7.5,6.64-18.29,14.83-29.51,7.15-9.79,14.82-16.58,20.66-21"
              />
              <motion.path //check 1
                variants={pathVariant}
                initial="hidden"
                id="check1"
                className="cls-7calendar"
                d="M315.93,409.49c4.14.97,10.93,3.11,17.93,8.16,6.49,4.68,10.51,9.93,12.76,13.4,2.33-7.5,6.64-18.29,14.83-29.51,7.15-9.79,14.82-16.58,20.66-21"
              />
              <motion.path // red line 3
                variants={pathVariant}
                initial="hidden"
                id="redLine3"
                className="cls-3calendar"
                d="M762.53,249.76c14.15,9.06,31.38,21.94,48.65,39.81,14.45,14.95,25.31,29.63,33.34,42.18"
              />
              <motion.path // red line 2
                variants={pathVariant}
                initial="hidden"
                id="redLine2"
                className="cls-3calendar"
                d="M647.33,249.76c14.15,9.06,31.38,21.94,48.65,39.81,14.45,14.95,25.31,29.63,33.34,42.18"
              />
              <motion.path // red line 1
                variants={pathVariant}
                initial="hidden"
                id="redLine1"
                className="cls-3calendar"
                d="M533.83,249.76c14.15,9.06,31.38,21.94,48.65,39.81,14.45,14.95,25.31,29.63,33.34,42.18"
              />
              <motion.path //launch circle
                variants={launchVariant}
                initial="initial"
                id="launch"
                className="cls-4calendar"
                d="M68.43,403.49c28.7-65.65,155.11-98.74,197.17-54.19,17.58,18.62,14.52,44.54,14.24,46.58-6.49,48.42-77.96,74.78-127.28,77.54-10.47.58-71.88,4.02-87.04-28.01-8.01-16.93.44-36.28,2.91-41.91Z"
              />
              <motion.path //launch line
                variants={pathVariant}
                initial="hidden"
                id="launchLine"
                className="cls-3calendar"
                d="M107.67,447.68c21.91-10.37,51.45-20.74,78.52-30.32,22.67-8.02,51.25-17.48,71.42-22.71"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
