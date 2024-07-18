import React, { useState } from "react";

function Schedule() {
  const [selected, setSelected] = useState(null);

  const items = Array.from({ length: 4 }, (_, i) => `DAY ${i + 1}`);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-auto">
        <h2 className="text-gray-900 mb-4 text-center md:text-left text-2xl md:text-3xl">Schedule</h2>
        <div className="bg-gray-100 p-2 md:p-3 rounded-full w-full flex-shrink-0 h-15 gap-2 md:gap-10 flex items-center justify-center">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`px-4 md:px-12 py-1 md:py-2 rounded-full cursor-pointer outline-0 ${
                selected === index
                  ? 'bg-blue-500 text-white'
                  : 'text-black'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
