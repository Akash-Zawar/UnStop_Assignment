const NewAssessment = () => {
  return (
    <div className="border border-grey p-4 sm:py-4 w-11/12 sm:max-w-md m-auto sm:m-0  border-dashed rounded-xl bg-light-grey">
      <div className="flex flex-col items-center sm:gap-2.5  ">
        <div>
          <svg
            width="70"
            height="71"
            viewBox="0 0 70 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="70" height="70" rx="35" fill="white" />
            <g clipPath="url(#clip0_0_552)">
              <path
                d="M46.6667 37.1667H36.6667V47.1667H33.3334V37.1667H23.3334V33.8333H33.3334V23.8333H36.6667V33.8333H46.6667V37.1667Z"
                fill="#0073E6"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_552">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(15 15.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className=" text-navy-blue pt-2 ">
          <p className="sm:text-xl text-base font-medium">New Assessment</p>
        </div>
        <div className=" text-navy-blue sm:flex flex-wrap flex-row text-center sm:justify-center sm:items-center ">
          <div className="sm:block flex flex-row justify-center">
            <p className="text-xs font-medium  ">
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </div>

          {/* <p className="text-xs hidden sm:block font-medium">
            subjective (text or paragraph)!
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default NewAssessment;
