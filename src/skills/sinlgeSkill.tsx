export default function SingleSkill({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <>
      <div className="singleSkill d-flex align-items-center px-4 py-2">
        <img src={image} alt={title} />
        {title}
      </div>
    </>
  );
}
