import React from "react";

function FlatArray() {
  const arr = [1, 2, [3, 4, [5, 6], 7], 8];

  const flat = (val, newArr = []) => {
    for (let el of val) {
      if (Array.isArray(el)) {
        newArr.push(...flat(el, []));
      } else {
        newArr.push(el);
      }
    }
    return newArr;
  };

  console.log(flat(arr));

  return (
    <div>
      Flat Array : {arr} to {flat(arr)}
    </div>
  );
}

export default FlatArray;
