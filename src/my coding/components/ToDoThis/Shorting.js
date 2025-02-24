import React from "react";

function Shorting() {
  let arr = [54, 546, 548, 60];
  const srotedByAge = arr.sort((a, b) => {
    let ab = a.toString() + b.toString();
    let ba = b.toString() + a.toString();
    console.log(ab, ba);
    return ba - ab;
  });
  console.log(srotedByAge.join(""));
  return <div>Shorting</div>;
}

export default Shorting;
