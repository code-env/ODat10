import React from "react";
import {
  image2,
  image10,
  image11,
  image12,
  image13,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image3,
} from "../assets/Images";

function Partners() {
  return (
    <div className="mt-20">
      <div className="lg:flex flex-col m-3 p-3 font-sans">
       <div className="m-3 p-3">
        <h1 className="text-gray-900 text-custom-32">Partners</h1>
       </div>
        <div className="grid gap-4 p-6 lg:gap-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={image2} className="w-40" alt="Partner 1" />
            <img src={image4} className="w-40" alt="Partner 2" />
            <img src={image5} className="w-40" alt="Partner 3" />
            <img src={image6} className="w-40" alt="Partner 4" />
          </div>

          <div className="grid grid-cols-2  p-4  md:grid-cols-3 gap-10 mx-auto">
            <img src={image3} className="w-40" alt="Partner 5" />
            <img src={image8} className="w-40" alt="Partner 6" />
            <img src={image7} className="w-40" alt="Partner 7" />
          </div>

          <div className="flex justify-between md:grid-cols-4 gap-4">
            <img src={image12} />
            <div className="flex gap-[63px]">
              <img src={image9} className="w-40" alt="Partner 8" />
              <img src={image10} className="w-40" alt="Partner 9" />
            </div>
            <img src={image11} className="w-40" alt="Partner 10" />
          </div>
            <div>
            <img src={image13} className="w-40" alt="Partner 11" />
            </div>
        </div>
        <button className="bg-blue-600 rounded-full mx-auto mt-6 p-3 text-white font-medium">
          Become a partner
        </button>
      </div>
    </div>
  );
}

export default Partners