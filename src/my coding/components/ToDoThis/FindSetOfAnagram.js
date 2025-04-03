import React from "react";

function FindSetOfAnagram() {
  const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

  function outPut(arr) {
    if (!arr.length) return "No Item found";
    if (arr.length === 1) return arr;

    let result = new Map();

    for (let item of arr) {
      const sortedString = item.split("").sort().join("");
      if (result.has(sortedString)) {
        result.get(sortedString).push(item);
      } else {
        result.set(sortedString, [item]);
      }
    }

    return [...result.values()];
  }

  const outCome = outPut(input);

  const solution = `
  
    function outPut(arr) {

    if (!arr.length) return "No Item found";

    let result = new Map();
    for (let item of arr) {
      const sortedString = item.split("").sort().join("");
      if (result.has(sortedString)) {
        result.get(sortedString).push(item);
      } else {
        result.set(sortedString, [item]);
      }
    }

        return [...result.values()];
    }

    const outCome = outPut(input);

    `;

  return (
    <div>
      <h3>Find the sets of Anagram</h3>
      <p>
        <strong>Input:</strong> {JSON.stringify(input)}
      </p>
      <p>
        <strong>Output:</strong> {JSON.stringify(outCome)}
      </p>

      <h2>Solution:</h2>
      <pre>
        <code>{solution}</code>
      </pre>
    </div>
  );
}

export default FindSetOfAnagram;
