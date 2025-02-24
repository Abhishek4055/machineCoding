import React from "react";

function TargetSum() {
  const input = [2, 7, 4, 5, 9, 1];
  const target = 9;

  const sum = (arr, target) => {
    let myMap = new Map();
    let output = [];

    for (let ele of arr) {
      let remain = target - ele;
      if (myMap.has(remain)) {
        let data = [remain, myMap.get(remain)];
        output = [...output, data];
      }
      myMap.set(ele, remain);
    }

    return output;
  };

  sum(input, target);
  return <div>sum of element of an Array is Equal to Target;</div>;
}

export default TargetSum;
