import React from "react";
import { Separator } from "@/components/ui/separator";

const sponsor = () => {
  return (
    <div className="bg-slate-700 h-screen w-screen overflow-x-hidden bg-[url('/money.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center items-center text-white font-bold text-3xl my-4">
        Sponsors
      </div>
      <Separator />
      <div className="flex justify-evenly items center flex-wrap mt-3">
        <div className="bg-[#A67C00] my-3 mx-2 md:mb-3 w-[24rem] h-fit cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-[#A67C00]">
          <img
            src="/roger.jpg"
            className="h-60 w-60 pt-2 rounded-full object-cover duration-300 ease-in-out hover:shadow-lg"
            alt="Login Background"
          />

          <div className="flex flex-col items-center">
            <span className="flex justify-center text-3xl font-semibold py-1 text-white">
              The Great CEO Dr.Roger Vas
            </span>
            <p className="text-center pb-2 text-white">
              He is one of our major sponsor who lost 4k on this project we
              thank you may god bless you and give you many kids.
            </p>
          </div>
        </div>
        <div className="bg-red-500 my-3 mx-2 md:mb-3 w-[24rem] h-fit cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-red-800">
          <img
            src="/.jpg"
            className="h-60 w-60 pt-2 rounded-full object-cover duration-300 ease-in-out hover:shadow-lg"
            alt="Login Background"
          />

          <div className="flex flex-col items-center">
            <span className="flex justify-center text-3xl font-semibold py-1 text-white">
              roldy goldy
            </span>
            <p className="text-center pb-2 text-white">
              blah blah blah info info infoblah blah blah blah info info
              infoblah blah blah blah info info info.
            </p>
          </div>
        </div>
        <div className="bg-red-500 my-3 mx-2 md:mb-3 w-[24rem] h-fit cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-red-800">
          <img
            src="/loginBg.jpg"
            className="h-60 w-60 pt-2 rounded-full object-cover duration-300 ease-in-out hover:shadow-lg"
            alt="Login Background"
          />

          <div className="flex flex-col items-center">
            <span className="flex justify-center text-3xl font-semibold py-1 text-white">
              roldy goldy
            </span>
            <p className="text-center pb-2 text-white">
              blah blah blah info info infoblah blah blah blah info info
              infoblah blah blah blah info info info.
            </p>
          </div>
        </div>
        <div className="bg-red-500 my-3 mx-2 md:mb-3 w-[24rem] h-fit cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-red-800">
          <img
            src="/loginBg.jpg"
            className="h-60 w-60 pt-2 rounded-full object-cover duration-300 ease-in-out hover:shadow-lg"
            alt="Login Background"
          />

          <div className="flex flex-col items-center">
            <span className="flex justify-center text-3xl font-semibold py-1 text-white">
              roldy goldy
            </span>
            <p className="text-center pb-2 text-white">
              blah blah blah info info infoblah blah blah blah info info
              infoblah blah blah blah info info info.
            </p>
          </div>
        </div>
        <div className="bg-red-500 my-3 mx-2 md:mb-3 w-[24rem] h-fit cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-red-800">
          <img
            src="/loginBg.jpg"
            className="h-60 w-60 pt-2 rounded-full object-cover duration-300 ease-in-out hover:shadow-lg"
            alt="Login Background"
          />

          <div className="flex flex-col items-center">
            <span className="flex justify-center text-3xl font-semibold py-1 text-white">
              roldy goldy
            </span>
            <p className="text-center pb-2 text-white">
              blah blah blah info info infoblah blah blah blah info info
              infoblah blah blah blah info info info.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sponsor;
