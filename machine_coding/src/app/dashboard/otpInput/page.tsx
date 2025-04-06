"use client";
import React, { useEffect, useRef, useState } from "react";

const OTP_INPUT_LENGTH = 4;
export default function OtpInputHome() {
  const [inputValue, setinputValue] = useState(
    new Array(OTP_INPUT_LENGTH).fill("")
  );
  const inputRef = useRef<HTMLInputElement[]>([]);

  //  focus initialy to 1st input field .
  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  function inputChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void {
    const changeValue = e.target.value;
    console.log(e);
    // input value should be numeric only.
    if (!isNaN(Number(changeValue))) {
      const myInputValue = [...inputValue];
      myInputValue[index] = changeValue.slice(-1);
      setinputValue(myInputValue);
      // change focus to next field if input box have value.
      if (changeValue && index < OTP_INPUT_LENGTH - 1) {
        inputRef.current[index + 1]?.focus();
      }
    }
  }

  function onBackKeyPress(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ): void {
    // console.log("keyPress", e);
    const keypress = e?.key;
    if (keypress === "Backspace" && inputValue[index] == "" && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  }
  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-center text-3xl font-bold">Create OTP Input Field</h1>

      <div className="grid place-items-center min-h-[75vh]  ">
        <div className="border border-2 border-gray-400 rounded-lg p-6 w-full max-w-sm min-h-[50vh] flex  ">
          <div className="m-auto flex justify-center items-center gap-1 ">
            {inputValue &&
              inputValue.map((item, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    if (el) inputRef.current[index] = el;
                  }}
                  className="border border-gray-500 rounded-md w-8 h-8 text-center font-bold text-lg "
                  type="text"
                  placeholder="*"
                  value={item}
                  onChange={(e) => inputChangeHandler(e, index)}
                  onKeyDown={(e) => onBackKeyPress(e, index)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
