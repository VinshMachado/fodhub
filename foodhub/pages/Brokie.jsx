import React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

const Brokie = () => {
  return (
    <div className="h-screen w-48 items-center">
      <h1>Brokie</h1>
      <div>
        <Slider defaultValue={[0]} max={100} step={1} className={cn("w-20")} />
      </div>
    </div>
  );
};
export default Brokie;
