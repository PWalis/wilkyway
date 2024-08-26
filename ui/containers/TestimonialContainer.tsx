import react, { PropsWithChildren } from 'react'

export const TestimonialContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='max-w-[28.6rem] min-h-[36.4rem] rounded-tr-[60px] bg-storm-gray py-10 px-5 lg:p-14'><div className="w-full max-w-[5rem] mb-4">
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 85.5 57.3"
        >
          <defs>
            <style>
              {`
.cls-1quote {
  fill: none;
  stroke: #fff;
  stroke-width: 2px;
}`}
            </style>
          </defs>
          <g id="Layer_1-2" data-name="Layer_1">
            <path
              className="cls-1quote"
              d="M37.25,26.82v29.48H1v-29.48C1,15.07,10,5.24,16,1.19l13.5,8.12c-2.75,3.42-4.25,7.26-4.25,13.24v4.27h12ZM84.5,26.82v29.48h-36.25v-29.48c0-11.75,9-21.58,15-25.64l13.5,8.12c-2.75,3.42-4.25,7.26-4.25,13.24v4.27h12Z"
            />
          </g>
        </svg>
      </div>{children}</div>
    )
}