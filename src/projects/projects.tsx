import SingleProject from "./singleProject";
import "../styles/projects.css";
import { codeEditor, PetDiary, doctor } from "../constants/projectsConstants";

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
              title="Iatreio Gkika"
              content="Website for Iatreio Gkika using PHP, JavaScript, and WordPress."
              url="https://iatreio-gkika.gr/"
              image="/screen.webp"
              techStack={doctor}
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
              title="Pet Diary"
              content="A full stack web app to track your pet's medication and appointments easier than ever."
              githubLink="https://github.com/GeorgiosDrivas/pet-diary"
              url="https://pet-diary-f0bn.onrender.com/"
              image="/petDiary.webp"
              techStack={PetDiary}
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
