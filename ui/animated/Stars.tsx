import react from "react";

export const Stars: React.FC = () => {
  return (
    <>
      <div className="absolute -top-[50px] -left-[70px] w-[12px]">
        <Star1 />
      </div>
      <div className="absolute top-[50px] right-[130px] w-[12px]">
        <Star1 />
      </div>
      <div></div>
      <div></div>
    </>
  );
};

const ShootingStarLarge: React.FC = () => {
  return (
    <svg
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
    </svg>
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
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11.69 15.1"
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
  return (
    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 15.89">
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
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4.29 4.29"
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
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.64 13.64"
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
