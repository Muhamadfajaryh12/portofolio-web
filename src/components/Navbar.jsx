import React, { useEffect, useState } from "react";

const Navbar = ({ setState, state }) => {
  return (
    <div className="w-full  border-gray-900 p-4 0 ">
      <div className="flex justify-between items-center">
        <button className=" font-bold " onClick={() => setState("/")}>
          Muhamad Fajar
        </button>
        <div className="">
          <ul className="flex justify-center gap-4">
            <li>
              <button
                onClick={() => setState("about")}
                className={`${
                  state == "about" ? "text-stone-700" : "text-gray-300"
                }`}
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => setState("project")}
                className={`${
                  state == "project" ? "text-stone-700" : "text-gray-300"
                }`}
              >
                Project
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
