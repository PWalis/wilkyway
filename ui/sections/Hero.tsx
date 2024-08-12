'use client';
import react from "react";
import useWindowDimensions from "@/lib/UseWindowDimensions"
import { CTA, SecondaryCTA } from "@/ui/buttons";

export const Hero = () => {
  const {width} = useWindowDimensions();

  return (
    <section className="flex justify-center items-center h-[60rem] bg-gray-900">
      <div className="w-full max-w-[102.5rem] flex justify-between mb-14 px-8 flex-col-reverse lg1/2:flex-row items-center">
        <div className="flex flex-col max-w-5xl">
          <h1 className="mt-4 sm:mt-0 leading-[2.5rem] lg3/4:leading-[4rem] xl:leading-[4.5rem] xl1/2:leading-[5rem] h-[11rem] antialiased content-end">
            <span className="font-charcoalDance text-[2.2rem] xs:text-[2.5rem] lg1/2:text-[2rem] lg3/4:text-[2.7rem] xl:text-[3.3rem] xl1/2:text-[3.8rem]">
              Beautiful{" "}
              <span className="text-sun-orange leading-[1rem]">fitness landing pages</span>{" "}
              that
            </span>{" "}<br/>
            <span
              style={{
                WebkitTextFillColor: "transparent",
                WebkitTextStrokeWidth: "3px",
                WebkitTextStrokeColor: "white",
              }}
              className="inline-block sm:pt-0 pt-4 font-gunterzBoldItalic text-[2.8rem] xs:text-[3rem] lg1/2:text-[3.25rem] lg3/4:text-[4.4rem] xl:text-[5.4rem] xl1/2:text-[6rem]"
            >
              Sell
            </span>{" "}
            <span className="inline-block sm:pt-0 pt-4 font-gunterzBold text-[2.8rem] xs:text-[3rem] lg1/2:text-[3.25rem] lg3/4:text-[4.4rem] xl:text-[5.4rem] xl1/2:text-[6rem] sm:pl-5 pl-0">For You.</span>
          </h1>
          <p className="text-[1.25rem] mt-10 sm:mt-0 max-w-[50rem] antialiased">
            We take your target audience, your business needs, identity, and
            fitness philosophy and turn it into a professional landing page that
            does all the work for you so you can spend your time doing what you
            love.
          </p>
          <div className="flex-col items-center sm:flex-row flex gap-5 mt-4">
            <CTA>ATTRACT CLIENTS</CTA>{" "}
            <SecondaryCTA>FREE GROWTH KIT</SecondaryCTA>
          </div>
        </div>
        <div className="flex flex-shrink-0 2xl:mr-[5rem]">
          <img src="https://placehold.co/400" />
        </div>
      </div>
    </section>
  );
};
