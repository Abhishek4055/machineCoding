// import "./styles.css";
import { useState, useCallback, useEffect } from "react";
import CellOption from "./OptionCell";
import styled from "styled-components";

const options = [
  { name: "Patna", value: "patna" },
  { name: "Gaya", value: "gaya" },
  { name: "Bhagalpur", value: "bhagalpur" },
  { name: "Saharsa", value: "saharsa" },
  { name: "Darbhanga", value: "sarbhanga" },
];

export default function DropDown({ option, getDPData }) {
  const [inputData, setInputData] = useState({ value: "", name: "" });
  const [open, setIsOpen] = useState(false);
  const [dropDownOption, setDropDownOption] = useState([]);

  const debounce = (func) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => func(...args), 500);
    };
  };

  const inputChangeHandler = (e) => {
    const data = e.target.value;
    if (open) {
      setInputData({ value: "", name: data });
    }
  };

  const filterOption = () => {
    const filterData = option.filter((el, i) =>
      el?.name?.toLowerCase().includes(inputData?.name.toLowerCase())
    );

    setDropDownOption(inputData?.name ? filterData : option);
  };

  const debouncedFilterOption = useCallback(debounce(filterOption), [
    filterOption,
  ]);

  useEffect(() => {
    debouncedFilterOption();
  }, [inputData]);

  const selectOption = useCallback((item) => {
    console.log(item);
    const result = dropDownOption.find(
      (el) => el?.name.toLowerCase() === item?.name.toLowerCase()
    );
    setInputData(result);
    getDPData(result);
    setIsOpen(false);
  }, []);

  const togalHandler = () => {
    setIsOpen(!open);
  };
  useEffect(() => {
    setDropDownOption(option);
  }, []);

  return (
    <Container>
      <DropDownSelect>
        <DropDownInput
          onClick={togalHandler}
          type="text"
          placeholder="Select--"
          className="drop__down--input"
          value={inputData?.name}
          onChange={inputChangeHandler}
        />
        {open ? <span> 🔼 </span> : <span>🔽</span>}
      </DropDownSelect>
      {open && (
        <OptionsContainer>
          {dropDownOption.length ? (
            dropDownOption.map((el, id) => {
              return (
                <CellOption key={id} item={el} selectOption={selectOption} />
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </OptionsContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 200px;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

const DropDownSelect = styled.div`
  border: 1px solid #0400ff;
  max-width: 200px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 5px 10px;
  border-radius: 4px;
  &:hover {
    border: 1px solid #085bd7;
  }
  &:focus-within {
    border-color: #007bff;
    box-shadow: inset 0 0 3px #007bff;
  }
`;
const DropDownInput = styled.input`
  border: none;
  padding: 5px;
  margin: 0px;
  text-align: left;
  width: 100%;
  outline: none;
  font-size: 15px;
  color: #0076f4;
  &:focus {
    opacity: none;
  }
`;

// const Loader = styled.div`
//   margin: auto;
// `;
const OptionsContainer = styled.div`
  max-width: 200px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
  font-size: 15px;
  padding: 5px;
  border: 1px solid #027cfe;
  border-radius: 4px;
  margin-top: 4px;
  box-shadow: inset 0 0 4px #75aeec;
  min-height: 150px;
  max-height: 150px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px; /* Scrollbar width */
  }
  &::-webkit-scrollbar-track {
    background: #9bbcfe; /* Track background */
    border-radius: 10px;
    margin-left: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #0046bf; /* Scrollbar thumb color */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    box-shadow: inset 0 0 10px #0053fa; /* Thumb color on hover */
  }
`;
