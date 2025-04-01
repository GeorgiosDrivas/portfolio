import SingleProject from "./singleProject";
import "../styles/projects.css";
import {
  codeEditor,
  DocsOfficial,
  doctor,
  linkedin,
} from "../constants/projectsConstants";

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
              title="Website Development for Iatreio Gkika"
              content="Website for Iatreio Gkika using PHP, JavaScript, and WordPress."
              url="https://iatreio-gkika.gr/"
              image="/screen.webp"
              techStack={doctor}
            />
            <SingleProject
              title="Linkedin job-search Clone"
              content="A LinkedIn job search clone using Vite, ReactJS, and Material UI."
              githubLink="https://github.com/GeorgiosDrivas/Linkedin-job-search-clone"
              url="https://linkedin-job-search-clone.onrender.com/"
              image="/linkedin-job-search-clone.webp"
              techStack={linkedin}
            />
            <SingleProject
              title="Online Code Editor"
              content="An online code editor using the Piston API to run and test code in multiple languages."
              githubLink="https://github.com/GeorgiosDrivas/online-code-editor"
              url="https://online-code-editor-bif2.onrender.com/"
              image="/editor.webp"
              techStack={codeEditor}
            />
            <SingleProject
              title="VsCode Docs Official"
              content="VSCode extension that provides access to official documentation of the currently opened file's language."
              githubLink="https://github.com/GeorgiosDrivas/vscode-docs-official"
              url="https://marketplace.visualstudio.com/items?itemName=GeorgiosDrivas.docs-official"
              image="/docsOfficial.webp"
              techStack={DocsOfficial}
            />
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mt-4 mb-5 more-projects-btn text-center">
                <a
                  href="https://github.com/GeorgiosDrivas?tab=repositories"
                  target="_blank"
                  title="More projects"
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
