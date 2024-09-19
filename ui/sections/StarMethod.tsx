import react from "react";
import { StarLine, StarCircle, StarLineMobile } from "../animated/StarLine";
import { H2Container } from "../containers/H2Container";

export const StarMethod: React.FC = () => {
  return (
    <section id="StarMethod" className="h-min-[60rem] bg-section-background flex flex-col items-center md:pb-[10rem] px-5">
      <H2Container color="#B05CCD" topString="S.T.A.R Method">
        {" "}
        Make your business a <span className="text-[#B05CCD]">S.T.A.R</span>
      </H2Container>
      <div className="flex flex-col-reverse lg3/4:flex-row max-w-[80rem] w-full justify-between items-center ">
        <div className="flex flex-col w-full gap-12 relative max-w-[40rem] mt-10 lg3/4mt-0">
          <h3 className="font-gunterz text-[1.5rem]">
            Our <span className="text-[#B05CCD]">S.T.A.R</span> branding method
          </h3>
          <div className="ml-10 relative">
            <div className="absolute -left-[30px]">
              <StarLine />
              <StarLineMobile />
              <StarCircle />
            </div>

            <h4 className="font-gunterz text-[1.25rem]">Strategize</h4>
            <p className="w-full max-w-[32rem]">
              This is where we discover exactly where you want your business to
              go. Not every business is the same and what your business needs is
              unique to you. With your help we discover how we can elevate your
              online presence.
            </p>
          </div>
          <div className="ml-10 relative">
            <div className="absolute -left-[30px]">
              <StarCircle />
            </div>
            <h4 className="font-gunterz text-[1.25rem]">Target</h4>
            <p className="w-full max-w-[32rem]">
              We collect vital data on your customer so that your position in
              the market is aligned with them. We find their pain points,
              awareness of the problem, communication style, and what they
              connect with to give your business a clear path to success.{" "}
            </p>
          </div>
          <div className="ml-10 relative">
            <div className="absolute -left-[30px]">
              <StarCircle />
            </div>
            <h4 className="font-gunterz text-[1.25rem]">Attract</h4>
            <p className="w-full max-w-[32rem]">
              Now we go to work. With the ideal customer in mind we craft your
              brand, messaging, and web design to create a gravitation pull
              towards your brand and offer. Once your site is live we focus on
              increasing your conversion rate through a/b testing.{" "}
            </p>
          </div>
          <div className="ml-10 relative">
            <div className="absolute -left-[30px]">
              <StarCircle />
            </div>
            <h4 className="font-gunterz text-[1.25rem]">Retain</h4>
            <p className="w-full max-w-[32rem]">
              Now that your business has a brand that attracts your ideal
              customer. They will be coming back for more and refer new
              customers just like them. That’s the power of the S.T.A.R. system.{" "}
            </p>
          </div>
        </div>
        <div className="w-full flex items-end justify-center">
          <div className="w-full max-w-[38rem]">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 588.82 523.46"
              className="overflow-visible"
            >
              <defs>
                <style>
                  {`
      .cla-1StarMethod {
        fill: #fff;
      }

      .cla-2StarMethod {
        fill: none;
        stroke: #b05ccd;
        stroke-miterlimit: 10;
        stroke-width: 2px;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2" data-name="Layer_1">
                <path
                  className="cla-2StarMethod"
                  d="M39.22,222.84C54.96,118.59,132.85,34.73,233.93,10.19"
                />
                <path
                  className="cla-2StarMethod"
                  d="M233.93,513.43c-101.09-24.54-178.98-108.4-194.71-212.64"
                />
                <path
                  className="cla-2StarMethod"
                  d="M551.23,300.79c-15.74,104.24-93.63,188.11-194.71,212.64"
                />
                <path
                  className="cla-2StarMethod"
                  d="M356.51,10.19c101.09,24.54,178.98,108.4,194.71,212.64"
                />
                <g>
                  <path
                    className="cla-1StarMethod"
                    d="M250.02,8.35c1.39.82,3.17,1.4,5.04,1.4,1.59,0,2.46-.44,2.46-1,0-1.58-8.01-1.5-8.01-5.46,0-1.96,1.89-3.28,5.19-3.28,3.06,0,4.83,1.47,4.83,1.47l-1.11,1.88c-.88-.67-2.53-1.2-3.82-1.2-1.58,0-2.66.48-2.66,1.25,0,1.77,8.04,1.5,8.04,5.37,0,1.48-1.52,3.17-5.01,3.17s-5.79-1.44-5.79-1.44l.84-2.13Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M265.16,2.4h-3.67V.3h9.75v2.1h-3.67v9.15h-2.4V2.4Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M273.03.3h5.91c2.66,0,4.65,1.02,4.65,4,0,2.05-1.09,3.28-2.57,3.85l2.75,3.39h-2.96l-2.14-2.85h-3.24v2.85h-2.4V.3ZM275.43,2.4v4.2h3.72c1.31,0,2.03-.66,2.03-2.01,0-1.65-1.07-2.19-2.03-2.19h-3.72Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M288.86.3h3.85l4.08,11.25h-2.55l-.74-2.19h-5.44l-.74,2.19h-2.55l4.08-11.25ZM292.85,7.41l-1.68-5.01h-.76l-1.7,5.01h4.14Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M299.52,2.4h-3.67V.3h9.75v2.1h-3.67v9.15h-2.4V2.4Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M307.41.3h9.21v2.1h-6.81v2.47h6.12v2.1h-6.12v2.47h6.81v2.1h-9.21V.3Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M323.61,5.55h7.15v6h-1.96v-1.2c-.78.87-1.98,1.5-3.96,1.5-3.78,0-6.12-2.02-6.12-5.92s2.34-5.92,6.12-5.92c2.75,0,4.72,1.06,5.61,3.15l-2.28.83c-.55-1.23-1.7-1.89-3.33-1.89-2.34,0-3.69,1.41-3.69,3.84s1.35,3.84,3.69,3.84c1.83,0,3.06-.87,3.51-2.4h-4.74v-1.81Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M336.5,7.95l-4.42-7.65h2.55l2.83,5.34h.48l2.83-5.34h2.55l-4.42,7.66v3.58h-2.4v-3.6Z"
                  />
                </g>
                <g>
                  <path
                    className="cla-1StarMethod"
                    d="M258.15,511.91h3.85l4.08,11.25h-2.55l-.74-2.19h-5.44l-.74,2.19h-2.55l4.08-11.25ZM262.14,519.02l-1.68-5.01h-.76l-1.7,5.01h4.14Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M268.81,514.01h-3.67v-2.1h9.75v2.1h-3.67v9.15h-2.4v-9.15Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M279.76,514.01h-3.67v-2.1h9.75v2.1h-3.67v9.15h-2.4v-9.15Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M287.64,511.91h5.91c2.66,0,4.65,1.02,4.65,4,0,2.05-1.09,3.28-2.57,3.85l2.75,3.39h-2.96l-2.14-2.85h-3.24v2.85h-2.4v-11.25ZM290.04,514.01v4.2h3.72c1.31,0,2.03-.66,2.03-2.01,0-1.65-1.07-2.19-2.03-2.19h-3.72Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M303.46,511.91h3.85l4.08,11.25h-2.55l-.74-2.19h-5.44l-.74,2.19h-2.55l4.08-11.25ZM307.45,519.02l-1.68-5.01h-.76l-1.7,5.01h4.14Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M324.51,519.75c-.75,2.44-2.83,3.7-5.82,3.7-3.78,0-6.12-2.02-6.12-5.92s2.34-5.92,6.12-5.92c3.08,0,5.21,1.35,5.89,3.97l-2.37.39c-.46-1.48-1.73-2.28-3.53-2.28-2.34,0-3.69,1.41-3.69,3.84s1.35,3.84,3.69,3.84c1.73,0,2.96-.73,3.46-2.1l2.36.48Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M329.76,514.01h-3.67v-2.1h9.75v2.1h-3.67v9.15h-2.4v-9.15Z"
                  />
                </g>
                <g>
                  <path
                    className="cla-1StarMethod"
                    d="M522.61,256.92h-3.67v-2.1h9.75v2.1h-3.67v9.15h-2.4v-9.15Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M531.84,254.82h3.85l4.08,11.25h-2.55l-.74-2.19h-5.44l-.74,2.19h-2.55l4.08-11.25ZM535.83,261.93l-1.68-5.01h-.76l-1.7,5.01h4.14Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M541.42,254.82h5.91c2.66,0,4.65,1.02,4.65,4,0,2.05-1.09,3.28-2.57,3.85l2.75,3.39h-2.96l-2.14-2.85h-3.24v2.85h-2.4v-11.25ZM543.82,256.92v4.2h3.72c1.31,0,2.03-.66,2.03-2.01,0-1.65-1.07-2.19-2.03-2.19h-3.72Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M558.49,260.07h7.15v6h-1.96v-1.2c-.78.87-1.98,1.5-3.96,1.5-3.78,0-6.12-2.02-6.12-5.92s2.34-5.92,6.12-5.92c2.75,0,4.72,1.06,5.61,3.15l-2.28.83c-.55-1.23-1.7-1.89-3.33-1.89-2.34,0-3.69,1.41-3.69,3.84s1.35,3.84,3.69,3.84c1.83,0,3.06-.87,3.51-2.4h-4.74v-1.81Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M568.06,254.82h9.21v2.1h-6.81v2.47h6.12v2.1h-6.12v2.47h6.81v2.1h-9.21v-11.25Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M582.75,256.92h-3.67v-2.1h9.75v2.1h-3.67v9.15h-2.4v-9.15Z"
                  />
                </g>
                <g>
                  <path
                    className="cla-1StarMethod"
                    d="M0,254.82h5.91c2.66,0,4.65,1.02,4.65,4,0,2.05-1.09,3.28-2.56,3.85l2.74,3.39h-2.96l-2.14-2.85h-3.24v2.85H0v-11.25ZM2.4,256.92v4.2h3.72c1.3,0,2.03-.66,2.03-2.01,0-1.65-1.07-2.19-2.03-2.19h-3.72Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M12.49,254.82h9.21v2.1h-6.81v2.47h6.12v2.1h-6.12v2.47h6.81v2.1h-9.21v-11.25Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M27.18,256.92h-3.67v-2.1h9.75v2.1h-3.68v9.15h-2.4v-9.15Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M36.4,254.82h3.85l4.08,11.25h-2.55l-.74-2.19h-5.44l-.74,2.19h-2.55l4.08-11.25ZM40.39,261.93l-1.68-5.01h-.76l-1.7,5.01h4.14Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M46.15,254.82h2.4v11.25h-2.4v-11.25Z"
                  />
                  <path
                    className="cla-1StarMethod"
                    d="M51.12,254.82h2.4l5.7,7.53v-7.53h2.4v11.25h-2.4l-5.7-7.51v7.51h-2.4v-11.25Z"
                  />
                </g>
                <path
                  className="cla-2StarMethod"
                  d="M493.47,263.67c-149.61,26.41-171.03,47.83-197.44,197.44-26.41-149.61-47.83-171.03-197.44-197.44,149.61-26.41,171.03-47.83,197.44-197.44,26.41,149.61,47.83,171.03,197.44,197.44Z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
