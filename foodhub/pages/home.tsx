import React from "react";

const home = () => {
  return (
    <div className="h-screen w-screen  flex bg-gray-400">
      <div className=" hidden bg-white w-72 flex items-center   justify-center h-auto   text-white sm:block ">
        <div className="rounded flex flex-col items-center justify-center space-y-10 mt-48">
          <button className="bg-zinc-950  w-[13rem] h-10 rounded-lg my-1 font-bold hover:text-black hover:bg-white">
            home
          </button>
          <button className="bg-zinc-950 w-[13rem] h-10 rounded-lg my-1 font-bold hover:bg-white hover:text-black">
            shop
          </button>
          <button className="bg-zinc-950 w-[13rem] h-10 rounded-lg my-1 font-bold hover:bg-white hover:text-black">
            location
          </button>
          <button className="bg-zinc-950 w-[13rem] h-10 rounded-lg my-1 font-bold hover:bg-white hover:text-black">
            you
          </button>
          <div className="h-ful  flex justify-center items-center w-full pt-36">
            <button className="bg-red-900  w-[13rem] h-10 rounded-lg my-1 font-bold hover:bg-white hover:text-black">
              logout
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white h-16 w-full   flex items-center justify-center ">
        <form className="w-1/2  sm:w-1/2 mt-1">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <div className="pt-[2.5px]">
              <input
                type="search"
                id="default-search"
                className="block w-full h-12 p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search "
                required
              />
              <div className="pt-1">
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default home;
