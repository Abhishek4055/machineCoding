import React from "react";

const ValidParenthesis = () => {
  function validParenthesis(val) {
    if (val.length % 2 !== 0) return false;
    let arr = [];
    for (let i of val) {
      switch (val[i]) {
        case "[": {
          arr.push("]");
          break;
        }
        case "{": {
          arr.push("}");
          break;
        }
        case "(": {
          arr.push(")");
          break;
        }
        default: {
          const popedElement = arr.pop();
          if (popedElement !== val[i]) return false;
        }
      }
    }
    return arr.length === 0;
  }
  const str = "(]";
  console.log(validParenthesis(str));

  return <div>ValidParenthesis</div>;
};

export default ValidParenthesis;
