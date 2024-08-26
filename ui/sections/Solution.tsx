"use client";
import React, { useRef, useState } from "react";
import { SolutionContainer } from "../containers/SolutionContainer";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { SolutionAnimation } from "../animated/SolutionAnimation";
import { SolutionAnimation2 } from "../animated/SolutionAnimation2";
import { SolutionAnimation3 } from "../animated/SolutionAnimation3";
import { SolutionAnimation4 } from "../animated/SolutionAnimation4";
import { SolutionAnimation5 } from "../animated/SolutionAnimation5";

export const Solution: React.FC = () => {
  const ref = useRef(null);
  const [frame, setFrame] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });
  const progress = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8],
    [1, 2, 3, 4, 5]
  );

  const renderComponent = () => {
    switch (frame) {
      case 0:
        return <SolutionAnimation key="1" />;
      case 1:
        return <SolutionAnimation2 key="2" />;
      case 2:
        return <SolutionAnimation3 key="3" />;
      case 3:
        return <SolutionAnimation4 key="4" />;
      case 4:
        return <SolutionAnimation5 key="5" />;
    }
  };

  useMotionValueEvent(progress, "change", () => {
    const p = progress.get();
    console.log(p);
    if (p < 1.7 && frame != 0) {
      setFrame(0);
      console.log("frame set");
    } else if (p > 1.7 && p < 2.9 && frame != 1) {
      setFrame(1);
      console.log("frame set");
    } else if (p > 2.9 && p < 4.1 && frame != 2) {
      setFrame(2);
      console.log("frame set");
    } else if (p > 4.1 && p < 4.9 && frame != 3) {
      setFrame(3);
      console.log("frame set");
    } else if (p > 4.9 && p < 5 && frame != 4) {
      setFrame(4);
      console.log("frame set");
    }
  });

  return (
    <section className="min-h-[60rem] flex flex-col items-center bg-storm-black">
      <div className="w-full max-w-[100rem] mt-16 flex flex-col justify-center items-center">
        <h2 className="font-charcoalDance px-5 text-left w-full leading-8">
          your landing page = your{" "}
          <span className="text-sun-orange">conversions</span>
        </h2>

        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center min-h-[165rem] md:min-h-[140rem] lg:mb-[10rem] lg:h-auto gap-0 lg:gap-20 w-full relative"
        >
          <div className="flex flex-col gap-[10rem] lg:gap-[20rem] lg:mt-[15rem] lg:mb-[10rem] px-3 absolute lg:relative top-10">
            <SolutionContainer>
              <h3 className="font-gunterz">
                DON&apos;T LET YOUR LEADS LEAVE YOU ON READ.
              </h3>
              <p className="max-w-[26.25rem]">
                Your landing page should turn casual visitors into loyal clients
                and keep your audience engaged from the first click. We’ve got
                your covered.
              </p>
            </SolutionContainer>
            <div>
              <SolutionContainer>
                <h3 className="font-gunterz">
                  <span className="text-sun-orange">BOOST SALES</span> AND
                  MAXIMIZE CLICKS.
                </h3>
                <p className="max-w-[26.25rem]">
                  Tap into the behavior of your visitors. Some are ready to buy
                  the second they land on your site, most need to be persuaded
                  to take the leap, and everyone just want some information.
                  Give them what they want so you can give them what they need,
                  a COACH!
                </p>
              </SolutionContainer>
            </div>
            <SolutionContainer>
              <h3 className="font-gunterz">
                <span className="text-sun-orange">BUILD TRUST</span> THROUGH
                PROFESSIONAL DESIGN.
              </h3>
              <p className="max-w-[29rem]">
                We make sure that first impression is a great one. Website
                design says a thousand words before anyone even reads the first
                headline and your potential clients will judge your entire
                business by what they can see. If they don’t like what they see
                what kind of impression does that leave?
              </p>
            </SolutionContainer>
            <SolutionContainer>
              <h3 className="font-gunterz">
                <span className="text-sun-orange">CAPTIVATE YOUR MARKET</span>{" "}
                WITH TARGETED COPYWRITING.
              </h3>
              <p className="max-w-[26.25rem]">
                Your target audience speaks a certain way, has certain pain
                points, and they want to know that you’re the right coach for
                them. We do the research so when they land on your page it feels
                like it was made for them, because it was.
              </p>
            </SolutionContainer>
            <SolutionContainer>
              <h3 className="font-gunterz">
                SO <span className="text-sun-orange">FAST</span> YOU WON'T MISS
                IT.
              </h3>
              <p className="max-w-[26.25rem]">
                Our websites load fast even on a slow network. Don’t let a slow
                website bring your conversion to a screeching halt. With peak
                you’ll get the pinnacle of performance.
              </p>
            </SolutionContainer>
          </div>
          <div className="flex justify-center w-full lg:max-w-[30rem] h-[24rem] bg-storm-black mt-[20rem] lg:mt-[15rem] sticky top-[60vh] lg:top-[20rem]">
            <div className="h-[30rem] max-w-[30rem] w-full">
              <AnimatePresence mode="popLayout">
                {renderComponent()}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
