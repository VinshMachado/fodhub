"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/router";
import Car from "./ui/car";

const MainContent = () => {
  const api = "fsq3sE6eTQHLHGZUK9axFSjHtgqElszAiKUBrIgn3jXlUCc=";
  const router = useRouter();

  const [nearbyplace, setNearbyplace] = useState([]);
  const [pureveg, setPureveg] = useState([]);
  const [seafood, setSeafood] = useState([]);
  const [urls, setUrls] = useState([]);
  const [seaUrls, setSeaUrls] = useState([]);
  const [vegUrls, setVegUrls] = useState([]);

  const [userlocation, setUserlocation] = useState({
    userlongitude: 0,
    userlatitude: 0,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((pos) => {
        setUserlocation({
          userlongitude: pos.coords.longitude,
          userlatitude: pos.coords.latitude,
        });
      });
    }
  }, []);

  //getting user location//
  useEffect(() => {
    if (userlocation.userlatitude !== 0 && userlocation.userlongitude !== 0) {
      fetchAllData();
    }
  }, [userlocation]);

  //fetching image//
  const fetchImageUrl = async (fsq_id) => {
    try {
      const response = await axios.get(
        `https://api.foursquare.com/v3/places/${fsq_id}/photos?limit=1`,
        {
          headers: {
            Authorization: `${api}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.length > 0) {
        const photo = response.data[0];
        return `${photo.prefix}original${photo.suffix}`;
      } else {
        return "/images.png";
      }
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return "/images/error-image.png";
    }
  };

  //api calls//

  const fetchAllData = async () => {
    try {
      const { userlatitude: lat, userlongitude: lng } = userlocation;

      const requests = [
        axios.get(`https://api.foursquare.com/v3/places/search`, {
          headers: {
            Authorization: `${api}`,
            "Content-Type": "application/json",
          },
          params: { ll: `${lat},${lng}`, query: "restaurant", radius: 1500 },
        }),
        axios.get(`https://api.foursquare.com/v3/places/search`, {
          headers: {
            Authorization: `${api}`,
            "Content-Type": "application/json",
          },
          params: { ll: `${lat},${lng}`, query: "sea food" },
        }),
        axios.get(`https://api.foursquare.com/v3/places/search`, {
          headers: {
            Authorization: `${api}`,
            "Content-Type": "application/json",
          },
          params: { ll: `${lat},${lng}`, query: "veg" },
        }),
      ];

      const [nearbyResponse, seafoodResponse, vegResponse] = await Promise.all(
        requests
      );

      const nearbyPlaces = nearbyResponse.data.results;
      const seafoodPlaces = seafoodResponse.data.results;
      const vegPlaces = vegResponse.data.results;

      setNearbyplace(nearbyPlaces);
      setSeafood(seafoodPlaces);
      setPureveg(vegPlaces);

      const nearbyUrls = await Promise.all(
        nearbyPlaces.map((place) => fetchImageUrl(place.fsq_id))
      );
      const seafoodUrls = await Promise.all(
        seafoodPlaces.map((place) => fetchImageUrl(place.fsq_id))
      );
      const vegUrls = await Promise.all(
        vegPlaces.map((place) => fetchImageUrl(place.fsq_id))
      );

      setUrls(nearbyUrls);
      setSeaUrls(seafoodUrls);
      setVegUrls(vegUrls);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //navigate to other thing

  const navigate = async (fsq_id) => {
    await router.push({
      pathname: "/hotel",
      query: { id: fsq_id },
    });
  };

  return (
    <div className="h-full w-full bg-white">
      <div className="flex flex-col overflow-x-hidden w-full items-center bg-white">
        <Car />

        <div className="pt-3 mt-2 md:text-4xl text-3xl font-bold">
          Nearby Restaurants
        </div>
        <div className="late-500 w-11/12 m-9 flex justify-center rounded-md p-4">
          <Carousel className="h-1/4 w-10/12 flex justify-center m-4">
            <CarouselContent className="-ml-4">
              {nearbyplace.map((data, i) => (
                <CarouselItem
                  key={i}
                  onClick={() => navigate(data.fsq_id)}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 text-2xl text-white"
                >
                  <div className="bg-black rounded-md flex items-center justify-evenly w-full overflow-hidden">
                    <img
                      src={urls[i]}
                      className="object-cover h-32"
                      alt="Placeholder Image"
                    />
                    <div className="h-full w-full">
                      <div className="text-lg pl-4 font-semibold shadow-orange-800 shadow-lg">
                        {data.name}
                      </div>
                      <div className="pl-4 text-sm shadow-white font-semibold shadow-lg">
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

        <div className="pt-3 md:text-4xl text-3xl font-bold h-10 mb-3">
          Seafood
        </div>
        <div className="late-500 w-11/12 m-9 flex justify-center rounded-md p-4">
          <Carousel className="h-1/4 w-10/12 flex justify-center m-4 shadow-2xl rounded-lg">
            <CarouselContent className="-ml-4">
              {seafood.map((data, i) => (
                <CarouselItem
                  key={i}
                  onClick={() => navigate(data.fsq_id)}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 text-2xl text-white"
                >
                  <div className="shadow-xl snap-end rounded-md flex items-center justify-evenly w-full overflow-hidden">
                    <img
                      src={seaUrls[i]}
                      className="object-cover h-32 shadow-md rounded-sm"
                      alt="Placeholder Image"
                    />
                    <div className="h-full w-full">
                      <div className="text-lg font-bold pl-4 text-black rounded-md p-2">
                        <span>{data.name}</span>
                      </div>
                      <div className="pl-4 text-black text-sm font-semibold rounded-md p-2">
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

        <div className="pt-3 h-10 md:text-4xl text-3xl font-bold mb-3">
          Pure Veg
        </div>
        <div className="h-64 pb-11 w-full flex justify-center items-center rounded-sm md:text-4xl text-lg bg-white p-4">
          <Carousel className="h-full w-full flex justify-center p-3">
            <CarouselContent className="-ml-4">
              {pureveg.map((data, i) => (
                <CarouselItem
                  key={i}
                  onClick={() => navigate(data.fsq_id)}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 text-2xl text-white"
                >
                  <div className="shadow-xl snap-end rounded-md flex items-center justify-evenly w-full overflow-hidden">
                    <img
                      src={vegUrls[i]}
                      className="object-cover h-32"
                      alt="Placeholder Image"
                    />
                    <div className="h-full w-full">
                      <div className="text-lg font-bold pl-4 text-black rounded-md p-2">
                        <span>{data.name}</span>
                      </div>
                      <div className="pl-4 text-black text-sm font-semibold rounded-md p-2">
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
      </div>
    </div>
  );
};

export default MainContent;
