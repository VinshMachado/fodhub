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
  const api = "fsq3+wMRUlEe1lepib3pVtQ6vFfK+aC7Z6beD+5tUDvv17M= ";
  //consists all the usefull data//
  const [nearbyplace, setnearbyplace] = useState([]);
  const [pureveg, setpureveg] = useState([]);
  const [vegid, setvegid] = useState([]);
  const [vegurl, setvegurl] = useState([]);
  const [seafood, setseafood] = useState([]);
  const [seaid, setseaids] = useState([]);
  const [seaurl, setseaurl] = useState([]);
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
    veginfo();
    seafoodinfo();
  }, [userlocation]);

  //fetching data from api//
  const fetchImageUrl = async (fsq_id) => {
    try {
      const response = await axios.get(
        `https://api.foursquare.com/v3/places/${fsq_id}/photos?limit=1`,
        {
          headers: {
            Authorization: `${api}`, // Replace with your actual API key
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
            Authorization: `${api}`,
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
  const seafoodinfo = async () => {
    try {
      const lati = userlocation.userlatitude;
      const longi = userlocation.userlongitude;
      console.log(`in:${(longi, lati)}`);

      const response = await axios.get(
        `https://api.foursquare.com/v3/places/search`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${api}`, // API key
          },
          params: {
            ll: `${lati},${longi}`,
            query: "sea food",
          },
        }
      );

      const data = response.data;
      setseafood(data.results); // Assuming data.results contains the places
      const idss = data.results.map((place) => place.fsq_id);
      setseaids(idss);
      const urlss = await Promise.all(idss.map((id) => fetchImageUrl(id)));

      // Update state with the URLs
      setseaurl(urlss);

      console.log(url);
      console.log(data); // Log the results array to verify its contents

      console.log(seafood); // Log the state to check if it's set correctly
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const veginfo = async () => {
    try {
      const lati = userlocation.userlatitude;
      const longi = userlocation.userlongitude;
      console.log(`in:${(longi, lati)}`);

      const response = await axios.get(
        `https://api.foursquare.com/v3/places/search`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${api}`, // API key
          },
          params: {
            ll: `${lati},${longi}`,
            query: "veg",
          },
        }
      );

      const data = response.data;
      setpureveg(data.results); // Assuming data.results contains the places
      const idss = data.results.map((place) => place.fsq_id);
      setvegid(idss);
      const urlss = await Promise.all(idss.map((id) => fetchImageUrl(id)));

      // Update state with the URLs
      setvegurl(urlss);
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
      <div className="flex flex-col overflow-x-hidden w-full items-center bg-orange-200">
        {/* New "Hello" div */}

        <Car />

        <div className="pt-3 md:text-4xl text-3xl font-bold">
          Nearby Restraunts
        </div>
        {/* near by*/}
        <div className=" late-500 w-11/12 m-9 flex justify-center  rounded-md p-4  ">
          <Carousel className="h-1/4 w-10/12 flex justify-center m-4">
            <CarouselContent className="-ml-4">
              {nearbyplace &&
                nearbyplace.map((data, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-4 md:basis-1/2 lg:basis-1/3 text-2xl text-white"
                  >
                    <div className="bg-black rounded-md flex items-center justify-evenly fifull w-full overflow-hidden">
                      <img
                        src={url[i]}
                        className="object-cover h-32  "
                        alt="Placeholder Image"
                      />

                      <div className="h-full w-full">
                        <div className="text-lg pl-4"> {data.name}</div>
                        <div className="pl-4   text-sm">
                          {data.location.address}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* seafood*/}
        <div className="pt-3 md:text-4xl text-3xl font-bold  h-20 mb-9">
          Sea food
        </div>
        <div className=" late-500 w-11/12 m-9 flex justify-center  rounded-md p-4  ">
          <Carousel className="h-1/4 w-10/12 flex justify-center m-4 shadow-2xl rounded-lg">
            <CarouselContent className="-ml-4">
              {seafood &&
                seafood.map((data, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-4 md:basis-1/2 lg:basis-1/3 text-2xl text-white"
                  >
                    <div className="shadow-xl rounded-md flex items-center   justify-evenly w-full overflow-hidden">
                      <img
                        src={seaurl[i]}
                        className="object-cover h-32 shadow-md rounded-sm"
                        alt="Placeholder Image"
                      />

                      <div className="h-full w-full">
                        <div className="text-lg pl-4 text-black  bg-white rounded-md p-2">
                          {data.name}
                        </div>
                        <div className="pl-4 text-black text-sm  bg-gray-200 rounded-md p-2">
                          {data.location.address}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="pt-3 h-10 md:text-4xl text-3xl font-bold mb-3 ">
          Pure Veg
        </div>
        <div className="h-64 pb-11 w-full flex justify-center items-center rounded-sm md:text-4xl text-lg bg-white p-4">
          <Carousel className="h-full w-full flex justify-center m-4 overflow-hidden">
            <CarouselContent className="flex w-full">
              {pureveg &&
                pureveg.map((data, i) => (
                  <CarouselItem
                    key={i}
                    className="md:basis-1/2 lg:basis-1/3 text-2xl text-white flex flex-col items-center"
                  >
                    <div
                      onClick={() => {
                        console.log(`hello ${data.id}`);
                      }}
                      className="bg-black rounded-md flex items-center justify-evenly w-full h-full overflow-hidden"
                    >
                      <img
                        src={vegurl[i]}
                        className="object-cover h-32 w-full"
                        alt="Placeholder Image"
                      />

                      <div className="flex flex-col justify-center items-start w-full h-full p-4">
                        <div className="text-lg">{data.name}</div>
                        <div className="text-sm">{data.location.address}</div>
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
