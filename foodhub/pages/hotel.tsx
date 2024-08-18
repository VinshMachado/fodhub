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
        <div className="w-[50rem] bg-black">
          <div className="bg-orange-600 justify-center flex items-center pt-14">
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
                    <div className="p-1">
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
    </div>
  );
};

export default Hotel;
