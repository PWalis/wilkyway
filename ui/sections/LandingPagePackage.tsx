import react from "react";
import { LandingPagePackageContainer } from "../containers/LandingPagePackageContainer";

export const LandingPagePackage: React.FC = () => {
  return (
    <section className="min-h-[60rem] bg-storm-black px-10 py-24 flex flex-col items-center">
      <h2 className="font-charcoalDance max-w-[100rem] w-full">
        Our landing page <span className="text-sun-orange">package</span>
      </h2>
      <div className="flex flex-row flex-wrap justify-center items-center gap-5 max-w-[100rem]">
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">
            BRAND IDENTITY CREATION
          </h5>
          <p className="text-center">
            Demonstrate your values to connect with clients you love to work
            with
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">
            TARGETED COPYWRITING
          </h5>
          <p className="text-center">
            Speak to YOUR target audience and convert higher
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">
            ONSITE SEO
          </h5>
          <p className="text-center">
            Rank higher on googles search results for your niche
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">
            A/B TESTING
          </h5>
          <p className="text-center">
            Continuously improving conversion = more clients
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">HOSTING</h5>
          <p className="text-center">
            Advanced hosting techniques ensure wherever your audience is your
            site loads super fast
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">
            LOGO DESIGN
          </h5>
          <p className="text-center">
            Don’t have a logo or need a new one? Don’t worry we can make one you
            love
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">
            CUSTOM FORMS
          </h5>
          <p className="text-center">
            Submitting an application/call is as smooth as silk
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">
            LANDING PAGE DESIGN
          </h5>
          <p className="text-center">
            Design so good they’ll make it their lock screen
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">
            DEVELOPMENT
          </h5>
          <p className="text-center">Hand coded with blood, sweat, and tears</p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">
            PROJECT DASHBOARD ACCESS
          </h5>
          <p className="text-center">
            Stay up to date with our progress and make adjustments on the fly as
            we work
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">
            CUSTOM GRAPHICS
          </h5>
          <p className="text-center">
            Hand made assets to bring your landing page to life
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">
            ANIMATIONS
          </h5>
          <p className="text-center">
            Animations so good it will blow your socks off
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">ANALYTICS</h5>
          <p className="text-center">
            Gain insight into how your page is performing 24/7
          </p>
        </LandingPagePackageContainer>
        <LandingPagePackageContainer>
          <img src="https://placehold.co/58" />
          <h5 className="font-gunterz text-[1.25rem] text-center">
            OPTIMIZED FOR MOBILE
          </h5>
          <p className="text-center">
            Everyone is glued to their phones so we make your website convert on
            phones too
          </p>
        </LandingPagePackageContainer>
      </div>
    </section>
  );
};
