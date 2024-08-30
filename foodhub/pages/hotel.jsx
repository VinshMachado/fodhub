"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Hotel = (props) => {
  const router = useRouter();
  const [hoteldata, setdata] = useState({ name: "", address: "", open: "" });
  const [comments, setComments] = useState(null);
  const [name, setname] = useState();
  const api = "fsq3sE6eTQHLHGZUK9axFSjHtgqElszAiKUBrIgn3jXlUCc=";

  const fsq_id = router.query.id;

  const [imageUrl, setImageUrl] = useState("/images.png"); // Initial loading image

  // Fetch comments
  const fetchcomment = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/comments");
      const data = response.data;
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  // Fetch photo
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
        return photoUrl;
      } else {
        return "/images.png";
      }
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return "/images/error-image.png";
    }
  };

  // Fetch hotel details
  const details = async (fsid) => {
    try {
      const response = await axios.get(
        `https://api.foursquare.com/v3/places/${fsid}`,
        {
          headers: {
            Authorization: `${api}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      setdata({
        name: data.name,
        address: data.location.formatted_address,
        open: data.closed_bucket,
      });
      ourDatabase(data.name);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect for fetching data when fsq_id changes

  const ourDatabase = async (namething) => {
    try {
      console.log(name + ":name");
      const response = await axios.get(
        `http://localhost:5000/search?search=${namething}`
      );
      const data = response.data;
      console.log(data[0].reviews);
      setComments(data[0].reviews);
      return data; // Optionally return the data for further use
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw error; // Optionally rethrow the error for higher-level error handling
    }
  };
  useEffect(() => {
    if (fsq_id) {
      console.log("Fetching details and comments for fsq_id:", fsq_id);
      details(fsq_id);
      fetchcomment();

      const getImageUrl = async () => {
        const url = await fetchImageUrl(fsq_id);
        setImageUrl(url);
      };

      getImageUrl();

      setname(hoteldata.name);
    }
  }, [fsq_id]);

  return (
    <>
      <div className="bg-white shadow-lg h-auto rounded-lg overflow-show sm:flex w-full max-w-sm">
        <div>
          <img
            alt="Hotel Image"
            className="h-full w-full sm:w-28 object-cover"
            src={imageUrl}
          />
        </div>
        <div className="p-6 h-screen w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {hoteldata.name}
          </h2>
          <p className="text-gray-600 mb-4">{hoteldata.address}</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg  transition duration-300">
            {hoteldata.open}
          </button>
          <div className="m-20 pl-2 h-10 w-full">Reviews</div>
          <div className="h-full w-full overflow-auto">
            {comments ? (
              comments.map((data, i) => (
                <div
                  key={data.id}
                  className="border rounded-lg p-4 mb-4 shadow-sm"
                >
                  <div className="flex items-center mb-2">
                    <div className="text-lg font-semibold text-gray-800">
                      {data.author_name}
                    </div>
                    <div className="ml-2 text-sm text-gray-500">
                      {data.relative_time_description}
                    </div>
                  </div>
                  <p className="text-gray-700">{data.text}</p>
                </div>
              ))
            ) : (
              <p className="text-black">Loading comments...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
