

export default function Articule({ articule }) {
  return (
    <>
      <div className="articule-box">
        <h2 className="articule-title">{articule.title}</h2>
        <p className="articule-content">{articule.content}</p>
        <img className="articule-img" src={`http://localhost:3001/${articule.photo}`} alt="" />
      </div>
    </>
  );
}
