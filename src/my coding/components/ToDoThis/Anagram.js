import React from "react";
// two word which have same element
function Anagram() {
  const anagram = (str1, str2) => {
    const newString1 = str1
      .toLowerCase()
      .split("")
      .sort(a - b)
      .join("");
    const newString2 = str2
      .toLowerCase()
      .split("")
      .sort(a - b)
      .join("");
    return newString1 === newString2 ? "This is an aggram" : " Not an Annagram";
  };

  console.log(anagram("Listen", "silent"));
  return <div></div>;
}

export default Anagram;
