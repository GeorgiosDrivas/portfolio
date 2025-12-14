import SingleSkill from "./sinlgeSkill";
import "../styles/skills.css";

export default function Skills({ darkMode }: { darkMode: boolean }) {
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
                <SingleSkill
                  image="/skillsIcons/bootstrap.svg"
                  title="Bootstrap"
                />
                <SingleSkill image="/skillsIcons/css.svg" title="CSS" />
                <SingleSkill image="/skillsIcons/git.svg" title="GIT" />
                <SingleSkill image="/skillsIcons/html.svg" title="HTML" />
                <SingleSkill
                  image="/skillsIcons/javascript.svg"
                  title="JavaScript"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="mt-3 skills-wrap d-flex flex-wrap justify-content-center">
                <SingleSkill image="/skillsIcons/jest.svg" title="Jest" />
                <SingleSkill image="/skillsIcons/jquery.svg" title="JQuery" />
                <SingleSkill image="/skillsIcons/node.svg" title="NodeJs" />
                <SingleSkill
                  image={
                    !darkMode
                      ? "/skillsIcons/next.svg"
                      : "/skillsIcons/next-white.svg"
                  }
                  title="Next.Js"
                />
                <SingleSkill
                  image="/skillsIcons/postgresql.svg"
                  title="PostgreSQL"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="mt-3 skills-wrap d-flex flex-wrap justify-content-center">
                <SingleSkill image="/skillsIcons/react.svg" title="ReactJs" />
                <SingleSkill image="/skillsIcons/redux.svg" title="Redux" />
                <SingleSkill
                  image="/skillsIcons/tailwind.svg"
                  title="Tailwind CSS"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="mt-3 skills-wrap d-flex flex-wrap justify-content-center">
                <SingleSkill
                  image="/skillsIcons/typescript.svg"
                  title="TypeScript"
                />
                <SingleSkill
                  image="/skillsIcons/wordpress.svg"
                  title="WordPress"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
