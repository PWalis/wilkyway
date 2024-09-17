import react from "react";
import {
  FiveStar,
  TestimonialContainer,
} from "../containers/TestimonialContainer";
import { H2Container } from "../containers/H2Container";

export const Testimonials: React.FC = () => {
  return (
    <section className="min-h-[60rem] bg-section-background flex flex-col px-5 items-center gap-10 pb-[10rem]">
      <H2Container color="#ECA653" topString="Our Testimonials">
      The <span className="text-testimonialAccent">results</span> speak for
      themselves
      </H2Container>
      <div className="flex flex-col items-center gap-10">
        <h4 className="text-[42px] lg:text-left text-center">
          "I am so <span className="text-testimonialAccent italic font-semibold">highly impressed...</span>"
        </h4>
        <div className="flex flex-row justify-center flex-wrap gap-10">
          <TestimonialContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ut obcaecati ducimus sequi voluptatum odio non vero
              voluptatibus itaque quos, reiciendis maiores nam exercitationem
              reprehenderit provident fugit quasi nostrum. Repellat aliquid
              quasi, expedita ducimus totam porro beatae recusandae ipsum.
              Inventore delectus voluptatibus voluptatem exercitationem facere
              mollitia minima officia veritatis consequuntur.
            </p>
            <div className="flex mt-3">
              <img src="https://placehold.co/77" />
              <div className="flex flex-col justify-center gap-1 ml-5">
                <p className="text-[1.5rem]">Kara Leino</p>
                <div className="w-full">
                  <FiveStar />
                </div>
              </div>
            </div>
          </TestimonialContainer>
          <TestimonialContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ut obcaecati ducimus sequi voluptatum odio non vero
              voluptatibus itaque quos, reiciendis maiores nam exercitationem
              reprehenderit provident fugit quasi nostrum. Repellat aliquid
              quasi, expedita ducimus totam porro beatae recusandae ipsum.
              Inventore delectus voluptatibus voluptatem exercitationem facere
              mollitia minima officia veritatis consequuntur.
            </p>
            <div className="flex mt-3">
              <img src="https://placehold.co/77" />
              <div className="flex flex-col justify-center gap-1 ml-5">
                <p className="text-[1.5rem]">Kara Leino</p>
                <div className="w-full">
                  <FiveStar />
                </div>
              </div>
            </div>
          </TestimonialContainer>
          <TestimonialContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ut obcaecati ducimus sequi voluptatum odio non vero
              voluptatibus itaque quos, reiciendis maiores nam exercitationem
              reprehenderit provident fugit quasi nostrum. Repellat aliquid
              quasi, expedita ducimus totam porro beatae recusandae ipsum.
              Inventore delectus voluptatibus voluptatem exercitationem facere
              mollitia minima officia veritatis consequuntur.
            </p>
            <div className="flex mt-3">
              <img src="https://placehold.co/77" />
              <div className="flex flex-col justify-center gap-1 ml-5">
                <p className="text-[1.5rem]">Kara Leino</p>
                <div className="w-full">
                  <FiveStar />
                </div>
              </div>
            </div>
          </TestimonialContainer>
        </div>
      </div>
    </section>
  );
};
