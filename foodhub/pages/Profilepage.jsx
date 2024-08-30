import React, { useEffect, useState, useContext, createContext } from "react";
import Maincontent from "@/components/maincontent";
import { Searchbar } from "@/components/ui/Searchbar";
import Sidebar from "@/components/ui/sidebar";
import Profilepage from "../components/ui/Profile";

const profile = () => {
  //nav bar logic///

  return (
    <div className="h-screen w-screen bg-white flex overflow-x-hidden overflow-y-hidden">
      <Sidebar />
      <div className="h-screen w-full ">
        <Searchbar />
        <div
          className="h-full w-full 
         overflow-auto"
        >
          <Profilepage />
        </div>
      </div>
    </div>
  );
};

export default profile;
