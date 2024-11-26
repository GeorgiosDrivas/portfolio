import ParticlesComponent from "./particles";

export default function About() {
  return (
    <section id="about">
      <ParticlesComponent id="particles" />
      <div className="container h-100">
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center mt-5">
            <div id="avatar">
              <img src="/profileImage.png" alt="" />
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
                <br />{" "}
                <span id="desc">A highly skilled Frontend Developer.</span>
                <br />{" "}
              </p>
              <p>
                With extensive expertise in Web Development, Responsive
                <br />
                Design,Support and Maintenance of websites / web apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
