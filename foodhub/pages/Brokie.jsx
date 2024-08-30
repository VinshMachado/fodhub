import React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import Router from "next";
import { useRouter } from "next/router";
const Brokie = () => {
  const router = useRouter();
  const [sliderValue, setSliderValue] = useState([0]);

  // Step 3: Handle slider value changes
  const handleSliderChange = (value) => {
    setSliderValue(value);
    // You can use the slider value here as needed
    console.log("Current Slider Value:", value);
  };

  const [menu, setMenu] = useState([
    {
      url: "https://www.sharmispassions.com/wp-content/uploads/2011/02/ChilliPaneer5.jpg",
      name: "Paneer Chilli",
      distance: 2.5,
      price: 300.0,
      place: "Bombay Lucky",
    },
    {
      url: "https://www.simplyrecipes.com/thmb/LYwosfrO2cGCT2_bGS5wIeHRnd8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-1-f8a0cd09ea9442ce93651887f164db03.jpg",
      name: "Butter Chicken",
      distance: 2.5,
      price: 190.0,
      place: "Near Attavar",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3l0Hw3o0zo5Eo0GdFlykIKcCgeSPeZCJcQ&s",
      name: "Charmuri",
      distance: 2.5,
      price: 30.0,
      place: "Near Attavar",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttUclYcmPB6n1wqZx_r25IgZdHw3uAlzYmw&s",
      name: "Sweet corn",
      distance: 2.5,
      price: 150.0,
      place: "FORUM MALL",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttUclYcmPB6n1wqZx_r25IgZdHw3uAlzYmw&s",
      name: "Sweet corn",
      distance: 2.5,
      price: 1000.0,
      place: "FORUM MALL",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttUclYcmPB6n1wqZx_r25IgZdHw3uAlzYmw&s",
      name: "Sweet corn",
      distance: 2.5,
      price: 500.0,
      place: "FORUM MALL",
    },
  ]);
  const filteredMenu = menu.filter((item) => item.price <= sliderValue);
  //nav..
  const navigate = async () => {
    await router.push({
      pathname: "/hotel",
      query: { id: "4e78da6c52b19ee4c8535cd1" },
    });
  };
  return (
    <div className={cn("h-auto w-full flex  justify-center overflow-auto")}>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 flex flex-col items-center space-y-6">
        <div className="w-full bg-slate-800 rounded-lg p-6 flex flex-col items-center space-y-4">
          <h1 className="text-orange-500 text-2xl font-semibold">
            Price Range:
          </h1>
          <Slider
            defaultValue={[30]}
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
        <div className="w-full flex items-center justify-center">
          <div className="h-20 w-11/12 overflow-auto">
            {filteredMenu.map((data, index) => (
              <button
                onClick={navigate}
                key={index} // Added a key prop
                className="ml-4 m-10 w-11/12 mt-3 bg-white rounded-lg shadow-md overflow-hidden flex items-center"
              >
                <img
                  src={data.url}
                  alt={data.name} // Use the name as the alt text
                  className="w-48 h-32 object-cover"
                />
                <div className="p-4 flex-1">
                  <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
                  <p className="text-gray-600">Price: ₹{data.price}</p>{" "}
                  {/* Added a label for clarity */}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brokie;
