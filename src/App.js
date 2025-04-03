import React from "react";
import "./App.css";
import FindSetOfAnagram from "./my coding/components/ToDoThis/FindSetOfAnagram";
import ThemeToggle from "./my coding/Dark_LightMode.js/TheamTogal";
import ProductOfTwoMaximumNumber from "./my coding/components/ToDoThis/ProductOfTwoMaximumNumber";

export default function App() {
  return (
    <div className="container">
      <div>
        <ThemeToggle />
      </div>
      <FindSetOfAnagram />
      <ProductOfTwoMaximumNumber />
    </div>
  );
}
