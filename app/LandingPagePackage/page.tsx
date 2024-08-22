import react from "react";

export default function LandingPagePackage() {
  return (
    <main className="bg-storm-black min-h-[60rem] py-[10rem] flex flex-col items-center">
      <h1 className="w-full text-center leading-[2.8rem] mb-10">
        <span className="text-[1.15rem] lg:text-[1.5rem] font-nobelUno">
          Build better, faster, converting landing pages
        </span>
        <br />
        <span className="text-[2rem] lg:text-[3rem] font-gunterz">OUR LANDING PAGE</span>
        <br />
        <span className="text-sun-orange text-[2rem] lg:text-[3rem] font-gunterz">
          PACKAGE
        </span>
      </h1>
      <div className="flex flex-col lg:gap-0 gap-10 max-w-[75rem] w-full px-10">

        <div className="flex flex-col gap-5 lg:gap-0 items-center lg:flex-row w-full justify-between">
          <div className="flex flex-col justify-center gap-2 max-w-[28rem]">
            <h4 className="font-gunterz">
              <span className="">1.</span>
              <br /> built for{" "}
              <span className="text-sun-orange">conversion</span>
            </h4>
            <p>
              We start with your ideal client and work our way backwards so you
              can move forward. We do the research on your target audience to
              lay down the foundation of the rest of the project. Once we have
              an understanding of your ideal client we use that information to
              guide us through every decision in our creation process. The
              design and messaging becomes clear as day, ultimately bringing you
              more clients and better results.{" "}
            </p>
          </div>
          <div className="bg-storm-gray max-w-[28rem] lg:max-w-[33.875rem] h-[20rem] lg:h-[33.875rem] w-full rounded-tr-[94px]"></div>
        </div>

        <div className="h-[10rem] bg-slate-700 hidden lg:flex">
          {/*squigle*/}
        </div>

        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row-reverse w-full justify-between items-center">
          <div className="flex flex-col justify-center gap-2 max-w-[28rem]">
            <h4 className="font-gunterz">
              <span className="">2.</span>
              <br />
              Elevate your <span className="text-sun-orange">brand</span>
            </h4>
            <p>
              We take first impressions very seriously, and with an amazing
              looking webpage your service automatically feels more premium. One
              glance is all it takes for a potential client to judge you and
              your entire business. That’s why we use tried and true design
              fundamentals and creative flare to bring your brand to a new
              level.{" "}
            </p>
          </div>
          <div className="bg-storm-gray max-w-[28rem] lg:max-w-[33.875rem] h-[20rem] lg:h-[33.875rem] w-full rounded-tr-[94px]"></div>
        </div>

        <div className="h-[10rem] bg-slate-700 hidden lg:flex">
          {/*squigle*/}
        </div>

        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row w-full justify-between items-center">
          <div className="flex flex-col  justify-center gap-2 max-w-[28rem]">
            <h4 className="font-gunterz">
              <span className="">3.</span>
              <br />
              Do business <span className="text-sun-orange">
                how you want
              </span>{" "}
              to do business
            </h4>
            <p>
              We tailor your website to reflect your business, your values, and
              your unique coaching style. Once we understand who you want to
              serve, how you want to serve them, and where you want your
              business to grow, we use that as our north star. Giving us the
              direction to get you the clients you want so you can serve them
              how you want, and grow your business how you want.
            </p>
          </div>
          <div className="bg-storm-gray max-w-[28rem] lg:max-w-[33.875rem] h-[20rem] lg:h-[33.875rem] w-full rounded-tr-[94px]"></div>
        </div>

        <div className="h-[10rem] bg-slate-700 hidden lg:flex">
          {/*squigle*/}
        </div>

        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row-reverse w-full justify-between items-center">
          <div className="flex flex-col justify-center gap-2 max-w-[28rem]">
            <h4 className="font-gunterz">
              <span className="">4.</span>
              <br />
              <span className="text-sun-orange">Capture</span> visitors at every
              stage
            </h4>
            <p>
              We create a path for three different types of visitors, Mr. and
              Mrs. sign me up, cold feet Colin, and window shopper Wendy (she
              just wants free stuff). The first thing visitors see is a
              compelling hero section. This states their dream outcome is in
              reach. All they have to do is click a button, Mr. and Mrs. sign me
              up click that right away. If they need more convincing like cold
              feet Colin they go on a journey designed to hit their pain points
              and show them that you’re the right coach for the job. And last
              but not least window shopper Wendy she grabs your free lead magnet
              in exchange for her email which grows your list of warm leads.
            </p>
          </div>
          <div className="bg-storm-gray max-w-[28rem] lg:max-w-[33.875rem] h-[20rem] lg:h-[33.875rem]  w-full rounded-tr-[94px]"></div>
        </div>

        <div className="h-[10rem] bg-slate-700 hidden lg:flex">
          {/*squigle*/}
        </div>

        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row w-full justify-between items-center">
          <div className="flex flex-col justify-center gap-2 max-w-[28rem]">
            <h4 className="font-gunterz">
              <span className="">5.</span>
              <br />
              <span className="text-sun-orange">Maintenance</span>
            </h4>
            <p>
              Once the site is live you get unlimited changes to your website.
              We will respond within 24 hours and provide feedback on what we
              think is best for the success of your website of course you get
              the last say. You get two options for maintenance, option one
              covers hosting and unlimited changes and option two is everything
              in option one plus A/B testing. A/B testing boosts conversion over
              time. We swap out different messaging and design elements to
              increase conversion rate. This is a must have if you want to
              maximize your return on investment.
            </p>
          </div>
          <div className="bg-storm-gray max-w-[28rem] lg:max-w-[33.875rem] h-[20rem] lg:h-[33.875rem]  w-full rounded-tr-[94px]"></div>
        </div>
      </div>
    </main>
  );
}
