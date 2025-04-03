import React from "react";
import "./App.css";
import FindSetOfAnagram from "./my coding/components/ToDoThis/FindSetOfAnagram";
import ThemeToggle from "./my coding/Dark_LightMode.js/TheamTogal";
import MaximumProductOfTwoNumber from "./my coding/components/ToDoThis/MaximumProductOfTwoNumber";

export default function App() {
  return (
    <div className="container">
      <div>
        <ThemeToggle />
      </div>
      <FindSetOfAnagram />
      <MaximumProductOfTwoNumber />
    </div>
  );
}
