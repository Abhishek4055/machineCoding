import React from "react";

function ReverseInteger() {
  const input = -120;
  const reverseIntege = (int) => {
    let remain = 0;
    let result = 0;
    let devident = int > 0 ? int : -int;

    while (devident > 0) {
      remain = devident % 10;
      devident = Math.floor(devident / 10);
      result = result * 10 + remain;
    }
    return int > 0 ? result : -result;
  };
  console.log(reverseIntege(input));
  return (
    <div>
      <p>Input:{input}</p>
      <p>Output:{reverseIntege(input)}</p>
    </div>
  );
}

export default ReverseInteger;
