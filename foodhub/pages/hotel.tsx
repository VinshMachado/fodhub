import React, { useState } from "react";
import Maincontent from "@/components/maincontent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Profilething from "@/components/ui/Profilething";
import Modal from "@/components/ui/model";

const Hotel = () => {
  const [expand, setExpand] = useState(true);
  const [iconName, setIconName] = useState([
    "Home",
    "Location",
    "Liked",
    "Profile",
    "Logout",
  ]);

  const expandThing = () => {
    setExpand(!expand);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex h-screen w-screen bg-white">
        {/* Sidebar */}
        <div
          className={`transition-transform duration-500 ${
            expand ? "w-72" : "w-20"
          } bg-black text-white flex flex-col items-center`}
        >
          <div
            className="flex justify-start w-8 ml-5 pt-5 hover:text-slate-400 cursor-pointer"
            onClick={expandThing}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center mt-20 space-y-10">
            <div className="w-full flex justify-center items-center mb-8 -mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            {iconName.map((name, index) => (
              <button
                key={index}
                className="bg-zinc-950 w-full h-10 rounded-lg my-1 font-bold flex items-center justify-center space-x-2 hover:bg-white hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {/* SVG paths for different icons go here */}
                </svg>
                <span>{name}</span>
              </button>
            ))}
            <div className="h-full flex justify-center items-center w-full pt-10">
              <button className="bg-red-900 w-full m-1 h-10 rounded-lg flex items-center justify-center font-bold hover:bg-white hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
                <span>{iconName[4]}</span>
              </button>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col w-full">
          <div className="w-full bg-orange-400 h-16 flex items-center justify-center">
            <form className="ml-10 w-full max-w-lg mt-1">
              <label className="sr-only">Search</label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full h-12 p-4 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border-2"
                >
                  <svg
                    className="w-5 h-5 text-black"
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
            <div className="flex items-center text-white ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 mx-4 hover:text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>
          </div>

          <div className="mt-5 h-56 flex justify-center items-center bg-slate-500 p-4 rounded-sm">
            <div className="w-full max-w-lg text-4xl font-bold">
              <Carousel className="h-full flex items-end">
                <CarouselContent className="text-white">
                  <CarouselItem>Food</CarouselItem>
                  <CarouselItem>Place</CarouselItem>
                  <CarouselItem>Price</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
