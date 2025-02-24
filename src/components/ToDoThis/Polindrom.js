import React from "react";

function Polindrom() {
  const palindrom = (value) => {
    const length = Math.floor(value.length / 2);
    for (let i = 0; i < length; i++) {
      if (value[i] !== value[value.length - 1 - i]) return "Not a Palindrome";
    }
    return "This is a Palindrome";
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
