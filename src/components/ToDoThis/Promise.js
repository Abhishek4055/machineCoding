// creation of a promise
const mypromise = new Promise((fulfill, reject) => {
  const user = true;
  user
    ? fulfill({ user: "abhishek", email: "example@123.com" })
    : reject("please a pass number for sum");
});

// consuming above created promise
mypromise
  .then((user) => {
    console.log("user", user);
    return user.email;
  })
  .then((resp) => console.log("email", resp))
  .catch((error) => console.log(error));

//2
// function to get the sum
function sum(a, b) {
  // creation of a promise
  return (mypromise = new Promise((fulfill, reject) => {
    if (typeof a === "number" && typeof b === "number") return fulfill(a + b);
    else {
      return reject("please a pass number for sum");
    }
  }));
}

//consuming a promise returned by a function
sum("10", 20)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
