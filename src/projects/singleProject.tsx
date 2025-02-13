interface Props {
  title: string;
  content: string;
  image: string;
  githubLink: string;
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
      <div className="col-12 col-lg-6 mb-4">
        <div className="single-project">
          <div className="project-image">
            <img
              className="w-100 h-100"
              src={image}
              alt={title}
              loading="lazy"
            />
            <div className="project-links">
              <a href={githubLink} target="_blank" title="Github">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  className="me-3"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1rem"
                  width="1rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
              <a href={url} target="_blank" title="Live">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1rem"
                  width="1rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.5 1H6v1H2v12h12v-4h1v4.5l-.5.5h-13l-.5-.5v-13l.5-.5z"></path>
                  <path d="M15 1.5V8h-1V2.707L7.243 9.465l-.707-.708L13.293 2H8V1h6.5l.5.5z"></path>
                </svg>
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
