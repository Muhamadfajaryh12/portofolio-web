import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(window.location.hash);
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.location.hash !== active) {
        setActive(window.location.hash);
      }
    }, 100);
    console.log(active);
    return () => clearInterval(interval);
  }, [active]);
  return (
    <div className="w-full  p-6 border-b  border-gray-900 fixed ">
      <div className="flex items-center">
        <h1 className="text-white font-bold ">Muhamad Fajar</h1>
        <div className=" flex-1">
          <ul className="flex justify-center gap-4">
            <li
              className={` font-bold ${
                active == "#about" ? "text-pink-500" : "text-white"
              }`}
            >
              <a href="#about">ABOUT</a>
            </li>
            <li
              className={` font-bold ${
                active == "#experience" ? "text-pink-500" : "text-white"
              }`}
            >
              <a href="#experience">EXPERIENCE</a>
            </li>
            <li
              className={` font-bold ${
                active == "#skills" ? "text-pink-500" : "text-white"
              }`}
            >
              <a href="#skills">SKILLS</a>
            </li>
            <li
              className={` font-bold ${
                active == "#project" ? "text-pink-500" : "text-white"
              }`}
            >
              <a href="#project">PROJECT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
