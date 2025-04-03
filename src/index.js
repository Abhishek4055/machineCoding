import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./my coding/Dark_LightMode.js/TheamContext";
import ThemeToggle from "./my coding/Dark_LightMode.js/TheamTogal";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
