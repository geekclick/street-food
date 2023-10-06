"use client";
import React, { useState } from "react";

const InputPassword = (props) => {
  const [passwordVisibility, setPasswordVisibility] = useState("-slash");
  const [inputType, setInputType] = useState("password");

  const handleClick = () => {
    setPasswordVisibility(passwordVisibility === "-slash" ? "" : "-slash");
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <>
      <div className="flex justify-between items-center mt-1 w-full relative rounded-md border-gray-200 bg-white text-lg border transition text-gray-400 shadow-sm">
        <input
          type={inputType}
          id="PasswordConfirmation"
          name="password_confirmation"
          value={props.newPass}
          className="w-full p-2 text-lg bg-white text-gray-700 rounded-md"
          required={props.isRequired ? "required" : ""}
          onChange={props.changeFunction}
          placeholder={props.placeholder}
        />
        <i
          className={`fas fa-eye${passwordVisibility} p-3 absolute right-1 z-50 cursor-pointer`}
          onClick={handleClick}
        ></i>
      </div>
    </>
  );
};

export default InputPassword;
