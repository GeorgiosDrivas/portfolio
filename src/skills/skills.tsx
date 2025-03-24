import SingleSkill from "./sinlgeSkill";
import "../styles/skills.css";

export default function Skills() {
  return (
    <>
      <section id="skills">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center">Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="skills-wrap d-flex flex-wrap justify-content-center">
                <SingleSkill image="/skillsIcons/angular.svg" title="Angular" />
                <SingleSkill
                  image="/skillsIcons/bootstrap.svg"
                  title="Bootstrap"
                />
                <SingleSkill image="/skillsIcons/css.svg" title="CSS" />
                <SingleSkill image="/skillsIcons/git.svg" title="GIT" />
                <SingleSkill image="/skillsIcons/html.svg" title="HTML" />
                <SingleSkill
                  image="/skillsIcons/javascript.svg"
                  title="Javascript"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="mt-3 skills-wrap d-flex flex-wrap justify-content-center">
                <SingleSkill image="/skillsIcons/java.svg" title="Java" />
                <SingleSkill image="/skillsIcons/jest.svg" title="Jest" />
                <SingleSkill image="/skillsIcons/jquery.svg" title="JQuery" />
                <SingleSkill image="/skillsIcons/joomla.svg" title="Joomla" />
                <SingleSkill image="/skillsIcons/node.svg" title="NodeJs" />
                <SingleSkill
                  image="/skillsIcons/postgresql.svg"
                  title="PostgreSQL"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="mt-3 skills-wrap d-flex flex-wrap justify-content-center">
                <SingleSkill image="/skillsIcons/react.svg" title="React" />
                <SingleSkill image="/skillsIcons/redux.svg" title="Redux" />
                <SingleSkill
                  image="/skillsIcons/springBoot.svg"
                  title="Spring Boot"
                />
                <SingleSkill
                  image="/skillsIcons/tailwind.svg"
                  title="Tailwind"
                />
                <SingleSkill
                  image="/skillsIcons/typescript.svg"
                  title="Typescript"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="mt-3 skills-wrap d-flex flex-wrap justify-content-center">
                <SingleSkill
                  image="/skillsIcons/wordpress.svg"
                  title="Wordpress"
                />
                <SingleSkill
                  image="/skillsIcons/react_native.svg"
                  title="React Native"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
