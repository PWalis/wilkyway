import react from "react";

export const OurValues: React.FC = () => {
  return (
    <section className="min-h-[60rem] bg-storm-black flex flex-col items-center px-10 py-20">
      <h2 className="w-full max-w-[100rem] font-charcoalDance">
        We guarantee <span className="text-sun-orange">greatness</span>
      </h2>
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-15 min-h-[40rem] gap-5 max-w-[90rem]">
        <div className="bg-[#5D3010] rounded-[20px] row-star-1 row-span-7 col-start-1 col-span-3 p-5">
          <h4>1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!
          </p>
        </div>
        <div className="bg-[#1F2C22] rounded-[20px] row-start-1 row-span-8 col-start-4 col-span-5 p-5">
          <h4>2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!
          </p>
        </div>
        <div className="bg-[#462121] rounded-[20px] row-start-1 row-span-8 col-start-9 col-span-4 p-5">
          <h4>3</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!
          </p>
        </div>
        <div className="bg-[#2D313E] rounded-[20px] row-start-8 row-span-7 col-start-1 col-span-3 p-5">
          <h4>4</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!
          </p>
        </div>
        <div className="bg-[#2F4445] rounded-[20px] row-start-9 row-span-6 col-start-4 col-span-4 p-5">
          <h4>5</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!
          </p>
        </div>
        <div className="bg-[#49310C] rounded-[20px] row-start-9 row-span-6 col-start-8 col-span-5 p-5">
          <h4>6</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!
          </p>
        </div>
      </div>
    </section>
  );
};
