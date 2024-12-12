import React from "react";
import IconList from "./IconList";
import { useMode } from "../Provider";

const NavBar = () => {
  const { mode } = useMode();

  return (
    <div className="top-0 left-0 z-10 fixed w-full xl:h-full flex xl:flex-col xl:w-[8%] py-5 justify-center backdrop-blur-sm shadow-lg gap-10">
      {/* bg-[#03001417] */}
      <div className="flex justify-center">
        <IconList />
      </div>
      <div
        className={`flex gap-4 items-center xl:flex-col rounded-full px-4 ${
          mode ? "bg-gray-50 xl:bg-inherit" : "bg-slate-700 xl:bg-none"
        }`}
      >
        <p>About</p>
        <p>Resume</p>
        <p>Project</p>
      </div>
    </div>
  );
};

export default NavBar;
