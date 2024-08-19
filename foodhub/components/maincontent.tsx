import React from "react";
import Menu from "./ui/menu";
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
  });

  useEffect(() => {
    console.log(userlocation);
    nearbyinfo();
    purevegbyinfo();
    seafoodinfo();
  }, [userlocation]);
  //fetching data from api//
  const nearbyinfo = async () => {
    try {
      let lati = userlocation.userlatitude;
      let longi = userlocation.userlongitude;

      let datainfo = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lati},${longi}&radius=2000&type=restaurant&key=AIzaSyBZ2YIJkSYkMQ6e7JKlHWVbqmsfdE_X5wI`
      );

      if (!datainfo.ok) {
        throw new Error(`Error: ${datainfo.status} ${datainfo.statusText}`);
      }

      let something = await datainfo.json();
      setnearbyplace(something.results);
      console.log(something.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //fetch pure veg from api//
  const purevegbyinfo = async () => {
    try {
      let lati = userlocation.userlatitude;
      let longi = userlocation.userlongitude;

      let datainfo = await fetch(
        `https://api.foursquare.com/v3/places/search?query=pureveg&ll=${lati},${longi}`,
        {
          method: "GET",
          headers: {
            Authorization: "fsq3zcxINhO9nLaUjkq7CXRqcvP21dRTTDJV2bQ+Kg2n8N8=",
            "Content-Type": "application/json", // Capitalization fix
          },
        }
      );

      if (!datainfo.ok) {
        throw new Error(`Error: ${datainfo.status} ${datainfo.statusText}`);
      }

      let something = await datainfo.json();
      setpureveg(something.results);
      console.log("veg thing");
      console.log(pureveg);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //fetch seafood info//
  const seafoodinfo = async () => {
    try {
      let lati = userlocation.userlatitude;
      let longi = userlocation.userlongitude;

      let datainfo = await fetch(
        `https://api.foursquare.com/v3/places/search?query=seafood&ll=${lati},${longi}`,
        {
          method: "GET",
          headers: {
            Authorization: "fsq3zcxINhO9nLaUjkq7CXRqcvP21dRTTDJV2bQ+Kg2n8N8=",
            "Content-Type": "application/json", // Capitalization fix
          },
        }
      );

      if (!datainfo.ok) {
        throw new Error(`Error: ${datainfo.status} ${datainfo.statusText}`);
      }

      let something = await datainfo.json();
      setseafood(something.results);
      console.log(nearbyplace);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      {/* Main content area */}
      <div className="flex flex-col overflow-x-hidden w-full items-center">
        {/* New "Hello" div */}

        <Car />

        <div className="pt-3 md:text-4xl text-3xl font-bold">
          Nearby Restraunts
        </div>
        <div className="mt-4 h-64 w-11/12 flex justify-center items-center  md:text-4xl text-lg rounded-sm  top-16 bg-yellow-700 late-500 p-4">
          <div className="  w-11/12 font-bold">
            <Carousel>
              <CarouselContent className="text-white">
                <CarouselContent className="text-white w-full ">
                  {nearbyplace.map((data, i) => (
                    <CarouselItem
                      className=" basis-1/3 justify-evenly "
                      key={i}
                    >
                      {data.name}
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="pt-3 md:text-4xl text-3xl font-bold">Pure VEG</div>
        <div className="mt-4 h-64 w-11/12 flex justify-center items-center  md:text-4xl text-lg rounded-sm  top-16 bg-yellow-700 late-500 p-4">
          <Carousel>
            <CarouselContent className="text-white">
              {pureveg.map((data, i) => (
                <CarouselItem className=" basis-1/3 justify-evenly" key={i}>
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
