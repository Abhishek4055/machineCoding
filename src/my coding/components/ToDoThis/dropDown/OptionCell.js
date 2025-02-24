// import "./styles.css";
import React from "react";
import styled from "styled-components";

const CellOption = React.memo(({ item, selectOption }) => {
  return (
    <Cell
      onClick={() => {
        selectOption(item);
      }}
    >
      {item.name}
    </Cell>
  );
});

const Cell = styled.span`
  padding: 5px 10px;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font-size: 15px;
  border: none;
  gap: 10px;
  border-radius: 4px;
  box-shadow: inset 0 0 7px #58a3f4;
`;
export default CellOption;
