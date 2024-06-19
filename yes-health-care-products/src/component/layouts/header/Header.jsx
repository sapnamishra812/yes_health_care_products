// src/components/Header.jsx
import React, { useState } from "react";
import dummy_logo from "../../../assets/dummy_logo.jpg"; // Corrected path

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={dummy_logo} alt="Company Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Yes Health Care Products</span>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto`}
        >
          <a
            href="#"
            className="block md:inline-block mt-2 md:mt-0 md:ml-4 text-gray-800"
          >
            Home
          </a>
          <a
            href="#"
            className="block md:inline-block mt-2 md:mt-0 md:ml-4 text-gray-800"
          >
            About
          </a>
          <a
            href="#"
            className="block md:inline-block mt-2 md:mt-0 md:ml-4 text-gray-800"
          >
            Services
          </a>
          <a
            href="#"
            className="block md:inline-block mt-2 md:mt-0 md:ml-4 text-gray-800"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
