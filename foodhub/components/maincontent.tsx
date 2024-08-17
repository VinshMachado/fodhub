import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Profilething from "@/components/ui/Profilething";
import Modal from "@/components/ui/model";

const maincontent = () => {
  return (
    <div>
      {/* Main content area */}
      <div className="flex flex-col  w-full items-center">
        {/* New "Hello" div */}
        <div className="mt-5 h-56 flex justify-center items-end rounded-sm w-11/12  top-16 bg-slate-500 p-4">
          <div className="h-full  w-11/12 text-4xl font-bold">
            <Carousel className="h-full flex items-end">
              <CarouselContent className="text-white">
                <CarouselItem>food </CarouselItem>
                <CarouselItem>place</CarouselItem>
                <CarouselItem>price</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

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
        <div className="pt-3 text-4xl font-bold">Chinese Restraunts</div>
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
        <div className="pt-3 text-4xl font-bold">North Indian Restraunts</div>
        <div className="mt-4 h-64 w-11/12 flex justify-center items-center rounded-sm   md:text-4xl text-lg top-16 bg-orange-500 p-4">
          <div className="  w-11/12 text-4xl font-bold">
            <Carousel>
              <CarouselContent className="text-white">
                <CarouselItem className=" basis-1/3 ">
                  north indian 1{" "}
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  {" "}
                  north indian 2
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  north indian 3
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  north indian 4
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
        <div className="pt-3 text-4xl font-bold">South Indian restraunts</div>
        <div className="mt-4 h-64 w-11/12 flex justify-center items-center rounded-sm  md:text-4xl text-lg top-16 bg-black p-4">
          <div className="  w-11/12 text-4xl font-bold">
            <Carousel>
              <CarouselContent className="text-white">
                <CarouselItem className=" basis-1/3 ">
                  south indian 1{" "}
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  {" "}
                  south indian 2
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  south indian 3
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  south indian 4
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
