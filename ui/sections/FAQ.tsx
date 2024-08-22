"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import useWindowDimensions from "@/lib/UseWindowDimensions";

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

// Define SVG components here or import them if they are in separate files
const Topic1Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4606 1.25H13.5394C15.1427 1.24999 16.3997 1.24999 17.4039 1.34547C18.4274 1.44279 19.2655 1.64457 20.0044 2.09732C20.7781 2.57144 21.4286 3.22194 21.9027 3.99563C22.3554 4.73445 22.5572 5.57256 22.6545 6.59611C22.75 7.60029 22.75 8.85725 22.75 10.4606V11.5278C22.75 12.6691 22.75 13.564 22.7007 14.2868C22.6505 15.0223 22.5468 15.6344 22.3123 16.2004C21.7287 17.6093 20.6093 18.7287 19.2004 19.3123C18.3955 19.6457 17.4786 19.7197 16.2233 19.7413C15.7842 19.7489 15.5061 19.7545 15.2941 19.7779C15.096 19.7999 15.0192 19.832 14.9742 19.8582C14.9268 19.8857 14.8622 19.936 14.7501 20.0898C14.6287 20.2564 14.4916 20.4865 14.2742 20.8539L13.7321 21.7697C12.9585 23.0767 11.0415 23.0767 10.2679 21.7697L9.72579 20.8539C9.50835 20.4865 9.37122 20.2564 9.24985 20.0898C9.13772 19.936 9.07313 19.8857 9.02572 19.8582C8.98078 19.832 8.90399 19.7999 8.70588 19.7779C8.49387 19.7545 8.21575 19.7489 7.77666 19.7413C6.52138 19.7197 5.60454 19.6457 4.79957 19.3123C3.39066 18.7287 2.27128 17.6093 1.68769 16.2004C1.45323 15.6344 1.3495 15.0223 1.29932 14.2868C1.24999 13.564 1.25 12.6691 1.25 11.5278L1.25 10.4606C1.24999 8.85726 1.24999 7.60029 1.34547 6.59611C1.44279 5.57256 1.64457 4.73445 2.09732 3.99563C2.57144 3.22194 3.22194 2.57144 3.99563 2.09732C4.73445 1.64457 5.57256 1.44279 6.59611 1.34547C7.60029 1.24999 8.85726 1.24999 10.4606 1.25ZM6.73809 2.83873C5.82434 2.92561 5.24291 3.09223 4.77938 3.37628C4.20752 3.72672 3.72672 4.20752 3.37628 4.77938C3.09223 5.24291 2.92561 5.82434 2.83873 6.73809C2.75079 7.663 2.75 8.84876 2.75 10.5V11.5C2.75 12.6751 2.75041 13.5189 2.79584 14.1847C2.84081 14.8438 2.92737 15.2736 3.07351 15.6264C3.50486 16.6678 4.33223 17.4951 5.3736 17.9265C5.88923 18.1401 6.54706 18.2199 7.8025 18.2416L7.83432 18.2421C8.23232 18.249 8.58109 18.2549 8.87097 18.287C9.18246 18.3215 9.4871 18.3912 9.77986 18.5615C10.0702 18.7304 10.2795 18.9559 10.4621 19.2063C10.6307 19.4378 10.804 19.7306 11.0004 20.0623L11.5587 21.0057C11.7515 21.3313 12.2485 21.3313 12.4412 21.0057L12.9996 20.0623C13.1959 19.7306 13.3692 19.4378 13.5379 19.2063C13.7204 18.9559 13.9298 18.7304 14.2201 18.5615C14.5129 18.3912 14.8175 18.3215 15.129 18.287C15.4189 18.2549 15.7676 18.249 16.1656 18.2421L16.1975 18.2416C17.4529 18.2199 18.1108 18.1401 18.6264 17.9265C19.6678 17.4951 20.4951 16.6678 20.9265 15.6264C21.0726 15.2736 21.1592 14.8438 21.2042 14.1847C21.2496 13.5189 21.25 12.6751 21.25 11.5V10.5C21.25 8.84876 21.2492 7.663 21.1613 6.73809C21.0744 5.82434 20.9078 5.24291 20.6237 4.77938C20.2733 4.20752 19.7925 3.72672 19.2206 3.37628C18.7571 3.09223 18.1757 2.92561 17.2619 2.83873C16.337 2.75079 15.1512 2.75 13.5 2.75H10.5C8.84876 2.75 7.663 2.75079 6.73809 2.83873ZM7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H16C16.4142 8.25 16.75 8.58579 16.75 9C16.75 9.41421 16.4142 9.75 16 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9ZM7.25 12.5C7.25 12.0858 7.58579 11.75 8 11.75H13.5C13.9142 11.75 14.25 12.0858 14.25 12.5C14.25 12.9142 13.9142 13.25 13.5 13.25H8C7.58579 13.25 7.25 12.9142 7.25 12.5Z"
        fill="#000000"
      ></path>{" "}
    </g>
  </svg>
);

