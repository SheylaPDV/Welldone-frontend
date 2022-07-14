export default function Articule({ articule }) {
  return (
    <>
      <div className="articule-box">
        <h2>{articule.title}</h2>
        <p>{articule.content}</p>
        <span>{articule.author}</span>
      </div>
    </>
  );
}
