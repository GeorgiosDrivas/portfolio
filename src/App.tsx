import { useState } from "react";
import About from "./about";
import "./App.css";
import "./responsive.css";
import Experience from "./experience";
import Menu from "./menu";
import Projects from "./projects/projects";
import Skills from "./skills/skills";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [motion, setMotion] = useState(true);
  const [blackWhite, setBlackWhite] = useState(true);

  return (
    <>
      <div
        id="main"
        className={`${darkMode ? "dark" : "light"} ${
          blackWhite ? "" : "blackWhite"
        }`}
      >
        <Menu
          setDarkMode={setDarkMode}
          setMotion={setMotion}
          motion={motion}
          blackWhite={blackWhite}
          setBlackWhite={setBlackWhite}
        />
        <About darkMode={darkMode} particles={motion} />
        <Experience motion={motion} />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