const Topic2Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V6.31673C14.3804 6.60867 15.75 7.83361 15.75 9.5C15.75 9.91421 15.4142 10.25 15 10.25C14.5858 10.25 14.25 9.91421 14.25 9.5C14.25 8.65573 13.3765 7.75 12 7.75C10.6235 7.75 9.75 8.65573 9.75 9.5C9.75 10.3443 10.6235 11.25 12 11.25C13.9372 11.25 15.75 12.5828 15.75 14.5C15.75 16.1664 14.3804 17.3913 12.75 17.6833V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.6833C9.61957 17.3913 8.25 16.1664 8.25 14.5C8.25 14.0858 8.58579 13.75 9 13.75C9.41421 13.75 9.75 14.0858 9.75 14.5C9.75 15.3443 10.6235 16.25 12 16.25C13.3765 16.25 14.25 15.3443 14.25 14.5C14.25 13.6557 13.3765 12.75 12 12.75C10.0628 12.75 8.25 11.4172 8.25 9.5C8.25 7.83361 9.61957 6.60867 11.25 6.31673V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
        fill="#000000"
      ></path>{" "}
    </g>
  </svg>
);

const Topic3Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.63598 4.15458C3.98228 4.94496 2.75 6.83887 2.75 9.1189C2.75 13.3458 5.74875 15.771 8.58725 18.0666C8.8738 18.2983 9.15873 18.5287 9.43876 18.7596C9.96496 19.1933 10.4342 19.5738 10.8862 19.85C11.3394 20.1269 11.699 20.2499 12 20.2499C12.3238 20.2499 12.6889 20.1114 13.1269 19.8414C11.7649 18.7935 10.25 17.3408 10.25 15.0594C10.25 13.4862 11.1866 12.1317 12.523 11.551C13.7325 11.0255 15.191 11.1604 16.4999 12.1641C17.3135 11.5397 18.1916 11.2456 19.0473 11.2499C19.6921 11.2532 20.2987 11.4262 20.8263 11.7255C21.0953 10.9389 21.25 10.0769 21.25 9.1189C21.25 6.83887 20.0177 4.94496 18.364 4.15458C16.7677 3.39163 14.6136 3.58478 12.5518 5.82458C12.4098 5.97885 12.2097 6.06663 12 6.06663C11.7903 6.06663 11.5902 5.97885 11.4482 5.82458C9.3864 3.58478 7.2323 3.39163 5.63598 4.15458ZM22.0221 12.7991C22.4792 13.4316 22.75 14.2138 22.75 15.0594C22.75 16.5774 22.0803 17.7259 21.2404 18.6249C20.5743 19.3379 19.756 19.9365 19.0621 20.444C18.9078 20.5569 18.7597 20.6652 18.6208 20.7693C18.342 20.9782 18.0215 21.2175 17.6918 21.4006C17.3615 21.5841 16.956 21.7499 16.5 21.7499C16.044 21.7499 15.6385 21.5841 15.3082 21.4006C14.9892 21.2234 14.6789 20.9937 14.4066 20.7898C13.7012 21.2973 12.8842 21.7499 12 21.7499C11.301 21.7499 10.6606 21.47 10.1042 21.13C9.54665 20.7894 8.99677 20.3391 8.4847 19.9171C8.2135 19.6935 7.92786 19.4643 7.63303 19.2278C4.85059 16.9952 1.25 14.1061 1.25 9.1189C1.25 6.31427 2.7678 3.86289 4.98914 2.80121C7.09794 1.79332 9.69249 2.10188 12 4.25262C14.3075 2.10188 16.9021 1.79332 19.0109 2.80121C21.2322 3.86289 22.75 6.31427 22.75 9.1189C22.75 10.4898 22.4789 11.7073 22.0221 12.7991ZM13.1208 12.9268C12.3259 13.2721 11.75 14.0903 11.75 15.0594C11.75 16.9422 13.2191 18.0577 14.845 19.2487C14.9905 19.3552 15.1364 19.4623 15.2787 19.5689C15.5709 19.7879 15.811 19.964 16.0365 20.0893C16.2615 20.2143 16.406 20.2499 16.5 20.2499C16.594 20.2499 16.7385 20.2143 16.9635 20.0893C17.189 19.964 17.4291 19.7879 17.7213 19.5689C17.888 19.444 18.0555 19.3212 18.2222 19.199C18.9097 18.6949 19.5844 18.2002 20.1443 17.6009C20.8143 16.8838 21.25 16.0837 21.25 15.0594C21.25 14.4229 21.0019 13.8514 20.6048 13.4354C20.1988 13.0101 19.6433 12.753 19.0398 12.7499C18.4445 12.7469 17.7361 12.9916 17.027 13.6919C16.7349 13.9804 16.2651 13.9804 15.973 13.6919C14.9309 12.6627 13.8774 12.598 13.1208 12.9268Z"
        fill="#000000"
      ></path>{" "}
    </g>
  </svg>
);

