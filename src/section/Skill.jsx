import React, { useRef } from "react";
import skillData from "../data/skills.json";
import CardSkill from "../components/CardSkill";
import * as motion from "motion/react-client";

const Skill = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="min-h-screen snap-center flex items-center justify-center">
      <motion.div className="max-w-7xl mx-auto" ref={constraintsRef}>
        <p className=" text-center font-bold text-7xl my-10 text-[#ff00cc] text-shadow-lg text-shadow-[#00f0ff]">
          SKILLS
        </p>{" "}
        <div className="grid grid-cols-7 gap-6">
          {skillData.map((item, index) => (
            <CardSkill
              data={item}
              key={index}
              isEven={index % 2 == 0}
              constraints={constraintsRef}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
