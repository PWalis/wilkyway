"use client";
import React from "react";
import { SolutionContainer } from "../containers/SolutionContainer";

export const Solution: React.FC = () => {
  return (
    <section className="min-h-[60rem] flex flex-col items-center bg-storm-black">
      <div className="w-full max-w-[100rem] mt-16 flex flex-col justify-center items-center">
        <h2 className="font-charcoalDance px-10 lg:text-left text-center w-full">
          your landing page = your{" "}
          <span className="text-sun-orange">conversions</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center h-[120rem] lg:mb-[10rem] lg:h-auto gap-0 lg:gap-20 w-full relative">
          <div className="flex flex-col gap-[5rem] lg:gap-[20rem] lg:mt-[15rem] max-w-[30rem] absolute lg:relative top-10">
            <SolutionContainer>
              <h3 className="font-gunterz">
                DON'T LET YOUR LEADS LEAVE YOU ON READ.
              </h3>
              <p className="max-w-[26.25rem]">
                Your landing page should turn casual visitors into loyal clients
                and keep your audience engaged from the first click. We’ve got
                your covered.
              </p>
            </SolutionContainer>
            <SolutionContainer>
              <h3 className="font-gunterz">
                BUILD TRUST THROUGH PROFESSIONAL DESIGN.
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
                CAPTIVATE YOUR MARKET WITH TARGETED COPYWRITING.
              </h3>
              <p className="max-w-[26.25rem]">
                Your target audience speaks a certain way, has certain pain
                points, and they want to know that you’re the right coach for
                them. We do the research so when they land on your page it feels
                like it was made for them, because it was.
              </p>
            </SolutionContainer>
            <SolutionContainer>
              <h3 className="font-gunterz">SO FAST YOU WON'T MISS IT.</h3>
              <p className="max-w-[26.25rem]">
                Our websites load fast even on a slow network. Don’t let a slow
                website bring your conversion to a screeching halt. With peak
                you’ll get the pinnacle of performance.
              </p>
            </SolutionContainer>
          </div>
          <div className="h-[20rem] max-w-[23rem] w-full bg-storm-gray mt-[20rem] lg:mt-[15rem] sticky top-[60vh] lg:top-[20rem]"></div>
        </div>
      </div>
    </section>
  );
};
