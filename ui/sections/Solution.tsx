"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { ProgressIndicator } from "../animated/ProgressIndicator";

export const Solution: React.FC = () => {
  const [frame, setFrame] = useState(0);

  const options = {
    root: null,
    rootMargin: "-45%",
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  };

  const callBackFunction = (entries: any, frame: number) => {
    if (entries[0].isIntersecting) {
      setFrame(frame);
    }
  };

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      callBackFunction(entries, 0);
    }, options);
    const observer2 = new IntersectionObserver((entries) => {
      callBackFunction(entries, 1);
    }, options);
    const observer3 = new IntersectionObserver((entries) => {
      callBackFunction(entries, 2);
    }, options);
    const observer4 = new IntersectionObserver((entries) => {
      callBackFunction(entries, 3);
    }, options);
    const observer5 = new IntersectionObserver((entries) => {
      callBackFunction(entries, 4);
    }, options);

    const title1 = document.getElementById("title1");
    const title2 = document.getElementById("title2");
    const title3 = document.getElementById("title3");
    const title4 = document.getElementById("title4");
    const title5 = document.getElementById("title5");

    observer1.observe(title1!);
    observer2.observe(title2!);
    observer3.observe(title3!);
    observer4.observe(title4!);
    observer5.observe(title5!);
  }, []);

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

  return (
    <section className="min-h-[60rem] flex flex-col items-center bg-section-background md:pb-[15rem]">
      <div className="w-full max-w-[100rem] mt-16 flex flex-col justify-center items-center">
        <h2 className="font-gunterz px-5 text-left w-full leading-8">
          your landing page = your{" "}
          <span className="text-hero-color2">conversions</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center min-h-[168rem] iphone12pro:min-h-[164rem] iphone14max:min-h-[155rem] sm:min-h-[185rem] lg:h-auto gap-0 lg:gap-20 w-full relative">
          <div className="flex flex-col gap-[10rem] lg:gap-[20rem] lg:mt-[15rem] lg:mb-[10rem] px-3 absolute lg:relative top-10">
            <SolutionContainer id="title1">
              <h3 className="font-gunterz">
                DON&apos;T LET YOUR LEADS LEAVE YOU ON READ.
              </h3>
              <p className="max-w-[26.25rem]">
                Turn casual visitors into loyal customers by keeping your
                audience engaged from the moment they land on your page. We use
                your offer and ideal customer as our north star to create your
                brand, copywriting, and website so that it converts highly.
              </p>
            </SolutionContainer>
            <SolutionContainer id="title2">
              <h3 className="font-gunterz">
                <span className="text-hero-color2">Boost sales</span> and
                maximize clicks.
              </h3>
              <p className="max-w-[26.25rem]">
                Capture your visitors at every stage. Whether they&apos;re ready
                to buy, need a little convincing, or just want some information,
                we give your visitors a path at every stage of the sales funnel.
                You can be at peace knowing you&apos;re getting the most out of
                every click.
              </p>
            </SolutionContainer>
            <SolutionContainer id="title3">
              <h3 className="font-gunterz">
                <span className="text-hero-color2">Build trust</span> through
                branded design.
              </h3>
              <p className="max-w-[29rem]">
                Create a first impression that is out of this world and
                Instantly communicate your brand through the look and feel of
                your website. You don&apos;t have to settle for a generic
                website with your logo on it. We do the research on your ideal
                customer so that your brand is something they can proudly be a
                part of.
              </p>
            </SolutionContainer>
            <SolutionContainer id="title4">
              <h3 className="font-gunterz">
                <span className="text-hero-color2">Captivate your market</span>{" "}
                with targeted copywriting.
              </h3>
              <p className="max-w-[26.25rem]">
                Speak to your market and show them your solution is exactly what
                they need. Increase revenue, fill up your lead list, and create
                loyal customers. We craft your messaging to speak directly to
                your ideal customer and a/b test to increase conversions month
                after month.
              </p>
            </SolutionContainer>
            <SolutionContainer id="title5">
              <h3 className="font-gunterz">
                So <span className="text-hero-color2">fast</span> your
                won&apos;t miss it.
              </h3>
              <p className="max-w-[26.25rem]">
                Don’t let a slow website bring your conversions to a screeching
                halt. Insure no one leaves your website because of bad load
                time. We use advanced hosting so that your customers load your
                site fast, even on a slow network.
              </p>
            </SolutionContainer>
          </div>
          <div className="flex justify-center w-full lg:max-w-[30rem] h-[24rem] bg-section-background mb-20 mt-[20rem] lg:mt-[15rem] sticky top-[58vh] lg:top-[20rem]">
            <div className="h-[30rem] max-w-[30rem] w-full relative">
              <AnimatePresence mode="popLayout">
                {renderComponent()}
              </AnimatePresence>
              <ProgressIndicator progress={frame} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
