import { useState } from "react";
import odpng from "../assets/Rectangle3.png";
import odpng1 from "../assets/Rectangle1.png";
import odpng2 from "../assets/Rectangle2.png";
import odpng3 from "../assets/OD-pic1.jpg";
import odpng4 from "../assets/OD-pic2.jpg";
import odpng5 from "../assets/OD-pic3.jpg";
import odpng6 from "../assets/OD-pic4.jpg";
import odpng7 from "../assets/OD-pic5.jpg";
import odpng8 from "../assets/OD-pic6.jpg";
import odpng9 from "../assets/OD-pic7.jpg";

const images = [
  odpng,
  odpng1,
  odpng2,
  odpng3,
  odpng4,
  odpng5,
  odpng6,
  odpng7,
  odpng8,
  odpng9,
];

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
    <div className="relative w-full max-w-5xl mx-auto h-screen overflow-hidden">
      <div className="flex justify-center items-center overflow-x-auto hide-scrollbar space-x-2 py-4">
        <div className="flex items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative flex-none transition-transform duration-500 ease-in-out transform cursor-pointer ${
              index === currentIndex ? "scale-105 z-20" : "scale-90 z-10"
            }`}
            style={{
              width: index === currentIndex ? "50%" : "40%",
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
      </div>
      <div className="flex z-50 items-center hidden ">
        <button
          onClick={handlePrev}
          className="absolute left-0 transform z-10 -translate-y-1/2 px-4 py-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 transform -translate-y-1/2 z-10 px-4 py-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
