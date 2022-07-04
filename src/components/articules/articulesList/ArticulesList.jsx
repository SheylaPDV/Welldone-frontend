import { useEffect, useState } from "react"
import Articule from "./Articule"

export default function ArticulesList () {
    const [articules,setArticules] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3001/api/v1/articules", { headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
       })
        .then(response => response.json())
        .then(data => setArticules(data.result))
    }, [])

    return <>
        <h1>Articules</h1>
        {articules.length && articules.map(articule => <Articule key={articule.title} articule={articule}/>) }
    </> 

}

