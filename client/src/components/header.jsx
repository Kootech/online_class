import React from "react";
import app from "../images/app.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-md">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link to="/" className="flex items-center">
          <img src={app} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Online School
          </span>
        </Link>
        <div className="flex items-center">
          <Link
            to="/register"
            className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
