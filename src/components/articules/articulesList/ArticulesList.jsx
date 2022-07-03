import Articule from "./Articule"
import articules from "./articules"

export default function ArticulesList () {
    return <>
        <h1>Articules</h1>
        {articules.map(articule => <Articule articule={articule}/>) }
    </> 

}

