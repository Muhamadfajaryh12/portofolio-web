import React, { act } from "react";

const CardExperience = ({ data, active }) => {
  const { company, periode, position, type } = data;
  return (
    <div
      className={` border-4 p-3 flex flex-col justify-between  rounded-lg ${
        active
          ? " text-white font-semibold border-cyan-400 shadow-lg shadow-cyan-400"
          : "text-gray-400 "
      }`}
    >
      <div className="flex gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            active ? "bg-pink-500 shadow-xl shadow-pink-500" : "bg-gray-400"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            active ? "bg-pink-500 shadow-xl shadow-pink-500" : "bg-gray-400"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            active ? "bg-pink-500 shadow-xl shadow-pink-500" : "bg-gray-400"
          }`}
        ></div>
      </div>
      <div className="my-4">
        <p className="font-bold text-2xl">{company}</p>
        <p>
          {position} | {type}
        </p>
        <p className="text-sm">{periode}</p>
      </div>
      <div className="flex justify-end gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            active ? "bg-pink-500 shadow-xl shadow-pink-500" : "bg-gray-400"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            active ? "bg-pink-500 shadow-xl shadow-pink-500" : "bg-gray-400"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            active ? "bg-pink-500 shadow-xl shadow-pink-500" : "bg-gray-400"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default CardExperience;
