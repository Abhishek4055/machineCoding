import React, { useEffect, useState } from "react";
import styled from "styled-components";

const data = [
  { name: "Ram" },
  { name: "Shyam" },
  { name: "Rohan" },
  { name: "Raju " },
  { name: "Rohit" },
  { name: "Abhi" },
  { name: "Anand" },
];
function AllSelectCheckbox() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    setMyData(data);
  }, []);

  const checkBoxHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "all") {
      const allCheck = myData?.map((user) => ({ ...user, isChecked: checked }));
      setMyData(allCheck);
    } else {
      const newData = myData?.map((el) =>
        el.name === name ? { ...el, isChecked: checked } : el
      );
      setMyData(newData);
    }
  };

  console.log(myData);
  return (
    <Container className="App">
      <div>
        <label htmlFor="allChecked">
          <input
            id="allChecked"
            type="checkBox"
            checked={
              myData.length > 0 && myData.every((user) => user.isChecked)
            }
            onChange={checkBoxHandler}
            name="all"
          />
          All Select
        </label>

        {myData?.map((item, i) => (
          <label htmlFor={item?.name} key={i}>
            <input
              id={item?.name}
              type="checkBox"
              checked={item?.isChecked || false}
              onChange={checkBoxHandler}
              name={item?.name}
            />
            {item?.name}
          </label>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export default AllSelectCheckbox;
