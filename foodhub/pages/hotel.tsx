import React, { useState } from "react";
import Maincontent from "@/components/maincontent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Profilething from "@/components/ui/Profilething";
import Modal from "@/components/ui/model";

const Hotel = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center">
      <div className="mt-5 h-56 flex justify-center w-11/12 items-center bg-slate-500 p-4 rounded-sm">
        <div className=" h-full w-11/12 text-4xl font-bold ">
          <Carousel className="h-full w-full  flex items-end">
            <CarouselContent className="text-white">
              <CarouselItem>Food</CarouselItem>
              <CarouselItem>Place</CarouselItem>
              <CarouselItem>Price</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
