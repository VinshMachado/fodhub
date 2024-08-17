import React, { useState } from "react";

const Car: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"]; // Replace with your actual slides or images

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-11/12 bg-black overflow-hidden">
      <div className="relative h-56 md:h-80 lg:h-96 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
              {slide}
            </span>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group hover:bg-white/50 dark:hover:bg-gray-800/60 transform -translate-y-1/2"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group hover:bg-white/50 dark:hover:bg-gray-800/60 transform -translate-y-1/2"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Car;
