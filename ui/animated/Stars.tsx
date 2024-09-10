"use client";
import react, { useEffect } from "react";
import { delay, motion, useAnimate } from "framer-motion";

export const Stars: React.FC = () => {
  const [scope5, animate5] = useAnimate();
  const [scope6, animate6] = useAnimate();

  useEffect(() => {
    animate5(
      [
        [
          scope5.current,
          { x: "-250%", y: "200%", opacity: 1 },
          { delay: 4, duration: 0.1 },
        ],
        [
          scope5.current,
          { x: "-500%", y: "400%", opacity: 0 },
          { duration: 0.2 },
        ],
        [scope5.current, { x: "0%", y: "0%", opacity: 0 }, { duration: 0.2 }],
      ],
      { repeat: Infinity }
    );

    animate6(
      [
        [
          scope6.current,
          { x: "-300%", y: "300%", opacity: 1 },
          { delay: 6, duration: 0.1 },
        ],
        [
          scope6.current,
          { x: "-500%", y: "500%", opacity: 0 },
          { duration: 0.2 },
        ],
        [scope6.current, { x: "0%", y: "0%", opacity: 0 }, { duration: 0.2 }],
      ],
      { repeat: Infinity }
    );
  }, []);

  return (
    <>
      <div className="absolute -top-[100px] -left-[10px] w-[12px]">
        <Star1 />
      </div>
      <div className="absolute top-[50px] right-[85px] w-[12px]">
        <Star4 />
      </div>
      <div className="absolute -bottom-[30px] -left-[200px] w-[12px]">
        <Star4 />
      </div>
      <div className="absolute bottom-[100px] -left-[255px] w-[12px]">
        <Star1 />
      </div>
      <div className="absolute -bottom-[90px] right-[60px] w-[20px]">
        <Star4 />
      </div>
      <div className="absolute -top-[150px] -right-[60px] w-[15px]">
        <Star1 />
      </div>
      <div className="absolute -top-[200px] left-[40px] w-[15px]">
        <Star4 />
      </div>
      <div className="absolute -top-[160px] -left-[100px] w-[6px]">
        <Star3 />
      </div>
      <div className="absolute -top-[50px] -left-[150px] w-[4px]">
        <Star3 />
      </div>
      <div className="absolute top-[90px] -left-[35px] w-[4px]">
        <Star3 />
      </div>
      <div className="absolute -top-[60px] right-[150px] w-[5px]">
        <Star3 />
      </div>
      <div className="absolute -top-[0px] right-[190px] w-[6px]">
        <Star3 />
      </div>
      <div className="absolute top-[90px] right-[170px] w-[4px]">
        <Star3 />
      </div>
      <div className="absolute top-[200px] right-[90px] w-[4px]">
        <Star3 />
      </div>
      <div className="absolute top-[220px] -right-[80px] w-[4px]">
        <Star3 />
      </div>
      <div className="absolute -bottom-[120px] -left-[80px] w-[4px]">
        <Star3 />
      </div>
      <div className="absolute -bottom-[20px] -left-[280px] w-[4px]">
        <Star3 />
      </div>
      <div className="absolute -bottom-[80px] -left-[290px] w-[4px]">
        <Star3 />
      </div>
      <div className="absolute bottom-[50px] -left-[360px] w-[4px]">
        <Star3 />
      </div>
      <div className="absolute -bottom-[170px] right-[10px] w-[4px]">
        <Star3 />
      </div>
      <div className="absolute -bottom-[110px] right-[110px] w-[10px]">
        <Star2 />
      </div>
      <div className="absolute -top-[5px] -left-[50px] w-[10px]">
        <Star2 />
      </div>
      <div
        className="absolute bottom-[50px] right-[120px] w-[100px] z-50"
        ref={scope6}
        style={{ opacity: 0 }}
      >
        <ShootingStarSmall />
      </div>
      <div
        className="absolute -bottom-[120px] lg1/2:bottom-[750px] -right-[500px] lg1/2:right-[500px] w-[200px]"
        ref={scope5}
        style={{ opacity: 0 }}
      >
        <ShootingStarSmall />
      </div>
    </>
  );
};

const ShootingStarLarge: React.FC = () => {
  return (
    <motion.svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 278.75 115.55"
    >
      <defs>
        <style>
          {`
            .cls-1startLarger {
              fill: #325175;
            }
      
            .cls-2startLarger {
              fill: none;
              stroke: #325175;
              stroke-linecap: round;
              stroke-miterlimit: 10;
              stroke-width: 3.86px;
            }`}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer_1">
        <path
          className="cls-1startLarger"
          d="M41.05,87.57c-14.74,8.36-16.12,11.3-13.07,27.98-8.36-14.74-11.3-16.12-27.98-13.07,14.74-8.36,16.12-11.3,13.07-27.98,8.36,14.74,11.3,16.12,27.98,13.07Z"
        />
        <line
          className="cls-2startLarger"
          x1="22.14"
          y1="94.44"
          x2="276.82"
          y2="1.93"
        />
      </g>
    </motion.svg>
  );
};

