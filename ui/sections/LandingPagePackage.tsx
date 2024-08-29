import react from "react";
import { LandingPagePackageContainer } from "../containers/LandingPagePackageContainer";

export const LandingPagePackage: React.FC = () => {
  return (
    <section className="min-h-[60rem] bg-storm-black px-10 pb-24 flex flex-col items-center">
      <h2 className="font-charcoalDance max-w-[100rem] mb-5 sm:mb-12 w-full leading-8">
        Our landing page <span className="text-sun-orange">package</span>
      </h2>
      <div className="flex flex-row flex-wrap justify-center items-center gap-5 max-w-[100rem]">
        <LandingPagePackageContainer title="BRAND IDENTITY CREATION" id="pp1">
          <p className="text-center">
            Demonstrate your values to connect with clients you love to work
            with
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="TARGETED COPYWRITING" id="pp2">
          <p className="text-center">
            Speak to YOUR target audience and convert higher
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="HIGH ONSITE SEO SCORE" id="pp3">
          <p className="text-center">
            Rank higher on googles search results for your niche
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="CONTINUOUS A/B TESTING" id="pp4">
          <p className="text-center">
            Continuously improving conversion = more clients
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="ADVANCED HOSTING" id="pp5">
          <p className="text-center">
            Advanced hosting techniques ensures your site loads super fast
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="LOGO DESIGN" id="pp6">
          <p className="text-center">
            Don’t have a logo or need a new one? Don’t worry we can make one you
            love
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="CUSTOM FORMS" id="pp7">
          <p className="text-center">
            Submitting an application/call is as smooth as silk
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="ANIMATIONS" id="pp8">
          <p className="text-center">
            Animations so good it will blow your socks off
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="DEVELOPMENT" id="pp9">
          <p className="text-center">Hand coded with blood, sweat, and tears</p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="ANALYTICS" id="pp10">
          <p className="text-center">
            Gain insight into how your page is performing 24/7
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="DASHBOARD ACCESS " id="pp11">
          <p className="text-center mx-3">
            Stay up to date with our progress and make adjustments on the fly
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="LANDING PAGE DESIGN" id="pp12">
          <p className="text-center">
            Design so good they’ll make it their lock screen
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="CUSTOM GRAPHICS" id="pp13">
          <p className="text-center">
            Hand made assets to bring your landing page to life
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer title="OPTIMIZED FOR MOBILE" id="pp14">
          <p className="text-center">
            We make your website convert on phones too
          </p>
        </LandingPagePackageContainer>
      </div>
    </section>
  );
};
