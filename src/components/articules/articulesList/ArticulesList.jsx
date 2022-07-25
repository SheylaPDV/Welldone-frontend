import { useEffect, useState } from "react";
import Articule from "./Articule";
import { getLastedArticules } from "../service";
import "./articule.css";
export default function ArticulesList() {
  const [articules, setArticules] = useState([]);

  useEffect(() => {
    getLastedArticules().then((data) => {
      setArticules(data.result);
    });
  }, []);

  return (
    <>
        <h1 className="list-title">Articules</h1>
        <div className="articule-list">
        {articules.length ? (
          articules.map((articule) => (
            <Articule key={articule.title} articule={articule} />
          ))
        ) : (
          <h1>There are not articules</h1>
        )}
      </div>
    </>
  );
}
