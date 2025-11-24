import { useEffect, useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Banner from "./section/Banner";
import Experience from "./section/Experience";
import Project from "./section/Project";
import Skill from "./section/Skill";
import About from "./section/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  // useEffect(() => {
  //   const sectionIds = ["about", "experience", "skills", "project", "banner"];
  //   const elements = sectionIds.map((id) => document.getElementById(id));

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const id = entry.target.id;
  //           console.log(id);
  //           if (id == "banner") {
  //             window.history.replaceState(
  //               null,
  //               "",
  //               window.location.pathname + window.location.search
  //             );
  //           } else {
  //             window.history.replaceState(null, "", `#${id}`);
  //           }
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5,
  //     }
  //   );

  //   elements.forEach((el) => {
  //     if (el) observer.observe(el);
  //   });

  //   return () => {
  //     elements.forEach((el) => {
  //       if (el) observer.unobserve(el);
  //     });
  //   };
  // }, []);

  const [state, setState] = useState("/");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const pages = [
    {
      id: "/",
      element: <Banner key={"/"} />,
    },
    {
      id: "about",
      element: <About key={"about"} />,
    },
    {
      id: "project",
      element: <Project key={"project"} />,
    },
  ];

  const changePage = (newState) => {
    const newIndex = pages.findIndex((p) => p.id === newState);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
    setState(newState);
  };
  return (
    <MainLayout setState={changePage} state={state}>
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={state}
            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {pages[currentIndex].element}
          </motion.div>
        </AnimatePresence>
      </div>
    </MainLayout>
  );
}

export default App;
