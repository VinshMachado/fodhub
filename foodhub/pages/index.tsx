import React, { useEffect, useState, useContext, createContext } from "react";
import Maincontent from "@/components/maincontent";
import { Searchbar } from "@/components/ui/Searchbar";
import Sidebar from "@/components/ui/sidebar";
const Home = () => {
  //nav bar logic///

  return (
    <div className="h-screen w-screen bg-white flex overflow-x-hidden overflow-y-hidden">
      <Sidebar />
      <div className="h-full w-full">
        <div className="h-full w-fullse">
          <div className="h-20 w-full ">
            <Searchbar />
          </div>
          <div className="h-full w-full overflow-auto">
            <Maincontent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
