import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-50 dark:bg-gray-700 rounded-xl mt-1 md:justify-center md:grid">
      <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="flex items-center">
          <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:underline"
                aria-current="page"
              >
                All
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Machine Learning
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Web
              </Link>
            </li>
            <li>
              <a
                to="/"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Security
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
