import React from "react";

function SecondLargest() {
  let arr = [1, 2, 3, 4, 5, 6, 7];

  const secondLargest = (value) => {
    let first = Infinity;
    let second = -Infinity;

    for (let el of value) {
      if (el > first) {
        second = first;
        first = el;
      } else if (el > second && el < first) {
        second = el;
      }
    }
    return second !== -Infinity ? second : null;
  };

  secondLargest(arr);

  return <div>SecondLargest</div>;
}

export default SecondLargest;
function findSecondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num < firstLargest) {
      secondLargest = num;
    }
  }

  return secondLargest !== -Infinity ? secondLargest : null; // Returns null if there is no second largest number
}

// Example usage:
const numbers = [3, 1, 4, 5, 2];
console.log(findSecondLargest(numbers)); // Output: 4
