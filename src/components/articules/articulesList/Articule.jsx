export default function Articule({articule}) {
    return <>
        <h2>{articule.title}</h2>
        <p>{articule.content}</p>
        <span>{articule.author}</span>
    </>
}