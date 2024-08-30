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
            src="/1701455732972.jpg"
            className="mb-1 h-auto rounded-full w-60 px-3 py-3 duration-700 ease-in-out hover:shadow-lg"
            alt="Login Background"
          />
          <div className="flex flex-col items-center">
            <span className="flex justify-center text-3xl font-semibold py-1 text-white">
              Sion Lobo
            </span>
            <p className="text-center text-sm p-2 text-white">
              In addition to their technical prowess, Sion is a problem-solver.
              They tackle challenges head-on and come up with innovative
              solutions that enhance the overall user experience. They are also
              continuously learning and staying up-to-date with the latest
              trends and best practices in front-end development, which is
              evident in the quality of their work.
            </p>
          </div>
          <CollapsibleDemo />
        </div>
        <div className=" hover:bg-orange-500 hover:bg-opacity-90 duration-700   bg-opacity-35  bg-black md:mb-3 w-[22rem] h-[40rem] cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform  ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-red-500">
          <img
            src="/1713638190478.jpg"
            className="mb-1 h-auto w-60 px-3 py-3 rounded-full  duration-700 ease-in-out hover:shadow-lg"
            alt="Login Background"
          />
          <div className="flex flex-col items-center">
            <span className="flex justify-center text-3xl font-semibold py-1 text-white">
              Vinish Machado
            </span>
            <p className="text-center text-sm p-4 text-white">
              Vinish Machado possesses an exceptional command of front-end
              technologies, including HTML, CSS, JavaScript, and modern
              frameworks like React.js, Angular, and Vue.js. Their code is not
              only clean and efficient but also scalable and maintainable, "AMD
              IS THE GOAT"-him
            </p>
          </div>
          <CollapsibleDemo />
        </div>

        <div className=" hover:bg-orange-500 hover:bg-opacity-90 duration-700   bg-opacity-35  bg-black md:mb-3 w-[22rem] h-[40rem] cursor-pointer flex flex-col justify-center items-center text-2xl rounded-lg transition-transform  ease-in-out transform hover:scale-95 sm:hover:scale-105 shadow-2xl hover:shadow-red-500">
          <img
            src="/WhatsApp Image 2024-08-30 at 8.40.43 PM.jpeg"
            className="mb-1 h-auto rounded-full w-60 px-3 py-3 duration-700 ease-in-out hover:shadow-lg"
            alt="Login Background"
          />
          <div className="flex flex-col items-center">
            <span className="flex justify-center text-3xl font-semibold py-1 text-white">
              Roldan D'souza
            </span>
            <p className="text-center text-sm p-4 text-white">
              Roldan has extensive experience with a wide range of back-end
              technologies, including but not limited to Node.js, Python, Java,
              Ruby, and PHP. They are well-versed in working with various
              frameworks like Express.js, Django, Spring, and Ruby on Rails
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
