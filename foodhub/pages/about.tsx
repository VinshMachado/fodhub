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
    <div className="bg-cover bg-center bg-no-repeat h-full  lg:h-screen overflow-x-hidden  w-full">
      <div className="text-3xl  justify-center text-orange-500 py-2 flex items-center font-bold">
        ABOUT US
      </div>
      <Separator />

      <div className="text-3xl text-white justify-start flex px-2 py-3 items-center font-bold">
        <span>CREATORS</span>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-6">
        <div className=" hover:bg-orange-500 hover:bg-opacity-90 duration-700   bg-opacity-35  bg-black md:mb-3 w-[22rem] h-[40rem] cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform  ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-red-500">
          <img
            src="/loginBg.jpg"
            className="mb-1 h-60 rounded-full w-full px-3 py-3 =  duration-700 ease-in-out hover:shadow-lg"
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
        <div className=" hover:bg-orange-500 hover:bg-opacity-90 duration-700   bg-opacity-35  bg-black md:mb-3 w-[22rem] h-[40rem] cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform  ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-red-500">
          <img
            src="/loginBg.jpg"
            className="mb-1 h-60 w-full px-3 py-3 rounded-lg  duration-700 ease-in-out hover:shadow-lg"
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

        <div className=" hover:bg-orange-500 hover:bg-opacity-90 duration-700   bg-opacity-35  bg-black md:mb-3 w-[22rem] h-[40rem] cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform  ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-red-500">
          <img
            src="/loginBg.jpg"
            className="mb-1 h-60 w-full px-3 py-3 rounded-lg  duration-700 ease-in-out hover:shadow-lg"
            alt="Login Background"
          />
          <div className="flex flex-col items-center">
            <span className="flex justify-center text-3xl font-semibold py-1 text-white">
              roldan
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
        <div className="text-3xl ml-[4.7rem] text-white font-bold px-2 py-7 underline">
          info on our website
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full h-full  shadow-lg  ">
            <p className="text-4xl text-orange-500 text-center font-medium px-2">
              FoodMaps
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
