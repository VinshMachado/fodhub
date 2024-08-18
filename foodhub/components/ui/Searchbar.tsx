import React from "react";
import Profilething from "./Profilething";
import { CheckboxItem } from "@radix-ui/react-dropdown-menu";
import MenuCheckbox from "./checkbox";

export const Searchbar = () => {
  return (
    <div className="w-full bg-orange-400 h-16 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img
          src="/path-to-your-logo.png" // Replace with your logo path
          alt="Logo"
          className="h-10"
        />
      </div>

      {/* Search Form */}
      <form className="flex-grow flex items-center max-w-md">
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <input
            type="search"
            id="default-search"
            className="block w-full h-12 p-4 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full border-2 text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </form>
      <div className="flex justify-start items-center -translate-x-10">
        <MenuCheckbox />
      </div>
      {/* Menu and Profile Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 hover:text-slate-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
          <div className="bg-orange-400">
            <Profilething />
          </div>
        </div>
      </div>
    </div>
  );
};
