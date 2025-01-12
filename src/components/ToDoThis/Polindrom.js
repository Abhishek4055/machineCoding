import React from "react";

function Polindrom() {
  const palindrom = (value) => {
    const length = value.length / 2;
    for (let i = 0; i <= value.length; i++) {
      if (value[i] !== value[value.length - 1 - i]) return "Not a Polindrom";
    }
    return " This is a Polindrom";
  };

  // console.log(palindrom("abcdcba"));

  //  2nd way
  let str = "abcdedcbab";
  console.log(
    str === str.split("").reverse().join("")
      ? "This is a Polindrom"
      : "Not a polindrom"
  );

  return <div></div>;
}

export default Polindrom;
