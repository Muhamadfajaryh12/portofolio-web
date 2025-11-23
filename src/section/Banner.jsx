import React, { useEffect, useState } from "react";
import fajarPng from "../../public/image/fajar.png";
import PrimaryButton from "../components/PrimaryButton";
const Banner = () => {
  return (
    <div
      className="w-full flex justify-between items-center h-[500px]"
      id="banner"
    >
      <div className="">
        <h1 className="text-3xl font-bold">Halo, Saya Muhamad Fajar</h1>
        <div className="flex gap-4 items-center-safe">
          <div className="w-32 h-1 bg-black "></div>
          <h6 className="text-2xl italic font-semibold">Web Developer</h6>
        </div>
        <div className="flex">
          <PrimaryButton text={"Download CV"} />
        </div>
      </div>
      <div className="w-96 h-96">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="blobClip">
            <path
              fill="#D0E2FF"
              d="M42.6,-65.7C50.7,-52.7,49.8,-34.3,55.2,-17.9C60.7,-1.5,72.5,13,71.5,25.4C70.4,37.8,56.5,48.3,42.5,60.2C28.4,72.2,14.2,85.7,0.1,85.5C-13.9,85.3,-27.9,71.4,-42.5,59.6C-57.1,47.8,-72.5,38.2,-79.9,23.9C-87.3,9.7,-86.7,-9.2,-77.4,-21.2C-68.1,-33.3,-50,-38.6,-35.6,-49.6C-21.3,-60.6,-10.6,-77.3,3.3,-81.8C17.2,-86.4,34.5,-78.8,42.6,-65.7Z"
              transform="translate(100 100)"
            />
          </clipPath>
          <image
            href={fajarPng}
            width="100%"
            height="100%"
            clipPath="url(#blobClip)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
