import React from "react";

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
  //consists all the usefull data//
  const [nearbyplace, setnearbyplace] = useState([]);
  const [pureveg, setpureveg] = useState([]);
  const [seafood, setseafood] = useState([]);
  const [temp, settemp] = useState(["kfc", "bombay lucky"]);
  const [id, setids] = useState([]);
  const [url, seturl] = useState([]);
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
  const fetchImageUrl = async (fsq_id) => {
    try {
      const response = await axios.get(
        `https://api.foursquare.com/v3/places/${fsq_id}/photos?limit=1`,
        {
          headers: {
            Authorization: "fsq3OY0Bk2YURDNuzKDONFIAh98s7uF2vVGo64Vhe5k7RZw=", // Replace with your actual API key
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.length > 0) {
        const photo = response.data[0];
        const photoUrl = `${photo.prefix}original${photo.suffix}`;
        console.log(photoUrl);
        return photoUrl; // Return the image URL
      } else {
        // Return a default image URL if no image is found
        return "/images.png";
      }
    } catch (error) {
      console.error("Error fetching image URL:", error);
      // Return an error image URL if the request fails
      return "/images/error-image.png";
    }
  };
  const nearbyinfo = async () => {
    try {
      const lati = userlocation.userlatitude;
      const longi = userlocation.userlongitude;
      console.log(`in:${(longi, lati)}`);

      const response = await axios.get(
        `https://api.foursquare.com/v3/places/search`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "fsq3OY0Bk2YURDNuzKDONFIAh98s7uF2vVGo64Vhe5k7RZw=", // API key
          },
          params: {
            ll: `${lati},${longi}`,
            query: "restaurant",
            radius: 1500,
          },
        }
      );

      const data = response.data;
      setnearbyplace(data.results); // Assuming data.results contains the places
      const idss = data.results.map((place) => place.fsq_id);
      setids(idss);
      const urlss = await Promise.all(idss.map((id) => fetchImageUrl(id)));

      // Update state with the URLs
      seturl(urlss);

      console.log(url);
      console.log(data); // Log the results array to verify its contents

      console.log(nearbyplace); // Log the state to check if it's set correctly
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const ourdatabase = async () => {
    try {
      console.log(temp); // Ensure temp is an array

      const response = await axios.post(
        "http://localhost:5000/navigate",
        temp, // Sending the array directly as the body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data); // The response is already in JSON format
    } catch (error) {
      console.error("Error posting data:", error);
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
                      <img
                        src={url[i]} // Replace with your placeholder image path
                        className="object-cover h-32 w-auto "
                        alt="Placeholder Image"
                      />

                      <div className="h-full w-full">
                        <h1 className="ml-5 cl w-full bg-black">{data.name}</h1>
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
      </div>
    </div>
  );
};

export default maincontent;
