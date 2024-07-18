import { useState } from "react";
import odpng from "../assets/Rectangle3.png";
import odpng1 from "../assets/Rectangle1.png";
import odpng2 from "../assets/Rectangle2.png";

const images = [odpng, odpng1, odpng2];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleHover = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div className="flex justify-center items-center overflow-x-auto hide-scrollbar space-x-2 py-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative flex-none transition-transform duration-500 ease-in-out transform cursor-pointer ${
              index === currentIndex ? "scale-105 z-20" : "scale-80 z-10"
            }`}
            style={{
              width: index === currentIndex ? "40%" : "30%",
            }}
            onMouseEnter={() => handleHover(index)}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex space-x-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full shadow-md outline-none hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="p-2 outline-none rounded-full shadow-md hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;