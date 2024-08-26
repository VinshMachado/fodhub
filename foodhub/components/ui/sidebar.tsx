import React, { useState } from "react";

const sidebar = () => {
  const [expand, setExpand] = useState(true);
  const [size, setSize] = useState(
    "snap-center hidden bg-black flex flex-row items-center w-72 justify-center h-auto text-white sm:block"
  );
  const [iconName, setIconName] = useState([
    "Home",
    "Location",
    "Brokie",
    "Profile",
    "Sponsors",
    "Logout",
  ]);

  const expandThing = () => {
    setExpand(!expand);
    if (expand) {
      setSize(
        " ease-in-out duration-500 hidden bg-black flex flex-col items-center w-72 justify-center h-auto text-white sm:block"
      );
      setIconName([
        "Home",
        "Location",
        "liked",
        "Profile",
        "Sponsors",
        "Logout",
      ]);
    } else {
      setSize(
        "ease-in-out duration-500 hidden bg-black flex flex-col items-center w-20 justify-center h-auto text-white sm:block"
      );
      setIconName(["", "", "", "", ""]);
    }
  };

  return (
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
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
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
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <span>{iconName[3] /* Profile */}</span>
        </button>
        <button className="bg-zinc-950 w-full h-10 rounded-lg my-1 font-bold hover:bg-white hover:text-black flex items-center justify-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <span>{iconName[4] /* Profile */}</span>
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
            <span>{iconName[5] /* Logout */}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
