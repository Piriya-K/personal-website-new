import React from "react";
import { useMode } from "../Provider";

const IconList = () => {
  const { mode, handleToggle } = useMode();

  return (
    <div className="inline-flex items-center border border-gray-700 rounded-full overflow-hidden bg-black p-1 space-x-2">
      {/* Dark Mode Button */}
      <button
        className={`group material-symbols-outlined text-4xl p-2 ${
          !mode ? "text-yellow-300" : "bg-white text-black rounded-full"
        }`}
        onClick={handleToggle} // Toggle to light mode
      >
        dark_mode
      </button>

      {/* Light Mode Button */}
      <button
        className={`group material-symbols-outlined text-4xl p-2 ${
          mode ? "text-yellow-300" : "bg-white text-black rounded-full"
        }`}
        onClick={handleToggle} // Toggle to dark mode
      >
        light_mode
      </button>
    </div>
  );
};

export default IconList;
