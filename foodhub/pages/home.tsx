import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Profilething from "@/components/ui/Profilething";
import Modal from "@/components/ui/model";

const Home = () => {
  const [expand, setExpand] = useState(true);
  const [size, setSize] = useState(
    "snap-center hidden bg-black flex flex-row items-center w-72 justify-center h-auto text-white sm:block"
  );

  const [iconName, setIconName] = useState([
    "Home",
    "Location",
    "liked",
    "Profile",
    "Logout",
  ]);

  const expandThing = () => {
    setExpand(!expand);
    if (expand) {
      setSize(
        " ease-in-out duration-500 hidden bg-black flex flex-col items-center w-72 justify-center h-auto text-white sm:block"
      );
      setIconName(["Home", "Location", "liked", "Profile", "Logout"]);
    } else {
      setSize(
        "ease-in-out duration-500 hidden bg-black flex flex-col items-center w-20 justify-center h-auto text-white sm:block"
      );
      setIconName(["", "", "", "", ""]);
    }
  };

  return (
    <div className="h-full w-screen bg-white flex">
      <div className={`${size}`}>
        <div
          className="flex justify-start w-[32px] ml-5 pt-5 hover:text-slate-400 cursor-pointer "
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

        <div className="rounded  flex flex-col items-center justify-center space-y-10 mt-20 ">
          {/* humungus Icon in the Middle */}
          <div className="w-full flex justify-center items-baseline mb-8 -mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-[10rem] h-[10rem]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>

          {/* Button Sections */}
          <button className=" bg-zinc-950 w-full h-10 rounded-lg my-1 font-bold hover:text-black hover:bg-white flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>{iconName[0] /* home */}</span>
          </button>

          <button className="bg-zinc-950 w-full h-10 rounded-lg my-1 font-bold hover:bg-white hover:text-black flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span>{iconName[1] /* location */}</span>
          </button>

          <button className="bg-zinc-950 w-full h-10 rounded-lg my-1 font-bold hover:bg-white hover:text-black flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <span>{iconName[2] /* liked */}</span>
          </button>

          <button className="bg-zinc-950 w-full h-10 rounded-lg my-1 font-bold hover:bg-white hover:text-black flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span>{iconName[3] /* Profile */}</span>
          </button>

          <div className="h-full flex justify-center items-center w-full pt-10">
            <button className="bg-red-900 w-full m-1 h-10 rounded-lg flex items-center justify-center my-1 font-bold hover:bg-white hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
              <span>{iconName[4] /* Logout */}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col  w-full items-center">
        <div className=" w-full bg-orange-400 h-16 sm:w-full flex items-center justify-center">
          <form className="ml-10 w-1/2 sm:w-1/2 mt-1">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <div className="pt-[2.5px]">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full h-12 p-4 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <div className="pt-1">
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full border-2 text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              </div>
            </div>
          </form>

          <div className="flex items-center text-white">
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
            <div className=" bg-orange-400 ">
              <Profilething />
            </div>
          </div>
        </div>

        {/* New "Hello" div */}
        <div className="mt-5 h-56 flex justify-center items-end rounded-sm w-11/12  top-16 bg-slate-500 p-4">
          <div className="h-full  w-11/12 text-4xl font-bold">
            <Carousel className="h-full flex items-end">
              <CarouselContent className="text-white">
                <CarouselItem>food </CarouselItem>
                <CarouselItem>place</CarouselItem>
                <CarouselItem>price</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="mt-5 h-` w-11/12 flex justify-center  items-end rounded-sm  top-16 bg-slate-500 p-4 ">
          <div className="  w-11/12 md:text-4xl font-bold text-lg">
            <Carousel>
              <CarouselContent className="text-white ">
                <CarouselItem className=" basis-1/3 justify-evenly">
                  chicken{" "}
                </CarouselItem>
                <CarouselItem className="basis-1/3"> pijja</CarouselItem>
                <CarouselItem className="basis-1/3">burgir</CarouselItem>
                <CarouselItem className="basis-1/3">biryani</CarouselItem>
                <CarouselItem className="basis-1/3">
                  {" "}
                  butter chicken
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="pt-3 text-4xl font-bold">Chinese Restraunts</div>
        <div className="mt-4 h-64 w-11/12 flex justify-center items-center  md:text-4xl text-lg rounded-sm  top-16 bg-yellow-700 late-500 p-4">
          <div className="  w-11/12 font-bold">
            <Carousel>
              <CarouselContent className="text-white">
                <CarouselItem className=" basis-1/3 ">
                  Chinese restraunt 1{" "}
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  {" "}
                  Chinese restraunt 2
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  Chinese restraunt 3
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  Chinese restraunt 4
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  {" "}
                  butter chicken
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="pt-3 text-4xl font-bold">North Indian Restraunts</div>
        <div className="mt-4 h-64 w-11/12 flex justify-center items-center rounded-sm   md:text-4xl text-lg top-16 bg-orange-500 p-4">
          <div className="  w-11/12 text-4xl font-bold">
            <Carousel>
              <CarouselContent className="text-white">
                <CarouselItem className=" basis-1/3 ">
                  north indian 1{" "}
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  {" "}
                  north indian 2
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  north indian 3
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  north indian 4
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  {" "}
                  butter chicken
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="pt-3 text-4xl font-bold">South Indian restraunts</div>
        <div className="mt-4 h-64 w-11/12 flex justify-center items-center rounded-sm  md:text-4xl text-lg top-16 bg-black p-4">
          <div className="  w-11/12 text-4xl font-bold">
            <Carousel>
              <CarouselContent className="text-white">
                <CarouselItem className=" basis-1/3 ">
                  south indian 1{" "}
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  {" "}
                  south indian 2
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  south indian 3
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  south indian 4
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  {" "}
                  butter chicken
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
