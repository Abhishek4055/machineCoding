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

const newCashing = (fn) => {
  const mymap = new Map();
  return (...arg) => {
    const key = JSON.stringify(arg);
    if (mymap.has(key)) return mymap.get(key);

    const result = fn(arg);
    mymap.set(key, result);
    return result;
  };
};

const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};

const res1 = newCashing(add);
const res2 = newCashing(sub);

console.log(res1(5, 1));
console.log(res2(5, 1));
