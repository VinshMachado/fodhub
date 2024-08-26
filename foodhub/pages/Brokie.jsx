import React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const Brokie = () => {
  const [sliderValue, setSliderValue] = useState([0]);

  // Step 3: Handle slider value changes
  const handleSliderChange = (value) => {
    setSliderValue(value);
    // You can use the slider value here as needed
    console.log("Current Slider Value:", value);
  };

  return (
    <div className={cn("h-screen w-screen flex  justify-center bg-red-500")}>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 flex flex-col items-center space-y-6">
        <div className="w-full bg-slate-800 rounded-lg p-6 flex flex-col items-center space-y-4">
          <h1 className="text-orange-500 text-2xl font-semibold">
            Price Range:
          </h1>
          <Slider
            defaultValue={[500]}
            max={1000}
            step={1}
            value={sliderValue} // Step 4: Pass the current value
            onValueChange={handleSliderChange} // Step 4: Pass the change handler
            className="w-full max-w-xs"
          />
        </div>
        <div className="w-full bg-white  text-center rounded-lg p-4">
          <div className={cn("text-xl font-bold text-green-500")}>
            Rs {sliderValue[0]}
          </div>
        </div>
        <p className="text-sm mt-2 text-red-700">Results</p>
        <div className="ml-4 m-10 w-11/12 hover:shadow-orange-400 mt-3 bg-white rounded-lg shadow-md overflow-hidden flex items-center">
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
    </div>
  );
};

export default Brokie;
