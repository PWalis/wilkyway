import react, { PropsWithChildren } from "react";

interface H2props extends PropsWithChildren {
  color: string;
  topString: string;
}

export const H2Container: React.FC<H2props> = ({
  children,
  color,
  topString,
}) => {
  return (
    <div className="w-full max-w-[82rem] mb-5">
      <div style={{gridTemplateColumns: "max-content auto"}} className="flex flex-row flex-wrap w-full lg:grid grid-cols-3 grid-rows-2 auto-cols-min gap-x-1 items-end">
        <p className="col-start-2  row-start-1" style={{ color: color }}>
          {topString}
        </p>
        <div className="max-w-[20rem] h-[40px] pt-7 lg:pt-3  col-start-1 row-start-2">
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300.13 3"
            className="w-full"
          >
            <defs>
            </defs>
            <g id="Layer_1-2" data-name="Layer_1">
              <line style={{fill: "none", stroke: color, strokeMiterlimit: 10, strokeWidth: "3px"}} className="cls-1LineH2Pain" y1="1.5" x2="300.13" y2="1.5" />
            </g>
          </svg>
        </div>
        <h2 className="font-gunterz text-left col-start-2 row-start-2 col-span-2">
          {children}
        </h2>
      </div>
    </div>
  );
};
