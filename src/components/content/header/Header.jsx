import { useState } from "react";
import MobileSidebar from "../../Sidebar/mobileSidebar";

const Header = () => {
  const [flag2, setFlag2] = useState(false);
  const onFlagCLick = () => {
    setFlag2(!flag2);
  };
  return (
    <div className="flex flex-row flex-wrap justify-between items-center sm:pt-3  sm:px-4 sm:border-grey sm:border-b-2">
      <div className="sm:flex sm:flex-row sm:flex-wrap sm:gap-4 items-start justify-between w-full">
        <div className="sm:block flex flex-row items-center px-4 py-2 sm:px-0">
          <div className="sm:hidden cursor-pointer" onClick={onFlagCLick}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="20" fill="#F2F8FE" />
              <g clipPath="url(#clip0_0_936)">
                <path
                  d="M23.75 27.5H8.75V25H23.75V27.5ZM31.25 12.5V15H8.75V12.5H31.25ZM23.75 21.25H8.75V18.75H23.75V21.25Z"
                  fill="#1C4980"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_936">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="matrix(-1 0 0 1 35 5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-navy-blue px-4 sm:pl-2 sm:pr-4 sm:border-r-2  border-grey h-10 ">
            <p className="text-xl sm:text-xl sm:font-semibold font-medium ">
              Assessment
            </p>
          </div>
        </div>

        <div className="pt-1 sm:block sm:p-0 flex flex-row justify-between items-center text-center ">
          <div className="text-text-blue border-b-2  pb-2 w-full sm:w-auto sm:pt-3 sm:pb-5  border-text-blue sm:absolute sm:left-80  ">
            <p className="font-xs font-medium">My Assessment</p>
          </div>
          <div className="text-navy-blue border-b-2 border-grey pb-2 w-full sm:hidden">
            <p className="font-xs font-medium">Unstop Assessments</p>
          </div>
        </div>
      </div>
      {flag2 && (
        <div className="sm:hidden absolute top-0 left-0 w-full">
          <MobileSidebar onFlagClick={onFlagCLick} />
        </div>
      )}
    </div>
  );
};

export default Header;
