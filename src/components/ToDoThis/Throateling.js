import React, { useCallback, useState } from "react";

function Throttling() {
  const [state, setState] = useState([]);

  // Function to fetch data
  const getData = async () => {
    const data = await fetch("https://dummyjson.com/products/search");
    const resp = await data.json();
    console.log(resp);

    setState(resp.products);
  };

  // Throttle function
  const throttling = (func, delay) => {
    let lastCall = 0;
    return (...arg) => {
      let now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...arg);
      }
    };
  };

  // useCallback to create a throttled version of getData
  const clickHandler = useCallback(throttling(getData, 1000), [getData]);

  return (
    <div>
      <h1>Data: {state?.[0]?.title}</h1>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default Throttling;
