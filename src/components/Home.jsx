import React from "react";

function Home() {
  return (
    <div className="flex mt-20 w-full">
      <div className="flex flex-col gap-[271px] flex-1 m-3 p-3 ">
        <h1 className="text-5xl font-bold">OD@10</h1>
        <p className="">CELEBRATING A DECADE OF TRIUMPH</p>
        <div className="grid grid-cols-4 gap-5 h-20 w-20 ">
          <div className=" items-center">
            <h4>10</h4>
            <p>DAYS</p>
          </div>
          <div className="flex items-center flex-col">
            <h4>10</h4>
            <p>DAYS</p>
          </div>
        </div>
      </div>
      <div className="flex flex-2 m-3 p-3 bg-blue-500">
        <h1 className="text-5xl font-bold">OD@10</h1>
        <p>CELEBRATING A DECADE OF TRIUMPH</p>
      </div>
    </div>
  );
}

export default Home;
