import ParticlesComponent from "./particles";

export default function About() {
  return (
    <section id="about">
      <ParticlesComponent id="particles" />
      <div className="container h-100">
        <div className="row mt-3">
          <div className="col-12">
            <div id="avatar">
              <img src="/profileImage.png" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="about-content">
              <p className="text-start">
                Hi 👋, my name is Georgios Drivas.
                <br /> A highly skilled Frontend Developer.
                <br /> With extensive expertise in Responsive design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
