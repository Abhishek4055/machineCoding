// define a function in type script;

const isLogin = (name: string, email: string, isUsed: boolean = false) => {}; // define a function with defalut parameter
isLogin("abhishek", "ab@abstract.com"); // not passing isUssed value . only have to pass the two argument;

// a function returning more then one value

function getDeta(num: number) {
  if (num >= 5) return true;
  return "please pass the number more then 5";
}

getDeta(4);
