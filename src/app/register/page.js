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
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative lg:block hidden h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Pattern"
              src="/login/login1.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <Link
                href="/"
                className="flex flex-row gap-2 m-auto justify-start"
              >
                <img src="logo.png" alt="logo tailus" className="h-8" />
                <h1 className="text-2xl font-bold text-blue-950 font-ubuntu">
                  WalkEat
                </h1>
              </Link>

              <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Create your account
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Join our community today! Sign up for exclusive access and
                personalized experiences. Create your account and start
                exploring now!
              </p>

              <form
                action="register/verify"
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    required
                    autoFocus
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg p-2 border transition text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    required
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg p-2 border transition text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg p-2 border transition text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <InputPassword isRequired={true} value={newPass} changeFunction={handleNewpassChange} />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div></div>
                  <InputPassword isRequired={true} value={confirmPass} changeFunction={handleConfirmPassChange}/>
                </div>
                {showAlert && (
                  <div className="col-span-6 sm:col-span-3 w-fit text-red-500 font-bold lg:text-lg text-sm transition-all">
                    Passwords do not match
                  </div>
                )}
                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our{" "}
                    <a href="#" className="text-gray-700 underline">
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-gray-700 underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="inline-block shrink-0 rounded-md border font-bold border-teal-600 bg-teal-600 px-12 py-3 text-sm text-white transition hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?{"  "}
                    <Link
                      href="/login"
                      className="text-gray-700 underline font-bold"
                    >
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
      <footer className="w-full bg-gray-100 py-8 md:hidden">
        <div className="md:px-12 lg:px-28">
          <Link
            href="/"
            className="flex flex-row gap-2 m-auto justify-center items-center"
          >
            <img src="logo.png" alt="logo tailus" className="h-8" />
            <h1 className="text-2xl font-bold text-blue-950 font-ubuntu">
              WalkEat
            </h1>
          </Link>
          <div className="container m-auto space-y-0 text-gray-600">
            <ul
              role="list"
              className="flex flex-row items-center justify-center gap-4 py-4"
            >
              <li role="listitem">
                <a href="#" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li role="listitem">
                <a href="#" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li role="listitem">
                <a href="#" className="hover:text-primary">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="text-center">
              <span className="text-sm tracking-wide">
                Copyright © walkeat <span id="year" /> | All right reserved
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;
