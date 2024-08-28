"use client";
import React from "react";
import { SolutionContainer } from "../containers/SolutionContainer";

export const Process: React.FC = () => {
  return (
    <section className="min-h-[60rem] flex flex-col items-center bg-storm-black">
      <div className="w-full max-w-[100rem] mt-16 flex flex-col justify-center items-center">
        <h2 className="font-charcoalDance text-left px-5 md:px-0 w-full leading-8">
          Let&apos;s create something{" "}
          <span className="text-sun-orange">great</span> together
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center min-h-[98rem] lg:mb-[10rem] lg:h-auto gap-0 lg:gap-20 w-full relative">
          <div className="flex flex-col gap-[5rem] lg:gap-[20rem] lg:mt-[15rem] max-w-[30rem] absolute lg:relative top-10 px-5 mb-16">
            <SolutionContainer id="process1">
              <h3 className="font-gunterz leading-[3.4rem]">
                FILL OUT A <span className="text-sun-orange">FREE</span> REQUEST
                GET A{" "}
                <span
                  className="font-gunterzBold"
                  style={{
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeColor: "white",
                    WebkitTextStrokeWidth: "1px",
                  }}
                >
                  RESPONSE WITHIN 24 HOURS
                </span>
              </h3>
              <p className="text-[#9B9B9B]">(We value your time)</p>
            </SolutionContainer>
            <SolutionContainer id="process2">
              <h3 className="font-gunterz leading-[3.4rem]">
                <span className="text-sun-orange">STRATEGY</span> CALL. WHERE WE
                PLAN OUT{" "}
                <span
                  className="font-gunterzBold"
                  style={{
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeColor: "white",
                    WebkitTextStrokeWidth: "1px",
                  }}
                >
                  THE DIRECTION FOR YOUR LANDING PAGE
                </span>
              </h3>
            </SolutionContainer>
            <SolutionContainer id="process3">
              <h3 className="font-gunterz leading-[3.4rem]">
                SIGN OFF ON THE <span className="text-sun-orange">DESIGN</span>{" "}
                AND WE{" "}
                <span
                  className="font-gunterzBold"
                  style={{
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeColor: "white",
                    WebkitTextStrokeWidth: "1px",
                  }}
                >
                  LAUNCH
                </span>
              </h3>
            </SolutionContainer>
          </div>
          <div className="flex justify-center w-full lg:max-w-[23rem] h-[24rem] bg-storm-black mt-[20rem] lg:mt-[15rem] sticky top-[60vh] lg:top-[20rem]">
            <div className="h-[20rem] max-w-[23rem] w-full bg-storm-gray"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
