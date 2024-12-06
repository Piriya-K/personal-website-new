import React from "react";
import IconList from "./IconList";

const NavBar = () => {
  return (
    <div className="top-0 left-0 z-10 fixed w-full py-5 flex justify-center">
      <IconList />
    </div>
  );
};

export default NavBar;
