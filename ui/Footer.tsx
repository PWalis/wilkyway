import react from "react";

// this is real i promise

export const Footer: React.FC = () => {
  return (
    <footer className="bg-section-background min-h-[30rem] flex flex-col justify-center gap-10 items-center px-5 pb-10">
      <div className="flex flex-col md:flex-row justify-between max-w-[90rem] w-full gap-10">
        <div className="flex flex-col justify-center gap-3">
          <div className="w-full min-w-[15rem] max-w-[17.7rem]">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 470.95 183.44"
              className="w-full h-full"
            >
              <defs>
                <style>
                  {`
      .cls-1HalfLogo {
        fill: #5c8fff;
      }

      .cls-2HalfLogo {
        fill: #d2d6db;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2" data-name="Layer_1">
                <g>
                  <g>
                    <path
                      className="cls-2HalfLogo"
                      d="M152.31,82.07v101.36h-36.76v-92.11c0-12.96-10.51-23.48-23.47-23.48H0V31.09h101.34c28.15,0,50.98,22.83,50.98,50.98Z"
                    />
                    <path
                      className="cls-1HalfLogo"
                      d="M204.44,115.52v36.76h-122.34c-28.16,0-50.98-22.82-50.98-50.98V0h36.76v92.05c0,12.96,10.51,23.47,23.48,23.47h113.09Z"
                    />
                  </g>
                  <path
                    className="cls-1HalfLogo"
                    d="M282.51,47.17l-15.34,64.74-15.56-64.74h-31.8l-15.57,64.74-15.34-64.74h-32.03l22.16,73.23,9.64,31.88h31.13l15.78-54.81,16.02,54.81h31.13l22.8-75.35,6.56-21.68,2.45-8.08h0s-32.03,0-32.03,0Z"
                  />
                  <path
                    className="cls-2HalfLogo"
                    d="M408.16,47.17l-15.34,64.74-15.56-64.74h-31.8l-15.57,64.74-15.34-64.74h-32.03l22.16,73.23,9.64,31.88h31.13l15.78-54.81,16.02,54.81h31.13l22.8-75.35,6.56-21.68,2.45-8.08h0s-32.03,0-32.03,0Z"
                  />
                  <rect
                    className="cls-2HalfLogo"
                    x="405.47"
                    y="115.88"
                    width="65.47"
                    height="36.4"
                  />
                </g>
              </g>
            </svg>
          </div>
          <p className="font-gunterz text-[1.25rem] max-w-[18rem]">
            Make your business a start
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-16">
          <div className="flex flex-col">
            <a className="font-gunterz">Home</a>
            <a>Our Process</a>
            <a>Our Solution</a>
            <a>Testimonials</a>
            <a>S.T.A.R Method</a>
          </div>
          <div className="flex flex-col">
            <a className="font-gunterz">Our Services</a>
            <a>Website Package</a>
          </div>
          <div className="flex flex-col">
            <a className="font-gunterz">About Us</a>
            <a>Our Team</a>
            <a>Our Values</a>
          </div>
          <div className="flex flex-col">
            <a className="font-gunterz">Contact Us</a>
            <a>Get a Quote</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-end max-w-[90rem] w-full">
        <div className="flex md:pt-0 pt-5">
          <p>
            &#xa9; <span className="text-[#5A8CF9]">2024 Wilky Way LLC.</span>{" "}
            All Rights Reserved
          </p>
        </div>
        <div className="flex flex-row gap-10 justify-center md:justify-end w-full max-w-[30rem]">
          <div className="max-w-[5rem]">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 113.79 113.79"
              className="w-full"
            >
              <defs>
                <style>
                  {`
      .cls-1Insta {
        fill: #fff;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2" data-name="Layer_1">
                <g>
                  <path
                    className="cls-1Insta"
                    d="M81.61,8c13.34,0,24.18,10.85,24.18,24.18v49.43c0,13.34-10.85,24.18-24.18,24.18h-49.43c-13.34,0-24.18-10.85-24.18-24.18v-49.43c0-13.34,10.85-24.18,24.18-24.18h49.43M81.61,0h-49.43C14.41,0,0,14.41,0,32.18v49.43c0,17.77,14.41,32.18,32.18,32.18h49.43c17.77,0,32.18-14.41,32.18-32.18v-49.43C113.79,14.41,99.38,0,81.61,0h0Z"
                  />
                  <path
                    className="cls-1Insta"
                    d="M56.9,35.59c11.75,0,21.31,9.56,21.31,21.31s-9.56,21.31-21.31,21.31-21.31-9.56-21.31-21.31,9.56-21.31,21.31-21.31M56.9,27.59c-16.19,0-29.31,13.12-29.31,29.31s13.12,29.31,29.31,29.31,29.31-13.12,29.31-29.31-13.12-29.31-29.31-29.31h0Z"
                  />
                  <path
                    className="cls-1Insta"
                    d="M87.51,19.11c-4.13,0-7.47,3.35-7.47,7.47s3.35,7.47,7.47,7.47,7.47-3.35,7.47-7.47-3.35-7.47-7.47-7.47h0Z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="max-w-[5rem]">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 113.8 113.79"
              className="w-full"
            >
              <defs>
                <style>
                  {`
      .cls-1Facebook {
        fill: #fff;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2" data-name="Layer_1">
                <g>
                  <path
                    className="cls-1Facebook"
                    d="M81.61,8c13.34,0,24.19,10.85,24.19,24.18v49.43c0,13.33-10.85,24.18-24.19,24.18h-49.42c-13.34,0-24.19-10.85-24.19-24.18v-49.43c0-13.33,10.85-24.18,24.19-24.18h49.42M81.61,0h-49.42C14.41,0,0,14.41,0,32.18v49.43c0,17.77,14.41,32.18,32.19,32.18h49.42c17.78,0,32.19-14.41,32.19-32.18v-49.43C113.8,14.41,99.39,0,81.61,0h0Z"
                  />
                  <path
                    className="cls-1Facebook"
                    d="M80.45,36.54c1.23,0,2.33.05,3.39.16v-13.94c-1.67-.14-2.4-.19-4.16-.19-18.67,0-28.82,7.5-28.82,25.05v11.27h-13v14.81h13v40.09h17.39v-40.09h11.72l3.07-14.81h-14.79v-10.95c0-8.37,3.35-11.4,12.2-11.4Z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="max-w-[5rem]">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 113.8 113.79"
              className="w-full"
            >
              <defs>
                <style>
                  {`
      .cls-1X {
        fill: #fff;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2" data-name="Layer_1">
                <g>
                  <path
                    className="cls-1X"
                    d="M81.61,8c13.34,0,24.19,10.85,24.19,24.18v49.43c0,13.33-10.85,24.18-24.19,24.18h-49.42c-13.34,0-24.19-10.85-24.19-24.18v-49.43c0-13.33,10.85-24.18,24.19-24.18h49.42M81.61,0h-49.42C14.41,0,0,14.41,0,32.18v49.43c0,17.77,14.41,32.18,32.19,32.18h49.42c17.78,0,32.19-14.41,32.19-32.18v-49.43C113.8,14.41,99.39,0,81.61,0h0Z"
                  />
                  <polygon
                    className="cls-1X"
                    points="54.11 57.24 58.76 62.8 31.12 91.5 21.1 91.5 54.11 57.24"
                  />
                  <polygon
                    className="cls-1X"
                    points="96.31 23.82 62.89 58.55 58.16 52.91 86.17 23.82 96.31 23.82"
                  />
                  <path
                    className="cls-1X"
                    d="M38.68,29.95l19.48,23.26,4.48,5.34,22.83,27.26h-7.25l-19.46-23.23-4.47-5.34-22.86-27.29h7.25M41.48,23.95h-22.9l8.25,9.85,22.86,27.29,4.47,5.34,19.46,23.23,1.8,2.15h22.9l-8.25-9.85-22.83-27.26-4.48-5.34-19.48-23.26-1.8-2.15h0Z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};
