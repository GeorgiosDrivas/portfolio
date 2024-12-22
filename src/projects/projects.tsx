import SingleProject from "./singleProject";
import '../styles/projects.css';

const codeKeep = ["Angular", "Typescript", "Spring Boot", "PostgreSQL"];
const linkedin = ["React", "Typescript", "MUI", "Vite"];
const codeEditor = ["React", "Typescript", "Tailwind", "API"];
const textEditor = ["React", "Typescript", "Bootstrap", "MaterialUI"];

export default function Projects() {
  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center">Projects</h2>
            </div>
          </div>
          <div className="row">
            <SingleProject
              title="CodeKeep"
              content="Code snippet saving web app. Create a free account and save your code snippets. Have access easily and any time!"
              githubLink="https://github.com/GeorgiosDrivas/codekeep"
              url="https://codekeep.onrender.com/"
              image="/codeKeep.png"
              techStack={codeKeep}
            />
            <SingleProject
              title="Linkedin job-search Clone"
              content="A LinkedIn job search clone using Vite, ReactJS, and Material UI."
              githubLink="https://github.com/GeorgiosDrivas/Linkedin-job-search-clone"
              url="https://linkedin-job-search-clone.onrender.com/"
              image="/linkedin-job-search-clone.png"
              techStack={linkedin}
            />
            <SingleProject
              title="Online Code Editor"
              content="An online code editor using the Piston API to run and test code in multiple languages."
              githubLink="https://github.com/GeorgiosDrivas/online-code-editor"
              url="https://online-code-editor-bif2.onrender.com/"
              image="/editor.png"
              techStack={codeEditor}
            />
            <SingleProject
              title="Text Editor"
              content="A text editor built with Vite, ReactJS, Bootstrap 5, and Material UI."
              githubLink="https://github.com/GeorgiosDrivas/text-editor"
              url="https://text-editor-3g9r.onrender.com/"
              image="/textEditor.png"
              techStack={textEditor}
            />
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mt-4 mb-5 more-projects-btn text-center">
                <a
                  href="https://github.com/GeorgiosDrivas?tab=repositories"
                  target="_blank"
                >
                  More projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
