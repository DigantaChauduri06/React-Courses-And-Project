import { useState, useEffect } from "react";

export const TripList = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:3000/trips")
      .then((res) => res.json())
      .then((json) => setTrips(json))
      .catch((e) => console.log(e));
  }, []);
  console.log(trips);
  return (
    <div className="TripList">
      <h2>Trip lists</h2>
      <ul>
        {trips.map((t) => {
          return (
            <li key={t.id}>
              <h3>{t.title}</h3>
              <p>{t.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
