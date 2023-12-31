"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState("menuItems hide");
  const handleClick = () =>
    setShowMenu(showMenu === "menuItems" ? "menuItems hide" : "menuItems");

  return (
    <>
      <section className="bg-hirwa fixed z-50 w-full top-0">
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
          <Link className="text-3xl font-bold leading-none" href="/">
            <img
              className="h-10 absolute z-50 top-4 left-5"
              src="/logo.png"
              alt="logo here"
            />
          </Link>
          <div className="lg:hidden flex flex-row gap-2">
            <Link
              className="block px-4 py-2 mb-0 leading-loose text-xs text-center text-white font-semibold bg-hirwa hover:bg-kala  rounded-full"
              href="auth/register"
            >
              Resgister
            </Link>
            <button
              className="navbar-burger flex items-center text-hirwa p-3"
              onClick={handleClick}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* <title>Mobile menu</title> */}
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link
                className="text-base focus:text-hirwa text-hirwa hover:text-gray-500 font-bold transition-all"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-sm hover:text-hirwa hover:text-base transition-all text-light"
                href="#"
              >
                About Us
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-sm text-light hover:text-hirwa hover:text-base transition-all"
                href="#"
              >
                Services
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-sm text-light hover:text-hirwa hover:text-base transition-all"
                href="#"
              >
                Blog
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-sm text-light hover:text-hirwa hover:text-base transition-all"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            href="auth/login"
          >
            Sign In
          </Link>
          <Link
            className="hidden lg:inline-block py-2 px-6 bg-hirwa hover:bg-hirwa text-sm text-white font-bold rounded-xl transition duration-200"
            href="auth/register"
          >
            Resgister
          </Link>
        </nav>
        {/* <div className={`navbar-menu relative z-50 ${showMenu} transition-all`}> */}
        {/* <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div> */}
        <nav
          className={`fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto ${showMenu}`}
        >
          <div className="flex items-center mb-8">
            <button
              className="navbar-close absolute right-4 top-5"
              onClick={handleClick}
            >
              <svg
                className="h-6 w-6 text-light cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mt-8">
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-light hover:bg-blue-50 hover:text-hirwa rounded"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-light hover:bg-blue-50 hover:text-hirwa rounded"
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-light hover:bg-blue-50 hover:text-hirwa rounded"
                  href="#"
                >
                  Services
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-light hover:bg-blue-50 hover:text-hirwa rounded"
                  href="#"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-light hover:bg-blue-50 hover:text-hirwa rounded"
                  href="#"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold lg:leading-none bg-gray-100 hover:bg-gray-200 rounded-xl"
                href="/login"
              >
                Sign in
              </Link>
              <Link
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-hirwa hover:bg-kala  rounded-xl"
                href="/register"
              >
                Resgister
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-light">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
        {/* </div> */}
      </section>
    </>
  );
};

export default Header;
