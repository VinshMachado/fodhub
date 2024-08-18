import Maincontent from "@/components/maincontent";
import Car from "@/components/ui/car";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hotel = () => {
  return (
    <div>
      <div className="overflow-x-hidden overflow-y-visible">
        <span className="text-4xl font-bold flex justify-center items-center mt-3">
          bombay lucky
        </span>
        <div className="flex justify-center items-center">
          <Car />
        </div>
        <div className="flex justify-center items-center pt-7">
          <div className="bg-orange-700 w-11/12 h-72 rounded-lg shadow-xl ">
            Info about bombay lucky
          </div>
        </div>
        <div className="w-[50rem]  bg-black">
          <div className="bg-orange-600 justify-center flex items-center pt-14">
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="vertical"
              className="w-full max-w-xs"
            >
              <CarouselContent className="-mt-1 h-[200px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className=" bg-slate-600 flex items-center justify-center p-6">
                          <span className="text-3xl font-semibold">bomb</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
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

export default Hotel;
