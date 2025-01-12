import React, { useMemo } from "react";

function AboutUs({ time }) {
  // const secondlargest = (str) => {
  //   if (str.length === 0) return null;
  //   console.log(str);

  //   let obj = {};
  //   for (let el of str) {
  //     obj[el] = obj[el] ? obj[el] + 1 : 1;
  //   }

  //   const sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  //   console.log(sorted);
  //   return sorted[1] + ":" + obj[sorted[1]];
  // };

  // const input = "adddddbcdabcaba";

  // console.log(secondlargest(input));

  const sum = (n) => {
    console.log("Render");
    return n * 10;
  };

  const memoizedTime = useMemo(() => sum(time), [time]);

  return <div>{sum(time)} </div>;
}

export default AboutUs;
