"use client";
import React, { useState, useEffect } from "react";
import { ProcessContainer } from "../containers/ProcessContainer";
import { AnimatePresence } from "framer-motion";
import { ProcessAnimation } from "../animated/ProcessAnimation";
import { ProcessAnimation2 } from "../animated/ProcessAnimation2";
import { ProcessAnimation3 } from "../animated/ProcessAnimation3";
import { ProgressIndicator2 } from "../animated/ProgressIndicator2";

export const Process: React.FC = () => {
  const [frame, setFrame] = useState(0);

  const renderComponent = () => {
    switch (frame) {
      case 0:
        return <ProcessAnimation key="1" />;
      case 1:
        return <ProcessAnimation2 key="2" />;
      case 2:
        return <ProcessAnimation3 key="3" />;
    }
  };

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

    const process1 = document.getElementById("process1");
    const process2 = document.getElementById("process2");
    const process3 = document.getElementById("process3");

    observer1.observe(process1!);
    observer2.observe(process2!);
    observer3.observe(process3!);
  }, []);

  return (
    <section className="min-h-[60rem] flex flex-col items-center bg-section-background">
      <div className="w-full max-w-[100rem] mt-16 flex flex-col justify-center items-center">
        <h2 className="font-gunterz text-left px-5 md:px-0 w-full leading-8">
          Let&apos;s create something{" "}
          <span className="text-processAccent">great</span> together
        </h2>
        <div
          style={{ contain: "paint" }}
          className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center min-h-[110rem] xs:min-h-[103rem] iphone14max:min-h-[98rem] sm:min-h-[115rem] lg:min-h-[98rem] lg:mb-[10rem] lg:h-auto gap-0 lg:gap-20 w-full relative"
        >
          <div className="flex flex-col gap-[10rem] lg:gap-[20rem] lg:mt-[15rem] max-w-[35rem] absolute lg:relative top-10 px-5 mb-[10rem]">
            <ProcessContainer id="process1">
              <h3 className="font-gunterz leading-[3.4rem]">
                send us a free request, receive your
                <span className="text-processAccent"> quote.</span>{" "}
              </h3>
              <p>
                We value your time which is why we&apos;ll respond within 24
                hours. Answer a few questions about your business and project
                needs then choose when you&apos;d like us to reach out with one
                click. Yes it&apos;s that easy!
              </p>
            </ProcessContainer>
            <ProcessContainer id="process2">
              <h3 className="font-gunterz leading-[3.4rem]">
                Hop on a
                <span className="text-processAccent"> strategy call.</span>
              </h3>
              <p>
                Where we plan out the direction for your brand, messaging and
                design. Depending on the scope of the project multiple strategy
                calls may be needed.{" "}
              </p>
            </ProcessContainer>
            <ProcessContainer id="process3">
              <h3 className="font-gunterz leading-[3.4rem]">
                Sign off on the project and
                <span className="text-processAccent"> we get to work.</span>
              </h3>
              <p>
                Once you&apos;re satisfied with your brand, messaging, and
                design we get to work. From first strategy call to launch in
                under 60 days.
              </p>
            </ProcessContainer>
          </div>
          <div className="flex justify-center w-full lg:max-w-[30rem] h-[24rem] bg-section-background mb-20 mt-[20rem] lg:mt-[15rem] sticky top-[58vh] lg:top-[20rem]">
            <div className="h-[30rem] max-w-[30rem] w-full relative">
              <AnimatePresence mode="popLayout">
                {renderComponent()}
              </AnimatePresence>
              <ProgressIndicator2 progress={frame} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
