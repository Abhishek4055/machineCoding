import React from "react";

function FindDuplicate() {
  // 1st way
  let original = ["1", "2", "3", "1", "2", "4", "5", "6"];
  let setA = new Set();
  let setB = new Set();
  for (let el of original) {
    if (setA.has(el)) {
      setB.add(el);
    } else {
      setA.add(el);
    }
  }

  console.log([...setB]);

  //2nd way
  console.log(original.filter((el, i, arr) => arr.indexOf(el) !== i));

  // 3rd Way
  const obj = {};
  const duplicate = [];
  for (let el of original) {
    obj[el] = obj[el] ? obj[el] + 1 : 1;
  }
  for (let el in obj) {
    if (obj[el] > 1) {
      duplicate.push(el);
    }
  }
  console.log(duplicate);
  return <div></div>;
}

export default FindDuplicate;
