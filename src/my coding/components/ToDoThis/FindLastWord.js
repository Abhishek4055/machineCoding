import React from "react";

function FindLastWord() {
  const str = "This is me";

  const lastValue = (val) => {
    let last = "";
    let newStr = "";

    for (let i = val.length - 1; i >= 0; i--) {
      if (str[i] !== " ") {
        last = str[i] + last;
      } else {
        return last;
      }
    }
    // -----------------to invert the sentence-----------
    //    for (let i = val.length - 1; i >= 0; i--) {
    //      if (str[i] !== " ") {
    //        last = str[i] + last;
    //      } else {
    //        newStr = newStr + last + str[i];
    //        last = "";
    //      }
    //    }
    //    return newStr + last;
  };

  console.log(lastValue(str));
  return <div></div>;
}

export default FindLastWord;
