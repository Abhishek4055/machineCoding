import React from "react";

function FibonacciSequence() {
  const fibonacciSeries = (val, initialArray = [0, 1]) => {
    let sum = 0;
    if (initialArray.length <= val) return initialArray; // default case
    for (let i = 2; i <= val; i++) {
      sum = initialArray[i - 1] + initialArray[i - 2];
      initialArray.push(sum);
    }
    return initialArray;
  };

  console.log(fibonacciSeries(5));

  return <div></div>;
}

export default FibonacciSequence;
