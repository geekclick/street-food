"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
        <div className="bg-login_img md:bg-center lg:bg-cover w-1/2 h-screen bg-no-repeat bg-blend-multiply z-10 hidden lg:block"></div>
        <div className="md:bg-black md:opacity-80 h-screen w-full z-20 flex flex-1 absolute top-0">
          <div className="lg:w-1/2 w-full h-screen flex justify-center items-center absolute right-0 z-30">
            <div className="bg-white lg:w-96 lg:h-96 w-full h-full rounded-none lg:rounded-3xl">
              <h1 className="text-center lg:text-2xl text-xl font-bold text-white bg-hirwa p-10 px-4 fixed top-0 lg:static w-full lg:rounded-t-3xl rounded-none">
                Verify your contact details
              </h1>
              <form action="/">
                <div className="flex flex-col max-w-xs m-auto justify-center items-center opacity-100 lg:mt-auto mt-28">
                  <input
                    type="number"
                    name="otp"
                    id="otp"
                    placeholder="Enter OTP"
                    maxLength={6}
                    value={inputValue}
                    onChange={handleInputChange}
                    className="lg:text-lg text-sm font-bold p-4 outline-none border-b-2 my-10 text-black bg-white"
                    autoFocus
                    required
                  />
                  <button
                    type="submit"
                    className="bg-hirwa p-3 rounded-3xl w-3/4 hover:text-black hover:border border-green-500 text-white hover:bg-white font-bold lg:text-xl text-sm transition-all"
                  >
                    Verify
                  </button>
                  <p className="lg:text-sm text-xs text-center mt-2 mb-10 dark:text-gray-400">
                    <Link
                      href="/signup"
                      rel="noopener noreferrer"
                      className="focus:underline hover:underline mx-1 font-bold"
                    >
                      try different email/phone number
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
