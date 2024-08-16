import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Profilething from "@/components/ui/Profilething";
import Modal from "@/components/ui/model";

const maincontent = () => {
  return (
    <div>
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

export default maincontent;
