import { useEffect, useState } from "react"
import Articule from "./Articule"
import { getLastedArticules } from "./service"

export default function ArticulesList () {
    const [articules,setArticules] = useState([])

    useEffect(() =>{
         getLastedArticules().then((data) => {
            setArticules(data.result)
         })
    }, [])

    return <>
        <h1>Articules</h1>
        {articules.length ? 
        articules.map(articule => <Articule key={articule.title} articule={articule}/>):
        <h1>There are not articules</h1> }
    </> 

}

