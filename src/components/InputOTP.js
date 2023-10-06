"use client";
import React, { useState, useEffect } from "react";

const InputOTP = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const validateInput = () => {
    if (inputValue.length > 1) {
      setInputValue(inputValue.substring(0, 1));
    }
  };

  useEffect(() => {
    validateInput();
  }, [inputValue]);
  return (
    <>
      <div className="w-16 h-16 ">
        <input
          className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-teal-700"
          type="number"
          name=""
          id=""
          value={inputValue}
          onChange={handleInputChange}  
          autoFocus
          required
          maxLength={1}
        />
      </div>
    </>
  );
};

export default InputOTP;
