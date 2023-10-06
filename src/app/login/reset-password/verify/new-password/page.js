"use client";
import Link from "next/link";
import React, { useState } from "react";
import InputPassword from "@/components/InputPassword";

const Page = () => {
  const [newPass, setNewpass] = useState("");
  const [confirmPass, setConfirmPass] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const handleNewpassChange = (event) => {
    setNewpass(event.target.value);
  };

  const handleConfirmPassChange = (event) => {
    setConfirmPass(event.target.value);
  };
  const handleSubmit = (event) => {
    if (newPass != confirmPass) {
      event.preventDefault();
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };
  return (
    <>
      <section className="bg-gray-50 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="/"
            className="flex flex-row gap-2 p-8 justify-center items-center"
          >
            <img src="/logo.png" alt="logo tailus" className="h-8" />
            <h1 className="text-2xl font-bold text-blue-950 font-ubuntu">
              WalkEat
            </h1>
          </Link>
          <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Change Password
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="/">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  New Password
                </label>
                <InputPassword
                  isRequired={true}
                  value={newPass}
                  changeFunction={handleNewpassChange}
                  placeholder="********"
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <InputPassword
                  isRequired={true}
                  value={confirmPass}
                  changeFunction={handleConfirmPassChange}
                  placeholder="********"
                />
              </div>
              {showAlert && (
                <div className="col-span-6 sm:col-span-3 w-fit text-red-500 font-bold lg:text-lg text-sm transition-all">
                  Passwords do not match
                </div>
              )}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="newsletter"
                    className="font-light text-gray-500"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Reset passwod
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
