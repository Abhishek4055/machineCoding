import React from "react";
import { ThemeProvider } from "./my coding/Dark_LightMode.js/TheamContext";
import ThemeToggle from "./my coding/Dark_LightMode.js/TheamTogal";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <ThemeToggle />
        <h1>Hii... !</h1>
      </div>
    </ThemeProvider>
  );
}
