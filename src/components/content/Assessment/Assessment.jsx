import { useState } from "react";

import NewAssessment from "./newAssessment";
import FormElement from "./form";
import AssessmentRecord2 from "./AssesmentRecord2";
import AssessmentRecord1 from "./AssesmentRecord1";
import { data } from "autoprefixer";

const Assessment = ({ mobileFlag, onIconCLick }) => {
  const [flag, setFlag] = useState(false);

  const dataList = [
    {
      nameOfAssessment: "Math Assessment",
      date: "20 Apr 2023",
      duration: "00",
      noOfQuestions: "00",
      share: 0,
    },
    {
      nameOfAssessment: "Math Assessment",
      date: "20 Apr 2023",
      duration: "00",
      noOfQuestions: "00",
      share: 1,
    },
    {
      nameOfAssessment: "Math Assessment",
      date: "20 Apr 2023",
      duration: "00",
      noOfQuestions: "00",
      share: 1,
    },
    {
      nameOfAssessment: "Math Assessment",
      date: "20 Apr 2023",
      duration: "00",
      noOfQuestions: "00",
      share: 1,
    },
  ];

  const onDivCLick = () => {
    setFlag(!flag);
  };

  return (
    <>
      <div className=" flex flex-row justify-between items-center">
        <div className="sm:m-6 my-4 mx-6 text-navy-blue ">
          <p className="text-lg font-semibold">My Assessment</p>
        </div>
        <div className="sm:hidden flex flex-row px-3 ">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="white" />
            <g clip-path="url(#clip0_40301_126)">
              <path
                d="M23.2083 21.8333H22.4842L22.2275 21.5858C23.1258 20.5408 23.6667 19.1842 23.6667 17.7083C23.6667 14.4175 20.9992 11.75 17.7083 11.75C14.4175 11.75 11.75 14.4175 11.75 17.7083C11.75 20.9992 14.4175 23.6667 17.7083 23.6667C19.1842 23.6667 20.5408 23.1258 21.5858 22.2275L21.8333 22.4842V23.2083L26.4167 27.7825L27.7825 26.4167L23.2083 21.8333ZM17.7083 21.8333C15.4258 21.8333 13.5833 19.9908 13.5833 17.7083C13.5833 15.4258 15.4258 13.5833 17.7083 13.5833C19.9908 13.5833 21.8333 15.4258 21.8333 17.7083C21.8333 19.9908 19.9908 21.8333 17.7083 21.8333Z"
                fill="#1C4980"
              />
            </g>
            <defs>
              <clipPath id="clip0_40301_126">
                <rect
                  width="22"
                  height="22"
                  fill="white"
                  transform="translate(9 9)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="white" />
            <g clip-path="url(#clip0_40301_130)">
              <path
                d="M12.25 13.66C12.35 13.79 17.99 20.99 17.99 20.99V27C17.99 27.55 18.44 28 19 28H21.01C21.56 28 22.02 27.55 22.02 27V20.98C22.02 20.98 27.51 13.96 27.77 13.64C28.03 13.32 28 13 28 13C28 12.45 27.55 12 26.99 12H13.01C12.4 12 12 12.48 12 13C12 13.2 12.06 13.44 12.25 13.66Z"
                fill="#1C4980"
              />
            </g>
            <defs>
              <clipPath id="clip0_40301_130">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(8 8)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="cursor-pointer">
            {mobileFlag ? (
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onIconCLick}>
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  fill="#F2F8FE"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  stroke="#0073E6"
                />
                <path
                  d="M12 28V17H16V28H12ZM18 28V12H22V28H18ZM24 28V21H28V28H24Z"
                  fill="#0073E6"
                />
              </svg>
            ) : (
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onIconCLick}>
                <rect width="40" height="40" rx="20" fill="white" />
                <path
                  d="M12 28V17H16V28H12ZM18 28V12H22V28H18ZM24 28V21H28V28H24Z"
                  fill="#1C4980"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full sm:pl-6 sm:pb-4 sm:gap-0 sm:gap-y-6 sm:grid min-[945px]:grid-cols-2  sm:grid-cols-1  xl:grid-cols-3 ">
        <div
          onClick={onDivCLick}
          className="sm:block m-auto w-full  sm:w-auto sm:m-0 hover:cursor-pointer ">
          <NewAssessment />
        </div>

        {dataList.map((data, index) => (
          <div key={index} className="sm:block m-auto sm:m-0 w-full sm:w-auto">
            <AssessmentRecord1
              nameOfAssessment={data.nameOfAssessment}
              date={data.date}
              duration={data.duration}
              noOfQuestions={data.noOfQuestions}
              share={data.share}
            />
          </div>
        ))}
      </div>
      <div className="">
        {flag && (
          <div className="  ">
            <FormElement onClose={onDivCLick} />
          </div>
        )}
      </div>
    </>
  );
};

export default Assessment;
