import react from "react";

export const OurValues: React.FC = () => {
  return (
    <section className="h-[60rem] bg-storm-black flex flex-col items-center px-10 py-20">
      <h2 className="w-full max-w-[100rem] font-charcoalDance">
        We guarantee <span className="text-sun-orange">greatness</span>
      </h2>
      <div className="grid grid-cols-3 grid-rows-3">
        <div className="bg-red-300">
          <h4>Text is here</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!
          </p>
        </div>
        <div className="bg-orange-300">
          <h4>Text is here</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!
          </p>
        </div>
        <div className="bg-red-300">
          <h4>Text is here</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!
          </p>
        </div>
        <div className="bg-orange-300">
          <h4>Text is here</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!
          </p>
        </div>
        <div className="bg-red-300">
          <h4>Text is here</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!
          </p>
        </div>
        <div className="bg-orange-300">
          <h4>Text is here</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod!
          </p>
        </div>
      </div>
    </section>
  );
};
