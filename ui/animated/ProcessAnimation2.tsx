"use client";
import react, { useState, useEffect } from "react";
import { useAnimate, usePresence, motion } from "framer-motion";

export const ProcessAnimation2: React.FC = () => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [toggle, setToggle] = useState(true);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate2(scope2.current, { opacity: 1, duration: 1 });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent]);

  const pathVariant1 = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <div
      ref={scope2}
      style={{ opacity: 0 }}
      className="w-full lg:max-w-[30rem]"
    >
      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-40 0 770 769.24"
      >
        <defs>
          <style>
            {`
      .cls-1strategy {
        stroke: #f7931e;
        stroke-miterlimit: 10;
      }

      .cls-1strategy, .cls-2strategy {
        fill: none;
        stroke-width: 9px;
      }

      .cls-3strategy {
        fill: #63a1c6;
      }

      .cls-2strategy {
        stroke: #596e7c;
        stroke-linejoin: round;
      }

      .cls-4strategy {
        fill: #999;
      }

      .cls-5strategy {
        fill: #596e7c;
      }

      .cls-6strategy {
        fill: #e6e7e8;
      }`}
          </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer_1">
          <g>
            <rect
              className="cls-6strategy"
              y="70.65"
              width="698.58"
              height="698.58"
              rx="30.39"
              ry="30.39"
            />
            <motion.line
              className="cls-2strategy"
              variants={pathVariant1}
              initial="hidden"
              animate="visible"
              x1="442.03"
              y1="182.6"
              x2="475.47"
              y2="217.47"
            />
            <g>
              <rect
                className="cls-3strategy"
                x="153.39"
                y="309.04"
                width="12.37"
                height="75.01"
                transform="translate(-198.3 214.34) rotate(-45)"
              />
              <rect
                className="cls-3strategy"
                x="153.39"
                y="309.04"
                width="12.37"
                height="75.01"
                transform="translate(291.78 -11.34) rotate(45)"
              />
            </g>
            <g>
              <rect
                className="cls-3strategy"
                x="412.66"
                y="530.09"
                width="12.37"
                height="75.01"
                transform="translate(-278.67 462.42) rotate(-45)"
              />
              <rect
                className="cls-3strategy"
                x="412.66"
                y="530.09"
                width="12.37"
                height="75.01"
                transform="translate(524.03 -129.93) rotate(45)"
              />
            </g>
            <g>
              <rect
                className="cls-3strategy"
                x="532.83"
                y="371.26"
                width="12.37"
                height="75.01"
                transform="translate(-131.17 500.86) rotate(-45)"
              />
              <rect
                className="cls-3strategy"
                x="532.83"
                y="371.26"
                width="12.37"
                height="75.01"
                transform="translate(446.91 -261.41) rotate(45)"
              />
            </g>
            <circle
              className="cls-1strategy"
              cx="309.73"
              cy="330.4"
              r="27.49"
            />
            <circle
              className="cls-1strategy"
              cx="201.44"
              cy="634.43"
              r="27.49"
            />
            <motion.path
              className="cls-2strategy"
              variants={pathVariant1}
              initial="hidden"
              animate="visible"
              d="M201.66,596.67c2.08-30.85-8.66-68.5,21.8-95.23,45.19-39.66,97.53-21.66,140.94-43.8,41.93-21.39,84.61-87.04,77.86-274.25l-33.92,33.92"
            />
            <g>
              <rect
                className="cls-4strategy"
                x="158.33"
                width="381.93"
                height="133.32"
              />
              <g>
                <circle
                  className="cls-5strategy"
                  cx="271.21"
                  cy="66.66"
                  r="14.63"
                />
                <circle
                  className="cls-5strategy"
                  cx="323.26"
                  cy="66.66"
                  r="14.63"
                />
                <circle
                  className="cls-5strategy"
                  cx="375.32"
                  cy="66.66"
                  r="14.63"
                />
                <circle
                  className="cls-5strategy"
                  cx="427.38"
                  cy="66.66"
                  r="14.63"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
