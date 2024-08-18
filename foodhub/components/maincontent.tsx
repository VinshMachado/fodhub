import React from "react";
import Menu from "./ui/menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Car from "./ui/car";

const maincontent = () => {
  return (
    <div>
      {/* Main content area */}
      <div className="flex flex-col overflow-x-hidden w-full items-center">
        {/* New "Hello" div */}

        <Car />
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
        <div className="pt-3 md:text-4xl text-3xl font-bold">
          Chinese Restraunts
        </div>
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
        <div className="pt-3 md:text-4xl text-3xl font-bold">
          North Indian Restraunts
        </div>
        <div className="mt-4 h-64 w-11/12 flex justify-center items-center  md:text-4xl text-lg rounded-sm  top-16 bg-orange-700 late-500 p-4">
          <div className="  w-11/12 font-bold">
            <Carousel>
              <CarouselContent className="text-white">
                <CarouselItem className=" basis-1/3 ">
                  North Indian Restraunt 1{" "}
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  {" "}
                  North Indian Restraunt 2
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  North Indian Restraunt 3
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  North Indian Restraunt 4
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
        <div className="pt-3 md:text-4xl text-3xl font-bold">
          South Indian restraunts
        </div>
        <div className="mt-4 mb-20 h-72 w-11/12 flex justify-center items-center  md:text-4xl text-lg rounded-sm  top-16 bg-black late-500 p-4">
          <div className="  w-11/12 font-bold">
            <Carousel>
              <CarouselContent className="text-white">
                <CarouselItem className=" basis-1/3 ">
                  South Indian restraunt 1{" "}
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  {" "}
                  South Indian restraunt 2
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  South Indian restraunt 3
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  South Indian restraunt 4
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
