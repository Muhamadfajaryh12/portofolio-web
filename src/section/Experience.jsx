import React, { useEffect, useState } from "react";
import CardExperience from "../components/CardExperience";
import dataExperience from "../data/experience.json";

const Experience = () => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % dataExperience.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="min-h-screen snap-center flex items-center justify-center p-4"
      id="experience"
    >
      <div className="max-w-7xl mx-auto ">
        <p className="text-4xl font-semibold my-6 text-white uppercase">
          EXPERIENCE
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataExperience.map((item, index) => (
            <CardExperience data={item} active={active == index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
