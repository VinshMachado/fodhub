import React from "react";
import Maincontent from "@/components/maincontent";
import { Searchbar } from "@/components/ui/Searchbar";
import Sidebar from "@/components/ui/sidebar";
import Brokie from "./Brokie";
const BrokiePage = () => {
  return (
    <div className="h-screen w-screen bg-white flex overflow-x-hidden overflow-y-hidden">
      <Sidebar />
      <div className="h-screen w-full ">
        <Searchbar />
        <div
          className="h-full w-full 
       overflow-auto"
        >
          <Brokie />
        </div>
      </div>
    </div>
  );
};

export default BrokiePage;
