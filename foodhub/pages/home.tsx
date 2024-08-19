import React, { useEffect, useState, useContext } from "react";
import Maincontent from "@/components/maincontent";
import { Searchbar } from "@/components/ui/Searchbar";
import Sidebar from "@/components/ui/sidebar";
const Home = () => {
  // get users current location ///
  const [userlocation, setuserlocation] = useState({
    userlongitude: 0,
    userlatitude: 0,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((pos) => {
        setuserlocation({
          userlongitude: pos.coords.latitude,
          userlatitude: pos.coords.longitude,
        });
      });
    }
  });

  useEffect(() => {
    console.log(userlocation);
  }, [userlocation]);

  //nav bar logic///

  return (
    <div className="h-screen w-screen bg-white flex overflow-x-hidden overflow-y-hidden">
      <Sidebar />
      <div className="h-full w-full ">
        <Searchbar />

        <div className="h-full w-full overflow-auto">
          <Maincontent />
        </div>
      </div>
    </div>
  );
};

export default Home;
