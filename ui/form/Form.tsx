"use client";
import react, { FormEvent, useState } from "react";
import { useFormSwitch } from "@/context/FormSwitch";
import { Calendar } from "@nextui-org/calendar";
import { Input, Textarea } from "@nextui-org/input";
import clsx from "clsx";
import { motion } from "framer-motion";
import { z } from "zod";
import { Success } from "./Success";

export const Form: React.FC = () => {
  // state for button toggles
  const [webDesignToggle, setWebDesignToggle] = useState(false);
  const [logoDesignToggle, setLogoDesignToggle] = useState(false);
  const [copywritingToggle, setCopywritingToggleToggle] = useState(false);
  const [brandIdentityToggle, setBrandIdentityToggle] = useState(false);
  const [abTestingToggle, setAbTestingToggle] = useState(false);
  const [seoToggle, setSeoToggle] = useState(false);
  const [otherToggle, setOtherToggle] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  // sets form to be in view or not
  const { formSwitch, setFormSwitch } = useFormSwitch();

  // Form submission state
  const [success, setSuccess] = useState(false);
  const [formFailed, setFormFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // form errors
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    businessName: false,
    projectDescription: false,
    date: false,
  });

  // services form data
  const [services, setServices] = useState({
    webDesign: "",
    logoDesign: "",
    copywriting: "",
    brandIdentity: "",
    abTesting: "",
    seo: "",
    other: "",
  });

  // form position variants
  const variants = {
    hidden: { x: "-100%" },
    visible: { x: "0%" },
  };

  // validation object
  const zodObject = z.object({
    firstName: z
      .string({
        required_error: "Please enter your first name",
        invalid_type_error: "Must be a string",
      })
      .min(1),
    lastName: z
      .string({
        required_error: "Please enter your last name",
        invalid_type_error: "Must be a string",
      })
      .min(1),
    email: z
      .string({ invalid_type_error: "Must be a string" })
      .email({ message: "Invalid email address" }),
    phoneNumber: z.coerce
      .number({
        required_error: "Please enter your phone number",
        invalid_type_error: "Must be a string",
      })
      .min(10),
    businessName: z
      .string({
        required_error: "Please enter your business name",
        invalid_type_error: "Must be a string",
      })
      .min(1),
    description: z.string({ invalid_type_error: "Must be a string" }),
    services: z.string({ invalid_type_error: "Must be a string" }),
    date: z
      .string({
        required_error: "Please select a date for us to contact you",
        invalid_type_error: "Must be a date",
      })
      .min(1),
  });

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({
      // reset error state
      firstName: false,
      lastName: false,
      email: false,
      phoneNumber: false,
      businessName: false,
      projectDescription: false,
      date: false,
    });
    // set loading state
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    formData.set("services", Object.values(services).toString());
    formData.set("date", date?.toString() || "");
    const searchParams = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      searchParams.append(key, value.toString());
    }
    // validate form data
    const result = zodObject.safeParse({
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      phoneNumber: formData.get("phone-number"),
      businessName: formData.get("business-name"),
      description: formData.get("project-description"),
      services: formData.get("services"),
      date: formData.get("date"),
    });
    // console log issues
    if (!result.success) {
      for (let issue of result.error.issues) {
        const field = issue.path[0];
        setErrors((prevState) => ({ ...prevState, [field]: true }));
      }
      setIsLoading(false);
    } else {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: searchParams.toString(),
      })
        .then(() => {
          setIsLoading(false)
          setSuccess(true);
        }) //show success message
        .catch((error) => {
          setIsLoading(false)
          setFormFailed(true);
          setTimeout(() => setFormFailed(false), 3000)
        }); //error on form submission
    }
  };

  return (
    <motion.div
      className={clsx(
        "fixed z-50 top-0 max-h-[calc(100vh)] sm:h-full w-full flex justify-center items-start overflow-auto",
        formSwitch ? "" : ""
      )}
      variants={variants}
      initial={"hidden"}
      animate={formSwitch ? "visible" : "hidden"}
      transition={{ ease: "easeOut" }}
    >
      <div className="sm:min-h-[40rem] h-full w-full flex flex-col justify-center items-center bg-storm-black px-5 py-24 relative">
        <button
          onClick={() => {
            setFormSwitch(false);
            setErrors({
              firstName: false,
              lastName: false,
              email: false,
              phoneNumber: false,
              businessName: false,
              projectDescription: false,
              date: false,
            });
          }}
          className="absolute top-16 right-16 font-charcoalDance text-[4rem] text-red-500"
        >
          x{" "}
        </button>
        {success ? (
          <Success />
        ) : (
          <>
            <h2 className="font-gunterz text-left w-full max-w-[57rem]">
              LET'S GET STARTED...
            </h2>
            <form
              className="flex flex-col gap-5 sm:gap-0 sm:flex-row max-w-[100rem]"
              name="website-request"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="form-name" value="website-request" />
              <div className="flex flex-col justify-center">
                <div className="flex flex-col max-w-[35rem]">
                  <div className="flex flex-row flex-wrap gap-5 mb-5">
                    <div className="flex flex-col items-start justify-center relative">
                      <label className="font-nobel-uno">First Name:</label>
                      {errors.firstName === true && (
                        <p className="absolute -bottom-[21px] left-[4px] text-red-500 tracking-widest text-[0.75rem]">
                          Please enter first name
                        </p>
                      )}
                      <Input
                        name="first-name"
                        id="first-name"
                        classNames={{
                          inputWrapper: ["bg-storm-gray", "dark:text-red-400"],
                          input: "dark:text-sun-orange",
                          errorMessage: "text-red-500 tracking-widest",
                        }}
                        type="text"
                        placeholder="Enter your first name"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-start justify-center relative">
                      <label className="font-nobel-uno">Last Name:</label>
                      {errors.lastName === true && (
                        <p className="absolute -bottom-[21px] left-[4px] text-red-500 tracking-widest text-[0.75rem]">
                          Please enter last name
                        </p>
                      )}
                      <Input
                        name="last-name"
                        classNames={{
                          inputWrapper: "bg-storm-gray",
                          errorMessage: "text-red-500 tracking-widest",
                        }}
                        placeholder="Enter your last name"
                        type="text"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-start justify-center relative">
                      <label className="font-nobel-uno">Email:</label>
                      {errors.email === true && (
                        <p className="absolute -bottom-[21px] left-[4px] text-red-500 tracking-widest text-[0.75rem]">
                          Please enter email
                        </p>
                      )}
                      <Input
                        name="email"
                        classNames={{
                          inputWrapper: "bg-storm-gray",
                          errorMessage: "text-red-500 tracking-widest",
                        }}
                        placeholder="Enter your email"
                        type="email"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-start justify-center relative">
                      <label className="font-nobel-uno">Phone Number:</label>
                      {errors.phoneNumber === true && (
                        <p className="absolute -bottom-[21px] left-[4px] text-red-500 tracking-widest text-[0.75rem]">
                          Please enter phone number
                        </p>
                      )}
                      <Input
                        name="phone-number"
                        classNames={{
                          inputWrapper: "bg-storm-gray",
                          errorMessage: "text-red-500 tracking-widest",
                        }}
                        placeholder="Enter your phone #"
                        type="text"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-start justify-center relative">
                      <label className="font-nobel-uno">Business Name:</label>
                      {errors.businessName === true && (
                        <p className="absolute -bottom-[21px] left-[4px] text-red-500 tracking-widest text-[0.75rem]">
                          Please enter business name
                        </p>
                      )}
                      <Input
                        name="business-name"
                        classNames={{
                          inputWrapper: "bg-storm-gray",
                          errorMessage: "text-red-500 tracking-widest",
                        }}
                        placeholder="Enter business name"
                        type="text"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center mb-3 max-w-[26rem]">
                    <label className="font-nobel-uno">
                      Project Description
                    </label>
                    <Textarea
                      name="project-description"
                      classNames={{
                        inputWrapper: "bg-storm-gray tracking-wider",
                        errorMessage: "text-red-500 tracking-widest",
                      }}
                      placeholder="Besides converting visitors into clients what else would you like your website to have/do?"
                    ></Textarea>
                  </div>
                </div>

                <div className="min-h-[10rem] flex flex-col gap-2 max-w-[35rem] sm:mt-0 mt-3">
                  <label>
                    Please select the services you are interested in
                  </label>
                  <div className="flex flex-row flex-wrap gap-2 max-w-[30rem]">
                    <input
                      name="web-design-button"
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
                        setServices({ ...services, webDesign: "webDesign" });
                      }}
                    ></input>
                    <input
                      name="logo-design-button"
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
                        setServices({ ...services, logoDesign: "logoDesign" });
                      }}
                    ></input>
                    <input
                      name="copywriting-button"
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
                        setServices({
                          ...services,
                          copywriting: "copywriting",
                        });
                      }}
                    ></input>
                    <input
                      name="brand-identity-button"
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
                        setServices({
                          ...services,
                          brandIdentity: "brandIdentity",
                        });
                      }}
                    ></input>
                    <input
                      name="a/b-testing-button"
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
                        setServices({ ...services, abTesting: "abTesting" });
                      }}
                    ></input>
                    <input
                      name="seo-button"
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
                        setServices({ ...services, seo: "seo" });
                      }}
                    ></input>
                    <input
                      name="other-button"
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
                        setServices({ ...services, other: "other" });
                      }}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col relative">
                  <label className="font-nobel-uno mb-3">
                    Please select a date for us to contact you
                  </label>
                  {errors.date === true && (
                    <p className="absolute -bottom-[50px] left-[3px] text-[0.8rem] font-bold text-red-500">
                      Please select a date
                    </p>
                  )}
                  <Calendar
                    onChange={(event) => {
                      setDate(event.toDate("cst"));
                    }}
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
                  <button
                    type="submit"
                    className="bg-sun-orange text-white font-nobel-uno py-3 px-5 font-semibold text-center tracking-wider"
                  >
                    {isLoading ? "Loading..." : formFailed ? "Failed to submit" : "SUBMIT REQUEST"}
                  </button>
                  <p className="mt-3">
                    We will get back to you within{" "}
                    <span className="text-sun-orange">24 hours</span>
                  </p>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
};
