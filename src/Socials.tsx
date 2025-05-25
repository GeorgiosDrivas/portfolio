import GithubSvg from "./assets/githubSvg";
import LinkedinSvg from "./assets/linkedinSvg";
import "./styles/socials.css";

export default function Socials() {
  return (
    <section id="socials">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="socials-wrap">
              <a
                href="https://www.linkedin.com/in/drivasgeorgios/"
                title="Linkedin Profile"
                target="_blank"
              >
                <LinkedinSvg />
              </a>
              <a
                href="https://github.com/GeorgiosDrivas"
                target="_blank"
                title="Github Profile"
              >
                <GithubSvg />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
