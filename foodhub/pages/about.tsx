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
        <div className=" bg-opacity-20 bg-blue-800 md:mb-3 w-[22rem] h-[40rem] cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-yellow-800">
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
    </div>
  );
};

export default About;
