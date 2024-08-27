"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Searching = () => {
  const router = useRouter();
  const placename = router.query.search; // Destructure to get the 'name' parameter
  const api = "fsq3sE6eTQHLHGZUK9axFSjHtgqElszAiKUBrIgn3jXlUCc=";
  const [data, setdata] = useState();
  const [imageUrl, setimgurl] = useState("/images.png");

  const fetchserver = async () => {
    const responce = await axios.get(
      `https://api.foursquare.com/v3/places/search`,
      {
        headers: {
          Authorization: `${api}`,
          "Content-Type": "application/json",
        },
        params: { query: `${placename}` },
      }
    );
    const data = responce.data;
    setdata(data.results[0]);
    fetchImageUrl(data?.results[0]?.fsq_id);
    console.log(data);
  };

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
        const photoUrl = `${photo.prefix}original${photo.suffix}`;
        setimgurl(photoUrl);
      } else {
        setimgurl("/images.png");
      }
    } catch (error) {
      console.error("Error fetching image URL:", error);
    }
  };
  const navigate = async (fsq_id) => {
    await router.push({
      pathname: "/hotel",
      query: { id: data?.fsq_id },
    });
  };
  useEffect(() => {
    fetchserver();
  }, []);

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="ml-4 m-10 max-w-4xl mt-3 bg-white rounded-lg shadow-md overflow-hidden flex items-center">
        <img src={imageUrl} alt={"title"} className="w-48 h-32 object-cover" />
        <div
          className="p-4 flex-1"
          onClick={() => {
            navigate(data?.fsq_id);
          }}
        >
          <h3 className="text-xl font-semibold mb-2">{data?.name} </h3>
          <p className="text-gray-600">{data?.location?.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Searching;
