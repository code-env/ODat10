// src/Slider.js
import React, { useState } from "react";
import odpng from "../assets/Rectangle3.png";
import odpng1 from "../assets/Rectangle1.png";
import odpng2 from "../assets/Rectangle2.png";

const images = [odpng, odpng1, odpng2];

const Slider = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div className="flex justify-center items-center overflow-x-auto hide-scrollbar">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-none transition-transform duration-500 ease-in-out transform cursor-pointer ${
                index === hoverIndex
                  ? "z-20 w-2/4 scale-105"
                  : "z-10 w-1/4 scale-90"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
