import React, { useEffect, useState, useContext, createContext } from "react";
import Maincontent from "@/components/maincontent";
import { Searchbar } from "@/components/ui/Searchbar";
import Sidebar from "@/components/ui/sidebar";
import Policy from "./policy";
const Home = () => {
  //nav bar logic///

  return (
    <div className="h-screen w-screen bg-white flex overflow-x-hidden overflow-y-hidden">
      <Sidebar />
      <div className="h-full w-full ">
        <Searchbar />
        <div
          className="h-full w-11/12 
         overflow-auto flex items-center"
        >
          <Maincontent />
          <Policy />
        </div>
      </div>
    </div>
  );
};

export default Home;
