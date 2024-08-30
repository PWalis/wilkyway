"use client";
import react, { useState } from "react";
import { useFormSwitch } from "@/context/FormSwitch";
import { Calendar } from "@nextui-org/calendar";
import { Input, Textarea } from "@nextui-org/input";
import clsx from "clsx";
import { easeOut, motion } from 'framer-motion'

export const Form: React.FC = () => {
  const [webDesignToggle, setWebDesignToggle] = useState(false);
  const [logoDesignToggle, setLogoDesignToggle] = useState(false);
  const [copywritingToggle, setCopywritingToggleToggle] = useState(false);
  const [brandIdentityToggle, setBrandIdentityToggle] = useState(false);
  const [abTestingToggle, setAbTestingToggle] = useState(false);
  const [seoToggle, setSeoToggle] = useState(false);
  const [otherToggle, setOtherToggle] = useState(false);
  const { formSwitch, setFormSwitch } = useFormSwitch();

  const variants = {
    "hidden": {x: "-100%"},
    "visible": {x: "0%"}
  }

  return (
    <motion.div
      className={clsx(
        "fixed z-50 top-0 max-h-[calc(100vh)] sm:h-full w-full flex justify-center items-start overflow-auto",
        formSwitch ? "" : ""
      )}
      variants={variants}
      initial={"hidden"}
      animate={formSwitch ? "visible": "hidden"}
      transition={{ease: "easeOut"}}
    >
      <div className="sm:min-h-[40rem] h-full w-full flex flex-col justify-center items-center bg-storm-black px-5 py-24 relative">
        <button
          onClick={() => {
            setFormSwitch(false);
          }}
          className="absolute top-16 right-16 font-charcoalDance text-[4rem] text-red-500"
        >
          x        </button>
        <h2 className="font-gunterz text-left w-full max-w-[57rem]">LET'S GET STARTED...</h2>
        <form className="flex flex-col gap-5 sm:gap-0 sm:flex-row max-w-[100rem]" data-netlify="true" name="website-request">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col max-w-[35rem]">
              <div className="flex flex-row flex-wrap gap-5 mb-5">
                <div className="flex flex-col items-start justify-center">
                  <label className="font-nobel-uno">First Name:</label>
                  <Input
                    classNames={{
                      inputWrapper: ["bg-storm-gray", "dark:text-red-400"],
                      input: "dark:text-sun-orange",
                    }}
                    type="text"
                    placeholder="Enter your first name"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <label className="font-nobel-uno">Last Name:</label>
                  <Input
                    classNames={{ inputWrapper: "bg-storm-gray" }}
                    placeholder="Enter your last name"
                    type="text"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <label className="font-nobel-uno">Email:</label>
                  <Input
                    classNames={{ inputWrapper: "bg-storm-gray" }}
                    placeholder="Enter your email"
                    type="email"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <label className="font-nobel-uno">Phone Number:</label>
                  <Input
                    classNames={{ inputWrapper: "bg-storm-gray" }}
                    placeholder="Enter your phone #"
                    type="text"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <label className="font-nobel-uno">Business Name:</label>
                  <Input
                    classNames={{ inputWrapper: "bg-storm-gray" }}
                    placeholder="Enter business name"
                    type="text"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center mb-3 max-w-[26rem]">
                <label className="font-nobel-uno">Project Description</label>
                <Textarea
                  classNames={{ inputWrapper: "bg-storm-gray tracking-wider" }}
                  placeholder="Besides converting visitors into clients what else would you like your website to have/do?"
                ></Textarea>
              </div>
            </div>

            <div className="min-h-[10rem] flex flex-col gap-2 max-w-[35rem] sm:mt-0 mt-3">
              <label>Please select the services you are interested in</label>
              <div className="flex flex-row flex-wrap gap-2 max-w-[30rem]">
                <input
                  type="button"
                  className={clsx(
                    "border-1  bg-storm-gray px-3 py-1 rounded-full hover:cursor-pointer",
                    webDesignToggle
                      ? "border-sun-orange/80 text-sun-orange/80"
                      : "border-white/50 text-white/50"
                  )}
                  defaultValue={"Web Design"}
                  onClick={() => {
                    setWebDesignToggle(!webDesignToggle);
                  }}
                ></input>
                <input
                  type="button"
                  className={clsx(
                    "border-1 bg-storm-gray px-3 py-1 rounded-full hover:cursor-pointer",
                    logoDesignToggle
                      ? "border-sun-orange/80 text-sun-orange/80"
                      : "border-white/50 text-white/50"
                  )}
                  defaultValue={"Logo Design"}
                  onClick={() => {
                    setLogoDesignToggle(!logoDesignToggle);
                  }}
                ></input>
                <input
                  type="button"
                  className={clsx(
                    "border-1 bg-storm-gray px-3 py-1 rounded-full hover:cursor-pointer",
                    copywritingToggle
                      ? "border-sun-orange/80 text-sun-orange/80"
                      : "border-white/50 text-white/50"
                  )}
                  defaultValue={"Copywriting"}
                  onClick={() => {
                    setCopywritingToggleToggle(!copywritingToggle);
                  }}
                ></input>
                <input
                  type="button"
                  className={clsx(
                    "border-1 bg-storm-gray px-3 py-1 rounded-full hover:cursor-pointer",
                    brandIdentityToggle
                      ? "border-sun-orange/80 text-sun-orange/80"
                      : "border-white/50 text-white/50"
                  )}
                  defaultValue={"Brand Identity"}
                  onClick={() => {
                    setBrandIdentityToggle(!brandIdentityToggle);
                  }}
                ></input>
                <input
                  type="button"
                  className={clsx(
                    "border-1 bg-storm-gray px-3 py-1 rounded-full hover:cursor-pointer",
                    abTestingToggle
                      ? "border-sun-orange/80 text-sun-orange/80"
                      : "border-white/50 text-white/50"
                  )}
                  defaultValue={"A/B Testing"}
                  onClick={() => {
                    setAbTestingToggle(!abTestingToggle);
                  }}
                ></input>
                <input
                  type="button"
                  className={clsx(
                    "border-1 bg-storm-gray px-3 py-1 rounded-full hover:cursor-pointer",
                    seoToggle
                      ? "border-sun-orange/80 text-sun-orange/80"
                      : "border-white/50 text-white/50"
                  )}
                  defaultValue={"SEO"}
                  onClick={() => {
                    setSeoToggle(!seoToggle);
                  }}
                ></input>
                <input
                  type="button"
                  className={clsx(
                    "border-1 bg-storm-gray px-3 py-1 rounded-full hover:cursor-pointer",
                    otherToggle
                      ? "border-sun-orange/80 text-sun-orange/80"
                      : "border-white/50 text-white/50"
                  )}
                  defaultValue={"Other"}
                  onClick={() => {
                    setOtherToggle(!otherToggle);
                  }}
                ></input>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="font-nobel-uno mb-3">
                Please select a date for us to contact you
              </label>
              <Calendar
                className="scale-[1.2] mt-5 ml-6"
                classNames={{
                  gridWrapper: "bg-storm-gray",
                  gridBody: "bg-storm-gray",
                  cellButton:
                    "dark:focus-within:bg-sun-orange dark:visited:bg-sun-orange dark:active:bg-sun-orange dark:focus:bg-sun-orange dark:hover:bg-orange-400/40 dark:hover:text-storm-black",
                }}
              ></Calendar>
            </div>
            <div className="mt-14">
              <button className="bg-sun-orange text-white font-nobel-uno py-3 px-5 font-semibold text-center tracking-wider">
                SUBMIT REQUEST
              </button>
              <p className="mt-3">
                We will get back to you within{" "}
                <span className="text-sun-orange">24 hours</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
