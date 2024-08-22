import React from "react";
import Menu from "./ui/menu";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useContext, useEffect, useState } from "react";

import Car from "./ui/car";

const maincontent = () => {
  const photolink =
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=";
  const key = "AIzaSyBZ2YIJkSYkMQ6e7JKlHWVbqmsfdE_X5wI";
  //consists all the usefull data//
  const [nearbyplace, setnearbyplace] = useState([]);
  const [pureveg, setpureveg] = useState([]);
  const [seafood, setseafood] = useState([]);
  // get users current location ///
  const [userlocation, setuserlocation] = useState({
    userlongitude: 0,
    userlatitude: 0,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((pos) => {
        setuserlocation({
          userlongitude: pos.coords.longitude,
          userlatitude: pos.coords.latitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    console.log(userlocation);
    nearbyinfo();
  }, [userlocation]);
  //fetching data from api//
  const nearbyinfo = async () => {
    try {
      let lati = userlocation.userlatitude;
      let longi = userlocation.userlongitude;

      const datainfo = await fetch(
        `http://localhost:5000/navigate?latitude=${lati}&longitude=${longi}&radius=1500`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await datainfo.json();
      setnearbyplace(data);

      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="h-full w-full">
      {/* Main content area */}
      <div className="flex flex-col overflow-x-hidden w-full items-center">
        {/* New "Hello" div */}

        <Car />

        <div className="pt-3 md:text-4xl text-3xl font-bold">
          Nearby Restraunts
        </div>
        {/* near by*/}
        <div className=" late-500 w-11/12 m-9  rounded-md p-4  ">
          <Carousel className="h-1/4 w-10/12 flex justify-center m-4">
            <CarouselContent className="-ml-4">
              {nearbyplace &&
                nearbyplace.map((data, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-4 md:basis-1/2 lg:basis-1/3 text-2xl text-white"
                  >
                    <div className="bg-black rounded-md flex items-center justify-evenly h-28 w-28 overflow-hidden">
                      {data?.photos?.[0]?.photo_reference ? ( // Check if photo_reference exists
                        <img
                          src={`${photolink}${data?.photos[0]?.photo_reference}&key=${key}`}
                          className="object-cover h-32 w-auto mr-4"
                          alt={`Image of ${data.name}`}
                        />
                      ) : (
                        <img
                          src="\images.png" // Replace with your placeholder image path
                          className="object-cover h-32 w-auto mr-4"
                          alt="Placeholder Image"
                        />
                      )}
                      <div className="h-full w-full">
                        <h1 className="ml-5 cl w-full bg-black">
                          {" "}
                          {data.name}
                        </h1>
                        <p className="ml-5 cl w-full">Rating:{data.rating}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="pt-3 md:text-4xl text-3xl font-bold">Pure VEG</div>
        {/* Pure veg*/}
        <div className="mt-4 h-64 w-11/12 flex justify-center items-center  md:text-4xl text-lg rounded-sm  top-16 bg-yellow-700 late-500 p-4">
          <Carousel>
            <CarouselContent className="text-white">
              {nearbyplace.map((data, i) => (
                <CarouselItem className=" basis-1/3 justify-evenly " key={i}>
                  {data.name}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="pt-3 md:text-4xl text-3xl font-bold">Sea food</div>
        <div className="mt-4 h-64 w-11/12 flex justify-center items-center rounded-sm  md:text-4xl text-lg top-16 bg-black p-4">
          <Carousel>
            <CarouselContent className="text-white">
              {seafood.map((data, i) => (
                <CarouselItem className=" basis-1/3 justify-evenly" key={i}>
                  {data.name}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default maincontent;
