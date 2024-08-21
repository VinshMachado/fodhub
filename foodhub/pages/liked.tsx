import React, { useState } from "react";

const Liked: React.FC = () => {
  // State to manage the background color
  const [isPink, setIsPink] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    setIsPink((prev) => !prev);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="text-3xl flex justify-center my-3 font-semibold items-center">
        Liked Restaurants
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="bg-black w-4/5 h-64 my-7 relative rounded-xl flex">
          <img
            src="/loginBg.jpg"
            alt="Logo"
            className="px-2 py-2 h-32 sm:h-64 rounded-lg w-24 sm:w-60"
          />
          <div className="flex-col flex-grow">
            <div className="text-white font-semibold py-2 pl-1 text-lg sm:text-2xl">
              Name of Restaurant
            </div>
            <p className="text-white font-semibold px-2 py-2 pl-1 text-sm sm:text-2xl">
              Address of hotel India Mangalore Kodialbail 575004 Dubai next to
              Machado's house in London. He is a big nai rande gay Raul lives in
              India. He is a very nice guy.
            </p>
          </div>
          <button
            onClick={handleClick}
            className={`absolute bottom-4 right-4 p-3 ${
              isPink
                ? "bg-pink-400 text-white hover:shadow-pink-500"
                : "bg-gray-700 text-red-600 hover:shadow-blue-950"
            } rounded-lg focus:outline-none rounded-2xl border-2 border-dashed border-black px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-lg active:translate-x-0 active:translate-y-0 active:rounded-full `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Liked;
