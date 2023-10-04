"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [loginMethod, setLoginMethod] = useState(false);
  const [newPass, setNewpass] = useState("");
  const [confirmPass, setConfirmPass] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [input, setInput] = useState({ type: "number", label: "Phone Number" });
  const [password, showPassword] = useState({
    type: "password",
    show: "",
  });
  const handlePassword = () => {
    if (password.type === "password") {
      showPassword({
        type: "text",
        show: "-slash",
      });
    } else {
      showPassword({
        type: "password",
        show: "",
      });
    }
  };
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const validateInput = () => {
    if (inputValue.length > 10) {
      setInputValue(inputValue.substring(0, 10));
    }
  };

  const handleNewpassChange = (event) => {
    setNewpass(event.target.value);
  };

  const handleConfirmPassChange = (event) => {
    setConfirmPass(event.target.value);
  };
  const handleSubmit = (event) => {
    if (newPass !== confirmPass) {
      event.preventDefault();
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
    if (inputValue.length == 10) {
      setAlertMessage(false);
    } else {
      setAlertMessage(true);
      if (input.type === "number") {
        event.preventDefault();
      }
    }
  };

  useEffect(() => {
    validateInput();
  }, [inputValue]);

  return (
    <>
      <section className="bg-login_bg w-full h-screen bg-cover z-0">
        <div className="bg-login_img md:bg-center lg:bg-cover w-1/2 h-screen bg-no-repeat bg-blend-multiply z-10 hidden lg:block"></div>
        <div className="md:bg-black md:opacity-80 h-screen w-full z-20 flex flex-1 absolute top-0">
          <div className="lg:w-1/2 w-full h-screen flex justify-center items-center absolute right-0 z-30">
            <div className="bg-white lg:w-2/3 xl:h-5/6 lg:h-fit w-full h-full rounded-none lg:rounded-3xl">
              <h1 className="text-center lg:text-4xl text-2xl font-bold text-white bg-hirwa p-10 px-4 fixed top-0 lg:static w-full lg:rounded-t-3xl rounded-none">
                Sign Up
              </h1>
              <form action="signup/verify">
                <div className="flex flex-col max-w-xs m-auto justify-center items-center opacity-100 lg:mt-auto mt-28">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your full name"
                    className="lg:text-xl text-xl font-bold outline-none border-b-2 mt-10 text-black bg-white"
                    autoFocus
                    required
                  />
                  <div className="flex flex-col max-w-xs m-auto justify-center items-center opacity-100">
                    {input.type === "number" && (
                      <input
                        type="number"
                        name="phone-number"
                        id="phone-number"
                        placeholder="Phone number"
                        maxLength={10}
                        value={inputValue}
                        onChange={handleInputChange}
                        className="lg:text-xl text-xl font-bold outline-none border-b-2 mt-8 text-black bg-white"
                        required
                      />
                    )}
                    {alertMessage && input.type === "number" && (
                      <p className="w-3/4 my-4 text-red-500 font-bold lg:text-sm text-xs transition-all">
                        Please enter valid number
                      </p>
                    )}
                    {input.type === "email" && (
                      <input
                        type="emai;"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="lg:text-xl text-xl font-bold outline-none border-b-2 mt-8 text-black bg-white"
                        required
                      />
                    )}
                  </div>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="lg:text-xl text-xl font-bold outline-none border-b-2 mt-10 text-black bg-white"
                    required
                  />
                  <div className="flex flex-col max-w-xs m-auto justify-center items-center opacity-100">
                    <div className="border-b-2 p-2 mt-8 mb-2">
                      {" "}
                      <input
                        type={password.type}
                        name="newpassword"
                        id="newpassword"
                        placeholder="New password"
                        value={newPass}
                        onChange={handleNewpassChange}
                        className="lg:text-xl text-xl font-bold outline-none text-black bg-white"
                      />
                      <span
                        className=" cursor-pointer"
                        onClick={handlePassword}
                      >
                        <i
                          className={`fas fa-eye${password.show} inline text-gray-400`}
                        ></i>
                      </span>
                    </div>
                    <div className="border-b-2 p-2 mt-8 mb-2">
                      <input
                        type={password.type}
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPass}
                        onChange={handleConfirmPassChange}
                        className="lg:text-xl text-xl font-bold outline-none text-black bg-white"
                      />
                      <span
                        className=" cursor-pointer"
                        onClick={handlePassword}
                      >
                        <i
                          className={`fas fa-eye${password.show} inline text-gray-400`}
                        ></i>
                      </span>
                    </div>
                    {showAlert && (
                      <p className="w-3/4 my-4 text-red-500 font-bold lg:text-sm text-xs transition-all">
                        Passwords do not match
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-hirwa p-3 rounded-3xl w-full mt-4 hover:text-black hover:border border-green-500 text-white hover:bg-white font-bold lg:text-xl text-sm transition-all"
                  >
                    Sign Up
                  </button>
                  <p className="lg:text-sm text-xs text-center mt-4 dark:text-gray-400">
                    Already SignUp?
                    <Link
                      href="/login"
                      rel="noopener noreferrer"
                      className="focus:underline hover:underline mx-1 font-bold"
                    >
                      Login here
                    </Link>
                  </p>
                </div>
              </form>
              <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
              </div>
              <div>
                <div className="my-6 space-y-4 px-16">
                  <button
                    aria-label="Sign Up with Google"
                    type="button"
                    className="flex items-center justify-center w-full m-auto p-4 text-sm space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri hover:text-green-500 hover:border-green-500 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Sign Up with Google</p>
                  </button>
                  {loginMethod && (
                    <button
                      onClick={() => {
                        setInput({ type: "number", label: "Phone number" });
                        setLoginMethod(false);
                      }}
                      aria-label="Sign Up with Phone Number"
                      role="button"
                      className="flex items-center justify-center w-full m-auto p-3 text-sm space-x-1 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri hover:text-green-500 hover:border-green-500 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-10 h-10 fill-current"
                      >
                        <path
                          d="M304.576 119.703h-97.148c-18.358 0-33.247 11.434-33.247 25.54v221.509c0 14.106 14.89 25.545 33.247 25.545h97.148c18.359 0 33.243-11.44 33.243-25.545V145.243c0-14.111-14.884-25.54-33.243-25.54zm-73.68 13.752h50.213v14.115h-50.213zm42.132 242.629h-34.05v-14.116h34.05zm44.025-31.51H194.947V163.39h122.106z"
                          data-name="Smart Phone 02"
                        />
                      </svg>
                      <p>Sign Up with Phone Number</p>
                    </button>
                  )}
                  {!loginMethod && (
                    <button
                      onClick={() => {
                        setInput({ type: "email", label: "Email" });
                        setLoginMethod(true);
                      }}
                      aria-label="Sign Up with Email"
                      role="button"
                      className="flex items-center justify-center w-full m-auto p-3 text-sm space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri hover:text-green-500 hover:border-green-500 transition-all"
                    >
                      <svg
                        data-name="1-Email"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" />
                      </svg>
                      <p>Sign Up with Email</p>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
