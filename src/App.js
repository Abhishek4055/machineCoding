import React from "react";
import { ThemeProvider } from "./my coding/Dark_LightMode.js/TheamContext";
import ThemeToggle from "./my coding/Dark_LightMode.js/TheamTogal";

export default function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <ThemeToggle />
        <h1>hellow World</h1>
        <p>This mode persists even after refresh.</p>
      </div>
    </ThemeProvider>
  );
}
