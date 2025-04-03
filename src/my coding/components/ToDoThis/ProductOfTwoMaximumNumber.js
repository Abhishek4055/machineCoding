import React from "react";

const ProductOfTwoMaximumNumber = () => {
  const input1 = [1, 2, 3, 4, 5];
  const input2 = [-7, -2, 3, -5, 10];
  const input3 = [1, 1, 1];
  const input4 = [3];

  function productOfTwoMaxNumber(arr) {
    if (arr.length < 2) return "Pass atleast array of two number";
    let maxVal = -Infinity;
    let secondMaxVal = -Infinity;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= maxVal) {
        secondMaxVal = maxVal;
        maxVal = arr[i];
      } else if (arr[i] > secondMaxVal && arr[i] < maxVal) {
        secondMaxVal = arr[i];
      }
    }
    return maxVal * secondMaxVal;
  }

  const solution = `
    function productOfTwoMaxNumber(arr) {
    if (arr.length < 2) return "Pass atleast array of two number";
    let maxVal = -Infinity;
    let secondMaxVal = -Infinity;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= maxVal) {
        secondMaxVal = maxVal;
        maxVal = arr[i];
      } else if (arr[i] > secondMaxVal && arr[i] < maxVal) {
        secondMaxVal = arr[i];
      }
    }
    return maxVal * secondMaxVal;
    }
    
    `;

  return (
    <div>
      <h3>Q - Find Product of two Maximum Number </h3>
      <div>
        <p>
          <span>input1: {JSON.stringify(input1)}</span>
          <span> output: {productOfTwoMaxNumber(input1)}</span>
        </p>
        <p>
          <span>input2: {JSON.stringify(input2)}</span>
          <span> output: {productOfTwoMaxNumber(input2)}</span>
        </p>
        <p>
          <span>input3: {JSON.stringify(input3)}</span>
          <span> output: {productOfTwoMaxNumber(input3)}</span>
        </p>
        <p>
          <span>input4: {JSON.stringify(input4)}</span>
          <span> output: {productOfTwoMaxNumber(input4)}</span>
        </p>
      </div>
      <div>
        <h2>Sloution:</h2>
        <pre>
          <code>{solution}</code>
        </pre>
      </div>
    </div>
  );
};

export default ProductOfTwoMaximumNumber;
