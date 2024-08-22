"use client";
import { useState } from "react";
import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import clsx from "clsx";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import useWindowDimensions from "../lib/UseWindowDimensions";
import { CTA } from "@/ui/buttons";
// import logo from "@/public/assets/logo.png";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  const handleToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if ( latest > previous! && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      opacity: 1,
      transition: {
        delay: 0,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  return (
    <motion.header variants={{visible: {y: 0}, hidden: {y: "-100%"}}} animate={hidden ? "hidden" : "visible"} className="w-full flex-col flex items-center z-30 fixed top-0 px-10">
      <div className="w-full flex justify-between max-w-[96rem] h-24 transparent text-white mx-3 relative">
        <a className="w-full max-w-[8rem] flex items-center">
          <div className="h-16 w-16 bg-gray-100 rounded-full items-center flex justify-center text-white mr-3 ml-3">
            {/* <Image alt="logo" src={logo} width={200} height={200}></Image> */}
          </div>
        </a>
        <div className="w-full sm:max-w-[45rem] flex justify-center items-center max-w-[5rem]">
          <motion.div
            variants={mobileMenuVariant}
            initial="closed"
            animate={width >= 964 || menuIsOpen ? "opened" : "closed"}
            className={clsx(
              "h-[calc(110dvh)] w-[calc(111dvw)] absolute bg-storm-black lg1/2:bg-transparent lg1/2:pr-5 lg1/2:flex lg1/2:h-auto lg1/2:w-auto lg1/2:top-auto",
              menuIsOpen
                ? "lg1/2:top-auto lg1/2:right-auto -top-3 -right-7 lg1/2:pt-0 pt-[calc(15dvh)]"
                : "hidden"
            )}
          >
            <nav
              className={clsx(
                "sm:flex gap-4 uppercase font-light items-center tracking-wider",
                menuIsOpen
                  ? "flex flex-col lg1/2:text-base text-2xl lg1/2:flex-row items-center"
                  : "hidden"
              )}
            >
              <a href="/">About Me</a>
              <a href="/" className="">
                Services
              </a>
              <a href="/">My Process</a>
              <a href="/">Pricing</a>
              <a href="/">FAQ</a>
              <a
                href="/"
                className="btn-grad3 rounded-[15px] px-4 py-3 text-white uppercase font-medium"
              ></a>
              <div className="lg1/2:hidden">
                <CTA>MAKE MONEY</CTA>
              </div>
            </nav>
          </motion.div>
        </div>
        <div className="flex items-center">
          <div className="hidden lg1/2:block">
            <CTA>MAKE MONEY</CTA>
          </div>
          <div className="lg1/2:hidden">
            <Hamburger onToggle={handleToggle} toggled={menuIsOpen} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
