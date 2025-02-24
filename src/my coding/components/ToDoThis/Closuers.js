const sum = (a) => {
  const innerSum = (b) => {
    if (b === undefined) return a;
    return sum(a + b);
  };
  return innerSum;
};
console.log(sum(1)(2)(3)());
