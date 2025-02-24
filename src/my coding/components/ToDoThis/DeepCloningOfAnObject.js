import React from "react";

function DeepCloningOfAnObject() {
  const input = {
    name: "X",
    job: "Software Engineer",
    manager: {
      name: "Y",
      job: "Software Manager",
      teamMembers: ["X", "Z", "W", "V"],
      salary: function () {
        return 30000;
      },
    },
    tasks: [101, 102, "103"],
  };

  const deepClone = (obj) => {
    if (obj === null || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) {
      return obj.map(deepClone);
    }

    const newObj = {};
    for (let key in obj) {
      newObj[key] = deepClone(obj[key]);
    }

    return newObj;
  };

  const output1 = deepClone(input);
  output1.manager.teamMembers.push("myName");
  console.log(output1);

  con;
  return <div>Object Deep Cloning</div>;
}

export default DeepCloningOfAnObject;

// this function clone all thpe of data from an object

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Return primitive values & functions as-is
  }

  if (obj instanceof Date) {
    return new Date(obj); // Handle Date objects
  }

  if (obj instanceof Array) {
    return obj.map(deepClone); // Deep copy arrays
  }

  if (obj instanceof Function) {
    return obj.bind({}); // Clone function (bind to prevent reference issues)
  }

  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]); // Recursively copy properties
    }
  }
  return clone;
}

const obj = {
  a: 1,
  b: { c: 2 },
  greet() {
    return "Hello";
  },
};

const copy = deepClone(obj);

console.log(copy.greet()); // "Hello"
copy.b.c = 20;
console.log(obj.b.c); // 2 (original remains unchanged)
