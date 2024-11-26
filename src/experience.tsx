import ExperienceSvg from "./experienceSvg";

export default function Experience() {
  return (
    <>
      <section id="experience">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">Experience</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <ExperienceSvg />
            </div>
            <div className="col-12 col-lg-6">
              <div className="experience-wrap d-flex flex-column justify-content-around align-items-center">
                <div className="company-wrap">
                  <h3>Junior Frontend Developer</h3>
                  <p>
                    Ruler Digital Agency
                    <span className="dot"></span>
                    Dec 2022 - Mar 2024
                  </p>
                  <p>
                    Convert designs into custom WordPress websites. Maintain
                    existing websites using WordPress and Joomla. Provide
                    customer support.
                  </p>
                </div>
                <div className="company-wrap">
                  <h3>Frontend Developer Intern</h3>
                  <p>
                    Ruler Digital Agency
                    <span className="dot"></span>
                    Jul 2022 - Dec 2022
                  </p>
                  <p>
                    Practice with popular CMS such as WordPress and Joomla.
                    Create custom WordPress themes with PHP, JavaScript,
                    Bootstrap, and SCSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
