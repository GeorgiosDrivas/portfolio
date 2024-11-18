import SingleSkill from "./sinlgeSkill";

export default function Skills() {
  return (
    <>
      <section id="skills">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center">My skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="skills-wrap d-flex flex-wrap justify-content-center">
                <SingleSkill image="/skillsIcons/java.svg" title="Java" />
                <SingleSkill
                  image="/skillsIcons/javascript.svg"
                  title="Javascript"
                />
                <SingleSkill
                  image="/skillsIcons/typescript.svg"
                  title="Typescript"
                />
                <SingleSkill image="/skillsIcons/html.svg" title="HTML" />
                <SingleSkill image="/skillsIcons/css.svg" title="CSS" />
                <SingleSkill
                  image="/skillsIcons/bootstrap.svg"
                  title="Bootstrap"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
