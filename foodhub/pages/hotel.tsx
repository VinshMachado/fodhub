import React, { useState } from "react";
import Maincontent from "@/components/maincontent";
import Car from "@/components/ui/car";
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
    <div>
      <span className="text-4xl font-bold flex justify-center items-center mt-3">
        bombay lucky
      </span>
      <div className="flex justify-center items-center">
        <Car />
      </div>
      <div></div>
    </div>
  );
};

export default Hotel;
