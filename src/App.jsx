import { useEffect } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Banner from "./section/Banner";
import Experience from "./section/Experience";
import Project from "./section/Project";
import Skill from "./section/Skill";
import About from "./section/About";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    const sectionIds = ["about", "experience", "skills", "project", "banner"];
    const elements = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            console.log(id);
            if (id == "banner") {
              window.history.replaceState(
                null,
                "",
                window.location.pathname + window.location.search
              );
            } else {
              window.history.replaceState(null, "", `#${id}`);
            }
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
      <About />
      <Experience />
      <Skill />
      <Project />
    </MainLayout>
  );
}

export default App;
