import React, { useRef } from "react";
import skillData from "../data/skills.json";
import CardSkill from "../components/CardSkill";
import * as motion from "motion/react-client";

const Skill = () => {
  const constraintsRef = useRef(null);

  return (
    <div
      className="min-h-screen snap-center flex items-center justify-center"
      id="skills"
    >
      <motion.div className="max-w-7xl mx-auto" ref={constraintsRef}>
        <p className="  text-4xl font-semibold my-10 text-white uppercase">
          SKILLS
        </p>
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
