import React, { useMemo, useState } from "react";

function UseMemoComp() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  const factorial = (n) => {
    console.log("sum10Render");
    let result = 1;
    for (let i = n; i >= 0; i--) {
      if (i === 0) return result;
      result = result * i;
    }
  };

  // const casesum = useMemo(() => factorial(count), [count]) // with use Memo
  const casesum = factorial(count); // without Use Meomo

  return (
    <>
      <h1> Use Memo Hooks </h1>
      <h2>
        !{count} = {casesum}
      </h2>
      <h2>Sum of 20 - {time}</h2>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={() => setTime((prev) => prev + 20)}>
        Increse by 20
      </button>
    </>
  );
}

export default UseMemoComp;
