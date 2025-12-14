import ProjectGithubSvg from "../assets/projectGithubSvg";
import ProjectUrlSvg from "../assets/projectUrlSvg";

interface Props {
  title: string;
  content: string;
  image: string;
  githubLink?: string;
  url: string;
  techStack: string[];
}

export default function SingleProject({
  title,
  content,
  image,
  githubLink,
  url,
  techStack,
}: Props) {
  return (
    <>
      <div className="col-12 col-lg-4 mb-4">
        <div className="single-project h-100">
          <div className="project-image">
            <img
              className="w-100 h-100"
              src={image}
              alt={title}
              loading="lazy"
            />
            <div className="project-links">
              {githubLink && (
                <a href={githubLink} target="_blank" title="Github">
                  <ProjectGithubSvg />
                </a>
              )}
              <a href={url} target="_blank" title="Live">
                <ProjectUrlSvg />
              </a>
            </div>
          </div>
          <div className="project-details p-3">
            <h3>{title}</h3>
            <p className="content">{content}</p>
            <div className="tech-stack d-flex justify-content-start align-items-center">
              {techStack.map((item: string) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
