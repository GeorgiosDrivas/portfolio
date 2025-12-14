import ParticlesComponent from "./particles";
import { CSSProperties } from "react";

export default function About({
  darkMode,
  particles,
}: {
  darkMode: boolean;
  particles: boolean;
}) {
  const styles: { [key: string]: CSSProperties } = {
    about: {
      position: "relative",
      overflow: "hidden",
    },
    particles: {
      width: "100%",
      height: "100%",
    },
    container: {
      zIndex: 1,
    },
    tsparticles: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      padding: 0,
      margin: 0,
      zIndex: 1,
    },
    avatar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "280px",
      width: "280px",
      borderRadius: "50%",
      overflow: "hidden",
    },
    avatarImg: {
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      objectFit: "cover",
    },
    aboutContent: {
      fontSize: "30px",
    },
    aboutContentParagraph: {
      textAlign: "start",
      fontSize: "20px",
    },
    aboutTitleSpan: {
      marginBottom: "3px",
    },
    name: {
      fontSize: "40px",
      fontWeight: "1000",
    },
    desc: {
      fontSize: "30px",
      fontWeight: "1000",
    },
  };

  return (
    <section id="about" style={styles.about}>
      {particles && <ParticlesComponent id="particles" darkMode={darkMode} />}
      <div className="container h-100" style={styles.container}>
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center mt-5">
            <div id="avatar" style={styles.avatar}>
              <img
                src="/profileImage.webp"
                alt="Avatar image"
                style={styles.avatarImg}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-10">
            <div className="about-content" style={styles.aboutContent}>
              <p className="about-title mb-0">
                <span style={styles.aboutTitleSpan}>Hello, I'm </span>
                <span id="name" style={styles.name}>
                  Georgios Drivas,
                </span>
              </p>
              <h1 id="desc" style={styles.desc}>
                a Full Stack Software Engineer.
              </h1>
              <p style={styles.aboutContentParagraph}>
                With extensive expertise in
                <br />
                building efficient, user-friendly solutions that drive business
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
