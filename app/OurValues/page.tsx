import react from "react";

export default function OutValues() {
  return (
    <main className="flex min-h-[60rem] bg-section-background flex-col  items-center py-[10rem] w-full px-5">
      <h1 className="font-gunterz text-[3rem] w-full text-center">
        OUR <span className="text-sun-orange">VALUES</span>
      </h1>
      <div className="bg-storm-gray rounded-tr-[58px] rounded-bl-[58px] max-w-[54rem] p-10 text-center w-full items-center justify-center mb-10">
        <p className="font-gunterz text-[1.5rem] mb-5">OUR MISSION</p>
        <p className="font-gunterz text-[1.5rem]">
          TO CAPTIVATE AND CONNECT TO MAKE YOUR BUSINESS WORK FOR YOU.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-10 flex-wrap max-w-[75rem]">
        <div className="flex flex-row justify-center gap-5 max-w-[40rem]">
          <img src="https://placehold.co/130" />
          <div className="flex flex-col justify-center max-w-[24rem]">
            <h4 className="font-gunterz">24 HOUR RESPONSE</h4>
            <p>
              No matter what day, what time, what hour we promise you that we
              will respond to your message within 24 hours.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-5 max-w-[40rem]">
          <img src="https://placehold.co/130" />
          <div className="flex flex-col justify-center max-w-[24rem]">
            <h4 className="font-gunterz">FULL SATISFACTION</h4>
            <p>
              We will work with you and your team until you are fully satisfied
              with our services
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-5 max-w-[40rem]">
          <img src="https://placehold.co/130" />
          <div className="flex flex-col justify-center max-w-[24rem]">
            <h4 className="font-gunterz">QUICK TURNAROUND</h4>
            <p>
              We will work as quickly as we can without sacrificing quality. We want to produce results for you as quickly
              as possible.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-5 max-w-[40rem]">
          <img src="https://placehold.co/130" />
          <div className="flex flex-col justify-center max-w-[24rem]">
            <h4 className="font-gunterz">GENUINE CONNECTION</h4>
            <p>
              We love creating connections with those striving for big dreams just like we do. We can&apos;t wait to get to know you.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-5 max-w-[40rem]">
          <img src="https://placehold.co/130" />
          <div className="flex flex-col justify-center max-w-[24rem]">
            <h4 className="font-gunterz">CLEAR COMMUNICATION</h4>
            <p>
              We love truth. Being able to communicate honestly with transparency is how we like to communicate.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-5 max-w-[40rem]">
          <img src="https://placehold.co/130" />
          <div className="flex flex-col justify-center max-w-[24rem]">
            <h4 className="font-gunterz">RESULTS DRIVEN</h4>
            <p>
              We understand a landing page is an investment which is why we try to increase your ROI to the best of our abilities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
