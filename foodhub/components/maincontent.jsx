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
  const api = "fsq3OY0Bk2YURDNuzKDONFIAh98s7uF2vVGo64Vhe5k7RZw=";
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
      console.log("vegthing");
      console.log(url);
      console.log(data); // Log the results array to verify its contents

      console.log(pureveg); // Log the state to check if it's set correctly
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
        <div className="late-500 shadow-lg w-11/12 m-9 flex justify-center rounded-md p-4">
          <Carousel className="relative h-1/4 w-10/12 overflow-x-auto scroll-snap-x-mandatory flex">
            <CarouselContent className="flex space-x-4">
              {nearbyplace &&
                nearbyplace.map((data, i) => (
                  <CarouselItem
                    key={i}
                    className="flex-shrink-0 w-1/3 md:w-1/2 lg:w-1/3 snap-start"
                  >
                    <div className="bg-black rounded-md flex items-center justify-evenly h-full w-full overflow-hidden">
                      <img
                        src={url[i]}
                        className="object-cover h-32  m-4"
                        alt="Placeholder Image"
                      />
                      <div className="h-full w-full text-white flex flex-col justify-center p-4">
                        <div className="text-lg">{data.name}</div>
                        <div className="text-sm">{data.location.address}</div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2" />
            <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2" />
          </Carousel>
        </div>

        {/* seafood*/}
        <div className="pt-3 h-10 md:text-4xl text-3xl font-bold mb-3 ">
          Sea Food
        </div>
        <div className="late-500 shadow-lg w-11/12 h-56 m-9 flex justify-center rounded-md p-4">
          <Carousel className="relative h-full w-full overflow-x-auto scroll-snap-x-mandatory flex">
            <CarouselContent className="flex space-x-4">
              {seafood &&
                seafood.map((data, i) => (
                  <CarouselItem
                    key={i}
                    className="flex-shrink-0 w-1/3 md:w-1/2 lg:w-1/3 snap-start"
                  >
                    <div className="bg-black rounded-md flex items-center w-full overflow-hidden">
                      <img
                        src={seaurl[i]}
                        className="object-cover h-32 m-4"
                        alt="Placeholder Image"
                      />
                      <div className="h-full w-full text-white">
                        <div className="text-xl pl-4">{data.name}</div>
                        <div className="pl-4 text-sm">
                          {data.location.address}
                        </div>
                        <p className="text-orange-500 text-white mt-6 pl-3 text-xl">
                          {data.closed_bucket}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2" />
            <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2" />
          </Carousel>
        </div>

        <div className="pt-3 h-10 md:text-4xl text-3xl font-bold mb-3 ">
          Pure Veg
        </div>
        <div className="h-56 shadow-lg w-11/12  m-9   flex justify-center rounded-md p-4">
          <Carousel className="relative h-full w-full overflow-x-auto scroll-snap-x-mandatory flex">
            <CarouselContent className="flex space-x-4">
              {pureveg &&
                pureveg.map((data, i) => (
                  <CarouselItem
                    key={i}
                    className="flex-shrink-0 w-1/3 md:w-1/2 lg:w-1/3 snap-start"
                  >
                    <div className="bg-black rounded-md flex items-center h-full w-full overflow-hidden">
                      <img
                        src={vegurl[i]}
                        className="object-cover h-32 w-40"
                        alt="Placeholder Image"
                      />
                      <div className="flex flex-col justify-center items-start w-full h-full p-4">
                        <div className="text-xl text-white">{data.name}</div>
                        <div className="text-lg text-white">
                          {data.location.address}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2" />
            <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default maincontent;
