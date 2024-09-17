"use client";
import React, { useState, useEffect } from "react";
import { ProcessContainer } from "../containers/ProcessContainer";
import { AnimatePresence } from "framer-motion";
import { ProcessAnimation } from "../animated/ProcessAnimation";
import { ProcessAnimation2 } from "../animated/ProcessAnimation2";
import { ProcessAnimation3 } from "../animated/ProcessAnimation3";
import { ProgressIndicator2 } from "../animated/ProgressIndicator2";
import { H2Container } from "../containers/H2Container";

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
    <section className="min-h-[60rem] pb-[5rem] lg:pb-0 flex flex-col items-center bg-section-background">
      <div className="w-full max-w-[100rem] mt-16 flex flex-col justify-center items-center px-5">
        <H2Container color="#5BD9D9" topString="Our Process"> Our Lightning Fast{" "}
        <span className="text-processAccent">Process</span></H2Container>
        <div
          style={{ contain: "paint" }}
          className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center lg:mb-[10rem] lg:h-auto gap-0 lg:gap-20 w-full relative"
        >
          <div className="flex flex-col gap-[10rem] lg:gap-[20rem] lg:mt-[15rem] max-w-[35rem] mb-[5rem]">
            <ProcessContainer id="process1">
              <h3 className="font-gunterz leading-[3.4rem]">
                send us a free request,
                <span className="text-processAccent"> receive your quote.</span>{" "}
              </h3>
              <p>
                We value <span className="italic">your time</span> which is why we&apos;ll always <span className="font-semibold">respond within 24
                hours</span>. Answer a few questions about your business and project
                needs, and we will reach out to you to schedule a call to discuss your project. Yes,  <span className="font-semibold">it&apos;s that easy!</span>
              </p>
            </ProcessContainer>
            <ProcessContainer id="process2">
              <h3 className="font-gunterz leading-[3.4rem]">
                Hop on a
                <span className="text-processAccent"> strategy call.</span>
              </h3>
              <p>
                Where we plan out the <span className="font-semibold">direction for your brand, messaging and
                design.</span> Depending on the scope of the project multiple strategy
                calls may be needed.{" "}
              </p>
            </ProcessContainer>
            <ProcessContainer id="process3">
              <h3 className="font-gunterz leading-[3.4rem]">
                Sign off on the project and
                <span className="text-processAccent"> we get to work.</span>
              </h3>
              <p>
                Once you approve the vision of your site and brand that we have crafted, we get to work. <span className="font-semibold">From first strategy call to launch in
                under 60 days.</span>
              </p>
            </ProcessContainer>
          </div>
          <div className="flex justify-center w-full lg:max-w-[30rem] bg-section-background lg:mt-[15rem] sticky bottom-0 lg:top-[20rem]">
            <div className="max-w-[30rem] w-full relative">
              <AnimatePresence mode="wait">
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
