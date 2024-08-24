import React from "react";
import Profilething from "./Profilething";
import { Input } from "@/components/ui/input";

import MenuCheckbox from "./checkbox";
import Menu from "./menu";

export const Searchbar = () => {
  return (
    <div className="h-auto w-full ">
      <div className="w-full bg-orange-400 h-16 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <p>foodHub</p>
        </div>

        {/* Search Form */}
        <form className="flex-grow flex items-center max-w-md">
          <label className="sr-only">Search</label>
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search Restaurants Or Dishes"
              className="pr-10 h-11 bg-white"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-5 h-5 text-gray-500"
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
            </div>
          </div>

          <div className="hidden sm:flex justify-start items-center ">
            <MenuCheckbox />
          </div>
        </form>
        <div className="flex items-center space-x-4">
          {/* MenuCheckbox will be hidden on mobile screens */}

          {/* Icons and Profile Section will be hidden on mobile screens */}
          <div className="hidden sm:flex items-center space-x-4 text-white">
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
          </div>
          <div className="bg-orange-400">
            <Profilething />
          </div>
        </div>
      </div>
      <div className="h-14  flex items-center justify-center bg-white  block sm:hidden">
        <Menu />
      </div>
    </div>
  );
};
