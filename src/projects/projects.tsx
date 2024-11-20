import SingleProject from "./singleProject";

const codeKeep = ["Angular", "Typescript", "Spring Boot", "PostgreSQL"];

const linkedin = ["React", "Typescript", "MUI", "Vite"];

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
              content="A linkedIn job search clone with Vite, React JS, Material UI."
              githubLink="https://github.com/GeorgiosDrivas/Linkedin-job-search-clone"
              url="linkedin-job-search-clone.onrender.com/"
              image="/linkedin-job-search-clone.png"
              techStack={linkedin}
            />
          </div>
        </div>
      </section>
    </>
  );
}