const Topic4Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.9436 1.25H13.0564C14.8942 1.24998 16.3498 1.24997 17.489 1.40314C18.6614 1.56076 19.6104 1.89288 20.3588 2.64124C20.6516 2.93414 20.6516 3.40901 20.3588 3.7019C20.0659 3.9948 19.591 3.9948 19.2981 3.7019C18.8749 3.27869 18.2952 3.02502 17.2892 2.88976C16.2615 2.75159 14.9068 2.75 13 2.75H11C9.09318 2.75 7.73851 2.75159 6.71085 2.88976C5.70476 3.02502 5.12511 3.27869 4.7019 3.7019C4.27869 4.12511 4.02502 4.70476 3.88976 5.71085C3.75159 6.73851 3.75 8.09318 3.75 10V14C3.75 15.9068 3.75159 17.2615 3.88976 18.2892C4.02502 19.2952 4.27869 19.8749 4.7019 20.2981C5.12511 20.7213 5.70476 20.975 6.71085 21.1102C7.73851 21.2484 9.09318 21.25 11 21.25H13C14.9068 21.25 16.2615 21.2484 17.2892 21.1102C18.2952 20.975 18.8749 20.7213 19.2981 20.2981C19.994 19.6022 20.2048 18.5208 20.2414 15.9892C20.2474 15.575 20.588 15.2441 21.0022 15.2501C21.4163 15.2561 21.7472 15.5967 21.7412 16.0108C21.7061 18.4383 21.549 20.1685 20.3588 21.3588C19.6104 22.1071 18.6614 22.4392 17.489 22.5969C16.3498 22.75 14.8942 22.75 13.0564 22.75H10.9436C9.10583 22.75 7.65019 22.75 6.51098 22.5969C5.33856 22.4392 4.38961 22.1071 3.64124 21.3588C2.89288 20.6104 2.56076 19.6614 2.40314 18.489C2.24997 17.3498 2.24998 15.8942 2.25 14.0564V9.94358C2.24998 8.10582 2.24997 6.65019 2.40314 5.51098C2.56076 4.33856 2.89288 3.38961 3.64124 2.64124C4.38961 1.89288 5.33856 1.56076 6.51098 1.40314C7.65019 1.24997 9.10582 1.24998 10.9436 1.25ZM18.1131 7.04556C19.1739 5.98481 20.8937 5.98481 21.9544 7.04556C23.0152 8.1063 23.0152 9.82611 21.9544 10.8869L17.1991 15.6422C16.9404 15.901 16.7654 16.076 16.5693 16.2289C16.3387 16.4088 16.0892 16.563 15.8252 16.6889C15.6007 16.7958 15.3659 16.8741 15.0187 16.9897L12.9351 17.6843C12.4751 17.8376 11.9679 17.7179 11.625 17.375C11.2821 17.0321 11.1624 16.5249 11.3157 16.0649L11.9963 14.0232C12.001 14.0091 12.0056 13.9951 12.0102 13.9813C12.1259 13.6342 12.2042 13.3993 12.3111 13.1748C12.437 12.9108 12.5912 12.6613 12.7711 12.4307C12.924 12.2346 13.099 12.0596 13.3578 11.8009C13.3681 11.7906 13.3785 11.7802 13.3891 11.7696L18.1131 7.04556ZM20.8938 8.10622C20.4188 7.63126 19.6488 7.63126 19.1738 8.10622L18.992 8.288C19.0019 8.32149 19.0132 8.3571 19.0262 8.39452C19.1202 8.66565 19.2988 9.02427 19.6372 9.36276C19.9757 9.70125 20.3343 9.87975 20.6055 9.97382C20.6429 9.9868 20.6785 9.99812 20.712 10.008L20.8938 9.8262C21.3687 9.35124 21.3687 8.58118 20.8938 8.10622ZM19.5664 11.1536C19.2485 10.9866 18.9053 10.7521 18.5766 10.4234C18.2479 10.0947 18.0134 9.75146 17.8464 9.43357L14.4497 12.8303C14.1487 13.1314 14.043 13.2388 13.9538 13.3532C13.841 13.4979 13.7442 13.6545 13.6652 13.8202C13.6028 13.9511 13.5539 14.0936 13.4193 14.4976L13.019 15.6985L13.3015 15.981L14.5024 15.5807C14.9064 15.4461 15.0489 15.3972 15.1798 15.3348C15.3455 15.2558 15.5021 15.159 15.6468 15.0462C15.7612 14.957 15.8686 14.8513 16.1697 14.5503L19.5664 11.1536ZM7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H14.5C14.9142 8.25 15.25 8.58579 15.25 9C15.25 9.41421 14.9142 9.75 14.5 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9ZM7.25 13C7.25 12.5858 7.58579 12.25 8 12.25H10.5C10.9142 12.25 11.25 12.5858 11.25 13C11.25 13.4142 10.9142 13.75 10.5 13.75H8C7.58579 13.75 7.25 13.4142 7.25 13ZM7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H9.5C9.91421 16.25 10.25 16.5858 10.25 17C10.25 17.4142 9.91421 17.75 9.5 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z"
        fill="#000000"
      ></path>{" "}
    </g>
  </svg>
);

