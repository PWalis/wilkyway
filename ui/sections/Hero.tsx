"use client";
import react from "react";
import useWindowDimensions from "@/lib/UseWindowDimensions";
import { CTA, SecondaryCTA } from "@/ui/buttons";
import { Stars } from "../animated/Stars";

export const Hero = () => {
  const { width } = useWindowDimensions();

  return (
    <section
      className="flex justify-center items-center min-h-[60rem] bg-section-background"
      style={{ contain: "paint" }}
    >
      <div className="w-full max-w-[102.5rem] flex justify-start mb-14 px-8 flex-col-reverse lg1/2:flex-row items-center">
        <div className="flex flex-col z-10 mt-[5rem] xl:mt-0">
          <h1 className="mt-4 sm:mt-0 antialiased content-end">
            <span className="text-[#FEFEFE] font-gunterz text-[0.75rem] xs:text-[1rem] lg1/2:text-[1.5rem] tracking-wide lg1/2:pl-1 pb-2 inline-block ">
              Make your brand a star with
            </span>{" "}
            <br />
            <span className="leading-[50px] lg1/2:leading-[80px] tracking-tighter text-left text-[2.5rem] xs:text-[3rem] lg1/2:text-[5rem] font-gunterzBold">
              <span
                className="pt-1"
                style={{
                  background: "-webkit-linear-gradient(0deg, #FEFEFE, #90A2C9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                expert crafted
              </span>{" "}
              <br />
              <span
                style={{
                  background:
                    "-webkit-linear-gradient(0deg, #5C8FFF 16%, #375699 62%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="pt-1"
              >
                high performing websites
              </span>{" "}
            </span>
          </h1>
          <p className="text-[1.25rem] tracking-wider mb-1 max-w-[40rem] antialiased lg1/2:pl-1">
            Break through the digital atmosphere with websites that are
            light-years ahead of the competition, combining stellar design,
            copywriting that converts, lightning-fast load times, and perfect
            onsite SEO.
          </p>
          <div className="flex-col items-center sm:flex-row flex gap-5 mt-4">
            <CTA>ATTRACT CLIENTS</CTA>{" "}
            <SecondaryCTA>FREE GROWTH KIT</SecondaryCTA>
          </div>
          <div className="text-hero-checklist mt-5">
            <div className="flex gap-1">
              <img src="https://placehold.co/20" />
              <p className="text-[1.25rem] font-semibold tracking-wider">Brand Identity Creation</p>
            </div>
            <div className="flex gap-1">
              <img src="https://placehold.co/20" />
              <p className="text-[1.25rem] font-semibold tracking-wider">Powerful Copywriting</p>
            </div>
            <div className="flex gap-1">
              <img src="https://placehold.co/20" />
              <p className="text-[1.25rem] font-semibold tracking-wider">Custom Design</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[30rem] h-[11rem] xs:h-[15rem] iphone14max:h-[17rem] 3sm:h-[18.5rem] 2sm:h-[25rem] lg1/2:h-[30rem] overflow-visible relative z-0">
          <Stars />
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1799.93 1804.77"
            className="lg1/2:w-[37rem] lg1/2:absolute -top-[5.5rem] lg1/2:-left-[12rem]"
          >
            <defs>
              <style>{`
      .cls-1milkyway {
        fill: url(#linear-gradient-2);
      }

      .cls-2milkyway {
        fill: url(#radial-gradient);
      }

      .cls-3milkyway {
        fill: url(#radial-gradient-3);
      }

      .cls-4milkyway {
        fill: url(#radial-gradient-2);
      }

      .cls-5milkyway {
        fill: url(#linear-gradient);
      }
    `}</style>
              <linearGradient
                id="linear-gradient"
                x1="923.03"
                y1="983.95"
                x2="923.03"
                y2="1804.77"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".18" stop-color="#5a8cf9" />
                <stop offset="1" stop-color="#001824" />
              </linearGradient>
              <radialGradient
                id="radial-gradient"
                cx="897"
                cy="903.01"
                fx="897"
                fy="903.01"
                r="792.15"
                gradientTransform="translate(-275.34 431.86) rotate(-23.46)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f15a24" />
                <stop offset="0" stop-color="#ef5a26" />
                <stop offset=".11" stop-color="#ba5d61" />
                <stop offset=".21" stop-color="#905f90" />
                <stop offset=".29" stop-color="#7261b1" />
                <stop offset=".37" stop-color="#5f62c6" />
                <stop offset=".41" stop-color="#5963ce" />
                <stop offset=".86" stop-color="#2246a1" />
              </radialGradient>
              <radialGradient
                id="radial-gradient-2"
                cx="923.03"
                cy="892.16"
                fx="923.03"
                fy="892.16"
                r="89.84"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#7c9cff" />
                <stop offset=".04" stop-color="#7a9bfe" />
                <stop offset=".63" stop-color="#6290fa" />
                <stop offset="1" stop-color="#5a8df9" />
              </radialGradient>
              <radialGradient
                id="radial-gradient-3"
                cx="901.75"
                cy="858.98"
                fx="901.75"
                fy="858.98"
                r="792.15"
                gradientTransform="translate(-275.34 431.86) rotate(-23.46)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#2a4787" />
                <stop offset=".05" stop-color="#233d78" />
                <stop offset=".14" stop-color="#1b3063" />
                <stop offset=".25" stop-color="#142653" />
                <stop offset=".37" stop-color="#11204a" />
                <stop offset=".54" stop-color="#101f48" />
                <stop offset=".76" stop-color="#0e1d44" />
                <stop offset=".93" stop-color="#09183b" />
                <stop offset="1" stop-color="#061535" />
              </radialGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="923.03"
                y1="0"
                x2="923.03"
                y2="820.82"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#001824" />
                <stop offset=".04" stop-color="#072135" />
                <stop offset=".21" stop-color="#204170" />
                <stop offset=".37" stop-color="#345ca1" />
                <stop offset=".51" stop-color="#4470c7" />
                <stop offset=".65" stop-color="#507fe2" />
                <stop offset=".77" stop-color="#5788f3" />
                <stop offset=".86" stop-color="#5a8cf9" />
              </linearGradient>
            </defs>
            <g id="Layer_1-2" data-name="Layer_1">
              <polygon
                className="cls-5milkyway"
                points="923.03 1804.77 964.77 983.95 881.3 983.95 923.03 1804.77"
              />
              <path
                className="cls-2milkyway"
                d="M1796.21,562.46l-1.83.8c-4.27,5.23-5.3,10.4-7.49,15.4-9.72,27.85-19.26,53.59-30.81,82.24-12.22,29.61-27.09,55.65-43.96,84.58-10.91,17.56-21.4,33.59-33.72,50.42-19.95,26.88-39.96,51.1-65.24,78.27-1.59,1.36-3.18,2.73-4.76,4.09-2.93,3.3-4.02,5.8-7.2,8.53-3.18,2.73-5.43,5.06-8.37,8.35l-9.53,8.19c-1.59,1.36-2.01,2.9-3.6,4.27-4.76,4.09-9.53,8.18-13.38,11.88-40.3,37.75-83.08,69.81-132.83,100.86-15.53,9.43-29.47,17.51-45.24,26.38-16.02,8.3-31.12,16.21-47.39,23.94-13.76,5.97-28.19,12.91-42.2,18.31-23.43,8.81-45.94,17.23-71.02,24.74-20.25,6.08-37.99,10.41-58.07,14.39-18.24,3.19-36.23,6.95-54.29,8.03-13.9.63-26.39,2-39.61,1.66-10.9,0-20.88-.39-31.11-1.36-31.18-4.02-60.1-10.38-79.07-26.46-.25-.57-2.33-.34-2.58-.91-10.82-8.28-18.33-18.88-19.37-31.81,40.44-1.27,82.49-8.65,127.38-21.95,61.67-18.66,115.97-44.24,168.66-78.58,73.64-48.84,130.19-104.43,169.87-166.22,17.37-27.8,31.07-54,41.71-82.25,6.5-17.68,10.49-33.59,14-50.64.35-4.21.95-7.85,2.23-12.45,1.45-6.71,1.31-12.05,1.84-18.36,6.14-58.71-5.89-111.55-33.77-158.2-31.5-52.5-79.2-94.6-142.18-126.69-12.69-6.65-25.81-11.76-39.18-17.44-31.88-13.18-63.87-21.58-100.02-29.53-70.4-14.02-141.01-18.49-221.83-13.8-53.02,3.42-102.72,9.46-157.13,22.26-13.83,3.31-26.99,5.64-39.83,11.21.49,1.14-1.83.8-1.59,1.36l.49,1.14c6.06,1.41,13.23.33,19.72.22,37.04-2.57,71.08-4.51,108.61-5.94,38.69-1.27,71.22.83,107.23,3.43,21.62,2.1,41.16,4.42,61.19,7.88,31.92,5.74,59.92,12.49,90.32,22.25l4.23,2.22c3.74,1.08,6.98,1.01,9.8,2.49s5.4,2.39,9.14,3.47c2.82,1.47,5.64,2.95,8.46,4.43,1.41.74,3.49.51,4.9,1.25,4.23,2.21,8.46,4.43,12.45,6.08,40.34,17.61,71.51,39.19,98.65,66.57,8.11,8.64,14.8,16.53,22,25.57,6.27,9.43,12.3,18.3,17.66,28.13,3.7,8.52,8.56,17.21,11.34,26.14,4.33,15,8.41,29.43,10.23,46.19,1.51,13.53,1.36,25.75-.13,39.9-1.98,13.01-3.05,25.63-8.03,39.27-4.13,10.57-6.68,19.77-11.98,30.18-3.96,8.46-8.16,16.37-13.28,24.66-17.19,25.7-36.96,50.47-67.27,71.06-.92.4-1.35,1.92-2.26,2.32-16.16,11.54-34.55,21.31-53.99,26.79,6.83-16.89,11.2-33.61,13.79-50.39,4-33.48-.07-65.47-14.23-93.09-9.97-17.95-21.78-35.11-38.17-50.28-75.76-69.08-209.61-88.66-353.75-66.62-6,1.25-11.08,2.1-17.32,2.79-179.39,31.25-357.75,120.12-492.99,235.53-74.22,62.6-130.73,128.3-175.96,199.92-28.71,46.89-49.83,91.17-64.39,138-1.45,6.71-4.06,13.24-5.51,19.95-5.2,23.19-9.98,44.84-10.1,67.17-.88,10.52-3.86,21.26,2.84,29.16l1.83-.8c3.85-3.7,2.37-7.11,6.22-10.8,19.54-60.48,43.74-120.27,83.18-182.62,33.65-53.09,73.68-101.52,125.28-150.92,87.39-82.48,193.43-152.13,316.88-194.22l6.42-2.79c92.43-30.66,188.95-46.88,262.7-20.13,1.16.17,2.33.34,3.49.51,8.46,4.43,18.52,7.5,24.72,14.26.25.57,2.33.34,2.58.91,10.35,8.8,17.52,19.48,18.9,32.32-21.88.86-44.34,3.52-67.56,7.56-47.31,9.05-95.39,23.84-140.77,44.88-29.78,14.26-59.07,29.68-87.12,47.93-128.17,83.97-205.31,195.1-225.58,299.1-.36,4.2-.96,7.84-2.23,12.45-19.66,128.04,45.01,234.35,163.98,297.51,64.21,34.94,139.4,54.97,227.3,64.1,57.88,5.27,114.71,5.6,177.64-.1,9.24-1.31,17.81-1.66,27.06-2.97,31.89-4.39,61.7-8.55,94.19-16.56,14.99-3.13,29.56-4.73,43.5-12.8l-.49-1.13c-3.99-1.65-9.49.74-13.48-.91-80.99,6.79-159.3,9.7-235.8,1.72-65.11-6.86-121.12-20.37-174.33-42.52-88.41-37.94-151.34-95.04-167.8-175.67l-1.73-3.98c-11.07-60.69.36-129.8,66.12-196.81l2.01-2.9c9.53-8.19,17.65-17.11,29.75-24.39.92-.4,1.34-1.93,2.26-2.33,16.4-11.12,34.34-20.49,53.32-26.24-12.62,30.72-17.07,60.52-14.03,90.36,4.77,41.14,22.32,74.04,53.2,102.5,44.39,39.48,104.83,63.23,180.42,71.61,34.18,3.41,67.37,4.54,104.66,2.53,23.39-1.36,45.12-4.04,68.68-7.52,6-1.25,11.08-2.1,17.32-2.79,9.24-1.31,17.08-3.35,26.07-5.24,83.29-16.55,164.65-45.11,242.74-83.71,87.93-43.56,166.59-95.92,236.21-156.52,14.3-12.28,26.5-24.33,39.64-36.78,30.78-29.56,54.64-57.47,79.35-88.45,46-59.8,78.17-116.3,100.71-177.4,14.28-39.95,23.54-76.38,24.66-114.01.22-9.55,1.6-18.93-1.85-26.88-1.83.8-.49-1.14-1.41-.74ZM1038.12,839.83c15.03,34.63-24.44,85.11-88.15,112.76-63.71,27.65-127.54,21.99-142.57-12.64-15.03-34.63,24.44-85.11,88.15-112.76,63.71-27.65,127.54-21.99,142.57,12.65Z"
              />
              <circle
                className="cls-4milkyway"
                cx="923.03"
                cy="892.16"
                r="89.84"
              />
              <path
                className="cls-3milkyway"
                d="M1783.04,520.18l-1.83.8c-4.27,5.23-5.3,10.4-7.49,15.4-9.72,27.85-19.26,53.59-30.81,82.24-12.22,29.61-27.09,55.65-43.96,84.58-10.91,17.56-21.4,33.59-33.72,50.42-19.95,26.88-39.96,51.1-65.24,78.27-1.59,1.36-3.18,2.73-4.76,4.09-2.93,3.3-4.02,5.8-7.2,8.53-3.18,2.73-5.43,5.06-8.37,8.35l-9.53,8.19c-1.59,1.36-2.01,2.9-3.6,4.27-4.76,4.09-9.53,8.18-13.38,11.88-40.3,37.75-83.08,69.81-132.83,100.86-15.53,9.43-29.47,17.51-45.24,26.38-16.02,8.3-31.12,16.21-47.39,23.94-13.76,5.97-28.19,12.91-42.2,18.31-23.43,8.81-45.94,17.23-71.02,24.74-20.25,6.08-37.99,10.41-58.07,14.39-18.24,3.19-36.23,6.95-54.29,8.03-13.9.63-26.39,2-39.61,1.66-10.9,0-20.88-.39-31.11-1.36-31.18-4.02-60.1-10.38-79.07-26.46-.25-.57-2.33-.34-2.58-.91-10.82-8.28-18.33-18.88-19.37-31.81,40.44-1.27,82.49-8.65,127.38-21.95,61.67-18.66,115.97-44.24,168.66-78.58,73.64-48.84,130.19-104.43,169.87-166.22,17.37-27.8,31.07-54,41.71-82.25,6.5-17.68,10.49-33.59,14-50.64.35-4.21.95-7.85,2.23-12.45,1.45-6.71,1.31-12.05,1.84-18.36,6.14-58.71-5.89-111.55-33.77-158.2-31.5-52.5-79.2-94.6-142.18-126.69-12.69-6.65-25.81-11.76-39.18-17.44-31.88-13.18-63.87-21.58-100.02-29.53-70.4-14.02-141.01-18.49-221.83-13.8-53.02,3.42-102.72,9.46-157.13,22.26-13.83,3.31-26.99,5.64-39.83,11.21.49,1.14-1.83.8-1.59,1.36l.49,1.14c6.06,1.41,13.23.33,19.72.22,37.04-2.57,71.08-4.51,108.61-5.94,38.69-1.27,71.22.83,107.23,3.43,21.62,2.1,41.16,4.42,61.19,7.88,31.92,5.74,59.92,12.49,90.32,22.25l4.23,2.22c3.74,1.08,6.98,1.01,9.8,2.49s5.4,2.39,9.14,3.47c2.82,1.47,5.64,2.95,8.46,4.43,1.41.74,3.49.51,4.9,1.25,4.23,2.21,8.46,4.43,12.45,6.08,40.34,17.61,71.51,39.19,98.65,66.57,8.11,8.64,14.8,16.53,22,25.57,6.27,9.43,12.3,18.3,17.66,28.13,3.7,8.52,8.56,17.21,11.34,26.14,4.33,15,8.41,29.43,10.23,46.19,1.51,13.53,1.36,25.75-.13,39.9-1.98,13.01-3.05,25.63-8.03,39.27-4.13,10.57-6.68,19.77-11.98,30.18-3.96,8.46-8.16,16.37-13.28,24.66-17.19,25.7-36.96,50.47-67.27,71.06-.92.4-1.35,1.92-2.26,2.32-16.16,11.54-34.55,21.31-53.99,26.79,6.83-16.89,11.2-33.6,13.79-50.39,4-33.48-.07-65.47-14.23-93.09-9.97-17.95-21.78-35.11-38.17-50.28-75.76-69.08-209.61-88.66-353.75-66.62-6,1.25-11.08,2.1-17.32,2.79-179.39,31.25-357.75,120.12-492.99,235.53-74.22,62.6-130.73,128.3-175.96,199.92-28.71,46.89-49.83,91.17-64.39,138-1.45,6.71-4.06,13.24-5.51,19.95-5.2,23.19-9.98,44.84-10.1,67.17-.88,10.52-3.85,21.26,2.84,29.16l1.83-.8c3.85-3.7,2.37-7.11,6.22-10.8,19.54-60.48,43.74-120.27,83.18-182.62,33.65-53.09,73.68-101.52,125.28-150.92,87.39-82.48,193.43-152.13,316.88-194.22l6.42-2.79c92.43-30.66,188.95-46.88,262.7-20.13,1.16.17,2.33.34,3.49.51,8.46,4.43,18.52,7.5,24.72,14.26.25.57,2.33.34,2.58.91,10.35,8.8,17.52,19.48,18.9,32.32-21.88.86-44.34,3.52-67.56,7.56-47.31,9.05-95.39,23.84-140.77,44.88-29.78,14.26-59.07,29.68-87.12,47.93-128.17,83.97-205.31,195.1-225.58,299.1-.36,4.2-.96,7.84-2.23,12.45-19.66,128.04,45.01,234.35,163.98,297.51,64.21,34.94,139.4,54.97,227.3,64.1,57.88,5.27,114.71,5.6,177.64-.1,9.24-1.31,17.81-1.66,27.06-2.97,31.89-4.39,61.7-8.55,94.19-16.56,14.99-3.13,29.56-4.73,43.5-12.8l-.49-1.13c-3.99-1.65-9.49.74-13.48-.91-80.99,6.79-159.3,9.7-235.8,1.72-65.11-6.86-121.12-20.37-174.33-42.52-88.41-37.94-151.34-95.04-167.8-175.67l-1.73-3.98c-11.07-60.69.36-129.8,66.12-196.81l2.01-2.9c9.53-8.19,17.65-17.11,29.75-24.39.92-.4,1.34-1.93,2.26-2.33,16.4-11.12,34.34-20.49,53.32-26.24-12.62,30.72-17.07,60.52-14.03,90.36,4.77,41.14,22.32,74.04,53.2,102.5,44.39,39.48,104.83,63.23,180.42,71.61,34.18,3.41,67.37,4.54,104.66,2.53,23.39-1.36,45.12-4.04,68.68-7.52,6-1.25,11.08-2.1,17.32-2.79,9.24-1.31,17.08-3.35,26.07-5.24,83.29-16.55,164.65-45.11,242.74-83.71,87.93-43.56,166.59-95.92,236.21-156.52,14.3-12.28,26.5-24.33,39.64-36.78,30.78-29.56,54.64-57.47,79.35-88.45,46-59.8,78.17-116.3,100.71-177.4,14.28-39.95,23.54-76.38,24.66-114.01.22-9.55,1.6-18.93-1.85-26.88-1.83.8-.49-1.14-1.41-.74ZM1024.94,797.54c15.03,34.63-24.44,85.11-88.15,112.76-63.71,27.65-127.54,21.99-142.57-12.64-15.03-34.63,24.44-85.11,88.15-112.76,63.71-27.65,127.54-21.99,142.57,12.65Z"
              />
              <polygon
                className="cls-1milkyway"
                points="923.03 0 881.3 820.82 964.77 820.82 923.03 0"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};
