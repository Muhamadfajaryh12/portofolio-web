import { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import Banner from "./section/Banner";
import Experience from "./section/Experience";
import Project from "./section/Project";
import Skill from "./section/Skill";

function App() {
  useEffect(() => {
    const sectionIds = ["about", "experience", "skills", "project"];
    const elements = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  return (
    <MainLayout>
      <Banner />
      <Experience />
      <Skill />
      <Project />
    </MainLayout>
  );
}

export default App;
