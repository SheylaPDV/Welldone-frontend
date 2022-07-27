

export default function Articule({ articule }) {
  const photoUrl = articule.photo ? `http://localhost:3001/${articule.photo}` : "/default.png";

  return (
    <>
      <div className="articule-box">
        <h2 className="articule-title">{articule.title}</h2>
        <p className="articule-content">{articule.content}</p>
        <img className="articule-img" src={photoUrl} alt="" />
      </div>
    </>
  );
}
