"use client";
import React from "react";
import { SolutionContainer } from "../containers/SolutionContainer";

export const Process: React.FC = () => {
  return (
    <section className="min-h-[60rem] flex flex-col items-center bg-storm-black">
      <div className="w-full max-w-[86.375rem] mt-16 flex flex-col justify-center items-center">
        <h2 className="font-charcoalDance sticky top-[5rem]">
          Let's create something <span className="text-sun-orange">great</span>{" "}
          together
        </h2>
        <div className="flex flex-row justify-center gap-20 w-full ">
          <div className="flex flex-col gap-[20rem] mt-[15rem]">
            <SolutionContainer>
              <h3 className="font-gunterz leading-[3.4rem]">
                FILL OUT A <span className="text-sun-orange">FREE</span> QUOTE
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
            <SolutionContainer>
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
            <SolutionContainer>
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
          <div className="h-[20rem] w-[20rem] bg-storm-gray mt-[15rem] sticky top-[20rem]"></div>
        </div>
      </div>
    </section>
  );
};
