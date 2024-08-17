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
import Car from "@/components/ui/car";

const Hotel = () => {
  return (
<<<<<<< HEAD
    <div>
      <span className="font-bold text-4xl justify-center flex items-center mt-4">
        name of hotel
      </span>
      <div className="flex justify-center items-center ">
        <Car />
=======
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
>>>>>>> ec0c04f82fcbbf91f42d6a30200e1c74162b5953
      </div>
    </div>
  );
};

export default Hotel;
