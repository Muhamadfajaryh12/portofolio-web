import React, { useRef } from "react";
import skillData from "../data/skills.json";
import CardSkill from "../components/CardSkill";
import * as motion from "motion/react-client";

const Skill = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <motion.div className="max-w-7xl mx-auto" ref={constraintsRef}>
        <motion.p
          className="  text-4xl font-semibold my-10 text-white uppercase"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          SKILLS
        </motion.p>
        <motion.div
          className="grid sm:grid-cols-3 md:grid-cols-7 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          {skillData.map((item, index) => (
            <CardSkill
              data={item}
              key={index}
              isEven={index % 2 == 0}
              constraints={constraintsRef}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skill;
