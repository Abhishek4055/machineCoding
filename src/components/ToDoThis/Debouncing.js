import React, { useState } from "react";

function Debouncing() {
  const [val, setVal] = useState("");

  const debounce = (func, delay) => {
    let timeId;
    return (...arg) => {
      clearTimeout(timeId);
      timeId = setTimeout(() => func(...arg), delay);
    };
  };

  const getData = async () => {
    const data = await fetch("https://dummyjson.com/products/search");
    const resp = await data.json();
    console.log(resp);

    setVal(resp);
  };

  const fetchData = useCallback(debounce(getData, 1000), [val]);
  return (
    <div>
      <h1>Timer: {val.total}</h1>
      <button onClick={() => fetchData()}>aaa</button>
    </div>
  );
}

export default Debouncing;
