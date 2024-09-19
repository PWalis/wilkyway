import Link from "next/link";
import react from "react";

// this is real i promise

export const Footer: React.FC = () => {
  return (
    <footer className="bg-section-background min-h-[25rem] flex flex-col justify-center gap-10 items-center px-5 relative">
      <div className="flex flex-col md:flex-row justify-between max-w-[90rem] w-full gap-10 z-10">
        <div className="flex flex-col justify-center gap-3">
          <div className="w-full min-w-[15rem] max-w-[17.7rem]">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 470.95 183.44"
              className="w-full h-full"
            >
              <defs>
                <style>
                  {`
      .cls-1HalfLogo {
        fill: #5c8fff;
      }

      .cls-2HalfLogo {
        fill: #d2d6db;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2" data-name="Layer_1">
                <g>
                  <g>
                    <path
                      className="cls-2HalfLogo"
                      d="M152.31,82.07v101.36h-36.76v-92.11c0-12.96-10.51-23.48-23.47-23.48H0V31.09h101.34c28.15,0,50.98,22.83,50.98,50.98Z"
                    />
                    <path
                      className="cls-1HalfLogo"
                      d="M204.44,115.52v36.76h-122.34c-28.16,0-50.98-22.82-50.98-50.98V0h36.76v92.05c0,12.96,10.51,23.47,23.48,23.47h113.09Z"
                    />
                  </g>
                  <path
                    className="cls-1HalfLogo"
                    d="M282.51,47.17l-15.34,64.74-15.56-64.74h-31.8l-15.57,64.74-15.34-64.74h-32.03l22.16,73.23,9.64,31.88h31.13l15.78-54.81,16.02,54.81h31.13l22.8-75.35,6.56-21.68,2.45-8.08h0s-32.03,0-32.03,0Z"
                  />
                  <path
                    className="cls-2HalfLogo"
                    d="M408.16,47.17l-15.34,64.74-15.56-64.74h-31.8l-15.57,64.74-15.34-64.74h-32.03l22.16,73.23,9.64,31.88h31.13l15.78-54.81,16.02,54.81h31.13l22.8-75.35,6.56-21.68,2.45-8.08h0s-32.03,0-32.03,0Z"
                  />
                  <rect
                    className="cls-2HalfLogo"
                    x="405.47"
                    y="115.88"
                    width="65.47"
                    height="36.4"
                  />
                </g>
              </g>
            </svg>
          </div>
          <p className="font-gunterz text-[1.25rem] max-w-[18rem]">
            Make your business a star
          </p>
        </div>
        <div className="flex lg:justify-center flex-row flex-wrap gap-y-4 lg:gap-10 w-full">
          <div className="flex flex-col w-full max-w-[9rem]">
            <Link href="/" className="font-semibold uppercase  text-[1.25rem]">Home</Link>
            <Link href="/#Process" className="text-[1.25rem]">Our Process</Link>
            <Link href="/#Solution" className="text-[1.25rem]">Our Solution</Link>
            <Link href="/#Testimonial" className="text-[1.25rem]">Testimonials</Link>
            <Link href="/#StarMethod" className="text-[1.25rem]">S.T.A.R Method</Link>
          </div>
          <div className="flex flex-col w-full max-w-[9rem]">
            <Link href="/WebsitePackage" className="font-semibold uppercase text-[1.25rem]">
              Our Services
            </Link>
          </div>
          <div className="flex flex-col w-full max-w-[9rem]">
            <Link href="/AboutUs" className="font-semibold uppercase text-[1.25rem]">About Us</Link>
            <Link href="/AboutUs/#OurTeam" className="text-[1.25rem]">Our Team</Link>
          </div>
          <div className="flex flex-col w-full max-w-[9rem]">
            <Link href="/#AwesomeWebsite" className="font-semibold uppercase text-[1.25rem]">Contact Us</Link>
            <Link href="/#AwesomeWebsite" className="text-[1.25rem]">Get a Quote</Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-end max-w-[90rem] w-full z-10">
        <div className="flex md:pt-0 pt-5">
          <p>
            &#xa9; <span className="text-[#5A8CF9]">2024 Wilky Way LLC.</span>{" "}
            All Rights Reserved
          </p>
        </div>
        <div className="flex flex-row gap-10 justify-center md:justify-end w-full max-w-[30rem]">
          <div className="max-w-[4rem]">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 113.79 113.79"
              className="w-full"
            >
              <defs>
                <style>
                  {`
      .cls-1Insta {
        fill: #fff;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2" data-name="Layer_1">
                <g>
                  <path
                    className="cls-1Insta"
                    d="M81.61,8c13.34,0,24.18,10.85,24.18,24.18v49.43c0,13.34-10.85,24.18-24.18,24.18h-49.43c-13.34,0-24.18-10.85-24.18-24.18v-49.43c0-13.34,10.85-24.18,24.18-24.18h49.43M81.61,0h-49.43C14.41,0,0,14.41,0,32.18v49.43c0,17.77,14.41,32.18,32.18,32.18h49.43c17.77,0,32.18-14.41,32.18-32.18v-49.43C113.79,14.41,99.38,0,81.61,0h0Z"
                  />
                  <path
                    className="cls-1Insta"
                    d="M56.9,35.59c11.75,0,21.31,9.56,21.31,21.31s-9.56,21.31-21.31,21.31-21.31-9.56-21.31-21.31,9.56-21.31,21.31-21.31M56.9,27.59c-16.19,0-29.31,13.12-29.31,29.31s13.12,29.31,29.31,29.31,29.31-13.12,29.31-29.31-13.12-29.31-29.31-29.31h0Z"
                  />
                  <path
                    className="cls-1Insta"
                    d="M87.51,19.11c-4.13,0-7.47,3.35-7.47,7.47s3.35,7.47,7.47,7.47,7.47-3.35,7.47-7.47-3.35-7.47-7.47-7.47h0Z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="max-w-[4rem]">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 113.8 113.79"
              className="w-full"
            >
              <defs>
                <style>
                  {`
      .cls-1Facebook {
        fill: #fff;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2" data-name="Layer_1">
                <g>
                  <path
                    className="cls-1Facebook"
                    d="M81.61,8c13.34,0,24.19,10.85,24.19,24.18v49.43c0,13.33-10.85,24.18-24.19,24.18h-49.42c-13.34,0-24.19-10.85-24.19-24.18v-49.43c0-13.33,10.85-24.18,24.19-24.18h49.42M81.61,0h-49.42C14.41,0,0,14.41,0,32.18v49.43c0,17.77,14.41,32.18,32.19,32.18h49.42c17.78,0,32.19-14.41,32.19-32.18v-49.43C113.8,14.41,99.39,0,81.61,0h0Z"
                  />
                  <path
                    className="cls-1Facebook"
                    d="M80.45,36.54c1.23,0,2.33.05,3.39.16v-13.94c-1.67-.14-2.4-.19-4.16-.19-18.67,0-28.82,7.5-28.82,25.05v11.27h-13v14.81h13v40.09h17.39v-40.09h11.72l3.07-14.81h-14.79v-10.95c0-8.37,3.35-11.4,12.2-11.4Z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="max-w-[4rem]">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 113.8 113.79"
              className="w-full"
            >
              <defs>
                <style>
                  {`
      .cls-1X {
        fill: #fff;
      }`}
                </style>
              </defs>
              <g id="Layer_1-2" data-name="Layer_1">
                <g>
                  <path
                    className="cls-1X"
                    d="M81.61,8c13.34,0,24.19,10.85,24.19,24.18v49.43c0,13.33-10.85,24.18-24.19,24.18h-49.42c-13.34,0-24.19-10.85-24.19-24.18v-49.43c0-13.33,10.85-24.18,24.19-24.18h49.42M81.61,0h-49.42C14.41,0,0,14.41,0,32.18v49.43c0,17.77,14.41,32.18,32.19,32.18h49.42c17.78,0,32.19-14.41,32.19-32.18v-49.43C113.8,14.41,99.39,0,81.61,0h0Z"
                  />
                  <polygon
                    className="cls-1X"
                    points="54.11 57.24 58.76 62.8 31.12 91.5 21.1 91.5 54.11 57.24"
                  />
                  <polygon
                    className="cls-1X"
                    points="96.31 23.82 62.89 58.55 58.16 52.91 86.17 23.82 96.31 23.82"
                  />
                  <path
                    className="cls-1X"
                    d="M38.68,29.95l19.48,23.26,4.48,5.34,22.83,27.26h-7.25l-19.46-23.23-4.47-5.34-22.86-27.29h7.25M41.48,23.95h-22.9l8.25,9.85,22.86,27.29,4.47,5.34,19.46,23.23,1.8,2.15h22.9l-8.25-9.85-22.83-27.26-4.48-5.34-19.48-23.26-1.8-2.15h0Z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <FooterStars />
    </footer>
  );
};

const FooterStars: React.FC = () => {
  return (
    <div className="z-0 absolute w-full max-w-[110rem] overflow-hidden bottom-0">
      <svg
        width="1897"
        height="1107"
        viewBox="0 0 1897 1107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[110rem]"
      >
        <path
          d="M1189.18 1020.4C1190.34 1020.4 1191.27 1021.34 1191.27 1022.49C1191.27 1023.65 1190.34 1024.58 1189.18 1024.58C1188.02 1024.58 1187.09 1023.65 1187.09 1022.49C1187.09 1021.34 1188.02 1020.4 1189.18 1020.4Z"
          fill="#223142"
        />
        <path
          d="M1094.81 689.484C1095.96 689.484 1096.9 690.421 1096.9 691.576C1096.9 692.732 1095.96 693.668 1094.81 693.668C1093.65 693.668 1092.71 692.732 1092.71 691.576C1092.71 690.421 1093.65 689.484 1094.81 689.484Z"
          fill="#325175"
        />
        <path
          d="M1771.64 404.929C1772.79 404.929 1773.73 405.866 1773.73 407.021C1773.73 408.177 1772.79 409.113 1771.64 409.113C1770.48 409.113 1769.55 408.177 1769.55 407.021C1769.55 405.866 1770.48 404.929 1771.64 404.929Z"
          fill="#325175"
        />
        <path
          d="M1715.51 166.132C1716.67 166.132 1717.61 167.068 1717.61 168.224C1717.61 169.379 1716.67 170.316 1715.51 170.316C1714.36 170.316 1713.42 169.379 1713.42 168.224C1713.42 167.068 1714.36 166.132 1715.51 166.132Z"
          fill="#325175"
        />
        <path
          d="M1344.73 305.66C1345.89 305.66 1346.82 306.597 1346.82 307.752C1346.82 308.908 1345.89 309.844 1344.73 309.844C1343.58 309.844 1342.64 308.908 1342.64 307.752C1342.64 306.597 1343.58 305.66 1344.73 305.66Z"
          fill="#325175"
        />
        <path
          d="M1090.62 734.527C1091.78 734.527 1092.71 735.463 1092.71 736.619C1092.71 737.774 1091.78 738.711 1090.62 738.711C1089.47 738.711 1088.53 737.774 1088.53 736.619C1088.53 735.463 1089.47 734.527 1090.62 734.527Z"
          fill="#325175"
        />
        <path
          d="M1287.95 788.849C1289.11 788.849 1290.04 789.786 1290.04 790.941C1290.04 792.096 1289.11 793.033 1287.95 793.033C1286.8 793.033 1285.86 792.096 1285.86 790.941C1285.86 789.786 1286.8 788.849 1287.95 788.849Z"
          fill="#223142"
        />
        <path
          d="M1168.94 858.915C1170.09 858.915 1171.03 859.852 1171.03 861.007C1171.03 862.163 1170.09 863.1 1168.94 863.1C1167.78 863.1 1166.85 862.163 1166.85 861.007C1166.85 859.852 1167.78 858.915 1168.94 858.915Z"
          fill="#223142"
        />
        <path
          d="M1006.97 621.563C1008.13 621.563 1009.06 622.499 1009.06 623.655C1009.06 624.81 1008.13 625.747 1006.97 625.747C1005.81 625.747 1004.88 624.81 1004.88 623.655C1004.88 622.499 1005.81 621.563 1006.97 621.563Z"
          fill="#223142"
        />
        <path
          d="M1692.59 309.844C1693.74 309.844 1694.68 310.781 1694.68 311.937C1694.68 313.092 1693.74 314.029 1692.59 314.029C1691.43 314.029 1690.49 313.092 1690.49 311.937C1690.49 310.781 1691.43 309.844 1692.59 309.844Z"
          fill="#223142"
        />
        <path
          d="M1847.66 813.775C1848.82 813.775 1849.75 814.712 1849.75 815.867C1849.75 817.023 1848.82 817.959 1847.66 817.959C1846.51 817.959 1845.57 817.023 1845.57 815.867C1845.57 814.712 1846.51 813.775 1847.66 813.775Z"
          fill="#223142"
        />
        <path
          d="M1128.81 573.506C1124.22 571.951 1123.59 570.691 1122.81 561.506C1122.03 570.691 1121.4 571.951 1116.81 573.506C1121.4 575.06 1122.03 576.32 1122.81 585.505C1123.59 576.32 1124.22 575.06 1128.81 573.506H1128.81Z"
          fill="#325175"
        />
        <path
          d="M1805.36 744.578C1798.5 742.258 1797.56 740.377 1796.4 726.668C1795.24 740.377 1794.3 742.258 1787.45 744.578C1794.3 746.898 1795.24 748.779 1796.4 762.487C1797.56 748.779 1798.5 746.898 1805.36 744.578Z"
          fill="#325175"
        />
        <path
          d="M1298.73 889.464C1295.4 888.339 1294.95 887.427 1294.39 880.78C1293.82 887.427 1293.37 888.339 1290.04 889.464C1293.37 890.589 1293.82 891.501 1294.38 898.148C1294.95 891.501 1295.4 890.589 1298.73 889.464Z"
          fill="#223142"
        />
        <path
          d="M1378.08 130.19C1373.48 128.635 1372.85 127.375 1372.08 118.19C1371.3 127.375 1370.67 128.635 1366.08 130.19C1370.67 131.744 1371.3 133.005 1372.08 142.19C1372.85 133.005 1373.48 131.744 1378.08 130.19H1378.08Z"
          fill="#325175"
        />
        <path
          d="M1785.73 277.66C1781.14 276.105 1780.51 274.845 1779.73 265.66C1778.95 274.845 1778.32 276.105 1773.73 277.66C1778.32 279.214 1778.95 280.475 1779.73 289.66C1780.51 280.475 1781.14 279.214 1785.73 277.66H1785.73Z"
          fill="#223142"
        />
        <path
          d="M1421.73 12.1404C1417.14 10.5856 1416.51 9.32548 1415.73 0.140587C1414.95 9.32548 1414.32 10.5856 1409.73 12.1404C1414.32 13.6946 1414.95 14.9552 1415.73 24.1401C1416.51 14.9552 1417.14 13.6946 1421.73 12.1404H1421.73Z"
          fill="#325175"
        />
        <path
          d="M809.843 887.134C796.704 892.894 795.396 895.086 797.376 908.026C790.695 896.329 788.2 895.144 773.595 896.73C786.735 890.97 788.042 888.778 786.062 875.838C792.743 887.535 795.238 888.72 809.843 887.134Z"
          fill="#182D45"
        />
        <path
          d="M793.066 893.041C792.382 893.005 791.757 892.598 791.54 891.983C791.264 891.196 791.758 890.371 792.641 890.134L1017.55 830.573C1018.43 830.337 1019.37 830.787 1019.65 831.571C1019.93 832.359 1019.43 833.184 1018.55 833.42L793.641 892.982C793.45 893.034 793.254 893.051 793.063 893.041L793.066 893.041Z"
          fill="#182D45"
        />
        <path
          d="M1216.06 156.562C1217.21 156.562 1218.15 157.499 1218.15 158.654C1218.15 159.81 1217.21 160.747 1216.06 160.747C1214.9 160.747 1213.97 159.81 1213.97 158.654C1213.97 157.499 1214.9 156.562 1216.06 156.562Z"
          fill="#223142"
        />
        <path
          d="M1784.71 953.739C1779.27 956.49 1778.76 957.456 1779.88 962.94C1776.79 958.091 1775.71 957.64 1769.55 958.641C1774.99 955.89 1775.5 954.924 1774.38 949.44C1777.47 954.289 1778.55 954.74 1784.71 953.739Z"
          fill="#182D45"
        />
        <path
          d="M1777.73 956.634C1777.43 956.634 1777.16 956.474 1777.06 956.216C1776.92 955.886 1777.11 955.523 1777.48 955.402L1871.59 924.979C1871.96 924.858 1872.37 925.03 1872.5 925.359C1872.64 925.689 1872.45 926.052 1872.08 926.173L1777.97 956.596C1777.89 956.623 1777.81 956.634 1777.72 956.634H1777.73Z"
          fill="#182D45"
        />
        <path
          d="M1244.73 988.941C1240.14 987.386 1239.51 986.126 1238.73 976.941C1237.95 986.126 1237.32 987.386 1232.73 988.941C1237.32 990.495 1237.95 991.756 1238.73 1000.94C1239.51 991.756 1240.14 990.495 1244.73 988.941H1244.73Z"
          fill="#325175"
        />
        <path
          d="M1182.73 690.941C1178.52 689.516 1177.94 688.361 1177.23 679.941C1176.52 688.361 1175.94 689.516 1171.73 690.941C1175.94 692.366 1176.52 693.521 1177.23 701.941C1177.94 693.521 1178.52 692.366 1182.73 690.941H1182.73Z"
          fill="#325175"
        />
        <path
          d="M1439.23 1014.94C1439.47 1014.94 1439.67 1014.73 1439.67 1014.47V1001.41C1439.67 1001.15 1439.47 1000.94 1439.23 1000.94C1438.99 1000.94 1438.79 1001.15 1438.79 1001.41V1014.47C1438.79 1014.73 1438.99 1014.94 1439.23 1014.94Z"
          fill="#223142"
        />
        <path
          d="M1435.17 1008.04H1443.29C1443.53 1008.04 1443.73 1007.83 1443.73 1007.57C1443.73 1007.31 1443.53 1007.1 1443.29 1007.1H1435.17C1434.93 1007.1 1434.73 1007.31 1434.73 1007.57C1434.73 1007.83 1434.93 1008.04 1435.17 1008.04Z"
          fill="#223142"
        />
        <path
          d="M1757.23 790.941C1757.47 790.941 1757.67 790.729 1757.67 790.467V777.414C1757.67 777.153 1757.47 776.941 1757.23 776.941C1756.99 776.941 1756.79 777.153 1756.79 777.414V790.467C1756.79 790.729 1756.99 790.941 1757.23 790.941Z"
          fill="#223142"
        />
        <path
          d="M1753.17 784.045H1761.29C1761.53 784.045 1761.73 783.833 1761.73 783.572C1761.73 783.31 1761.53 783.098 1761.29 783.098H1753.17C1752.93 783.098 1752.73 783.31 1752.73 783.572C1752.73 783.833 1752.93 784.045 1753.17 784.045Z"
          fill="#223142"
        />
        <path
          d="M1334.23 234.941C1333.99 234.941 1333.79 234.744 1333.79 234.501V222.381C1333.79 222.138 1333.99 221.941 1334.23 221.941C1334.47 221.941 1334.67 222.138 1334.67 222.381V234.501C1334.67 234.744 1334.47 234.941 1334.23 234.941Z"
          fill="#325175"
        />
        <path
          d="M1338.29 228.538H1330.17C1329.93 228.538 1329.73 228.341 1329.73 228.098C1329.73 227.855 1329.93 227.658 1330.17 227.658H1338.29C1338.53 227.658 1338.73 227.855 1338.73 228.098C1338.73 228.341 1338.53 228.538 1338.29 228.538Z"
          fill="#325175"
        />
        <path
          d="M1677.69 216.499C1679.53 216.499 1681.02 217.993 1681.02 219.836C1681.02 221.679 1679.53 223.173 1677.69 223.173C1675.84 223.173 1674.35 221.679 1674.35 219.836C1674.35 217.993 1675.84 216.499 1677.69 216.499Z"
          fill="#223142"
        />
        <path
          d="M1609.05 229.876C1610 229.876 1610.78 230.649 1610.78 231.604C1610.78 232.558 1610 233.332 1609.05 233.332C1608.09 233.332 1607.32 232.558 1607.32 231.604C1607.32 230.649 1608.09 229.876 1609.05 229.876Z"
          fill="#223142"
        />
        <path
          d="M1625.83 898.148C1626.79 898.148 1627.56 898.921 1627.56 899.876C1627.56 900.83 1626.79 901.604 1625.83 901.604C1624.88 901.604 1624.11 900.83 1624.11 899.876C1624.11 898.921 1624.88 898.148 1625.83 898.148Z"
          fill="#223142"
        />
        <path
          d="M1257.71 14.8149C1259.55 14.8149 1261.04 16.3089 1261.04 18.1518C1261.04 19.9948 1259.55 21.4888 1257.71 21.4888C1255.86 21.4888 1254.37 19.9948 1254.37 18.1518C1254.37 16.3089 1255.86 14.8149 1257.71 14.8149Z"
          fill="#223142"
        />
        <path
          d="M37.5851 1102.74C38.7406 1102.74 39.6773 1103.68 39.6773 1104.83C39.6773 1105.99 38.7406 1106.92 37.5851 1106.92C36.4296 1106.92 35.4929 1105.99 35.4929 1104.83C35.4929 1103.68 36.4296 1102.74 37.5851 1102.74Z"
          fill="#223142"
        />
        <path
          d="M620.043 487.27C621.199 487.27 622.136 488.206 622.136 489.362C622.136 490.517 621.199 491.454 620.043 491.454C618.888 491.454 617.951 490.517 617.951 489.362C617.951 488.206 618.888 487.27 620.043 487.27Z"
          fill="#325175"
        />
        <path
          d="M563.919 248.472C565.074 248.472 566.011 249.409 566.011 250.565C566.011 251.72 565.074 252.657 563.919 252.657C562.763 252.657 561.827 251.72 561.827 250.565C561.827 249.409 562.763 248.472 563.919 248.472Z"
          fill="#325175"
        />
        <path
          d="M193.136 388.001C194.291 388.001 195.228 388.937 195.228 390.093C195.228 391.248 194.291 392.185 193.136 392.185C191.98 392.185 191.043 391.248 191.043 390.093C191.043 388.937 191.98 388.001 193.136 388.001Z"
          fill="#325175"
        />
        <path
          d="M136.356 871.19C137.511 871.19 138.448 872.126 138.448 873.282C138.448 874.437 137.511 875.374 136.356 875.374C135.2 875.374 134.264 874.437 134.264 873.282C134.264 872.126 135.2 871.19 136.356 871.19Z"
          fill="#223142"
        />
        <path
          d="M17.3437 941.256C18.4991 941.256 19.4359 942.193 19.4359 943.348C19.4359 944.504 18.4991 945.44 17.3437 945.44C16.1882 945.44 15.2515 944.504 15.2515 943.348C15.2515 942.193 16.1882 941.256 17.3437 941.256Z"
          fill="#223142"
        />
        <path
          d="M540.991 392.185C542.146 392.185 543.083 393.122 543.083 394.277C543.083 395.433 542.146 396.37 540.991 396.37C539.835 396.37 538.898 395.433 538.898 394.277C538.898 393.122 539.835 392.185 540.991 392.185Z"
          fill="#223142"
        />
        <path
          d="M696.066 896.116C697.222 896.116 698.158 897.053 698.158 898.208C698.158 899.364 697.222 900.3 696.066 900.3C694.911 900.3 693.974 899.364 693.974 898.208C693.974 897.053 694.911 896.116 696.066 896.116Z"
          fill="#223142"
        />
        <path
          d="M653.762 826.919C646.908 824.598 645.967 822.718 644.807 809.009C643.647 822.718 642.706 824.598 635.852 826.919C642.706 829.238 643.647 831.12 644.807 844.828C645.967 831.12 646.908 829.238 653.762 826.919Z"
          fill="#325175"
        />
        <path
          d="M147.132 971.805C143.808 970.68 143.352 969.768 142.79 963.121C142.227 969.768 141.771 970.68 138.448 971.805C141.771 972.93 142.227 973.842 142.79 980.489C143.352 973.842 143.808 972.93 147.132 971.805Z"
          fill="#223142"
        />
        <path
          d="M773.075 156.178C768.483 154.624 767.852 153.364 767.075 144.179C766.298 153.364 765.668 154.624 761.075 156.178C765.668 157.733 766.298 158.993 767.075 168.178C767.852 158.993 768.483 157.733 773.075 156.178Z"
          fill="#223142"
        />
        <path
          d="M226.48 212.531C221.888 210.976 221.258 209.716 220.481 200.531C219.703 209.716 219.073 210.976 214.48 212.531C219.073 214.085 219.703 215.346 220.48 224.531C221.258 215.346 221.888 214.085 226.48 212.531H226.48Z"
          fill="#325175"
        />
        <path
          d="M634.136 360.001C629.543 358.446 628.913 357.186 628.136 348.001C627.358 357.186 626.728 358.446 622.136 360.001C626.728 361.555 627.358 362.816 628.136 372C628.913 362.816 629.543 361.555 634.136 360.001H634.136Z"
          fill="#223142"
        />
        <path
          d="M270.136 94.4812C265.543 92.9265 264.913 91.6663 264.136 82.4814C263.358 91.6663 262.728 92.9265 258.136 94.4812C262.728 96.0355 263.358 97.2961 264.136 106.481C264.913 97.2961 265.543 96.0355 270.136 94.4812H270.136Z"
          fill="#325175"
        />
        <path
          d="M64.4623 238.903C65.6178 238.903 66.5545 239.84 66.5545 240.995C66.5545 242.151 65.6178 243.087 64.4623 243.087C63.3068 243.087 62.3701 242.151 62.3701 240.995C62.3701 239.84 63.3068 238.903 64.4623 238.903Z"
          fill="#223142"
        />
        <path
          d="M633.118 1036.08C627.671 1038.83 627.164 1039.8 628.289 1045.28C625.197 1040.43 624.113 1039.98 617.951 1040.98C623.399 1038.23 623.906 1037.26 622.781 1031.78C625.872 1036.63 626.957 1037.08 633.118 1036.08Z"
          fill="#182D45"
        />
        <path
          d="M626.131 1038.97C625.84 1038.97 625.565 1038.81 625.46 1038.56C625.326 1038.23 625.517 1037.86 625.887 1037.74L719.994 1007.32C720.365 1007.2 720.773 1007.37 720.908 1007.7C721.043 1008.03 720.851 1008.39 720.482 1008.51L626.373 1038.94C626.293 1038.96 626.211 1038.97 626.129 1038.97H626.131Z"
          fill="#182D45"
        />
        <path
          d="M93.1353 1071.28C88.5428 1069.73 87.9125 1068.47 87.1354 1059.28C86.358 1068.47 85.7277 1069.73 81.1353 1071.28C85.7277 1072.84 86.358 1074.1 87.1351 1083.28C87.9125 1074.1 88.5426 1072.84 93.135 1071.28H93.1353Z"
          fill="#325175"
        />
        <path
          d="M31.1353 773.282C26.9255 771.857 26.3477 770.702 25.6354 762.282C24.9228 770.702 24.345 771.857 20.1353 773.282C24.345 774.707 24.9228 775.862 25.6352 784.282C26.3477 775.862 26.9253 774.707 31.135 773.282H31.1353Z"
          fill="#325175"
        />
        <path
          d="M287.636 1097.28C287.879 1097.28 288.075 1097.07 288.075 1096.81V1083.76C288.075 1083.49 287.879 1083.28 287.636 1083.28C287.393 1083.28 287.196 1083.49 287.196 1083.76V1096.81C287.196 1097.07 287.393 1097.28 287.636 1097.28Z"
          fill="#223142"
        />
        <path
          d="M283.576 1090.39H291.696C291.939 1090.39 292.136 1090.17 292.136 1089.91C292.136 1089.65 291.939 1089.44 291.696 1089.44H283.576C283.332 1089.44 283.136 1089.65 283.136 1089.91C283.136 1090.17 283.332 1090.39 283.576 1090.39Z"
          fill="#223142"
        />
        <path
          d="M605.636 873.282C605.879 873.282 606.075 873.07 606.075 872.808V859.755C606.075 859.494 605.879 859.282 605.636 859.282C605.393 859.282 605.196 859.494 605.196 859.755V872.808C605.196 873.07 605.393 873.282 605.636 873.282Z"
          fill="#223142"
        />
        <path
          d="M601.576 866.386H609.696C609.939 866.386 610.136 866.174 610.136 865.912C610.136 865.651 609.939 865.439 609.696 865.439H601.576C601.332 865.439 601.136 865.651 601.136 865.912C601.136 866.174 601.332 866.386 601.576 866.386Z"
          fill="#223142"
        />
        <path
          d="M182.636 317.282C182.392 317.282 182.196 317.085 182.196 316.842V304.721C182.196 304.478 182.392 304.282 182.636 304.282C182.879 304.282 183.075 304.478 183.075 304.721V316.842C183.075 317.085 182.879 317.282 182.636 317.282Z"
          fill="#325175"
        />
        <path
          d="M186.696 310.878H178.576C178.332 310.878 178.136 310.682 178.136 310.439C178.136 310.196 178.332 309.999 178.576 309.999H186.696C186.939 309.999 187.136 310.196 187.136 310.439C187.136 310.682 186.939 310.878 186.696 310.878Z"
          fill="#325175"
        />
        <path
          d="M526.09 298.84C527.933 298.84 529.427 300.334 529.427 302.177C529.427 304.02 527.933 305.514 526.09 305.514C524.247 305.514 522.753 304.02 522.753 302.177C522.753 300.334 524.247 298.84 526.09 298.84Z"
          fill="#223142"
        />
        <path
          d="M457.454 312.216C458.408 312.216 459.182 312.99 459.182 313.945C459.182 314.899 458.408 315.673 457.454 315.673C456.499 315.673 455.726 314.899 455.726 313.945C455.726 312.99 456.499 312.216 457.454 312.216Z"
          fill="#223142"
        />
        <path
          d="M768.803 491.454C769.757 491.454 770.531 492.228 770.531 493.182C770.531 494.137 769.757 494.911 768.803 494.911C767.848 494.911 767.075 494.137 767.075 493.182C767.075 492.228 767.848 491.454 768.803 491.454Z"
          fill="#223142"
        />
        <path
          d="M474.238 980.488C475.193 980.488 475.967 981.262 475.967 982.217C475.967 983.171 475.193 983.945 474.238 983.945C473.284 983.945 472.51 983.171 472.51 982.217C472.51 981.262 473.284 980.488 474.238 980.488Z"
          fill="#223142"
        />
        <path
          d="M106.111 97.1557C107.954 97.1557 109.448 98.6497 109.448 100.493C109.448 102.336 107.954 103.83 106.111 103.83C104.268 103.83 102.774 102.336 102.774 100.493C102.774 98.6497 104.268 97.1557 106.111 97.1557Z"
          fill="#223142"
        />
      </svg>
    </div>
  );
};
