import React, { useState, useEffect } from 'react';


const Speakers = () => {
  // Create state to track which item is selected
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  // Create state for the countdown timer
  const [countdown, setCountdown] = useState(10); // 10 seconds countdown

  // Define an array of items
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  // useEffect to handle the countdown
  useEffect(() => {
    if (countdown > 0) {
      const timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timerId); // Cleanup the timer
    }
  }, [countdown]);

  const reset = () => {
    setCountdown(countdown)
  }

  return (
    <div className="mt-20 grid grid-cols-1 gap-4 p-4">
      <div className="text-xl m-3 p-3 font-bold">
        Countdown: {countdown} seconds
        <button onClick={reset}>Reset</button>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={`p-4 border rounded cursor-pointer ${
            selectedIndex === index ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Speakers;