import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
const Banner = () => {
  const title = "Portofolio Website";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (index < title.length) {
      const timeOut = setTimeout(() => {
        setText((prev) => prev + title[index]);
        setIndex((prev) => prev + 1);
      }, 200);

      return () => clearTimeout(timeOut);
    } else {
      setAnimate(true);
    }
  }, [text, index]);

  return (
    <div
      className="min-h-screen snap-center flex items-center justify-center"
      id="banner"
    >
      <div className="max-w-7xl  ">
        <h1 className=" text-white font-extrabold text-7xl uppercase">
          {text}
        </h1>
        <div className="flex justify-center mt-10 gap-4">
          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={animate ? { opacity: 1, y: 0 } : ""}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-2 border-cyan-500 p-2 rounded-md text-center text-cyan-500 font-bold w-32 shadow-lg shadow-cyan-500 hover:bg-cyan-700 hover:text-white"
            href="https://github.com/Muhamadfajaryh12?tab=repositories"
            target="_blank"
          >
            Github
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={animate ? { opacity: 1, y: 0 } : ""}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-2 border-pink-500 p-2 rounded-md text-center text-pink-500 font-bold w-32 shadow-lg shadow-pink-500 hover:bg-pink-700 hover:text-white"
          >
            CV
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={animate ? { opacity: 1, y: 0 } : ""}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="border-2 border-blue-500 p-2 rounded-md text-center text-blue-500 font-bold w-32 shadow-lg shadow-blue-500 hover:bg-blue-700 hover:text-white"
            href="https://www.linkedin.com/in/muhamadfajaryh/"
            target="_blank"
          >
            Linkedln
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
