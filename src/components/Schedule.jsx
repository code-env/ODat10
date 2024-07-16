import React, { useState } from "react";

function Schedule() {
  const [selected, setSelected] = useState(null);

  const items = Array.from({length: 4}, (_, i) => `DAY ${i + 1}`)
  // console.log(items);

  return (
    <div className="flex mt-20">
      <div className="m-3 p-3">
        <h2 className="text-gray-900 mb-4">Schedule</h2>
        <div className="bg-gray-100 p-3 rounded-full w-full flex-shrink-0 h-15 gap-10 flex items-center justify-center">
          {items.map((item, index) => (
            <button
            key={index}
            onClick={() => setSelected(index)}
            className={`md:px-12 p-1 rounded-lg cursor-pointer ${
              selected === index
              ? 'bg-blue-500 text-white'
              : 'bg-white text-black'
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
