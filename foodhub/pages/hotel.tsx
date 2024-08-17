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
    <div>
      <span className="font-bold text-4xl justify-center flex items-center mt-4">
        name of hotel
      </span>
      <div className="flex justify-center items-center ">
        <Car />
      </div>
    </div>
  );
};

export default Hotel;
