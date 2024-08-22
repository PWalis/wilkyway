import react from "react";

// this is real i promise

export const Footer: React.FC = () => {
  return (
    <footer className="bg-storm-black min-h-[30rem] flex flex-col justify-center items-center px-5 pb-10">
      <div className="text-center flex flex-col items-center mb-10 lg:mb-[15rem] lg:gap-5">
        <h4 className="font-gunterz">
          TOGETHER, WE CAN BRING YOUR BUSINESS TO IT&apos;aposS FULL POTENTIAL.
        </h4>
        <h4 className="font-gunterz">THAT'S PEAK</h4>
        <img className="lg:hidden" src="https://placehold.co/40" />
      </div>

      <div className="flex flex-col w-full max-w-[85rem]">
        <div className="flex flex-col lg:flex-row items-end justify-between text-left px-3">
          <div className="flex flex-col sm:flex-row items-start lg:max-w-[24rem]">
            <img className="max-w-[150px]" src="https://placehold.co/150" />
            <h4 className="font-gunterz">
              DIGITAL AGENCY DESIGNED FOR COACHES TO STEP UP THEIR GAME.
            </h4>
          </div>
          <div className="hidden lg:flex font-nobelUno text-[1.25rem] justify-between w-full pl-10">
            <div className="flex flex-col">
              <a className="font-bold mb-3" href="">
                HOME
              </a>
              <a href="">FAQ</a>
              <a href="">Our Process</a>
              <a href="">LP Package</a>
              <a href="">Our Solution</a>
              <a href="">Testimonials</a>
            </div>
            <div>
              <a className="font-bold">OUR SERVICES</a>
            </div>
            <div className="flex flex-col ">
              <a className="font-bold mb-3" href="">
                ABOUT US
              </a>
              <a href="">Our Team</a>
              <a href="">Our Values</a>
            </div>
            <div className="flex flex-col">
              <a className="font-bold mb-3" href="">
                CONTACT US
              </a>
              <a href="">Get a Quote</a>
            </div>
            <div>
              <a className="font-bold">BLOG</a>
            </div>
          </div>
          <div className="flex lg:hidden justify-between gap-10 my-3 w-full">
            <div className="flex flex-col items-start font-bold gap-2 tracking-widest">
              <a>HOME</a>
              <a>ABOUT US</a>
              <a>OUR TEAM</a>
              <a>OUR VALUES</a>
              <a>BLOG</a>
              <a>CONTACT US</a>
            </div>
            <div className="flex flex-col items-start gap-2 tracking-widest">
              <a className="font-bold" href="/">
                SERVICES
              </a>
              <a href="/">Web Design</a>
              <a href="/">Branding</a>
              <a href="/">SEO</a>
              <a href="/">Logo Design</a>
              <a href="/">A/B Testing</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse lg:mt-10 lg:justify-between">
          <div className="flex items-center justify-center gap-5 my-3">
            <img src="https://placehold.co/50" />
            <img src="https://placehold.co/50" />
            <img src="https://placehold.co/50" />
          </div>
          <div>
            <p>
              Designed by <span className="text-sun-orange">PEAK Digital</span>
            </p>
            <p>2024 Peak Digital all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};