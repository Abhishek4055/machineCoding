import React, { useState } from "react";
// Create a form with Name, Age, and Email fields. On clicking the Add button, the entered details should be added to a list. Each item in the list should have a Delete button to remove it when clicked

function MyPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [formList, setFormList] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    setFormList([...formList, { ...formData, id }]);

    setFormData({
      name: "",
      age: "",
      email: "",
    });
  };

  const deleteHandle = (item) => {
    console.log("id.....🔍", item.id);
    const data = [...formList];
    const newFormList = data.filter((ele) => {
      if (ele.id !== item.id) return ele;
    });
    setFormList(newFormList);
  };
  return (
    <div>
      <form onSubmit={formSubmit} className="form_container">
        <div>
          <label htmlFor="myName">Name </label>
          <input
            type="text"
            name="myName"
            id="myName"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="age"> Age:</label>
          <input
            type="text"
            name="age"
            id="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email"> Email: </label>
          <input
            type="eamil"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <button type="submit"> Add </button>
      </form>

      <div>
        {formList.map((item) => (
          <div key={item.id}>
            <span>name :{item.name}</span>
            <button onClick={() => deleteHandle(item)}> ❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPage;
