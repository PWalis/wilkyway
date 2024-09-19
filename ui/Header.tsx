"use client";
import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import clsx from "clsx";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimate,
  stagger,
  AnimatePresence,
} from "framer-motion";
import useWindowDimensions from "../lib/UseWindowDimensions";
import { CTA } from "@/ui/buttons";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import logo from "@/public/assets/logo.png";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [scope, animate] = useAnimate();
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const handleToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.5,
        type: "tween",
      },
    },
    closed: {
      y: "-100%",
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.5,
        type: "tween",
      },
    },
  };

  useEffect(() => {
    if (isHovered) {
      animate(scope.current, { height: "7rem" });
    } else {
      animate(scope.current, { height: "3rem" });
    }
  }, [isHovered]);

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      className="w-full flex-col flex items-center z-30 px-5 fixed top-0"
    >
      <div className="w-full flex justify-between max-w-[110rem] h-24 transparent text-white relative">
        <Link href="/" className="max-w-[20rem] flex items-center">
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 575.05 91.49"
            className="hidden xl:block min-w-[19.3rem]"
          >
            <defs>
              <style>
                {`
      .cls-1FullLogo {
        fill: #5c8fff;
      }

      .cls-2FullLogo {
        fill: #fefefe;
      }`}
              </style>
            </defs>
            <g id="Layer_1-2" data-name="Layer_1">
              <rect
                className="cls-1FullLogo"
                x="318.83"
                y="57.51"
                width="55.59"
                height="18.45"
              />
              <rect
                className="cls-2FullLogo"
                x="75.41"
                y="46.83"
                width="18.33"
                height="39.92"
                transform="translate(17.79 151.36) rotate(-90)"
              />
              <rect
                className="cls-2FullLogo"
                x="259.14"
                y="15.3"
                width="32.2"
                height="18.45"
              />
              <path
                className="cls-2FullLogo"
                d="M150.56,15.12l-8.88,37.47-9.01-37.47h-18.41l-9.01,37.47-8.88-37.47h-18.54l12.79,42.28,5.61,18.55h18.02l9.14-31.72,9.27,31.72h18.02l18.41-60.83h-18.54Z"
              />
              <rect
                className="cls-2FullLogo"
                x="173.59"
                y="15.33"
                width="17.1"
                height="15.16"
              />
              <rect
                className="cls-2FullLogo"
                x="173.59"
                y="37.54"
                width="17.1"
                height="38.42"
              />
              <path
                className="cls-2FullLogo"
                d="M196.17,15.33l-.05,60.63h17.23l.05-60.63h-17.23Z"
              />
              <path
                className="cls-2FullLogo"
                d="M255.47,45.46l9.66-11.89,1.87-2.3,8.21-10.09,4.77-5.88.16.08-13.42-.05-7.83-.03-22.48,27.55V15.3h-17.23v60.71h17.23v-27.94l22.58,27.94h21.15l-24.67-30.55Z"
              />
              <path
                className="cls-1FullLogo"
                d="M411.79,15.12l-8.88,37.47-9.01-37.47h-18.41l-9.01,37.47-8.88-37.47h-18.54l12.82,42.38,5.58,18.45h18.02l9.13-31.72,9.27,31.72h18.02l13.2-43.61,3.79-12.55,1.42-4.67h0s-18.54,0-18.54,0Z"
              />
              <rect
                className="cls-1FullLogo"
                x="420.79"
                y="8.46"
                width="18.45"
                height="32.19"
                transform="translate(405.46 454.57) rotate(-90)"
              />
              <g>
                <path
                  className="cls-1FullLogo"
                  d="M75.97,40.94v50.56h-18.33v-45.94c0-6.47-5.24-11.71-11.71-11.71H0V15.51h50.54c14.04,0,25.43,11.39,25.43,25.43Z"
                />
                <path
                  className="cls-2FullLogo"
                  d="M91.49,57.62v18.33h-50.54c-14.04,0-25.43-11.38-25.43-25.43V0h18.33v45.91c0,6.47,5.24,11.71,11.71,11.71h45.93Z"
                />
              </g>
              <path
                className="cls-1FullLogo"
                d="M466.14,15.12h-35.24v35.24c0,14.13,11.46,25.59,25.59,25.59h16.79v7.77h18.46v-43.01c0-14.14-11.47-25.59-25.6-25.59ZM461.14,57.51c-6.51,0-11.78-5.28-11.78-11.78v-12.14h12.15c6.51,0,11.78,5.27,11.78,11.78v12.15h-12.15Z"
              />
              <g>
                <path
                  className="cls-2FullLogo"
                  d="M320.45,57.51v18.45h11.6v15.54h-17.22v-15.67h-15.68c-13.19,0-23.89-11.69-23.89-26.12l-.02-16.13h16.63V15.3h.58l.05,17.27h0l.08,12.81c0,6.64,4.92,12.03,11,12.03h11.34l-.08-9.64h.03v-1.14h-.05V15.3h17.19v22.83c.04.56.05,1.14.05,1.71v17.66h-11.6Z"
                />
                <polygon
                  className="cls-2FullLogo"
                  points="291.86 15.3 291.86 33.58 275.23 33.58 275.21 21.18 275.2 15.3 291.86 15.3"
                />
                <rect
                  className="cls-2FullLogo"
                  x="320.45"
                  y="57.51"
                  width="11.6"
                  height="18.45"
                />
              </g>
              <rect
                className="cls-1FullLogo"
                x="468.67"
                y="57.51"
                width="104.77"
                height="18.45"
              />
              <rect
                className="cls-1FullLogo"
                x="524.02"
                y="57.51"
                width="51.03"
                height="18.45"
              />
              <g>
                <path
                  className="cls-1FullLogo"
                  d="M554.13,39.85v17.66h-55.7c-.71-2.46-1.09-5.09-1.09-7.8l-.05-34.63h17.23l.05,17.49h0l-.02,12.81c0,6.64,4.92,12.03,11,12.03h11.34l.02-9.64h.03v-1.14h-.05V15.08l17.19-.04v23.16c.03.54.05,1.1.05,1.65Z"
                />
                <path
                  className="cls-1FullLogo"
                  d="M554.13,57.51v33.99h-17.22v-15.67h-15.68c-10.71,0-19.77-7.7-22.8-18.31h55.7Z"
                />
              </g>
              <path
                className="cls-1FullLogo"
                d="M430.9,33.51v16.86c0,14.13,11.46,25.59,25.59,25.59h16.56v-18.45h-11.91c-6.51,0-11.78-5.28-11.78-11.78v-12.14"
              />
            </g>
          </svg>
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 470.95 183.44"
            className="xl:hidden min-w-[7.4rem]"
          >
            <defs>
              <style>
                {`
      .cls-1HalfLogo {
        fill: #5c8fff;
      }

      .cls-2HalfLogo {
        fill: #d2d6db;
      }`}
              </style>
            </defs>
            <g id="Layer_1-2" data-name="Layer_1">
              <g>
                <g>
                  <path
                    className="cls-2HalfLogo"
                    d="M152.31,82.07v101.36h-36.76v-92.11c0-12.96-10.51-23.48-23.47-23.48H0V31.09h101.34c28.15,0,50.98,22.83,50.98,50.98Z"
                  />
                  <path
                    className="cls-1HalfLogo"
                    d="M204.44,115.52v36.76h-122.34c-28.16,0-50.98-22.82-50.98-50.98V0h36.76v92.05c0,12.96,10.51,23.47,23.48,23.47h113.09Z"
                  />
                </g>
                <path
                  className="cls-1HalfLogo"
                  d="M282.51,47.17l-15.34,64.74-15.56-64.74h-31.8l-15.57,64.74-15.34-64.74h-32.03l22.16,73.23,9.64,31.88h31.13l15.78-54.81,16.02,54.81h31.13l22.8-75.35,6.56-21.68,2.45-8.08h0s-32.03,0-32.03,0Z"
                />
                <path
                  className="cls-2HalfLogo"
                  d="M408.16,47.17l-15.34,64.74-15.56-64.74h-31.8l-15.57,64.74-15.34-64.74h-32.03l22.16,73.23,9.64,31.88h31.13l15.78-54.81,16.02,54.81h31.13l22.8-75.35,6.56-21.68,2.45-8.08h0s-32.03,0-32.03,0Z"
                />
                <rect
                  className="cls-2HalfLogo"
                  x="405.47"
                  y="115.88"
                  width="65.47"
                  height="36.4"
                />
              </g>
            </g>
          </svg>
        </Link>

        <div className="w-full sm:max-w-[60rem] mt-3 justify-center max-w-[5rem] lg1/2:flex hidden">
          <AnimatePresence>
            <nav
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
              ref={scope}
              className="sm:flex max-w-[50rem] justify-between w-full uppercase h-[3rem] tracking-wider bg-[#042032] rounded-[30px] mt-3 py-3 px-10 "
            >
              <div className="flex flex-col">
                <Link
                  className="font-bold hover:text-[#5C8FFF] transition-all"
                  href="/#Solution"
                >
                  Our Solution
                </Link>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.1 } }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col"
                  >
                    <Link
                      className="hover:text-[#5C8FFF] transition-all"
                      href="/#Process"
                    >
                      Our Process
                    </Link>
                  </motion.div>
                )}
              </div>
              <div className="flex flex-col">
                <Link
                  className="font-bold hover:text-[#5C8FFF] transition-all"
                  href="/AboutUs"
                >
                  About Us
                </Link>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.1 } }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col"
                  >
                    <Link
                      className="hover:text-[#5C8FFF] transition-all"
                      href="/AboutUs/#OurValues"
                    >
                      Values
                    </Link>
                    <Link
                      className="hover:text-[#5C8FFF] transition-all"
                      href="/AboutUs/#OurTeam"
                    >
                      Team
                    </Link>
                  </motion.div>
                )}
              </div>
              <div className="flex flex-col ">
                <Link
                  className="font-bold hover:text-[#5C8FFF] transition-all"
                  href="/WebsitePackage"
                >
                  Our Services
                </Link>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.1 } }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col"
                  >
                    <Link
                      className="hover:text-[#5C8FFF] transition-all"
                      href="/#StarMethod"
                    >
                      STAR Method
                    </Link>
                  </motion.div>
                )}
              </div>
              <div className="flex flex-col">
                <Link
                  className="font-bold hover:text-[#5C8FFF] transition-all"
                  href="/#Testimonials"
                >
                  Testimonials
                </Link>
              </div>
              <div className="lg1/2:hidden">
                <CTA>GET YOUR QUOTE</CTA>
              </div>
            </nav>
          </AnimatePresence>
        </div>
        <motion.div //mobile Nav
          variants={mobileMenuVariant}
          initial="closed"
          animate={menuIsOpen ? "opened" : "closed"}
          className="fixed touch-none flex justify-center top-0 left-0 h-dvh w-dvw bg-section-background lg1/2:hidden"
        >
          <nav className="flex justify-center items-center flex-col w-full max-w-[80dvw] ">
            <Link
              onClick={handleToggle}
              href="/#Solution"
              className="text-[2rem]"
            >
              Our Solution
            </Link>
            <Link
              onClick={handleToggle}
              href="/AboutUs"
              className="text-[2rem]"
            >
              About Us
            </Link>
            <Link
              onClick={handleToggle}
              href="/WebsitePackage"
              className="text-[2rem]"
            >
              Our Services
            </Link>
            <Link
              onClick={handleToggle}
              href="/#Testimonials"
              className="text-[2rem] mb-10"
            >
              Testimonials
            </Link>
            <button
              onClick={handleToggle}
              className="text-[#151E28] font-bold tracking-wider antialiased text-[1.25rem] w-full sm:max-w-64 bg-CTA shadow-CTA shadow-[0px_0px_10px_-2px] px-5 py-4 border-transparent"
            >
              <Link href="/#AwesomeWebsite">Get A Quote</Link>
            </button>
          </nav>
        </motion.div>
        <div className="flex items-center">
          <div className="hidden lg1/2:block">
            <CTA>GET YOUR QUOTE</CTA>
          </div>
          <div className="lg1/2:hidden">
            <Hamburger onToggle={handleToggle} toggled={menuIsOpen} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
