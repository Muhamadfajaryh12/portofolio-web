import React, { useRef } from "react";
import dataProject from "../data/project.json";
import CardProject from "../components/CardProject";
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;
function useScrollOverflowMask(scrollXProgress) {
  console.log(scrollXProgress);
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    console.log(value);
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

const Project = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);
  return (
    <div
      className="min-h-screen snap-center flex justify-center items-center"
      id="project"
    >
      <div className="max-w-7xl">
        <p className=" text-4xl font-semibold my-10 text-white uppercase">
          PROJECT
        </p>{" "}
        <motion.ul
          ref={ref}
          style={{ maskImage }}
          onWheel={(e) => {
            e.preventDefault();
            ref.current.scrollBy({
              left: e.deltaY,
              behavior: "smooth",
            });
          }}
          className="scroll-smooth flex gap-5 p-4 items-center overflow-x-auto snap-mandatory snap-x custom-scroll overscroll-contain"
        >
          {dataProject.map((item, index) => (
            <li>
              <CardProject key={index} data={item} />
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Project;
