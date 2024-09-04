import react from "react";
import { LearnMore } from "../buttons";

export const OurValues: React.FC = () => {
  return (
    <section className="min-h-[60rem] bg-section-background flex flex-col items-center px-5 pb-20">
      <h2 className="w-full max-w-[100rem] mb-5 sm:mb-12 font-charcoalDance leading-8">
        We guarantee <span className="text-sun-orange">greatness</span>
      </h2>
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-15 min-h-[40rem] gap-5 max-w-[90rem]">
        <div className="bg-[#5D3010] rounded-[20px] 2xl:row-star-1 2xl:row-span-7 2xl:col-start-1 2xl:col-span-4 col-start-1 col-span-5 row-start-1 row-span-5 p-5 md:pl-10 pl-6 pt-10 pb-16 2xl:pb-5 relative">
          <h4 className="font-gunterz text-[1.25rem] md:text-[2rem] max-w-[20rem]">
            24 HOUR RESPONSE
          </h4>
          <p className="max-w-[20rem]">
            We value your time so we guarantee we will respond to you within 24
            hours
          </p>
          <button
            className={`absolute right-5 bottom-5 bg-[#D9D9D9] text-[#5D3010] text-[1rem] font-gunterz pt-1 px-5 rounded-[10px]`}
          >
            Learn More
          </button>
        </div>
        <div className="bg-[#1F2C22] rounded-[20px] 2xl:row-start-1 2xl:row-span-8 2xl:col-start-5 2xl:col-span-5 col-start-6 col-span-7 row-start-1 row-span-5 p-5 md:pl-10 pl-6 pt-10 relative pb-16 2xl:pb-5">
          <h4 className="font-gunterz text-[1.25rem] md:text-[2rem] max-w-[28rem]">
            QUICK TURNAROUND TIME
          </h4>
          <p className="max-w-[28rem]">
            We understand that time is your most valuable asset. That&apos;s why We
            will work as fast as we can to deliver on our promises
          </p>
          <button
            className={`absolute right-5 bottom-5 bg-[#D9D9D9] text-[#1F2C22] text-[1rem] font-gunterz pt-1 px-5 rounded-[10px]`}
          >
            Learn More
          </button>
        </div>
        <div className="bg-[#462121] rounded-[20px] 2xl:row-start-1 2xl:row-span-8 2xl:col-start-10 2xl:col-span-3 col-start-1 col-span-6 row-start-6 row-span-6 p-5 md:pl-10 pl-6 pt-10 relative pb-16 2xl:pb-5">
          <h4 className="font-gunterz text-[1.25rem] md:text-[2rem] max-w-[10rem]">
            GENUINE CONNECTION
          </h4>
          <p className="max-w-[20rem]">
            We strive to make connections that will last
          </p>
          <button
            className={`absolute right-5 bottom-5 bg-[#D9D9D9] text-[#462121] text-[1rem] font-gunterz pt-1 px-5 rounded-[10px]`}
          >
            Learn More
          </button>
        </div>
        <div className="bg-[#2D313E] rounded-[20px] 2xl:row-start-8 2xl:row-span-7 2xl:col-start-1 2xl:col-span-4 col-start-7 col-span-6 row-start-6 row-span-6 p-5 md:pl-10 pl-6 pt-10 relative pb-16 2xl:pb-5">
          <h4 className="font-gunterz text-[1.25rem] md:text-[2rem] max-w-[20rem]">
            FULL SATISFACTION
          </h4>
          <p className="max-w-[20rem]">
            Understanding exactly what you want and getting you results is the
            reason we do this in the first place
          </p>
          <button
            className={`absolute right-5 bottom-5 bg-[#D9D9D9] text-[#2D313E] text-[1rem] font-gunterz pt-1 px-5 rounded-[10px]`}
          >
            Learn More
          </button>
        </div>
        <div className="bg-[#2F4445] rounded-[20px] 2xl:row-start-9 2xl:row-span-6 2xl:col-start-5 2xl:col-span-3 col-start-1 col-span-7 row-start-12 row-span-3 p-5 md:pl-10 pl-6 pt-10 relative pb-16 2xl:pb-5">
          <h4 className="font-gunterz text-[1.25rem] md:text-[2rem]">DRIVEN BY RESULTS</h4>
          <p className="max-w-[20rem]">
            We want to create the best experience possible from start to finish.
            That’s why we focus on constantly improving the results we produce.
          </p>
          <button
            className={`absolute right-5 bottom-5 bg-[#D9D9D9] text-[#2F4445] text-[1rem] font-gunterz pt-1 px-5 rounded-[10px]`}
          >
            Learn More
          </button>
        </div>
        <div className="bg-[#49310C] rounded-[20px] 2xl:row-start-9 2xl:row-span-6 2xl:col-start-8 2xl:col-span-5 col-start-8 col-span-5 row-start-12 row-span-3 p-5 md:pl-10 pl-6 pt-10 relative pb-16 2xl:pb-5">
          <h4 className="font-gunterz text-[1.25rem] md:text-[2rem] max-w-[20rem]">
            CLEAR, HONEST COMMUNICATION
          </h4>
          <p className="max-w-[25rem]">
            Authenticity is a cornerstone in how we do things and that starts
            with honesty with ourselves and with you.
          </p>
          <button
            className={`absolute right-5 bottom-5 bg-[#D9D9D9] text-[#49310C] text-[1rem] font-gunterz pt-1 px-5 rounded-[10px]`}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
