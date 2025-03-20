const memoize = (fn) => {
  const cashe = new Map();
  return (...arg) => {
    const key = JSON.stringify(arg);
    if (cashe.has(key)) {
      return cashe.get(key);
    }

    const result = fn(...arg);
    cashe.set(key, result);
    return result;
  };
};

const sum = (a, b) => {
  return a + b;
};
const subtact = (a, b) => {
  return a - b;
};

const memoizeSum = memoize(sum);
const memoizeSuntract = memoize(subtact);

console.log(memoizeSum(3, 4)); // Calculating result: [3, 4]
console.log(memoizeSum(3, 4)); // Fetching from cache: [3, 4]
console.log(memoizeSuntract(10, 5)); // Calculating result: [10, 5]
console.log(memoizeSuntract(10, 5)); // Fetching from cache: [10, 5]
