"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [input, setInput] = useState({ type: "text", label: "Username" });
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

  const validateInput = () => {
    if (inputValue.length > 6) {
      setInputValue(inputValue.substring(0, 6));
    }
  };

  useEffect(() => {
    validateInput();
  }, [inputValue]);

  return (
    <>
      <section className="bg-login_bg w-full h-screen bg-cover z-0">
        <div className="bg-login_img xl:bg-cover lg:bg-center w-1/2 h-screen bg-no-repeat bg-blend-multiply z-10 hidden lg:block"></div>
        <div className="md:bg-black md:opacity-80 h-screen w-full z-20 flex flex-1 absolute top-0">
          <div className="lg:w-1/2 lg:h-screen h-full w-full flex justify-center items-center absolute right-0 z-30">
            <div className="bg-white lg:w-96 lg:h-fit w-full h-full rounded-none lg:rounded-3xl">
              <h1 className="text-center lg:text-3xl text-2xl font-bold text-white bg-hirwa p-8 lg:static fixed top-0 w-full lg:rounded-t-3xl rounded-none">
                Log In
              </h1>
              <form action="/">
                <div className="flex flex-col max-w-xs m-auto justify-center items-center opacity-100 lg:mt-auto mt-28">
                  <input
                    type={input.type}
                    name={input.label}
                    id={input.label}
                    placeholder={input.label}
                    className="lg:text-xl text-xl font-bold p-0 outline-none border-b-2 my-10 text-black bg-white"
                    autoFocus
                    required
                  />
                  <div className="border-b-2 p-0 mt-8 mb-2">
                    <input
                      type={password.type}
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="lg:text-xl text-xl font-bold outline-none text-black bg-white"
                      required
                    />
                    <span className=" cursor-pointer" onClick={handlePassword}>
                      <i
                        className={`fas fa-eye${password.show} inline text-gray-400`}
                      ></i>
                    </span>
                  </div>
                  <div className="flex w-full justify-end lg:text-sm text-xs px-4 mb-8 text-gray-500">
                    <Link
                      rel="noopener noreferrer"
                      href="/login/forgot-password"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="bg-hirwa p-3 rounded-3xl w-3/4 hover:text-black hover:border border-hirwa text-white hover:bg-white font-bold lg:text-xl text-sm transition-all"
                  >
                    Log In
                  </button>
                  <p className="lg:text-sm text-xs text-center mt-4 dark:text-gray-400">
                    Dont have account?
                    <Link
                      href="/signup"
                      rel="noopener noreferrer"
                      className="focus:underline hover:underline mx-1 font-bold"
                    >
                      Sign up here
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
                    aria-label="Login with Google"
                    type="button"
                    className="flex items-center justify-center w-full p-4 md:w-1/2 lg:w-full m-auto text-sm space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri hover:text-hirwa hover:border-hirwa transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                  </button>
                  <button
                    onClick={() => {
                      setInput({ type: "number", label: "Phone number" });
                    }}
                    aria-label="Login with Phone Number"
                    role="button"
                    className="flex items-center justify-center w-full md:w-1/2 lg:w-full m-auto p-3 text-sm space-x-1 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri hover:text-hirwa hover:border-hirwa transition-all"
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
                    <p>Login with Phone Number</p>
                  </button>
                  <button
                    onClick={() => {
                      setInput({ type: "email", label: "Email" });
                    }}
                    aria-label="Login with Email"
                    role="button"
                    className="flex items-center justify-center w-full md:w-1/2 lg:w-full m-auto p-3 text-sm space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri hover:text-hirwa hover:border-hirwa transition-all"
                  >
                    <svg
                      data-name="1-Email"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" />
                    </svg>
                    <p>Login with Email</p>
                  </button>
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
