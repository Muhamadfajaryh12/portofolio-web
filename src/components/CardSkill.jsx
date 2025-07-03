import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const getRandomFloat = (min, max) => Math.random() * (max - min) + min;
const CardSkill = ({ data, isEven, constraints }) => {
  const controls = useAnimation();

  useEffect(() => {
    const float = async () => {
      while (true) {
        await controls.start({
          x: getRandomFloat(-200, 200),
          y: getRandomFloat(-200, 200),
          transition: {
            duration: getRandomFloat(5, 10),
            ease: "easeInOut",
          },
        });
      }
    };

    float();
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      drag
      dragConstraints={constraints}
      className={`p-4 rounded-xl text-white shadow-md border ${
        isEven
          ? "border-pink-500  shadow-pink-500"
          : "border-blue-500 shadow-blue-500"
      }`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
      }}
    >
      <img src={data.image} alt={data.name} className="mx-auto w-14 h-12" />
      <p className="mt-2 text-center font-extralight">{data.name}</p>
    </motion.div>
  );
};

export default CardSkill;
