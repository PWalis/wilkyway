import react from "react";
import {
  FiveStar,
  TestimonialContainer,
} from "../containers/TestimonialContainer";
import { H2Container } from "../containers/H2Container";
import Image from "next/image";
import kara from "@/public/testimonials/kara_leino_picture.webp";

export const Testimonials: React.FC = () => {
  return (
    <section
      id="Testimonials"
      className="min-h-[60rem] bg-section-background flex flex-col px-5 pb-[4rem] items-center gap-10"
    >
      <H2Container color="#ECA653" topString="Our Testimonials">
        The <span className="text-testimonialAccent">results</span> speak for
        themselves
      </H2Container>
      <div className="flex flex-col items-center gap-10">
        <h4 className="text-[42px] lg:text-left text-center">
          "I am so{" "}
          <span className="text-testimonialAccent italic font-semibold">
            highly impressed...
          </span>
          "
        </h4>
        <div className="flex flex-row justify-center flex-wrap gap-10">
          <TestimonialContainer>
            <p>
              Not only did they design my website, they included me in the
              process and walked me through uploading my own products. They were
              knowledgeable in answering my questions and put in the work to not
              only create my website but customize it to my preference. I am
              beyond happy with the turnout of my new website.{" "}
              <span className="text-testimonialAccent">
                They showed so much passion
              </span>{" "}
              about making this website specifically to my wants and needs. I am
              so highly impressed and highly recommend!”
            </p>
            <div className="flex mt-3">
              <Image
                width={100}
                height={100}
                className="rounded-full"
                alt="kara-testimonial"
                src={kara}
              />
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
