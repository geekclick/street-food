"use client";
import React, { useState, useEffect } from "react";

const InputPhone = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const validateInput = () => {
    if (inputValue.length > 10) {
      setInputValue(inputValue.substring(0, 10));
    }
  };

  useEffect(() => {
    validateInput();
  }, [inputValue]);
  return (
    <>
      <input
        type="number"
        placeholder="+91 "
        name="phone_number"
        required
        autoFocus
        value={inputValue}
        onChange={handleInputChange}
        id="phone_number"
        className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-teal-300 transition duration-100 focus:ring"
      />
    </>
  );
};

export default InputPhone;
