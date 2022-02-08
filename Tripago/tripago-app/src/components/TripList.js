import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

//Styles
import "./TrippList.css";

//Componenets
export const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const [trips, isPending, error] = useFetch(url);

  return (
    <div className="TripList">
      <h2>Trip lists</h2>
      {isPending && <div>Loading Trips...</div>}
      <div>
        <h3>{error}</h3>
      </div>
      <ul>
        {trips &&
          trips.map((t) => {
            return (
              <li key={t.id}>
                <h3>😊 {t.title} 👶</h3>
                <p>🤑🤑 {t.price}</p>
              </li>
            );
          })}
      </ul>
      <div className="filter">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?location=europe")}
        >
          Europe Trips
        </button>
        <br />
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
      <br />
      <hr />
      <button onClick={() => setUrl("http://localhost:8080/foods")}>
        Change To Food
      </button>
      <br />
      <button onClick={() => setUrl("http://localhost:3000/trips")}>
        Change To Trips
      </button>
    </div>
  );
};
