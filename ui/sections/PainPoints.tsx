import react from "react";
import { CTA } from "../buttons";
import { PainPoint } from "../containers/PaintPoint";
import { HeroSupportContainer } from "../containers/HeroSupportContainer";
import { H2Container } from "../containers/H2Container";

export const PainPoints: React.FC = () => {
  return (
    <section className="flex flex-col relative items-center min-h-[60rem] px-5 bg-section-background">
      <div className="flex gap-[1.5rem] md:gap-[3.5313rem] flex-row flex-wrap justify-center xl1/2:absolute -top-[9rem]">
        <HeroSupportContainer>
          <div className="max-w-[6rem] h-[100px]">
            <svg
              id="Layer_2heroCam"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 94.37 79.81"
              className="overflow-visible"
            >
              <defs>
                <style>
                  {`
      .cls-1heroCam {
        stroke-width: 4.23px;
      }

      .cls-1heroCam, .cls-2heroCam {
        fill: none;
        stroke: #477cee;
        stroke-miterlimit: 10;
      }

      .cls-3heroCam {
        fill: #477cee;
      }

      .cls-2heroCam {
        stroke-linecap: round;
        stroke-width: 3.42px;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2heroCam" data-name="Layer_1heroCam">
                <g>
                  <path
                    className="cls-3heroCam"
                    d="M83.4,10.82h-18.08l-1.21-4.1c-.15-.51-.25-1.03-.31-1.55-.32-2.91-2.78-5.17-5.78-5.17h-21.72c-3,0-5.48,2.28-5.79,5.2-.05.51-.14,1.01-.28,1.5l-1.19,4.12h-3.9c-.69-3.17-3.51-5.55-6.89-5.55h-.8c-1.95,0-3.71.79-4.98,2.07-.94.94-1.61,2.14-1.9,3.49h-.16C4.62,11.12,0,15.91,0,21.78v47.07c0,6.05,4.91,10.96,10.97,10.96h72.43c6.06,0,10.97-4.91,10.97-10.96V21.78c0-6.05-4.91-10.96-10.97-10.96ZM47.18,69.78c-13.51,0-24.47-10.95-24.47-24.47,0-8.97,4.83-16.81,12.03-21.07,3.64-2.16,7.9-3.4,12.44-3.4s8.81,1.24,12.46,3.4c7.19,4.26,12.02,12.11,12.02,21.07,0,13.52-10.96,24.47-24.48,24.47ZM80.79,28.59c-3.27,0-5.92-2.65-5.92-5.93s2.65-5.92,5.92-5.92,5.93,2.65,5.93,5.92-2.65,5.93-5.93,5.93Z"
                  />
                  <circle
                    className="cls-1heroCam"
                    cx="47.19"
                    cy="45.02"
                    r="15.84"
                  />
                  <path
                    className="cls-2heroCam"
                    d="M38.17,42.98c0-3.85,3.12-6.98,6.98-6.98"
                  />
                </g>
              </g>
            </svg>
          </div>
          <h4 className="font-gunterz">Bi-Weekly PROJECT SNAPSHOTS</h4>
          <p className="">
            Frequent check-in schedule keeps our vision aligned
          </p>
        </HeroSupportContainer>
        <HeroSupportContainer>
          <div className="max-w-[6rem] h-[100px]">
            <svg
              id="Layer_2heroChat"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -20 111.91 76.68"
              className="overflow-visible"
            >
              <defs>
                <style>
                  {`
      .cls-1heroChat {
        fill: #477cee;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2heroChat" data-name="Layer_1heroChat">
                <path
                  className="cls-1heroChat"
                  d="M102.33,71.13c-1.56-1.01-4.5-3.56-3.41-5.63h.01c6.11-3.39,10.25-9.9,10.25-17.37v-28.29c0-10.96-8.88-19.84-19.84-19.84H19.83C8.88,0,0,8.88,0,19.84v28.29c0,10.95,8.88,19.83,19.83,19.83h55.67c.93.63,1.76,1.19,2.36,1.51,5.04,2.72,10.13,6.21,15.93,6.95,3.51.45,7.23.32,10.76-.48,2.6-.6,5.1-1.56,7.36-2.93-3.25.6-6.8-.07-9.58-1.88ZM81.13,26.47c4.15,0,7.51,3.37,7.51,7.51s-3.36,7.51-7.51,7.51-7.51-3.36-7.51-7.51,3.37-7.51,7.51-7.51ZM28.04,41.49c-4.15,0-7.51-3.36-7.51-7.51s3.36-7.51,7.51-7.51,7.51,3.37,7.51,7.51-3.36,7.51-7.51,7.51ZM54.59,41.49c-4.15,0-7.51-3.36-7.51-7.51s3.36-7.51,7.51-7.51,7.51,3.37,7.51,7.51-3.37,7.51-7.51,7.51Z"
                />
              </g>
            </svg>
          </div>
          <h4 className="font-gunterz">response within 24 hours</h4>
          <p>Quick clear communication is out top priority</p>
        </HeroSupportContainer>
        <HeroSupportContainer>
          <div className="max-w-[6rem]  h-[100px]">
            <svg
              id="Layer_2heroCheck"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 112.93 107.43"
            >
              <defs>
                <style>
                  {`
      .cls-1heroCheck {
        fill: #477cee;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2heroCheck" data-name="Layer_1heroCheck">
                <path
                  className="cls-1heroCheck"
                  d="M112.93,53.72l-16.1-13.12,5.31-20.08-20.74-1.14L73.91,0l-17.45,11.28L39.01,0l-7.49,19.38-20.74,1.14,5.31,20.08L0,53.72l16.09,13.12-5.31,20.07,20.74,1.15,7.49,19.37,17.45-11.27,17.45,11.27,7.49-19.37,20.74-1.14-5.31-20.08,16.1-13.12ZM66.66,51.23c-5.28,6.26-8.72,13.34-9.93,20.48l-1.63,9.6-6.25-7.47c-5.28-6.29-12.47-11.19-20.26-13.79l2.86-8.54c6.85,2.29,13.15,5.92,18.53,10.65,2.12-5.89,5.44-11.57,9.8-16.73,5.37-6.37,12.4-12.05,20.9-16.89l4.45,7.82c-7.57,4.31-13.79,9.32-18.47,14.87Z"
                />
              </g>
            </svg>
          </div>
          <h4 className="font-gunterz">website in 60 days or less</h4>
          <p>We work fast so you can launch sooner</p>
        </HeroSupportContainer>
      </div>
      <div className="flex flex-col justify-start w-full max-w-[100rem] min-h-[30rem] items-center mt-0 lg1/2:mt-[36rem] xl3/4:mt-[13.5rem]">
      <H2Container topString="Your Problem" color="#CB5246">does this hit <span className="text-painPointAccent">home?</span></H2Container>
        <div className="w-full max-w-[86.375rem] flex flex-row justify-center flex-wrap gap-8">
          <PainPoint>
            <div className="w-full max-w-[100px] h-[60px] mt-7 mb-9">
              <svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 93.2 77.85"
              >
                <defs>
                  <style>
                    {`
      .cls-1unsatisfied {
        fill: #cb5246;
      }`}
                  </style>
                </defs>
                <g id="Layer_1-2" data-name="Layer_1">
                  <g>
                    <path
                      className="cls-1unsatisfied"
                      d="M80.94,15.98C69.2,4.92,53.41-2.32,37.05.68S5.24,19.19,1.01,35.8c-4.5,17.65,6.54,33.3,23.36,38.5,18.64,5.77,39.54,5.37,54.82-7.76,7.06-6.06,13.26-14.68,13.95-24.23.74-10.22-5.25-19.42-12.2-26.34-2.28-2.27-5.82,1.26-3.54,3.54,5.62,5.59,10.92,12.96,10.8,21.27-.11,7.54-4.58,14.41-9.73,19.6-5.46,5.5-12.37,9.87-20,11.52-9.11,1.96-18.59.53-27.62-1.19-15.45-2.95-28.89-15.11-25.38-32.03,3.02-14.56,15.24-28.39,29.65-32.41,15.47-4.31,31.09,2.7,42.29,13.25,2.34,2.2,5.88-1.32,3.54-3.54Z"
                    />
                    <path
                      className="cls-1unsatisfied"
                      d="M25.12,60.08l42.94-.81c3.21-.06,3.22-5.06,0-5l-42.94.81c-3.21.06-3.22,5.06,0,5h0Z"
                    />
                    <path
                      className="cls-1unsatisfied"
                      d="M52.75,27.7c3.64-4.63,9.28-5.48,14.12-2.03,2.63,1.87,5.13-2.46,2.52-4.32-6.46-4.6-15.26-3.44-20.18,2.81-1.97,2.5,1.55,6.06,3.54,3.54h0Z"
                    />
                    <path
                      className="cls-1unsatisfied"
                      d="M21.23,21.88c3.61,7.01,11.88,15.77,20.35,10.72,2.76-1.65.25-5.97-2.52-4.32-5.72,3.41-11.32-4.67-13.51-8.93-1.47-2.86-5.79-.34-4.32,2.52h0Z"
                    />
                    <path
                      className="cls-1unsatisfied"
                      d="M56.09,31.64c-.21,3.8-.11,7.58.29,11.37.34,3.17,5.34,3.2,5,0-.4-3.79-.5-7.57-.29-11.37.18-3.22-4.82-3.21-5,0h0Z"
                    />
                    <path
                      className="cls-1unsatisfied"
                      d="M30.05,33.54c.11,3.15.21,6.31.32,9.46s5.11,3.22,5,0-.21-6.31-.32-9.46-5.11-3.22-5,0h0Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h4 className="font-gunterz">Not Satisfied?</h4>
            <p className="px-5">
              Wishing your website was more &apos;wow&apos; and less
              &apos;meh&apos;?
            </p>
          </PainPoint>
          <PainPoint>
            <div className="w-full max-w-[100px] h-[60px] mt-7 mb-9">
              <svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 94.9 82.78"
              >
                <defs>
                  <style>
                    {`
      .cls-1Question {
        fill: #cc5246;
      }`}
                  </style>
                </defs>
                <g id="Layer_1-2" data-name="Layer_1">
                  <g>
                    <path
                      className="cls-1Question"
                      d="M3.21,49.86l-.5-.06,2.16,1.24c-.04-.06,1.03-2.57,1.53-3.31,1.6-2.36,4.36-3.82,7.12-2.83,5.76,2.06,1.48,10.22.71,14.3-1.13,5.97,1.32,12.6,8.06,13.1,3.21.24,3.19-4.76,0-5-5.86-.43-2.65-8.94-1.8-12.04.73-2.66,1.26-5.33.71-8.08-.99-4.94-4.76-7.98-9.84-7.7-4.82.26-8.6,3.68-10.42,7.97-1.28,3-1.88,6.89,2.26,7.42,3.18.41,3.15-4.6,0-5h0Z"
                    />
                    <path
                      className="cls-1Question"
                      d="M29.19,82.78c3.22,0,3.22-5,0-5s-3.22,5,0,5h0Z"
                    />
                    <path
                      className="cls-1Question"
                      d="M29.5,15.16l-.41.11,3.08,3.08c2.13-8.94,12.61-14.13,21.46-13.31,10.36.96,15.94,12.82,11.23,21.85-3.99,7.65-11.66,11.4-17.47,17.31-2.04,2.08-3.51,4.6-3.51,7.59,0,3.35.68,7.83,2.31,10.8s5.86.3,4.32-2.52c-.9-1.65-1.77-7.68-1.35-9.37.66-2.67,3.25-4.32,5.3-5.94,4.09-3.24,8.22-6.5,11.51-10.59,6.11-7.6,7.16-16.22,2.72-25.03C64.77,1.35,55.31-1.02,47.26.38c-4.76.82-9.29,2.9-13.05,5.94s-5.75,6.05-6.86,10.7c-.44,1.83,1.19,3.6,3.08,3.08l.41-.11c3.1-.86,1.78-5.68-1.33-4.82h0Z"
                    />
                    <path
                      className="cls-1Question"
                      d="M51.61,77.09c3.22,0,3.22-5,0-5s-3.22,5,0,5h0Z"
                    />
                    <path
                      className="cls-1Question"
                      d="M82.73,44.94c3.55-2.52,7.8.65,7.1,4.83s-4.46,5.49-7.68,7.26c-4.07,2.23-7.1,5.89-5.72,10.71.88,3.09,5.71,1.78,4.82-1.33-1.26-4.42,8.59-7.28,10.95-10.25,2.09-2.62,3.16-6.11,2.52-9.44-1.24-6.46-9.05-9.98-14.52-6.09-2.6,1.85-.11,6.19,2.52,4.32h0Z"
                    />
                    <path
                      className="cls-1Question"
                      d="M76.44,82.19c3.22,0,3.22-5,0-5s-3.22,5,0,5h0Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h4 className="font-gunterz">WORD MYSTERY</h4>
            <p className="px-4">
              Does your website lack the silver tongue it needs to boost sales?
            </p>
          </PainPoint>
          <PainPoint>
            <div className="w-full max-w-[100px] h-[60px] mt-7 mb-9">
              <svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 107.82 98.43"
              >
                <defs>
                  <style>
                    {`
      .cls-1Scissors {
        fill: #cc5246;
      }`}
                  </style>
                </defs>
                <g id="Layer_1-2" data-name="Layer_1">
                  <g>
                    <path
                      className="cls-1Scissors"
                      d="M55.08,39.92c12.33-2.15,13.55-20.43,9.43-29.66-3.57-7.98-15.18-14.28-22.64-7.15-5.36,5.12-2.45,13.98-.1,19.81,3.09,7.65,7.5,14.67,10.9,22.18,7.63,16.84,14.96,33.81,23.52,50.21,1.49,2.85,5.81.33,4.32-2.52-11.15-21.36-20.3-43.69-31.13-65.2-2.29-4.54-8.92-16.26-3.97-20.93,5.48-5.18,13.37,1.88,15.13,7.13,2.18,6.54,1.78,19.84-6.77,21.32-3.16.55-1.82,5.37,1.33,4.82h0Z"
                    />
                    <path
                      className="cls-1Scissors"
                      d="M35.99,51.41c-4,5.31-8.44,11.16-15.83,11.03-5.56-.09-12.46-4.33-14.44-9.61-.66-1.76-1.21-4.44-.43-6.26,1.42-3.33,5.8-2.17,8.46-1.48,5.14,1.34,10.31,2.89,15.36,4.55,24.76,8.14,49.9,14.58,75.58,19.08,3.15.55,4.5-4.27,1.33-4.82-18.7-3.28-37.23-7.5-55.48-12.74-8.56-2.46-16.92-5.58-25.48-8.02-5.47-1.56-12.25-4.78-18.03-3.62-11.93,2.39-6.44,17.86.11,22.89,4.8,3.68,10.99,5.95,17.04,4.6,7.52-1.67,11.75-7.25,16.14-13.07,1.94-2.57-2.4-5.07-4.32-2.52h0Z"
                    />
                    <path
                      className="cls-1Scissors"
                      d="M38.31,53.21c5.08.75,9.89.18,14.85-1.08,2.82-.72,5.58-1.81,8.42-2.45,3.25-.73,5.34.6,8.32,1.94,11.36,5.12,22.5,10.72,33.54,16.51,2.85,1.49,5.38-2.82,2.52-4.32-11.04-5.79-22.18-11.39-33.54-16.51-2.32-1.04-5.1-2.94-7.59-3.33-1.8-.28-3.7.63-5.41,1.13-6.42,1.88-12.99,4.29-19.78,3.28-3.15-.47-4.51,4.35-1.33,4.82h0Z"
                    />
                    <path
                      className="cls-1Scissors"
                      d="M50.36,39.77c2.28,6.75-1.18,12.34-2.08,18.86-.66,4.79,2.56,7.73,5.27,11.31,7.38,9.74,17.3,17.36,24.29,27.37,1.83,2.62,6.16.12,4.32-2.52-6.78-9.72-16.52-16.87-23.57-26.35-1.45-1.95-3.47-3.98-4.63-6.08-1.31-2.39-.41-4.57.3-7.06,1.61-5.66,2.87-11.1.93-16.85-1.03-3.03-5.86-1.73-4.82,1.33h0Z"
                    />
                    <path
                      className="cls-1Scissors"
                      d="M52.23,53.15l2.3,2.25c.94.92,2.62,1,3.54,0s1-2.56,0-3.54l-2.3-2.25c-.94-.92-2.62-1-3.54,0s-1,2.56,0,3.54h0Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h4 className="font-gunterz">Cut Ties</h4>
            <p className="px-3">
              Is your current web agency not up to your standards?
            </p>
          </PainPoint>
          <PainPoint>
            <div className="w-full max-w-[100px] h-[60px] mt-7 mb-9">
              <svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 81.01 67.5"
              >
                <defs>
                  <style>
                    {`
      .cls-1NotRight {
        fill: #cc5246;
      }`}
                  </style>
                </defs>
                <g id="Layer_1-2" data-name="Layer_1">
                  <g>
                    <path
                      className="cls-1NotRight"
                      d="M80.61,25.2C75.27-2.15,39.86-4.87,19.22,5.8,7.18,12.04-1.17,23.81.13,37.76c1.99,21.35,23.12,30.88,42.55,29.63,21.9-1.42,41.39-19.1,37.93-42.19-.48-3.17-5.29-1.82-4.82,1.33,2.91,19.43-14.25,34.23-32.31,35.81-17.79,1.55-38.52-7.1-38.48-27.52.04-23.26,28.6-32.94,47.89-29.15,11.31,2.22,20.62,9.15,22.9,20.86.62,3.16,5.44,1.82,4.82-1.33Z"
                    />
                    <path
                      className="cls-1NotRight"
                      d="M11.35,17.71c18.33,13.01,37.26,25.11,56.77,36.27,2.8,1.6,5.32-2.72,2.52-4.32C51.14,38.5,32.2,26.4,13.87,13.39c-2.63-1.87-5.13,2.47-2.52,4.32h0Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h4 className="font-gunterz">NOT QUITE RIGHT</h4>
            <p>Think your website could use a fresh new design?</p>
          </PainPoint>
          <PainPoint>
            <div className="w-full max-w-[120px] h-[60px] mt-9 mb-7">
              <svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -15 126.56 56.62"
                className="overflow-visible"
              >
                <defs>
                  <style>
                    {`
      .cls-1Sea {
        fill: #cc5246;
      }`}
                  </style>
                </defs>
                <g id="Layer_1-2" data-name="Layer_1">
                  <g>
                    <path
                      className="cls-1Sea"
                      d="M3.07,21.35c10.77-3.37,20.3-9.2,28.34-17.11l-4.18-2.43c-2.3,8.77,4.52,17.36,13.36,18.33,10.19,1.12,17.89-9.23,23.91-15.87l-4.18-1.1c1.32,7.21,7.34,15.2,15.36,15.05s14.81-8.42,20.73-13.08l-3.93-.51c2.26,5.27,5.87,11.36,12,12.44s14.29,1.68,20.34-.3c3.04-1,1.74-5.83-1.33-4.82-4.95,1.62-10.41.7-15.5.38-6.24-.39-8.91-4.87-11.2-10.22-.7-1.64-2.82-1.37-3.93-.51-4.53,3.57-8.62,8.28-13.95,10.68-7.08,3.19-12.62-4.09-13.78-10.44-.34-1.83-2.98-2.43-4.18-1.1-4.2,4.62-8.4,10.17-14.03,13.11-7.13,3.72-17.12-2.18-14.88-10.71.63-2.42-2.39-4.19-4.18-2.43C20.44,8.02,11.71,13.41,1.74,16.53c-3.06.96-1.75,5.79,1.33,4.82h0Z"
                    />
                    <path
                      className="cls-1Sea"
                      d="M14.4,40.74c6.09,2.67,11.65.46,16.91-3l-3.42-.9c4.39,6.5,13.12,4.92,19.62,3.21,3.11-.82,1.79-5.64-1.33-4.82-3.78,1-11.15,3.27-13.98-.91-.72-1.07-2.23-1.68-3.42-.9-3.42,2.26-7.63,4.85-11.86,3-2.92-1.28-5.47,3.03-2.52,4.32h0Z"
                    />
                    <path
                      className="cls-1Sea"
                      d="M69.65,33.13c6.09,2.67,11.65.46,16.91-3l-3.42-.9c4.39,6.5,13.12,4.92,19.62,3.21,3.11-.82,1.79-5.64-1.33-4.82-3.78,1-11.15,3.27-13.98-.91-.72-1.07-2.23-1.68-3.42-.9-3.42,2.26-7.63,4.85-11.86,3-2.92-1.28-5.47,3.03-2.52,4.32h0Z"
                    />
                    <path
                      className="cls-1Sea"
                      d="M51.38,55.44c6.09,2.67,11.65.46,16.91-3l-3.42-.9c4.39,6.5,13.12,4.92,19.62,3.21,3.11-.82,1.79-5.64-1.33-4.82-3.78,1-11.15,3.27-13.98-.91-.72-1.07-2.23-1.68-3.42-.9-3.42,2.26-7.63,4.85-11.86,3-2.92-1.28-5.47,3.03-2.52,4.32h0Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h4 className="font-gunterz">Sea of Same</h4>
            <p className="px-4">Need a new logo that is sure to stand out?</p>
          </PainPoint>
          <PainPoint>
            <div className="w-full max-w-[100px] h-[60px] mt-7 mb-9">
              <svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 95.5 75.66"
              >
                <defs>
                  <style>
                    {`
      .cls-1badSignal {
        fill: #cc5246;
      }`}
                  </style>
                </defs>
                <g id="Layer_1-2" data-name="Layer_1">
                  <g>
                    <path
                      className="cls-1badSignal"
                      d="M36.58,58.75c6.18,5.54,12.47,10.95,18.89,16.21,2.47,2.03,6.03-1.49,3.54-3.54-6.42-5.26-12.71-10.67-18.89-16.21-2.39-2.14-5.94,1.38-3.54,3.54h0Z"
                    />
                    <path
                      className="cls-1badSignal"
                      d="M56.94,54.21c-6.77,5.76-13.54,11.52-20.3,17.29-2.45,2.09,1.1,5.61,3.54,3.54,6.77-5.76,13.54-11.52,20.3-17.29,2.45-2.09-1.1-5.61-3.54-3.54h0Z"
                    />
                    <path
                      className="cls-1badSignal"
                      d="M35.96,45.38c3.51-1.39,7.24-3.22,11.07-3.5,4.26-.31,8.51,1.52,12.39,3.03,3,1.17,4.3-3.67,1.33-4.82-4.35-1.69-8.96-3.48-13.72-3.21-4.34.24-8.41,2.1-12.39,3.68-2.96,1.17-1.67,6.01,1.33,4.82h0Z"
                    />
                    <path
                      className="cls-1badSignal"
                      d="M21.23,34.55c7.45-5.79,16.09-10.05,25.66-10.36s18.8,3.06,27.24,7.46c2.85,1.48,5.38-2.83,2.52-4.32-9.62-5.01-20.2-8.84-31.22-8.07-10.47.73-19.58,5.4-27.75,11.75-2.54,1.97,1.02,5.49,3.54,3.54h0Z"
                    />
                    <path
                      className="cls-1badSignal"
                      d="M3.6,24.15C14.78,15.86,26.84,7.4,40.97,5.42c18.17-2.55,35.74,6.05,50.82,15.21,2.76,1.68,5.27-2.65,2.52-4.32C78.48,6.69,60.2-1.95,41.18.39,25.98,2.25,13.08,10.93,1.07,19.84c-2.56,1.9-.07,6.24,2.52,4.32h0Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h4 className="font-gunterz">Bad Signal</h4>
            <p>Feel like your brand doesn&apos;t inspire loyalty?</p>
          </PainPoint>
          <PainPoint>
            <div className="w-full max-w-[100px] h-[60px] mt-7 mb-9">
              <svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 101.97 81.95"
              >
                <defs>
                  <style>
                    {`
      .cls-1Nomad {
        fill: #cc5246;
      }`}
                  </style>
                </defs>
                <g id="Layer_1-2" data-name="Layer_1">
                  <g>
                    <path
                      className="cls-1Nomad"
                      d="M5.29,80.19c3.47-11.77,9.79-20.21,21.02-25.47,10.08-4.72,21.2-6.66,31.32-11.3,17.32-7.95,30.66-22.78,37.58-40.41,1.18-3-3.66-4.3-4.82-1.33-8.15,20.75-25.15,34.7-46.05,41.42-9.58,3.08-19.6,5.68-27.95,11.54S3.34,69.12.47,78.86c-.91,3.09,3.91,4.41,4.82,1.33h0Z"
                    />
                    <path
                      className="cls-1Nomad"
                      d="M91.4.16c-4.38,1.21-8.8,2.21-13.27,2.99-3.16.55-1.82,5.37,1.33,4.82,4.47-.78,8.89-1.78,13.27-2.99,3.1-.86,1.78-5.68-1.33-4.82h0Z"
                    />
                    <path
                      className="cls-1Nomad"
                      d="M91.93,5.07c1.83,4.29,3.67,8.59,5.5,12.88,1.26,2.95,5.57.41,4.32-2.52l-5.5-12.88c-1.26-2.95-5.57-.41-4.32,2.52h0Z"
                    />
                    <path
                      className="cls-1Nomad"
                      d="M91.89,72.7c-10.25-2.06-18.93-5.78-25.23-14.43-4.98-6.83-8.46-14.64-13.58-21.38-11.23-14.78-29.21-17.83-46.57-19.93-3.19-.39-3.16,4.62,0,5,9.75,1.18,19.83,2.48,28.81,6.71s14.09,10.96,18.88,18.95c3.92,6.55,7.52,13.47,12.96,18.93,6.37,6.39,14.74,9.21,23.41,10.96,3.14.63,4.49-4.19,1.33-4.82h0Z"
                    />
                    <path
                      className="cls-1Nomad"
                      d="M14.82,7.69c-4.51,2.43-9.02,4.86-13.53,7.28-2.83,1.53-.31,5.84,2.52,4.32,4.51-2.43,9.02-4.86,13.53-7.28,2.83-1.53.31-5.84-2.52-4.32h0Z"
                    />
                    <path
                      className="cls-1Nomad"
                      d="M.29,18.28c1.81,3.57,3.4,7.23,4.76,11,1.08,3,5.92,1.71,4.82-1.33-1.51-4.17-3.26-8.24-5.26-12.19-1.46-2.87-5.77-.34-4.32,2.52H.29Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h4 className="font-gunterz">Brand Nomad</h4>
            <p>Having trouble with the direction of your brand?</p>
          </PainPoint>
          <div className="w-full max-w-[19rem] min-h-[21rem] bg-painPointAccent flex flex-col items-center px-5 pt-10 text-center gap-1 relative">
            <button className="w-full h-full bg-transparent flex flex-col pt-8">
              <p className="text-[1.25rem] font-gunterz text-left max-w-[15rem] leading-[30px] ml-5">
                If you have had enough, let's fix this!
              </p>
              <div className="w-full max-w-[13rem] absolute bottom-10 right-14">
                <svg
                  id="Layer_2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 214.73 35.73"
                >
                  <defs>
                    <style>
                      {`
      .cls-1ArrowSVG {
        fill: none;
        stroke: #fff;
        stroke-miterlimit: 10;
        stroke-width: 2px;
      }`}
                    </style>
                  </defs>
                  <g id="Layer_1-2" data-name="Layer_1">
                    <line
                      className="cls-1ArrowSVG"
                      y1="17.87"
                      x2="213.02"
                      y2="17.87"
                    />
                    <g>
                      <line
                        className="cls-1ArrowSVG"
                        x1="196.19"
                        y1=".71"
                        x2="214.02"
                        y2="18.54"
                      />
                      <line
                        className="cls-1ArrowSVG"
                        x1="214.02"
                        y1="17.19"
                        x2="196.19"
                        y2="35.02"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
