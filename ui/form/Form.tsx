"use client";
import react, { FormEvent, useState } from "react";
import clsx from "clsx";
import { z } from "zod";
import { FormCircle, FormLine } from "../animated/FormLine";
import { FormLine2 } from "../animated/FormLine2";
import { Calendar } from "@/components/ui/calendar";

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
          setIsLoading(false);
          setSuccess(true);
        }) //show success message
        .catch((error) => {
          setIsLoading(false);
          setFormFailed(true);
          setTimeout(() => setFormFailed(false), 3000);
        }); //error on form submission
    }
  };

  return (
    <section className="h-full min-h-[40rem] w-full flex flex-col justify-center items-center bg-section-background overflow-hidden pl-5 pt-[3rem] pb-[4rem] lg:pb-[1rem]">
      <form
        className="h-full w-full 2xl:grid grid-cols-2 grid-rows-2 px-5 relative max-w-[45rem] 2xl:max-w-[100rem]"
        name="website-request"
        onSubmit={handleFormSubmit}
      >
        <div className="flex justify-between max-w-[42rem]">
          <div className="flex flex-col">
            <h2 className="font-gunterz text-left w-full max-w-[28rem] text-[1.5rem] 2xl:text-[2.5rem]">
              Let's get in <span className="text-formBlue">touch...</span>
            </h2>
            <p className="max-w-[25rem] text-[1.25rem] lg:text-[1.5rem]">
              Tell us a little about your project, so we can reach out to you.
            </p>
          </div>
          <div className="max-w-[11rem] pt-3">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 158.42 158.57"
              className="w-full"
            >
              <defs>
                <style>
                  {`
      .cls-1FooterArrow {
        fill: #3355d1;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2" data-name="Layer_1">
                <polyline
                  className="cls-1FooterArrow"
                  points="2.12 0 0 2.12 154.73 156.85 156.85 154.73 2.12 0"
                />
                <polyline
                  className="cls-1FooterArrow"
                  points="155.42 155.57 158.42 155.57 158.42 14.71 155.42 14.71 155.42 155.57"
                />
                <polyline
                  className="cls-1FooterArrow"
                  points="158.42 158.57 158.42 155.57 17.56 155.57 17.56 158.57 158.42 158.57"
                />
              </g>
            </svg>
          </div>
        </div>

        <input type="hidden" name="form-name" value="website-request" />

        <div className="flex flex-col row-start-1 col-start-2 row-span-2 max-w-[42rem]">
          <div className="flex flex-row flex-wrap gap-4 mb-5 ">
            <div className="flex flex-col items-start justify-center relative w-full 2xl:max-w-[20.5rem]">
              <div className="absolute -left-[20px] 2xl:-left-[35px]">
                <div className="relative">
                  <FormLine />
                </div>
              </div>
              <div className="absolute -top-[5px] -left-[20px] 2xl:-left-[35px]">
                <div className="relative">
                  <FormCircle />
                </div>
              </div>

              <label className="font-nobel-uno">First Name:</label>
              {errors.firstName === true && (
                <p className="absolute -bottom-[21px] left-[4px] text-red-500 tracking-widest text-[0.75rem] font-bold">
                  Please enter first name
                </p>
              )}
              <div className="w-full ">
                <input
                  className="w-full h-[3.5rem] bg-formInput hover:bg-slate-800 pl-5 focus:outline-none"
                  name="first-name"
                  id="first-name"
                  type="text"
                  placeholder="Enter your first name"
                ></input>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center relative w-full 2xl:max-w-[20.5rem]">
              <label className="font-nobel-uno">Last Name:</label>
              {errors.lastName === true && (
                <p className="absolute -bottom-[21px] left-[4px] text-red-500 tracking-widest text-[0.75rem] font-bold">
                  Please enter last name
                </p>
              )}
              <div className="w-full">
                <input
                  className="w-full h-[3.5rem] bg-formInput hover:bg-slate-800 pl-5 focus:outline-none"
                  name="last-name"
                  id="last-name"
                  type="text"
                  placeholder="Enter your last name"
                ></input>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center relative w-full 2xl:max-w-[20.5rem]">
              <label className="font-nobel-uno">Email:</label>
              {errors.email === true && (
                <p className="absolute -bottom-[21px] left-[4px] text-red-500 tracking-widest text-[0.75rem] font-bold">
                  Please enter email
                </p>
              )}
              <div className="w-full">
                <input
                  className="w-full h-[3.5rem] bg-formInput hover:bg-slate-800 pl-5 focus:outline-none"
                  name="email"
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                ></input>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center relative w-full 2xl:max-w-[20.5rem]">
              <label className="font-nobel-uno">Phone Number:</label>
              {errors.phoneNumber === true && (
                <p className="absolute -bottom-[21px] left-[4px] text-red-500 tracking-widest text-[0.75rem] font-bold">
                  Please enter phone number
                </p>
              )}
              <div className="w-full">
                <input
                  className="w-full h-[3.5rem] bg-formInput hover:bg-slate-800 pl-5 focus:outline-none"
                  name="phone-number"
                  id="phone-number"
                  type="text"
                  placeholder="Enter your phone #"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center mt-3 mb-3 w-full max-w-[42.3rem] h-[9.05rem]">
            <label className="font-nobel-uno">Project Description:</label>
            <textarea
              name="project-description"
              className="w-full h-[9rem] bg-formInput hover:bg-slate-800 pl-5 pt-5 focus:outline-none resize-none"
              placeholder="Besides converting visitors into clients what else would you like your website to have/do?"
            ></textarea>
          </div>
        </div>

        <div className="min-h-[10rem] flex flex-col gap-2 max-w-[40rem] mb-3 sm:mb-0 sm:mt-0 row-start-2 col-start-1 2xl:justify-end relative">
          <div className="absolute -top-[170px] -left-[20px] 2xl:-left-[35px]">
            <div className="relative">
              <FormLine />
            </div>
          </div>
          <label className="text-[1.25rem] lg:text-[1.5rem] font-light">Please select the services you are interested in:</label>
          <div className="flex flex-row flex-wrap gap-2 max-w-[35rem] relative">
          <div className="absolute -top-[35px] -left-[20px] 2xl:-left-[35px]">
            <div className="relative">
              <FormCircle />
            </div>
          </div>
            <input
              name="web-design-button"
              type="button"
              className={clsx(
                "border-1   px-5 py-2 rounded-full hover:cursor-pointer",
                webDesignToggle
                  ? "border-formBlue/80 text-white/80 bg-formBlue"
                  : "border-white/50 text-white/50 bg-formInput"
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
                "border-1  px-5 py-2 rounded-full hover:cursor-pointer",
                logoDesignToggle
                  ? "border-formBlue/80 text-white/80 bg-formBlue"
                  : "border-white/50 text-white/50 bg-formInput"
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
                "border-1  px-5 py-2 rounded-full hover:cursor-pointer",
                copywritingToggle
                  ? "border-formBlue/80 text-white/80 bg-formBlue"
                  : "border-white/50 text-white/50 bg-formInput"
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
                "border-1  px-5 py-2 rounded-full hover:cursor-pointer",
                brandIdentityToggle
                  ? "border-formBlue/80 text-white/80 bg-formBlue"
                  : "border-white/50 text-white/50 bg-formInput"
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
                "border-1  px-5 py-2 rounded-full hover:cursor-pointer",
                abTestingToggle
                  ? "border-formBlue/80 text-white/80 bg-formBlue"
                  : "border-white/50 text-white/50 bg-formInput"
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
                "border-1  px-5 py-2 rounded-full hover:cursor-pointer",
                seoToggle
                  ? "border-formBlue/80 text-white/80 bg-formBlue"
                  : "border-white/50 text-white/50 bg-formInput"
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
                "border-1  px-5 py-2 rounded-full hover:cursor-pointer",
                otherToggle
                  ? "border-formBlue/80 text-white/80 bg-formBlue"
                  : "border-white/50 text-white/50 bg-formInput"
              )}
              defaultValue={"Other"}
              onClick={() => {
                setOtherToggle(!otherToggle);
                setServices({ ...services, other: "other" });
              }}
            ></input>
          </div>
        </div>

        <div className="max-w-[42.3rem] row-start-2 col-start-2 flex items-end ">
          <button
            type="submit"
            className="bg-formBlue text-white tracking-wider font-semibold py-3 px-5 w-full relative"
          >
            {isLoading
              ? "Loading..."
              : formFailed
              ? "Failed to submit"
              : "SUBMIT REQUEST"}
            <div className="absolute top-[5px] -left-[20px] 2xl:-left-[35px]">
              <div className="relative">
                <FormCircle />
              </div>
            </div>
          </button>
        </div>
      </form>
    </section>
  );
};
