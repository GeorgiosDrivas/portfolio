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
                <SingleSkill image="/skillsIcons/react.svg" title="React" />
                <SingleSkill
                  image="/skillsIcons/typescript.svg"
                  title="Typescript"
                />
                <SingleSkill image="/skillsIcons/html.svg" title="HTML" />
                <SingleSkill image="/skillsIcons/css.svg" title="CSS" />
              </div>
            </div>
            <div className="col-12">
              <div className="mt-3 skills-wrap d-flex flex-wrap justify-content-center">
                <SingleSkill
                  image="/skillsIcons/bootstrap.svg"
                  title="Bootstrap"
                />
                <SingleSkill
                  image="/skillsIcons/tailwind.svg"
                  title="Tailwind"
                />
                <SingleSkill image="/skillsIcons/angular.svg" title="Angular" />
                <SingleSkill
                  image="/skillsIcons/springBoot.svg"
                  title="Spring Boot"
                />
                <SingleSkill
                  image="/skillsIcons/postgresql.svg"
                  title="PostgreSQL"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="mt-3 skills-wrap d-flex flex-wrap justify-content-center">
                <SingleSkill image="/skillsIcons/jest.svg" title="Jest" />
                <SingleSkill image="/skillsIcons/node.svg" title="NodeJs" />
                <SingleSkill image="/skillsIcons/redux.svg" title="Redux" />
                <SingleSkill image="/skillsIcons/joomla.svg" title="Joomla" />
                <SingleSkill
                  image="/skillsIcons/wordpress.svg"
                  title="Wordpress"
                />
                <SingleSkill image="/skillsIcons/git.svg" title="GIT" />
              </div>
            </div>
            <div className="col-12">
              <div className="mt-3 skills-wrap d-flex flex-wrap justify-content-center">
                <SingleSkill image="/skillsIcons/jquery.svg" title="JQuery" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
