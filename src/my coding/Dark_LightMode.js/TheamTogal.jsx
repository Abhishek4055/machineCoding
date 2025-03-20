import React from "react";
import { useTheme } from "./TheamContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="toggle-button">
      {theme === "dark" ? "Light Mode 🌞" : "Dark Mode 🌙"}
    </button>
  );
};

export default ThemeToggle;
