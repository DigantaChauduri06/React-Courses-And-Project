import React from "react";

import "./Home.css";
import useFetch from "../../hooks/useFetch";

function Home() {
  const { data, isPending, error } = useFetch("http://localhost:8080/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <h3>Hang on...</h3>}
      {data &&
        data.map((recipe) => {
          return <h2 key={recipe.id}>{recipe.title}</h2>;
        })}
    </div>
  );
}

export default Home;
