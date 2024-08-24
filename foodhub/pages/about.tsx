import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CollapsibleDemo } from "@/components/ui/colapse";

const About = () => {
  return (
    <div className="bg-[url('/food.jpeg')]  bg-cover bg-center bg-no-repeat h-full  lg:h-screen overflow-x-hidden  w-full">
      <div className="text-3xl text-white justify-center py-2 flex items-center font-bold">
        ABOUT PAGE
      </div>
      <Separator />

      <div className="text-3xl text-white justify-start flex px-2 py-3 items-center font-bold">
        <span>Creators</span>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-6">
        <div className=" bg-opacity-35  bg-blue-800 md:mb-3 w-[22rem] h-[40rem] cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-yellow-800">
          <img
            src="/loginBg.jpg"
            className="mb-1 h-60 w-full px-3 py-3 rounded-lg  duration-300 ease-in-out hover:shadow-lg"
            alt="Login Background"
          />
          <div className="flex flex-col items-center">
            <span className="flex justify-center text-3xl font-semibold py-1 text-white">
              sionn
            </span>
            <p className="text-center text-white">
              blah blah blah info info infoblah blah blah blah info info
              infoblah blah blah blah info info info.
            </p>
          </div>
          <CollapsibleDemo />
        </div>

        <div className="bg-green-500 md:mb-3 w-[22rem] h-[40rem] cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-yellow-800">
          <img
            src="/loginBg.jpg"
            className="mb-1 h-60 w-full px-3 py-3 rounded-lg  duration-300 ease-in-out hover:shadow-lg"
            alt="Login Background"
          />
          <div className="flex flex-col items-center">
            <span className="flex justify-center text-3xl font-semibold py-1 text-white">
              machado
            </span>
            <p className="text-center text-white">
              blah blah blah info info infoblah blah blah blah info info
              infoblah blah blah blah info info info.
            </p>
          </div>
          <CollapsibleDemo />
        </div>

        <div className="bg-red-500 md:mb-3 w-[22rem] h-[40rem] cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-red-800">
          <img
            src="/loginBg.jpg"
            className="mb-1 h-60 w-full px-3 py-3 rounded-lg  duration-300 ease-in-out hover:shadow-lg"
            alt="Login Background"
          />
          <div className="flex flex-col items-center">
            <span className="flex justify-center text-3xl font-semibold py-1 text-white">
              roldy goldy
            </span>
            <p className="text-center text-white">
              blah blah blah info info infoblah blah blah blah info info
              infoblah blah blah blah info info info.
            </p>
          </div>
          <CollapsibleDemo />
        </div>
      </div>
      <div>
        <div className="text-3xl text-white font-bold px-2 py-7 underline">
          info on our website
        </div>
        <p className="text-xl text-white font-medium px-2">
          blah blah blah info info infoblah blah blah blah info info infoblah
          blah blah blah infoblah blah blah info info infoblah blah blah blah
          info info infoblah blah blah blah infoblah blah blah info info
          infoblah blah blah blah info info infoblah blah blah blah infoblah
          blah blah info info infoblah blah blah blah info info infoblah blah
          blah blah infoblah blah blah info info infoblah blah blah blah info
          info infoblah blah blah blah infoblah blah blah info info infoblah
          blah blah blah info info infoblah blah blah blah info.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center py-3 px-2">
          <a
            href="#_"
            className="relative inline-flex border-[1.8px]  hover:text-black border-white items-center justify-center h-60 w-72 px-6 py-3 overflow-hidden font-bold text-white rounded-lg hover:shadow-white shadow-2xl group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-cyan-500 group-hover:opacity-100"></span>
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border-2 border-white rounded-md opacity-20"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-15"></span>
            <span className="relative font-bold text-lg">
              press to go to our website
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
