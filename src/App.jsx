import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/content/content";

function App() {
  return (
    <div className="flex flex-row sm:gap-2.5 ">
      <div>
        <Sidebar />
      </div>
      <div className="basis-full">
        <Content />
      </div>
    </div>
  );
}

export default App;
