import ParticlesComponent from "./particles";
import "./styles/about.css";

export default function About({
  darkMode,
  particles,
}: {
  darkMode: boolean;
  particles: boolean;
}) {
  return (
    <section id="about">
      {particles && <ParticlesComponent id="particles" darkMode={darkMode} />}
      <div className="container h-100">
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center mt-5">
            <div id="avatar">
              <img src="/profileImage.webp" alt="Avatar image" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-10">
            <div className="about-content">
              <p>
                <span>Hello, my name is</span>
                <br />
                <span id="name">Georgios Drivas.</span>
                <br />
                <span id="desc">A highly skilled Frontend Developer.</span>
                <br />
              </p>
              <p>
                With extensive expertise in Web Development, Responsive
                <br />
                Design, Support and Maintenance of websites / web apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