const ShootingStarSmall: React.FC = () => {
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 171.73 71.18"
    >
      <defs>
        <style>
          {`
            .cls-1starSmall {
              fill: none;
              stroke: #325175;
              stroke-linecap: round;
              stroke-miterlimit: 10;
              stroke-width: 2.38px;
            }
      
            .cls-2starSmall {
              fill: #325175;
            }`}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer_1">
        <path
          className="cls-2starSmall"
          d="M25.29,53.95c-9.08,5.15-9.93,6.96-8.05,17.24-5.15-9.08-6.96-9.93-17.24-8.05,9.08-5.15,9.93-6.96,8.05-17.24,5.15,9.08,6.96,9.93,17.24,8.05Z"
        />
        <line
          className="cls-1starSmall"
          x1="13.64"
          y1="58.18"
          x2="170.54"
          y2="1.19"
        />
      </g>
    </svg>
  );
};

const Star1: React.FC = () => {
  const [scope1, animate1] = useAnimate();

  useEffect(() => {
    animate1(
      [
        [scope1.current, { opacity: 0.3 }],
        [scope1.current, { opacity: 0.6 }],
        [scope1.current, { opacity: 0.2 }],
        [scope1.current, { opacity: 1 }],
      ],
      { repeat: Infinity, duration: 4 }
    );
  }, []);

  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11.69 15.1"
      ref={scope1}
    >
      <defs>
        <style>
          {`
    .cls-1star1 {
      fill: #325175;
    }`}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer_1">
        <path
          className="cls-1star1"
          d="M11.69,7.55c-4.47.98-5.09,1.77-5.84,7.55-.76-5.78-1.37-6.57-5.84-7.55,4.47-.98,5.09-1.77,5.84-7.55.76,5.78,1.37,6.57,5.84,7.55Z"
        />
      </g>
    </svg>
  );
};

const Star2: React.FC = () => {
  const [scope2, animate1] = useAnimate();

  useEffect(() => {
    animate1(
      [
        [scope2.current, { opacity: 0.5 }],
        [scope2.current, { opacity: 0.3 }],
        [scope2.current, { opacity: 1 }],
        [scope2.current, { opacity: 0.6 }],
        [scope2.current, { opacity: 1 }],
      ],
      { repeat: Infinity, duration: 3 }
    );
  }, []);
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 15.89"
      ref={scope2}
    >
      <defs>
        <style>
          {`
      .cls-1star2 {
        fill: #325175;
      }`}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer_1">
        <path
          className="cls-1star2"
          d="M5.5,15.89c-.3,0-.54-.24-.54-.54V.54c0-.3.24-.54.54-.54s.54.24.54.54v14.82c0,.3-.24.54-.54.54Z"
        />
        <path
          className="cls-1star2"
          d="M10.46,8.06H.54c-.3,0-.54-.24-.54-.54s.24-.54.54-.54h9.92c.3,0,.54.24.54.54s-.24.54-.54.54Z"
        />
      </g>
    </svg>
  );
};

const Star3: React.FC = () => {
  const [scope3, animate1] = useAnimate();

  useEffect(() => {
    animate1(
      [
        [scope3.current, { opacity: 0.2 }],
        [scope3.current, { opacity: 1 }],
        [scope3.current, { opacity: 0.3 }],
        [scope3.current, { opacity: 0.6 }],
        [scope3.current, { opacity: 1 }],
      ],
      { repeat: Infinity, duration: 3.5 }
    );
  }, []);
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4.29 4.29"
      ref={scope3}
    >
      <defs>
        <style>
          {`
            .cls-1star3 {
              fill: #325175;
            }`}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer_1">
        <circle className="cls-1star3" cx="2.15" cy="2.15" r="2.15" />
      </g>
    </svg>
  );
};

const Star4: React.FC = () => {
  const [scope4, animate1] = useAnimate();

  useEffect(() => {
    animate1(
      [
        [scope4.current, { opacity: 0.8 }],
        [scope4.current, { opacity: 0.4 }],
        [scope4.current, { opacity: 1 }],
        [scope4.current, { opacity: 0.6 }],
        [scope4.current, { opacity: 1 }],
      ],
      { repeat: Infinity, duration: 2 }
    );
  }, []);
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.64 13.64"
      ref={scope4}
    >
      <defs>
        <style>
          {`
      .cls-1star4 {
        fill: #325175;
      }`}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer_1">
        <path
          className="cls-1star4"
          d="M13.64,6.82c-5.22.88-5.94,1.6-6.82,6.82-.88-5.22-1.6-5.94-6.82-6.82,5.22-.88,5.94-1.6,6.82-6.82.88,5.22,1.6,5.94,6.82,6.82Z"
        />
      </g>
    </svg>
  );
};
