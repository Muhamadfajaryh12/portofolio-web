import React from "react";
import * as motion from "motion/react-client";

const getRandomOffset = () => {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  return { x: rand(-100, 100), y: rand(-100, 100) }; // posisi awal acak
};

const CardSkill = ({ data, isEven, ...props }) => {
  const { name, image } = data;
  const initialPos = getRandomOffset();

  return (
    <motion.div
      drag
      dragConstraints={props.constraints}
      dragElastic={0.2}
      initial={initialPos}
      animate={{ x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
    >
      <div
        className={`rounded-xl ring-2 p-1 ${
          isEven
            ? "ring-[#ff00cc] shadow-lg shadow-[#ff00cc]"
            : "ring-[#3333ff] shadow-lg shadow-[#3333ff]"
        }`}
      >
        <div
          className={`rounded-xl w-full ring p-4 text-gray-200 flex gap-2 justify-center items-center ${
            isEven
              ? "ring-[#ff00cc]  inset-shadow-sm inset-shadow-[#ff00cc]"
              : "ring-[#3333ff]  inset-shadow-sm inset-shadow-[#3333ff] "
          }`}
        >
          <p className="font-semibold text-md">{name}</p>
          <img src={image} alt={name} className="w-8 h-8" />
        </div>
      </div>
    </motion.div>
  );
};

export default CardSkill;
