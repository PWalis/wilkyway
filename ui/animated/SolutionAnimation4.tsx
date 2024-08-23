"use client";
import react, { useState, useEffect } from "react";
import { useAnimate, usePresence } from "framer-motion";

export const SolutionAnimation4: React.FC = () => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [toggle, setToggle] = useState(false);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    const animation = async () => {
      try {
        await animate(scope.current, { x: "100%" }, { delay: 2 });
        setToggle(true);
        await animate(scope.current, { x: "0%" }, { delay: 2 });
        setToggle(false);
      } catch (error) {
        const typedError = error as { message: string }; // Type assertion
        if (typedError.message === "No valid element provided.") {
          return;
        }
      }
      animation();
    };
    animation();

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
      .cls-1 {
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
              className="cls-1"
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
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 880 796.81"
          >
            <defs>
              <style>
                {`
              .cls-1 {
                letter-spacing: -.01em;
              }
        
              .cls-2 {
                letter-spacing: -.03em;
              }
        
              .cls-3 {
                letter-spacing: 0em;
              }
        
              .cls-4 {
                letter-spacing: 0em;
              }
        
              .cls-5, .cls-6 {
                letter-spacing: 0em;
              }
        
              .cls-7, .cls-8, .cls-6, .cls-9 {
                fill: #5c8fff;
              }
        
              .cls-7, .cls-10 {
                letter-spacing: -.05em;
              }
        
              .cls-11 {
                letter-spacing: 0em;
              }
        
              .cls-12, .cls-13 {
                fill: #606060;
              }
        
              .cls-13 {
                font-size: 21px;
              }
        
              .cls-13, .cls-14 {
                font-family: Gunterz-Bold, Gunterz;
                font-weight: 700;
              }
        
              .cls-15 {
                letter-spacing: -.01em;
              }
        
              .cls-16 {
                letter-spacing: -.01em;
              }
        
              .cls-17 {
                fill: #c4c4c4;
              }
        
              .cls-14 {
                font-size: 45px;
              }
        
              .cls-18 {
                fill: #d2d6db;
              }
        
              .cls-19 {
                letter-spacing: -.05em;
              }
        
              .cls-20 {
                letter-spacing: -.13em;
              }
        
              .cls-21, .cls-9 {
                letter-spacing: -.03em;
              }
        
              .cls-22 {
                letter-spacing: 0em;
              }
        
              .cls-23 {
                clip-path: url(#clippath);
              }
        
              .cls-24 {
                fill: #e6e7e8;
              }
        
              .cls-25 {
                fill: #e8e8e8;
                filter: url(#drop-shadow-1);
              }`}
              </style>
              <clipPath id="clippath">
                <rect
                  className="cls-17"
                  x="15.35"
                  y="11.63"
                  width="851.55"
                  height="785.18"
                  rx="56.84"
                  ry="56.84"
                />
              </clipPath>
              <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
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
                    className="cls-17"
                    x="15.35"
                    y="11.63"
                    width="851.55"
                    height="785.18"
                    rx="56.84"
                    ry="56.84"
                  />
                  <g className="cls-23">
                    <rect
                      className="cls-24"
                      x="15.35"
                      y="11.63"
                      width="851.17"
                      height="785.18"
                    />
                    <rect
                      className="cls-25"
                      x="8.59"
                      y="8.6"
                      width="860.97"
                      height="78.06"
                    />
                  </g>
                </g>
                <rect
                  className="cls-18"
                  x="96.48"
                  y="38.54"
                  width="676.9"
                  height="27.28"
                  rx="13.64"
                  ry="13.64"
                />
                <rect
                  className="cls-18"
                  x="790.71"
                  y="38.54"
                  width="27.28"
                  height="27.28"
                  rx="13.64"
                  ry="13.64"
                />
                <text className="cls-14" transform="translate(57.98 273.07)">
                  <tspan className="cls-12">
                    <tspan x="0" y="0">
                      Un
                    </tspan>
                    <tspan className="cls-15" x="76.77" y="0">
                      l
                    </tspan>
                    <tspan x="108.94" y="0">
                      ock{" "}
                    </tspan>
                    <tspan className="cls-10" x="242.73" y="0">
                      y
                    </tspan>
                    <tspan className="cls-5" x="279.67" y="0">
                      our potential
                    </tspan>
                  </tspan>
                  <tspan className="cls-12">
                    <tspan x="0" y="54">
                      with{" "}
                    </tspan>
                    <tspan className="cls-20" x="157.36" y="54">
                      t
                    </tspan>
                    <tspan x="185.85" y="54">
                      ai
                    </tspan>
                    <tspan className="cls-15" x="243.36" y="54">
                      l
                    </tspan>
                    <tspan className="cls-22" x="275.53" y="54">
                      o
                    </tspan>
                    <tspan x="316.8" y="54">
                      red c
                    </tspan>
                    <tspan className="cls-21" x="480.55" y="54">
                      o
                    </tspan>
                    <tspan className="cls-2" x="520.38" y="54">
                      a
                    </tspan>
                    <tspan x="560.29" y="54">
                      ching,{" "}
                    </tspan>
                  </tspan>
                  <tspan className="cls-12">
                    <tspan x="0" y="108">
                      designed{" "}
                    </tspan>
                    <tspan className="cls-1" x="291.28" y="108">
                      t
                    </tspan>
                    <tspan className="cls-5" x="325.21" y="108">
                      o help{" "}
                    </tspan>
                    <tspan className="cls-19" x="536.8" y="108">
                      y
                    </tspan>
                    <tspan x="573.74" y="108">
                      ou{" "}
                    </tspan>
                  </tspan>
                  <tspan className="cls-8" x="0" y="162">
                    crush{" "}
                  </tspan>
                  <tspan className="cls-7" x="207" y="162">
                    y
                  </tspan>
                  <tspan className="cls-6" x="243.94" y="162">
                    our g
                  </tspan>
                  <tspan className="cls-9" x="415.08" y="162">
                    o
                  </tspan>
                  <tspan className="cls-6" x="454.9" y="162">
                    als{" "}
                  </tspan>
                  <tspan className="cls-12" x="579.82" y="162">
                    AND
                  </tspan>
                  <tspan className="cls-8">
                    <tspan className="cls-2" x="0" y="216">
                      A
                    </tspan>
                    <tspan className="cls-11" x="39.92" y="216">
                      CHIEVE SUCCESS.
                    </tspan>
                  </tspan>
                </text>
                <rect
                  className="cls-8"
                  x="255.14"
                  y="555.47"
                  width="365.17"
                  height="114.84"
                />
                <text className="cls-13" transform="translate(288.12 618.29)">
                  <tspan x="0" y="0">
                    get my cus
                  </tspan>
                  <tspan className="cls-16" x="158" y="0">
                    t
                  </tspan>
                  <tspan className="cls-4" x="173.84" y="0">
                    o
                  </tspan>
                  <tspan className="cls-3" x="193.09" y="0">
                    m PLAN!
                  </tspan>
                </text>
              </g>
            </g>
          </svg>
        ) : (
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 880 796.81"
          >
            <defs>
              <style>
                {`
                .cls-1 {
                  letter-spacing: -.01em;
                }
          
                .cls-2 {
                  letter-spacing: -.03em;
                }
          
                .cls-3 {
                  fill: #91b7f9;
                }
          
                .cls-4 {
                  letter-spacing: 0em;
                }
          
                .cls-5 {
                  letter-spacing: 0em;
                }
          
                .cls-6, .cls-7 {
                  letter-spacing: 0em;
                }
          
                .cls-8, .cls-9, .cls-7, .cls-10 {
                  fill: #5c8fff;
                }
          
                .cls-8, .cls-11 {
                  letter-spacing: -.05em;
                }
          
                .cls-12 {
                  letter-spacing: 0em;
                }
          
                .cls-13, .cls-14 {
                  fill: #606060;
                }
          
                .cls-14 {
                  font-size: 21px;
                }
          
                .cls-14, .cls-15 {
                  font-family: Gunterz-Bold, Gunterz;
                  font-weight: 700;
                }
          
                .cls-16 {
                  letter-spacing: -.01em;
                }
          
                .cls-17 {
                  letter-spacing: -.01em;
                }
          
                .cls-18 {
                  fill: #c4c4c4;
                }
          
                .cls-15 {
                  font-size: 45px;
                }
          
                .cls-19 {
                  fill: #d2d6db;
                }
          
                .cls-20 {
                  letter-spacing: -.05em;
                }
          
                .cls-21 {
                  letter-spacing: -.13em;
                }
          
                .cls-22, .cls-10 {
                  letter-spacing: -.03em;
                }
          
                .cls-23 {
                  letter-spacing: 0em;
                }
          
                .cls-24 {
                  clip-path: url(#clippath);
                }
          
                .cls-25 {
                  fill: #e6e7e8;
                }
          
                .cls-26 {
                  fill: #e8e8e8;
                  filter: url(#drop-shadow-1);
                }`}
              </style>
              <clipPath id="clippath">
                <rect
                  className="cls-18"
                  x="15.35"
                  y="11.63"
                  width="851.55"
                  height="785.18"
                  rx="56.84"
                  ry="56.84"
                />
              </clipPath>
              <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
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
                    className="cls-18"
                    x="15.35"
                    y="11.63"
                    width="851.55"
                    height="785.18"
                    rx="56.84"
                    ry="56.84"
                  />
                  <g className="cls-24">
                    <rect
                      className="cls-25"
                      x="15.35"
                      y="11.63"
                      width="851.17"
                      height="785.18"
                    />
                    <rect
                      className="cls-26"
                      x="8.59"
                      y="8.6"
                      width="860.97"
                      height="78.06"
                    />
                  </g>
                </g>
                <rect
                  className="cls-19"
                  x="96.48"
                  y="38.54"
                  width="676.9"
                  height="27.28"
                  rx="13.64"
                  ry="13.64"
                />
                <rect
                  className="cls-19"
                  x="790.71"
                  y="38.54"
                  width="27.28"
                  height="27.28"
                  rx="13.64"
                  ry="13.64"
                />
                <text className="cls-15" transform="translate(57.98 273.07)">
                  <tspan className="cls-13">
                    <tspan x="0" y="0">
                      Un
                    </tspan>
                    <tspan className="cls-16" x="76.77" y="0">
                      l
                    </tspan>
                    <tspan x="108.94" y="0">
                      ock{" "}
                    </tspan>
                    <tspan className="cls-11" x="242.73" y="0">
                      y
                    </tspan>
                    <tspan className="cls-6" x="279.67" y="0">
                      our potential
                    </tspan>
                  </tspan>
                  <tspan className="cls-13">
                    <tspan x="0" y="54">
                      with{" "}
                    </tspan>
                    <tspan className="cls-21" x="157.36" y="54">
                      t
                    </tspan>
                    <tspan x="185.85" y="54">
                      ai
                    </tspan>
                    <tspan className="cls-16" x="243.36" y="54">
                      l
                    </tspan>
                    <tspan className="cls-23" x="275.53" y="54">
                      o
                    </tspan>
                    <tspan x="316.8" y="54">
                      red c
                    </tspan>
                    <tspan className="cls-22" x="480.55" y="54">
                      o
                    </tspan>
                    <tspan className="cls-2" x="520.38" y="54">
                      a
                    </tspan>
                    <tspan x="560.29" y="54">
                      ching,{" "}
                    </tspan>
                  </tspan>
                  <tspan className="cls-13">
                    <tspan x="0" y="108">
                      designed{" "}
                    </tspan>
                    <tspan className="cls-1" x="291.28" y="108">
                      t
                    </tspan>
                    <tspan className="cls-6" x="325.21" y="108">
                      o help{" "}
                    </tspan>
                    <tspan className="cls-20" x="536.8" y="108">
                      y
                    </tspan>
                    <tspan x="573.74" y="108">
                      ou{" "}
                    </tspan>
                  </tspan>
                  <tspan className="cls-9" x="0" y="162">
                    crush{" "}
                  </tspan>
                  <tspan className="cls-8" x="207" y="162">
                    y
                  </tspan>
                  <tspan className="cls-7" x="243.94" y="162">
                    our g
                  </tspan>
                  <tspan className="cls-10" x="415.08" y="162">
                    o
                  </tspan>
                  <tspan className="cls-7" x="454.9" y="162">
                    als{" "}
                  </tspan>
                  <tspan className="cls-13" x="579.82" y="162">
                    AND
                  </tspan>
                  <tspan className="cls-9">
                    <tspan className="cls-2" x="0" y="216">
                      A
                    </tspan>
                    <tspan className="cls-12" x="39.92" y="216">
                      CHIEVE SUCCESS.
                    </tspan>
                  </tspan>
                </text>
                <rect
                  className="cls-3"
                  x="255.14"
                  y="555.47"
                  width="365.17"
                  height="114.84"
                />
                <text className="cls-14" transform="translate(288.12 618.29)">
                  <tspan x="0" y="0">
                    get my cus
                  </tspan>
                  <tspan className="cls-17" x="158" y="0">
                    t
                  </tspan>
                  <tspan className="cls-5" x="173.84" y="0">
                    o
                  </tspan>
                  <tspan className="cls-4" x="193.09" y="0">
                    m PLAN!
                  </tspan>
                </text>
              </g>
            </g>
          </svg>
        )}
      </div>
    </div>
  );
};
