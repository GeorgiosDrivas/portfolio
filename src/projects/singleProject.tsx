interface Props {
  title: string;
  content: string;
  image: string;
  githubLink: string;
  url: string;
}

export default function SingleProject({
  title,
  content,
  image,
  githubLink,
  url,
}: Props) {
  return (
    <>
      <div className="col-6">
        <div className="single-project">
          <div className="project-image">
            <img src={image} alt="title" />
            <div className="project-links"></div>
          </div>
          <div className="project-details">
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