export function FAQ() {
  const [topic, setTopic] = useState("topic1");
  const [open, setOpen] = useState(-1);
  const { width } = useWindowDimensions();

  const handleOpen = (value: number) => {
    setOpen(open === value ? -1 : value);
  };

  const handleTopicClick = (topic: string) => {
    setTopic(topic);
    setOpen(-1);
    if (width < 1024) {
      let accordion = document.getElementById("accordion");
      accordion &&
        accordion.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  const faqs: Record<string, any> = {
    topic1: [
      [
        "What payment options are available?",
        "LPC stands for a Licensed Professional Counselor. A LPC is a fully licensed professional who has at least a Master’s Degree in Counseling or a related field, has passed the National Counseling Exam for licensure, and had completed and obtained 3000 hours of supervised clinical experience. These professionals are in independent practice. A LPC Associate (Licensed Professional Counselor Associate) is a provisional license to conduct counseling under the supervision of a Licensed Professional Counselor Supervisor (LPC-S). A LPC Associate has also earned a Master’s Degree in Counseling or a related field, has passed the National Counseling Exam for licensure, and is in the process of completing the required 3000 hours of supervised clinical experience to obtain full and independent licensure. Hey, that’s me! As a LPC Associate, I am supervised by Shawna Storey-Lovin, LPC-S. ",
      ],
      [
        "How much funding does a great website require",
        "As the parent/guardian of your minor, I rely heavily on your input and feedback related to your child. The first session is a sit down with you to discuss your concerns and desires for your child. After that, it’s time to get to work and most of my time will be spent directly working with your child independently. However, throughout your child’s treatment, we will engage in periodic parent training and/or consultation sessions to form a partnership and provide the best treatment for your child. ",
      ],
      ["How do I get a discount?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, ut!"]
    ],
    topic2: [
      [
        "How long does it take to to get a website completed?",
        "Self-pay sessions are $115.00 per 50-minute session. Sliding scale rates are offered on a limited basis and are subjected to proof of income.",
      ],
      [
        "How much time do I have to invest in the website?",
        "I do not currently accept any commercial insurance plans and would be considered an Out of Network Provider. While I do not submit claims on your behalf to your insurance company, I am glad to provide you with a super bill you may file with your insurance if you desire to seek an opportunity for reimbursement of services. Please note that I cannot guarantee reimbursement through your insurance for the services rendered.",
      ],
      [
        "What happens if the project isn't completed in the agreed time frame?",
        "A sliding scale based rate is an opportunity for me to bring more accessibility to mental health care at a lower cost to those individuals and families that qualify. Sliding scale rates are offered on a limited basis and are subjected to proof of income.",
      ],
    ],
    topic3: [
      [
        "Can you integrate with my existing CRM?",
        "There is not a rule book or designated timetable related to a standard therapeutic journey. Each person requires different lengths of treatment to meet their optimal well-being. The objective in therapy is to improve your overall well-being, functioning, and reach the goals you have set as part of your treatment plan. Therapy can be used both for intervention, growth, and maintenance. My objective as your counselor is to encourage and challenge your healing at a pace that is comfortable to you.",
      ],
      [
        "Can you do custom software?",
        "Counseling is a behavioral health effort through self-exploration that considers values, beliefs, interests, and memories in a journey to rediscover YOU. Counseling focuses on emotional healing and well-being and tackles a decreased level of functioning. Counseling can only be provided by a licensed mental health professional. ",
      ],
      [
        "Can you do payments on the website?",
        "Coaching is a supportive, encouraging, non-directive approach to developing skills, behaviors, and processes to achieve desired goals. We are going to set goals and work to achieve those goals. In coaching sessions, we are focusing on specific skill sets, competencies, and goals you are fostering your energy towards. With coaching, we are trying to elevate reaching your goals through use of your strengths. ",
      ],
      ["Can you make a client portal?",""]
    ],
  };

  const topicTitles: Record<string, string> = {
    topic1: "Price",
    topic2: "Time",
    topic3: "Technology",
  };

  return (
    <section
      id="faq"
      className="min-h-[60rem] bg-storm-black flex flex-col items-center w-full"
    >
      <div className="w-full max-w-[100rem]">
        <h2 className="text-center sm:text-left px-3 font-charcoalDance tracking-wider">
          Any{" "}
          <span className="text-sun-orange">Questions?</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:gap-10 md:max-w-full justify-center items-center lg:h-[600px]">
        <div className="faq-bg bg-fill bg-no-repeat w-full lg:w-fit sm:p-20 items-center justify-center flex">
          <div className="sm:w-[500px] m-3 sm:min-w-[400px] max-h-[406px] w-full rounded-tr-[20px] px-6 py-6 flex flex-col justify-center gap-3 drop-shadow-md bg-storm-gray">
            {Object.keys(topicTitles).map((key, index) => (
              <button
                key={key}
                onClick={() => handleTopicClick(key)}
                className={`rounded-tr-[16px] text-md h-[80px] flex lg:text-xl items-center ${
                  topic === key ? "bg-[#3D3D3D]" : ""
                }`}
              >
                <div className="w-12 h-12 ml-5"></div>
                <p className="font-nobelUno pl-2 md:text-[1.25rem] text-[1rem]">{topicTitles[key]}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="sm:w-[600px] m-3">
          <h3
            id="accordion"
            className="text-2xl text-[#636061] tracking-wide mb-2"
          >
            {topicTitles[topic]}{" "}
          </h3>
          {topic &&
            faqs[topic].map((faq: any, index: any) => {
              return (
                <Accordion
                  open={open === index}
                  icon={<Icon id={index} open={open} />}
                  className="py-2"
                >
                  <AccordionHeader
                    onClick={() => handleOpen(index)}
                    className={open === index ? "text-sun-orange text-[1rem] md:text-[1.25rem] tracking-wide" : "text-[1rem] md:text-[1.25rem] tracking-wide"}
                  >
                    {faq[0]}
                  </AccordionHeader>
                  <AccordionBody className="text-[1rem] md:text-[1.25rem]">{faq[1]}</AccordionBody>
                  <svg
                    className=" mb-2"
                    width="100%"
                    height="1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0"
                      y1="1"
                      x2="100%"
                      y2="1"
                      stroke='#FFFFFF'
                      stroke-width="1"
                    />
                  </svg>
                </Accordion>
              );
            })}
        </div>
      </div>
    </section>
  );
}
