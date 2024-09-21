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
      className="w-full flex-col flex items-center z-30 px-5 fixed top-40"
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
              <path
                className="cls-1FullLogo"
                d="M573.44,57.51h-19.31v-17.66c0-.56-.02-1.11-.05-1.65V15.04l-17.19.04v31.55h.05v1.14h-.03l-.02,9.64h-11.34c-6.07,0-11-5.39-11-12.03l.02-12.81h0l-.05-17.49h-17.23l.05,34.63c0,2.72.38,5.34,1.08,7.8h-6.69v-16.79c0-14.14-11.47-25.59-25.6-25.59h-35.24v.21h-.63l.06-.2h0s-18.54,0-18.54,0l-8.88,37.47-9.01-37.47h-18.41l-9.01,37.47-8.88-37.47h-18.54l12.82,42.38h-33.07v18.45h56.67l9.13-31.72,9.27,31.72h18.02l12.76-42.17h6.22v16.59h0c0,3.27.62,6.38,1.73,9.26.24.62.5,1.24.79,1.84.36.75.75,1.47,1.18,2.17.28.45.57.89.87,1.33.27.39.55.77.84,1.14.65.83,1.34,1.62,2.08,2.36.74.74,1.53,1.43,2.36,2.08.28.22.56.43.84.63.67.48,1.36.93,2.08,1.34.56.33,1.13.64,1.72.92.37.18.75.35,1.13.51,1.53.65,3.14,1.15,4.8,1.49.83.17,1.68.3,2.54.39s1.73.13,2.62.13h12.18s4.62,0,4.62,0v7.77h18.46v-7.77h45.17v15.54h17.22v-15.54h20.92v-18.45h-1.61ZM461.14,57.51c-2.28,0-4.4-.66-6.21-1.78-1.41-.88-2.63-2.04-3.56-3.41-1.27-1.88-2.01-4.15-2.01-6.59v-12.14h12.15c6.51,0,11.78,5.27,11.78,11.78v12.15h-12.15Z"
              />
              <path
                className="cls-1FullLogo"
                d="M75.97,40.94v50.56h-18.33v-45.94c0-6.47-5.24-11.71-11.71-11.71H0V15.51h50.54c14.04,0,25.43,11.39,25.43,25.43Z"
              />
              <g>
                <path
                  className="cls-2FullLogo"
                  d="M150.56,15.12l-8.88,37.47-9.01-37.47h-18.41l-9.01,37.47-8.88-37.47h-18.54l12.79,42.28.06.21h-45.14c-6.47,0-11.71-5.24-11.71-11.71V0H15.52v50.53c0,14.04,11.39,25.43,25.43,25.43h55.3s18.02,0,18.02,0l9.14-31.72,9.27,31.72h18.02l18.41-60.83h-18.54Z"
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
                <rect
                  className="cls-2FullLogo"
                  x="196.15"
                  y="15.33"
                  width="17.23"
                  height="60.63"
                />
                <path
                  className="cls-2FullLogo"
                  d="M331.99,38.13V15.3h-17.19v31.33h.05v1.14h-.03l.08,9.64h-11.34c-6.07,0-11-5.39-11-12.03l-.08-12.81h0l-.05-17.27h-33.3s-.24,0-.24,0l-22.48,27.55V15.3h-17.23v60.71h17.23v-27.94l22.58,27.94h21.15l-24.67-30.55,9.52-11.71h10.25l.02,15.95c0,14.43,10.7,26.12,23.89,26.12h15.68v15.67h17.22v-51.65c0-.58-.02-1.15-.05-1.71Z"
                />
              </g>
            </g>
          </svg>
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 471.01 183.44"
            className="xl:hidden min-w-[7.4rem]"
          >
            <defs>
              <style>
                {`
      .cls-1HalfLogo {
        fill: #5c8fff;
      }

      .cls-2HalfLogo {
        fill: #fefefe;
      }`}
              </style>
            </defs>
            <g id="Layer_1-2" data-name="Layer_1">
              <path
                className="cls-1HalfLogo"
                d="M152.31,82.07v101.36h-36.76v-92.11c0-12.96-10.51-23.48-23.47-23.48H0V31.09h101.34c28.15,0,50.98,22.83,50.98,50.98Z"
              />
              <path
                className="cls-2HalfLogo"
                d="M282.51,47.15l-15.34,64.74-15.56-64.74h-31.8l-15.57,64.74-15.34-64.74h-32.03l20.69,68.37h-86.2c-12.96,0-23.48-10.5-23.48-23.47V0H31.12v101.31c0,28.16,22.83,50.98,50.98,50.98h122.34v-.02h15.36l15.78-54.81,16.02,54.81h31.13l22.8-75.35,6.56-21.68,2.45-8.08h0s-32.03,0-32.03,0Z"
              />
              <polygon
                className="cls-1HalfLogo"
                points="471.01 115.71 471.01 152.11 377.33 152.11 361.31 97.3 345.52 152.11 314.39 152.11 304.74 120.23 282.58 47 314.62 47 329.96 111.74 345.52 47 377.33 47 392.89 111.74 408.22 47 440.26 47 440.26 47.01 437.81 55.09 431.25 76.77 419.47 115.71 471.01 115.71"
              />
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
                <CTA>Get A Quote</CTA>
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
            <CTA>Get A Quote</CTA>
          </div>
          <div className="lg1/2:hidden">
            <Hamburger onToggle={handleToggle} toggled={menuIsOpen} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
