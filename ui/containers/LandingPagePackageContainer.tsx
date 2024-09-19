"use client";
import Link from "next/link";
import react, { PropsWithChildren, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import useWindowDimensions from "@/lib/UseWindowDimensions";
import clsx from 'clsx';

interface LandingPagePackageContainerProps extends PropsWithChildren {
  title: string;
}

export const LandingPagePackageContainer: React.FC<
  LandingPagePackageContainerProps
> = ({ children, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const ref = useRef(null);
  const { width } = useWindowDimensions();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (width < 640) {
      if (scrollYProgress.get() > 0.3 && scrollYProgress.get() < 0.6) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    }
  });

  const linkVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const colorVariants = {
    hover: { color: "#18B560" },
    noHover: { color: "#FFF" },
  };
  
  return (
    <div
      onMouseLeave={() => handleMouseLeave()}
      onMouseEnter={() => handleMouseEnter()}
      className={clsx("w-[17rem] h-[14.45rem] bg-painPoint py-10 px-5 flex flex-col items-center gap-3 relative transition-shadow duration-300", 
        isHovered ? "shadow-[0px_0px_15px_0px] shadow-[#084738]" : ""
      )}
      ref={ref}
    >
      {children}
      <motion.h5
        variants={colorVariants}
        animate={isHovered ? "hover" : "noHover"}
        className="font-gunterz text-[1.25rem] text-center mt-2"
      >
        {title}
      </motion.h5>
      <motion.div
        className="flex justify-center"
        variants={linkVariants}
        animate={isHovered ? "visible" : "hidden"}
        initial="hidden"
      >
        <Link
          style={{
            color: "#D9D9D9",
          }}
          className="bg-[#20313C] w-[10.3rem] h-[1.8rem] absolute bottom-[15px] text-[1rem] font-gunterz justify-center flex items-end rounded-[10px]"
          href="/WebsitePackage"
        >
          Learn More &gt;
        </Link>
      </motion.div>
    </div>
  );
};
