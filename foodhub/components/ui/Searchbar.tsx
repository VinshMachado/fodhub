import React, { useState } from "react";
import Profilething from "./Profilething";
import { Input } from "@/components/ui/input";
import Router, { useRouter } from "next/router";
import MenuCheckbox from "./checkbox";
import Menu from "./menu";

export const Searchbar = () => {
  const router = useRouter();
  const [input, setinput] = useState("");
  //to set change//
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinput(e.target.value);
    console.log(input);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Perform action when Enter key is pressed

      nav();
    }
  };
  // to push to page//
  const nav = () => {
    router.push({ pathname: "/Searching", query: { search: input } });
  };
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
              onChange={handleChange}
              // Ensure the value is set to the input state
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                onClick={nav}
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
          <button
            className="hidden sm:flex items-center space-x-4 text-white hover:text-black hover:bg-white hover:border hover: rounded-lg px-4 py-2 hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
            onClick={() => {
              router.push("/about");
            }}
          >
            About Us
          </button>

          <div
            className="bg-orange-400"
            onClick={() => {
              router.push("/signup");
            }}
          >
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
