import React from "react";
import CyberpunkFlipCard from "../components/CardAbout";
import { motion } from "motion/react";
const About = () => {
  return (
    <div
      className="min-h-screen p-4 flex justify-center items-center snap-center"
      id="about"
    >
      <div className="max-w-7xl w-full">
        <motion.p
          className="text-4xl font-semibold my-6 text-white uppercase"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          ABOUT
        </motion.p>
        <div className="flex justify-between w-full gap-5">
          <motion.div
            style={{ width: "320px", height: "480px", margin: "0 auto" }}
            className="shadow-lg shadow-cyan-900"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <CyberpunkFlipCard width="100%" height="100%" />
          </motion.div>
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <p className=" font-extrabold text-4xl">Hello, I'm</p>
            <p className="uppercase font-extrabold text-4xl text-shadow-md">
              Muhamad Fajar Yudhistira Herjanto
            </p>
            <p className="uppercase font-extrabold text-4xl text-cyan-400 text-shadow-pink-800 text-shadow-sm">
              Web Programmer
            </p>
            <p className="max-w-xl mt-10 font-extralight">
              A computer science graduate from Singaperbangsa Karawang
              University with a GPA of 3.94, I can use various frameworks and
              programming languages.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
