import ExperienceSvg from "./experienceSvg";
import "./styles/experience.css";

export default function Experience({ motion }: { motion: boolean }) {
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
              <ExperienceSvg motion={motion} />
            </div>
            <div className="col-12 col-lg-6">
              <div className="experience-wrap d-flex flex-column justify-content-around align-items-center">
                <div className="company-wrap">
                  <h3>Full Stack Software Egnineer</h3>
                  <h4>
                    Wizy Agency
                    <span className="dot"></span>
                    Oct 2025 - Present
                  </h4>
                  <p>
                    ▪Translated design mockups into fully functional, custom
                    WordPress websites.
                    <br /> ▪ Maintained and optimized existing websites built
                    with WordPress and Joomla. <br />▪ Provided technical
                    support and troubleshooting for clients.
                  </p>
                </div>
                <div className="company-wrap">
                  <h3>Junior Frontend Developer</h3>
                  <h4>
                    Ruler Digital Agency
                    <span className="dot"></span>
                    Dec 2022 - Mar 2024
                  </h4>
                  <p>
                    ▪Translated design mockups into fully functional, custom
                    WordPress websites.
                    <br /> ▪ Maintained and optimized existing websites built
                    with WordPress and Joomla. <br />▪ Provided technical
                    support and troubleshooting for clients.
                  </p>
                </div>
                <div className="company-wrap">
                  <h3>Frontend Developer Intern</h3>
                  <h4>
                    Ruler Digital Agency
                    <span className="dot"></span>
                    Jul 2022 - Dec 2022
                  </h4>
                  <p>
                    ▪ Gained hands-on experience with popular CMS platforms,
                    including WordPress and Joomla.
                    <br />▪ Developed custom WordPress themes using PHP,
                    Javascript, JQuery, Bootstrap and SCSS.
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
