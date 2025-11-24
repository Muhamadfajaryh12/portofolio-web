import React, { useRef } from "react";
import dataProject from "../data/project.json";
import CardProject from "../components/CardProject";
import { MdWork, MdWorkOutline } from "react-icons/md";

const Project = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold my-2">Projek</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 ">
        {dataProject.map((item) => (
          <div className="border p-2 rounded-sm border-gray-300 flex gap-2 items-center">
            <div className="p-2 bg-stone-800 text-gray-200 rounded-sm">
              <MdWorkOutline size={25} />
            </div>
            <div className="">
              <h6 className="font-semibold">{item.name}</h6>
              <a
                className="text-sm"
                href="https://github.com/Muhamadfajaryh12?tab=repositories"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
