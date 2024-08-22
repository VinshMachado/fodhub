import React from "react";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CollapsibleDemo } from "@/components/ui/colapse";

const about = () => {
  return (
    <div>
      <div className="text-3xl text-black justify-center py-2 flex items-center font-bold">
        ABOUT PAGE
      </div>
      <div className="text-3xl text-black justify-start flex px-2 py-3 items-center font-bold">
        <span>Creators</span>
      </div>
      <div className="flex justify-evenly items-center ">
        <div className="bg-blue-500 w-96 h-[40rem] flex flex-col text-2xl rounded-lg">
          <span className=" flex justify-center py-3">sion</span>
          <div className="flex flex-col items-center">
            <img src="/loginBg.jpg" className="mb-4 h-40 w-40 rounded-full" />
            <p className="text-center">
              blah blah blah info info infoblah blah blah blah info info
              infoblah blah blah blah info info info.
            </p>
          </div>
          <CollapsibleDemo />
        </div>

        <div className="bg-green-700 w-72 h-72 justify-center flex text-2xl">
          machado
        </div>
        <div className="bg-red-700 w-72 h-72 justify-center flex text-2xl">
          roldan
        </div>
      </div>
    </div>
  );
};

export default about;
