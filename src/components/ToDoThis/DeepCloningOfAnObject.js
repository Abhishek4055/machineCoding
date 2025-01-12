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
