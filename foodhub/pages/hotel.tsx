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
  // Array of texts for each carousel slide
  const carouselTexts = [
    "menu item 1",
    "menu item 2",
    "menu item 3",
    "menu item 4",
    "menu item 5",
  ];

  return (
    <div>
      <div className="overflow-x-hidden overflow-y-visible">
        <span className="text-4xl font-bold flex justify-center items-center mt-3">
          Bombay Lucky
        </span>
        <div className="flex justify-center items-center">
          <Car />
        </div>
        <div className="flex justify-center items-center pt-7">
          <div className="bg-orange-700 w-11/12 h-72 rounded-lg shadow-xl">
            Info about Bombay Lucky
          </div>
        </div>
        <div className="mt-6 justify-center flex items-center">
          <div className="w-11/12 h-80 justify-center flex items-center rounded-lg bg-slate-300 shadow-inner">
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="vertical"
              className="w-full max-w-xs"
            >
              <CarouselContent className="-mt-1 h-[200px]">
                {carouselTexts.map((text, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/2">
                    <div className="w-full">
                      <Card>
                        <CardContent className="bg-slate-600 rounded-lg w-full flex items-center justify-center p-6">
                          <span className="text-3xl font-semibold">{text}</span>
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
      <div className="flex justify-center">
        <form className="w-11/12 bg-white rounded-lg border pb-2 mt-20">
          <div className="px-3 mb-2 mt-2">
            <textarea
              placeholder="Comment"
              className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            ></textarea>
          </div>
          <div className="flex justify-end px-4">
            <input
              type="submit"
              className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
              value="Comment"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hotel;
