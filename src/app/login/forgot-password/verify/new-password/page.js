"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const [newPass, setNewpass] = useState("");
  const [confirmPass, setConfirmPass] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [password, setPassword] = useState({
    type: "password",
    show: "",
  });
  const handlePassword = () => {
    if (password.type === "password") {
      setPassword({
        type: "text",
        show: "-slash",
      });
    } else {
      setPassword({
        type: "password",
        show: "",
      });
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
  };
  return (
    <>
      <section className="bg-login_bg w-full h-screen bg-cover z-0">
        <div className="bg-login_img md:bg-center lg:bg-cover w-1/2 h-screen bg-no-repeat bg-blend-multiply z-10 hidden lg:block"></div>
        <div className="md:bg-black md:opacity-80 h-screen w-full z-20 flex flex-1 absolute top-0">
          <div className="lg:w-1/2 w-full h-screen flex justify-center items-center absolute right-0 z-30">
            <div className="bg-white lg:w-96 lg:h-fit w-full h-full rounded-none lg:rounded-3xl">
              <h1 className="text-center lg:text-2xl text-2xl font-bold text-white bg-hirwa p-10 px-4 fixed top-0 lg:static w-full lg:rounded-t-3xl rounded-none">
                Create new password
              </h1>
              <form action="/">
                <div className="flex flex-col max-w-xs m-auto justify-center items-center opacity-100 lg:mt-auto mt-28">
                  <div className="border-b-2 p-2 mt-8 mb-2">
                    {" "}
                    <input
                      type={password.type}
                      name="newpassword"
                      id="newpassword"
                      placeholder="New password"
                      value={newPass}
                      onChange={handleNewpassChange}
                      className="lg:text-xl text-md font-bold outline-none text-black bg-white"
                    />
                    <span className=" cursor-pointer" onClick={handlePassword}>
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
                      className="lg:text-xl text-md font-bold outline-none text-black bg-white"
                    />
                    <span className=" cursor-pointer" onClick={handlePassword}>
                      <i
                        className={`fas fa-eye${password.show} inline text-gray-400`}
                      ></i>
                    </span>
                  </div>
                  {showAlert && (
                    <p className="w-3/4 my-4 text-red-500 font-bold lg:text-lg text-sm transition-all">
                      Passwords do not match
                    </p>
                  )}
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-hirwa p-3 rounded-3xl w-3/4 my-10 hover:text-black hover:border border-green-500 text-white hover:bg-white font-bold lg:text-xl text-sm transition-all"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
