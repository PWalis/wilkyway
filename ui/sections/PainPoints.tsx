import react from "react";
import { CTA } from "../buttons";
import { PainPoint } from "../containers/PaintPoint";

export const PainPoints: React.FC = () => {
  return (
    <section className="flex flex-col relative justify-center items-center min-h-[60rem] px-5 bg-storm-black">
      <div className="flex gap-[1.5rem] md:gap-[3.5313rem] flex-row flex-wrap justify-center lg1/2:absolute lg1/2:-top-[9rem] mx-5">
        <div className="h-[19.9375rem] min-w-[21rem] max-w-[26.4375rem] rounded-tr-[96px] bg-storm-gray px-[3rem] pt-[3rem] pb-[4rem] flex">
          <div className="container">
            <img className="mb-3" src="https://placehold.co/85" />
            <h4 className="font-gunterz">
              BRAND <br /> CENTERED
            </h4>
            <p>
              Don’t let your brand get lost in the noise we make you stand out.
            </p>
          </div>
        </div>
        <div className="h-[19.9375rem] min-w-[21rem] max-w-[26.4375rem] rounded-tr-[96px] bg-sun-orange px-[3rem] pt-[3rem] pb-[4rem]">
          <div className="container">
            <img className="mb-3" src="https://placehold.co/85" />
            <h4 className="font-gunterz">
              CONVERSION <br /> FOCUSED
            </h4>
            <p>
              Your landing page should get you more clients not just look pretty
            </p>
          </div>
        </div>
        <div className="h-[19.9375rem] min-w-[21rem] max-w-[26.4375rem] rounded-tr-[96px] bg-storm-gray px-[3rem] pt-[3rem] pb-[4rem]">
          <div className="container">
            <img className="mb-3" src="https://placehold.co/85" />
            <h4 className="font-gunterz">
              100% CUSTOM <br /> DESIGN
            </h4>
            <p>
              We make landing pages for YOUR business we don’t use a template
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start w-full max-w-[100rem] min-h-[30rem] items-center mt-0 lg1/2:mt-[36rem] xl3/4:mt-[13.5rem]">
        <h2 className="font-charcoalDance w-full lg:text-left text-center mb-3 mt-10">
          does this hit <span className="text-sun-orange">home?</span>
        </h2>
        <div className="w-full max-w-[86.375rem] flex flex-row justify-center flex-wrap gap-5">
          <PainPoint>
            <img src="https://placehold.co/106" />
            <h4 className="font-gunterz">ERROR 404</h4>
            <p>
              Starting to feel like a broken record because you don't have a
              website that sells for you?
            </p>
          </PainPoint>
          <PainPoint>
            <img src="https://placehold.co/106" />
            <h4 className="font-gunterz">WORD MYSTERY</h4>
            <p>
              Does your website lack the silver tongue of a seasoned salesman?
            </p>
          </PainPoint>
          <PainPoint>
            <img src="https://placehold.co/106" />
            <h4 className="font-gunterz">TUTORIAL HELL</h4>
            <p>
              Avoiding another hour spent learning how to make a website that leaves you feeling 'meh'?
            </p>
          </PainPoint>
          <PainPoint>
            <img src="https://placehold.co/106" />
            <h4 className="font-gunterz">NOT QUITE RIGHT</h4>
            <p>
              Do you enter the uncanny valley when you look at your design and can't quite put your finger on why?
            </p>
          </PainPoint>
          <PainPoint>
            <img src="https://placehold.co/106" />
            <h4 className="font-gunterz">THE TRENCHES</h4>
            <p>
              Stuck in the mud with your lack of consistent coaching clients every month?
            </p>
          </PainPoint>
          <PainPoint>
            <img src="https://placehold.co/106" />
            <h4 className="font-gunterz">NOT AGAIN...</h4>
            <p>
              Giving your DMs a good workout instead of your clients because someone quit your program?
            </p>
          </PainPoint>
          <PainPoint>
            <img src="https://placehold.co/106" />
            <h4 className="font-gunterz">DEAD WEIGHT</h4>
            <p>
              Hear the sound of no one using that application page you set up, or want more submitted?
            </p>
          </PainPoint>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-10 text-center sm:text-left">
          <h3 className="font-charcoalDance">Are you ready to take <span className="text-sun-orange">action?</span></h3>
          <CTA>LET'S DO THIS!</CTA>
        </div>
      </div>
    </section>
  );
};
