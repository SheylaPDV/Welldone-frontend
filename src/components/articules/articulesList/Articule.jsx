export default function Articule({articule}) {
    return <>
        <h2>{articule.titulo}</h2>
        <p>{articule.articulo}</p>
        <span>{articule.autor}</span>
    </>
}