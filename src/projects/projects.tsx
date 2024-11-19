import SingleProject from "./singleProject";

export default function Projects() {
  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="row">
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
              image=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
