"use client";

import { useState, React, createContext, useContext } from "react";

// Create ModeContext
const ModeContext = createContext();

// Create ModeProvider
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(true);

  const handleToggle = () => {
    setMode((prevMode) => !prevMode);
  };

  return (
    <ModeContext.Provider value={{ mode, handleToggle }}>
      {children}
    </ModeContext.Provider>
  );
};

// Custom hook to use the ModeContext
export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
};
