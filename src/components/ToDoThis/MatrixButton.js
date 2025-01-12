import React, { useState } from "react";
import styled from "styled-components";

function Cell({ isActive, activateCell, index, isDisabled }) {
  return (
    <Button
      disabled={isDisabled}
      className={isActive ? "active" : ""}
      onClick={() => activateCell(index)}
    />
  );
}

const Button = styled.button`
  border: 1px solid;
  background-color: transparent;
  height: 0;
  padding-bottom: 100%;
  &.active {
    background-color: red;
  }
`;

function MatrixButton() {
  const [order, setOrder] = useState([]);
  const [isDeactivate, setIsDeactivate] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];

  // deactivation of cell with  delay of 500 ms
  const deactivationOfCell = () => {
    setIsDeactivate(true);
    const timer = setInterval(() => {
      setOrder((prevData) => {
        const clone = prevData.slice();
        clone.pop();
        if (clone.length === 0) {
          clearInterval(timer);
          setIsDeactivate(false);
        }
        return clone;
      });
    }, 500);
  };

  const activateCell = (index) => {
    console.log(index);
    const newOrder = [...order, index];
    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivationOfCell();
    }
  };
  return (
    <Wraper>
      <Grid style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}>
        {config.flat(1).map((value, index) => {
          {
            return value ? (
              <Cell
                key={index}
                index={index}
                isActive={order.includes(index)}
                activateCell={activateCell}
                isDisabled={order.includes(index) || isDeactivate}
              />
            ) : (
              <span />
            );
          }
        })}
      </Grid>
    </Wraper>
  );
}

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
`;
const Grid = styled.div`
  display: grid;
  max-width: 300px;
  width: 100%;
  gap: 20px;
  padding: 20px;
  border: 1px solid;
`;

export default MatrixButton;
