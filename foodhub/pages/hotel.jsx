import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";

const Hotel = (props) => {
  // Array of texts for each carousel slide
  const router = useRouter();
  const [hoteldata, setdata] = useState({ name: "", address: "", open: "" });
  const [comments, setComments] = useState();
  const api = "fsq3+wMRUlEe1lepib3pVtQ6vFfK+aC7Z6beD+5tUDvv17M= ";

  const fsq_id = router.query.id;
  console.log(fsq_id);
  //fetching comments//
  const fetchcomment = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/comments");
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  //fetching photo//
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
  const [imageUrl, setImageUrl] = useState("/images/loading.png"); // Initial loading image

  useEffect(() => {
    const getImageUrl = async () => {
      const url = await fetchImageUrl(fsq_id);
      setImageUrl(url);
    };

    getImageUrl();
  }, [fsq_id]);
  fetchImageUrl(fsq_id);
  fetchcomment();
  //hotel details//
  const details = async (fsid) => {
    try {
      console.log(fsid);

      const response = await axios.get(
        `https://api.foursquare.com/v3/places/${fsid}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${api}`, // API key
          },
          params: {
            fsq_id: fsid,
          },
        }
      );

      const data = response.data;
      setdata({
        name: data.name,
        address: data.location.formatted_address,
        open: data.closed_bucket,
      });

      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (fsq_id) {
      details(fsq_id);
    }
  }, [fsq_id]);

  return (
    <>
      <div className="bg-white shadow-lg h-screen rounded-lg overflow-hidden sm:flex  w-full max-w-sm">
        <div>
          <img
            alt="Hotel Image"
            className="h-full w-full sm:w-28 object-cover"
            src={imageUrl}
          />
        </div>
        <div className="p-6 h-full w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {hoteldata.name}
          </h2>
          <p className="text-gray-600 mb-4">{hoteldata.address}</p>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {hoteldata.open}
          </button>
        </div>
      </div>
    </>
  );
};

export default Hotel;
