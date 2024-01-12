import { useState } from "react";
import Assessment from "./Assessment/Assessment";
import Overview from "./Overview/Overview";
import Header from "./header/Header";
import MobileOveriew from "./Overview/mobileOverview";

const Content = ({ onSideClick }) => {
  const [mobileFlag, setMobileFlag] = useState(false);
  const onIconCLick = () => {
    setMobileFlag(!mobileFlag);
  };
  return (
    <>
      <div className="sm:px-2 bg-white sm:h-screen h-999 sm:mx-6">
        <Header onSideClick={onSideClick} />
        <div className="sm:block hidden">
          <Overview />
        </div>
        {mobileFlag && (
          <div className="sm:hidden block">
            <MobileOveriew />
          </div>
        )}
        <div className="sm:block">
          <Assessment onIconCLick={onIconCLick} mobileFlag={mobileFlag} />
        </div>
      </div>
    </>
  );
};

export default Content;
