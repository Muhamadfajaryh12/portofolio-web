import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Banner from "./section/Banner";
import Project from "./section/Project";
import Skill from "./section/Skill";

function App() {
  return (
    <MainLayout>
      <Banner />
      <Skill />
      <Project />
    </MainLayout>
  );
}

export default App;
