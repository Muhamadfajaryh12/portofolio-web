import React from "react";

const Banner = () => {
  return (
    <div className="min-h-screen snap-center flex justify-center items-center">
      <div className="max-w-7xl">
        <div className="rounded-lg w-full h-96 shadow-md p-[4px] bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="w-full h-full bg-black rounded-[calc(0.5rem-2px)] text-white text-center">
            <h1>Portofolio Website.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
