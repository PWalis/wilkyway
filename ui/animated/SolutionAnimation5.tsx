"use client";
import react, { useState, useEffect } from "react";
import { useAnimate, usePresence, motion } from "framer-motion";

export const SolutionAnimation5: React.FC = () => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    animate(
      [
        [scope.current, { rotate: "2deg" }],
        [scope.current, { rotate: "0deg" }],
      ],
      { repeat: Infinity, duration: 0.1}
    );

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

  return (
    <div ref={scope2} className="relative w-full h-full">
      <div ref={scope} style={{rotate: "-1deg"}} className="w-full">
        <svg
          id="Layer_rocket"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="-142 0 600 580"
        >
          <defs>
            <style>
              {`
      .cls-1rocket {
        fill: #993131;
      }

      .cls-2rocket {
        fill: #4d4d4d;
      }

      .cls-3rocket {
        fill: #af2323;
      }

      .cls-4rocket {
        fill: #383d4c;
      }

      .cls-5rocket {
        fill: none;
      }

      .cls-6rocket {
        fill: #e0e0e0;
      }

      .cls-7rocket {
        clip-path: url(#clippath-1);
      }

      .cls-8rocket {
        fill: #d83b2b;
      }

      .cls-9rocket {
        fill: #2d3033;
      }

      .cls-1rocket0 {
        fill: #78a5b5;
      }

      .cls-1rocket1 {
        fill: #dba93d;
      }

      .cls-1rocket2 {
        fill: #597887;
      }

      .cls-1rocket3 {
        fill: #b3b3b3;
      }

      .cls-1rocket4 {
        fill: #f15a24;
      }

      .cls-1rocket5 {
        fill: #db5a24;
      }

      .cls-1rocket6 {
        fill: #435068;
      }

      .cls-1rocket7 {
        clip-path: url(#clippath-2);
      }

      .cls-1rocket8 {
        fill: #e58d00;
      }

      .cls-1rocket9 {
        clip-path: url(#clippath);
      }`}
            </style>
            <clipPath id="clippath">
              <path
                className="cls-5rocket"
                d="M240.86,165.63c0,40.57-12.12,118.91-34.24,182.06h-120.8c-22.12-63.15-34.24-141.49-34.24-182.06C51.58,96.85,87.77,25.7,145.74.2c.05-.02.12-.05.17-.07.1-.04.2-.09.3-.13.1.04.2.09.3.13,58.07,25.43,94.34,96.66,94.34,165.5Z"
              />
            </clipPath>
            <clipPath id="clippath-1">
              <path
                className="cls-5rocket"
                d="M216.39,63.82c0-18.19-147.04-18.19-147.04,0V-1.36s147.04,0,147.04,0V63.82Z"
              />
            </clipPath>
            <clipPath id="clippath-2">
              <rect
                className="cls-5rocket"
                x="134.03"
                y="240.24"
                width="23.73"
                height="153.2"
                rx="11.87"
                ry="11.87"
              />
            </clipPath>
          </defs>
          <g id="Layer_1-2" data-name="Layer_1">
            <path
              className="cls-1rocket4"
              d="M169.1,348.85c.13.05.26.1.39.14-.13.05-.26.1-.39.14v-.27Z"
            />
            <path
              className="cls-1rocket4"
              d="M169.49,348.99c.13-.04.26-.09.39-.14v.27c-.13-.04-.26-.09-.39-.14Z"
            />
            <g>
              <path
                className="cls-8rocket"
                d="M0,289.23v99.98c0,8.97,9.01,13.46,14.27,7.12l73.28-88.2c1.57-1.89,2.45-4.45,2.45-7.12v-71.66c0-5.56-3.74-10.06-8.36-10.06h-23.54c-2.22,0-4.34,1.06-5.91,2.95L2.45,282.11C.88,284,0,286.56,0,289.23Z"
              />
              <path
                className="cls-1rocket"
                d="M40.72,239.96v100.76c0,9.04,9.01,13.56,14.27,7.17l73.28-88.88c1.57-1.9,2.45-4.48,2.45-7.17v-72.21c0-5.6-3.74-10.14-8.36-10.14h-23.54c-2.22,0-4.34,1.07-5.91,2.97l-49.74,60.33c-1.57,1.9-2.45,4.48-2.45,7.17Z"
              />
            </g>
            <g>
              <path
                className="cls-8rocket"
                d="M291.4,289.23v99.98c0,8.97-9.01,13.46-14.27,7.12l-73.28-88.2c-1.57-1.89-2.45-4.45-2.45-7.12v-71.66c0-5.56,3.74-10.06,8.36-10.06h23.54c2.22,0,4.34,1.06,5.91,2.95l49.74,59.87c1.57,1.89,2.45,4.45,2.45,7.12Z"
              />
              <path
                className="cls-1rocket"
                d="M250.67,239.96v100.76c0,9.04-9.01,13.56-14.27,7.17l-73.28-88.88c-1.57-1.9-2.45-4.48-2.45-7.17v-72.21c0-5.6,3.74-10.14,8.36-10.14h23.54c2.22,0,4.34,1.07,5.91,2.97l49.74,60.33c1.57,1.9,2.45,4.48,2.45,7.17Z"
              />
            </g>
            <path
              className="cls-1rocket4"
              d="M146.07,287.89c-.05,0-.1,0-.15,0-.73-.08-1.46-.13-2.21-.15.79.01,1.57.05,2.36.14Z"
            />
            <path
              className="cls-1rocket5"
              d="M191.15,462.3c-2.44,5.03-4.77,9.73-6.99,14.12l-38.44,71.57v-.19l-38.44-71.57c-2.22-4.39-4.55-9.09-6.99-14.12-11.6-23.95-13.41-51.81-10.53-77.91.7-6.39,1.07-13.83,3.18-19.93s11.71-3.01,17.31-2.88c15.67.36,31.36.17,47.01-.57,11.9-.56,23.79-1.43,35.64-2.61,5.3-.53,4.99,1.87,5.54,5.98.64,4.78,1.83,9.51,2.5,14.3,1.35,9.7,2.03,19.5,1.89,29.3-.27,18.65-3.49,37.63-11.69,54.52Z"
            />
            <path
              className="cls-1rocket8"
              d="M183.38,404.34c-2.02,4.93-3.96,9.54-5.8,13.84l-31.87,70.15v-.19l-31.87-70.15c-1.84-4.3-3.77-8.91-5.8-13.84-9.62-23.47-11.12-50.78-8.73-76.37.58-6.26.89-13.55,2.64-19.53s9.71-2.95,14.36-2.83c12.99.35,26,.16,38.98-.55,9.87-.55,19.72-1.4,29.55-2.56,4.4-.52,4.14,1.83,4.59,5.86.53,4.69,1.52,9.32,2.07,14.02,1.12,9.51,1.69,19.12,1.57,28.72-.23,18.28-2.9,36.88-9.69,53.44Z"
            />
            <path
              className="cls-1rocket1"
              d="M183.58,351.54c-2.02,4.17-3.96,8.07-5.8,11.71l-31.87,59.34v-.16l-31.87-59.34c-1.84-3.64-3.77-7.54-5.8-11.71-9.62-19.86-11.12-42.96-8.73-64.6.58-5.3.89-11.47,2.64-16.53,1.71-4.96,9.71-2.5,14.36-2.39,12.99.29,26,.14,38.98-.47,9.87-.46,19.72-1.18,29.55-2.17,4.4-.44,4.14,1.55,4.59,4.96.53,3.96,1.52,7.88,2.07,11.86,1.12,8.04,1.69,16.17,1.57,24.29-.23,15.47-2.9,31.2-9.69,45.21Z"
            />
            <path
              className="cls-1rocket4"
              d="M148.43,287.75c-.75.02-1.48.07-2.21.15-.05,0-.1,0-.15,0,.79-.09,1.57-.13,2.36-.14Z"
            />
            <path d="M169.1,348.85c.13.05.26.1.39.14-.13.05-.26.1-.39.14v-.27Z" />
            <path d="M169.88,348.85v.27c-.13-.04-.26-.09-.39-.14.13-.04.26-.09.39-.14Z" />
            <g className="cls-1rocket9">
              <path
                className="cls-6rocket"
                d="M240.86,165.63c0,40.57-12.12,118.91-34.24,182.06h-120.8c-22.12-63.15-34.24-141.49-34.24-182.06C51.58,96.85,87.77,25.7,145.74.2c.05-.02.12-.05.17-.07.1-.04.2-.09.3-.13.1.04.2.09.3.13,58.07,25.43,94.34,96.66,94.34,165.5Z"
              />
              <rect
                className="cls-1rocket3"
                x="48.89"
                y="46.73"
                width="97.33"
                height="345.6"
              />
              <g className="cls-7rocket">
                <path
                  className="cls-8rocket"
                  d="M216.39,63.82c0-18.19-147.04-18.19-147.04,0V-1.36s147.04,0,147.04,0V63.82Z"
                />
                <rect
                  className="cls-1rocket"
                  x="67.89"
                  y="-34.37"
                  width="78.33"
                  height="101.56"
                />
              </g>
            </g>
            <path
              className="cls-2rocket"
              d="M208.48,343.44l-7.69,21.44c-.89,2.47-3.23,4.12-5.86,4.12h-97.38c-2.68,0-5.07-1.65-5.97-4.12l-7.84-21.44h124.74Z"
            />
            <path
              className="cls-9rocket"
              d="M146.11,343.44v25.56h-48.56c-2.68,0-5.07-1.65-5.97-4.12l-7.84-21.44h62.37Z"
            />
            <g className="cls-1rocket7">
              <rect
                className="cls-8rocket"
                x="134.03"
                y="240.24"
                width="23.73"
                height="153.2"
                rx="6.28"
                ry="6.28"
              />
              <rect
                className="cls-3rocket"
                x="88.94"
                y="232.18"
                width="56.96"
                height="196.23"
              />
            </g>
            <circle
              className="cls-1rocket6"
              cx="146.22"
              cy="133.88"
              r="42.44"
            />
            <circle
              className="cls-1rocket0"
              cx="146.22"
              cy="133.88"
              r="31.07"
            />
            <path
              className="cls-4rocket"
              d="M146.07,91.44v84.89c-23.38-.08-42.3-19.06-42.3-42.45s18.92-42.36,42.3-42.44Z"
            />
            <path
              className="cls-1rocket2"
              d="M146.07,102.81v62.15c-17.1-.08-30.93-13.96-30.93-31.08s13.83-30.99,30.93-31.07Z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
