import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="bg-white md:bg-login md:bg-cover bg-contain bg-center md:h-screen w-full flex md:items-center justify-center">
        <div className="bg-white py-6 sm:py-8 lg:py-12 rounded-lg">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="md:mt-0 my-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
              Sign in
            </h2>
            <form className="mx-auto max-w-lg rounded-lg border">
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label
                    htmlFor="phone_number"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="+91 "
                    name="phone_number"
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-teal-300 transition duration-100 focus:ring"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    name="password"
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-teal-300 transition duration-100 focus:ring"
                  />
                </div>
                <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                  Sign in
                </button>
                <div className="relative flex items-center justify-center">
                  <span className="absolute inset-x-0 h-px bg-gray-300" />
                  <span className="relative bg-white px-4 text-sm text-gray-400">
                    Sign in with social
                  </span>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-lg bg-teal-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-teal-800 focus-visible:ring active:bg-teal-800 md:text-base">
                  <svg
                    className="h-5 w-5 shrink-0 bg-white p-0.5 rounded-sm"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                  <svg
                    fill="dimgray"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                  </svg>
                  Continue with Email
                </button>
              </div>
              <div className="flex items-center justify-center bg-gray-100 p-4 rounded-b-lg">
                <p className="text-center text-sm text-gray-500">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-500 transition duration-100 hover:text-teal-600 active:text-kala"
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
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
