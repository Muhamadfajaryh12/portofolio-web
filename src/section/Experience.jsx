import React, { useEffect, useState } from "react";
import CardExperience from "../components/CardExperience";
import dataExperience from "../data/experience.json";
import { motion } from "motion/react";
const Experience = () => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % dataExperience.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="max-w-7xl mx-auto ">
        <motion.p
          className="text-4xl font-semibold my-6 text-white uppercase"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          EXPERIENCE
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          {dataExperience.map((item, index) => (
            <CardExperience data={item} active={active == index} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
