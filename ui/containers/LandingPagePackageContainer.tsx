import react, { PropsWithChildren } from 'react';

export const LandingPagePackageContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='w-[17rem] h-[19.5rem] bg-storm-gray py-10 px-5 flex flex-col items-center gap-3'><div className="w-full max-w-[4rem]">
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 78 78"
        >
          <defs>
            <style>
              {`
  .cls-1check {
    fill: #fff;
  }

  .cls-2check {
    fill: #303030;
    filter: url(#drop-shadow-1);
  }`}
            </style>
            <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
              <feOffset dx="1" dy="3" />
              <feGaussianBlur result="blur" stdDeviation="2" />
              <feFlood flood-color="#000" flood-opacity=".5" />
              <feComposite in2="blur" operator="in" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Layer_1-2" data-name="Layer_1">
            <rect
              className="cls-2check"
              x="5.42"
              y="3.51"
              width="64.93"
              height="64.93"
              rx="8.5"
              ry="8.5"
            />
            <g>
              <rect
                className="cls-1check"
                x="12.56"
                y="33.88"
                width="29.27"
                height="16.59"
                transform="translate(37.79 -6.88) rotate(45)"
              />
              <rect
                className="cls-1check"
                x="18.97"
                y="27.68"
                width="46.81"
                height="16.59"
                transform="translate(-13.03 40.5) rotate(-45)"
              />
            </g>
          </g>
        </svg>
      </div>{children}</div>
    )
}