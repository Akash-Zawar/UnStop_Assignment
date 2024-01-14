import { useState } from "react";

const FormElement = ({ onClose }) => {
  const [skills, setSkills] = useState([
    "UI/UX and Design",
    "Web Development",
    "No of Question",
    "UI/UX and Design",
    "Web Development",
  ]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = (e) => {
    if (
      e.key === "Enter" &&
      newSkill.trim() !== "" &&
      !skills.includes(newSkill.trim())
    ) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
    if (skills.includes(newSkill.trim())) {
      setNewSkill("");
      alert("Skill already exist");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    const indexToRemove = skills.indexOf(skillToRemove);
    if (indexToRemove !== -1) {
      const updatedSkills = [...skills];
      updatedSkills.splice(indexToRemove, 1);
      setSkills(updatedSkills);
    }
  };

  return (
    <div className="fixed inset-0 sm:top-0  z-50 bg-black bg-opacity-50">
      <div className="sm:w-2/5 fixed bottom-0  sm:static sm:my-2   mx-auto bg-white rounded-xl">
        <div className="text-navy-blue sm:px-4 sm:py-6 px-2 flex flex-row justify-between items-center border-b-2 border-grey">
          <p className="text-xl font-medium hidden sm:block">
            Create new Assessment
          </p>
          <p className="text-xl  py-4 font-semibold sm:hidden">
            Sub-section details
          </p>

          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClose}
            className="cursor-pointer hidden sm:block">
            <path
              d="M20.3033 22.071L15 16.7677L9.6967 22.071L7.92893 20.3033L13.2322 15L7.92893 9.69668L9.6967 7.92891L15 13.2322L20.3033 7.92891L22.0711 9.69668L16.7678 15L22.0711 20.3033L20.3033 22.071Z"
              fill="#323232"
            />
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer block sm:hidden"
            onClick={onClose}>
            <rect width="40" height="40" rx="20" fill="#FBEBEA" />
            <path
              d="M14.6967 27.071L20 21.7677L25.3033 27.071L27.0711 25.3033L21.7678 20L27.0711 14.6967L25.3033 12.9289L20 18.2322L14.6967 12.9289L12.9289 14.6967L18.2322 20L12.9289 25.3033L14.6967 27.071Z"
              fill="#D63500"
            />
          </svg>
        </div>
        <div className="sm:mx-4 sm:my-2 m-2.5 text-navy-blue flex flex-col sm:gap-3 gap-3">
          <p className="text-lg sm:text-base font-medium">Name of Assessment</p>
          <input
            type="text"
            placeholder="Type Here"
            className="focus:outline-none sm:p-2 p-3  border-2 rounded-lg placeholder-pl-blue placeholder-opacity-0.5 sm:placeholder-navy-blue sm:placeholder-opacity-1 sm:text-base text-sm sm:font-medium"
          />{" "}
          <p className=" text-lg sm:text-base font-medium">
            Purpose of test is
          </p>
          <select className="focus:outline-none sm:p-2 px-2 py-2  border-2 border-grey rounded-lg sm:text-base sm:font-medium text-sm">
            <option className="text-navy-blue">Select</option>
          </select>
          <p className=" text-lg sm:text-base font-medium">Description</p>
          <select className="focus:outline-none sm:p-2 px-2 py-2 border-2 border-grey rounded-lg sm:text-base sm:font-medium text-sm">
            <option className="text-navy-blue">Select</option>
          </select>
          <p className="text-lg sm:text-base font-medium">Skills</p>
          <div className="text-navy-blue">
            <div className="flex flex-wrap gap-1 sm:gap-2 border-grey border-2 p-4 rounded-t-lg">
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="text-xs flex gap-1 items-center sm:font-medium font-semibold p-2 px-2 sm:mx-2 bg-light-blue rounded-full">
                  <p>{item}</p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleRemoveSkill(item)}>
                    <g clip-path="url(#clip0_0_1763)">
                      <path
                        d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"
                        fill="#1C4980"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_1763">
                        <rect width="18" height="18" rx="9" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              ))}
            </div>
            <div>
              <input
                type="text"
                placeholder="Type Here"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={handleAddSkill}
                className="sm:px-4 sm:py-2 px-2 py-2 border-b-2 border-l-2 border-r-2 w-full rounded-b-lg  placeholder-pl-blue placeholder-opacity-0.5 sm:placeholder-navy-blue sm:placeholder-opacity-1 sm:text-base text-sm sm:font-medium focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full hidden lg:block  ">
            <p className="text-l font-medium">Duration of Assessment</p>
            <input
              type="text"
              placeholder="HH:MM:SS"
              className="p-2.5 border-2 w-full rounded-lg placeholder-navy-blue placeholder-opacity-50 text-sm font-medium"
            />
          </div>
        </div>
        <div className="border-t border-grey w-full p-2 sm: flex justify-center">
          <button className="hidden sm:block rounded-lg bg-button-blue my-2.5 text-white w-530 h-40">
            Save
          </button>
          <button className="sm:hidden text-lg block rounded-lg bg-button-blue my-1 sm:my-2.5 text-white w-full h-40">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormElement;
