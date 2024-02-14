import React from "react";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div
      className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b
    dark:border-gray-700 border-gray-200"
    >
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:border-gray-700 dark:text-gray-900 dark:px-2 dark:py-2">
            Google2.0 🔎
          </p>
        </Link>
        <button type="button" onClick={() => {}}></button>
      </div>
    </div>
  );
}
