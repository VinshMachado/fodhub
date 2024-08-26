import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Searching = () => {
  const router = useRouter();
  const placename = router.query.search; // Destructure to get the 'name' parameter
  const ar = [placename];

  const fetchdatabase = async () => {
    fetch(`http://localhost:5000/search?search=${ar}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched from server:", data);
        // Do something with the data, like displaying it on the page
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  useEffect(() => {
    fetchdatabase();
  }, []);

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="ml-4 m-10 max-w-4xl mt-3 bg-white rounded-lg shadow-md overflow-hidden flex items-center">
        <img
          src={"/images.png"}
          alt={"title"}
          className="w-48 h-32 object-cover"
        />
        <div className="p-4 flex-1">
          <h3 className="text-xl font-semibold mb-2">title</h3>
          <p className="text-gray-600">description</p>
        </div>
      </div>
    </div>
  );
};

export default Searching;
