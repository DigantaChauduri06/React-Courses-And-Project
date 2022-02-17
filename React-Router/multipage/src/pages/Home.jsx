import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

// Styles
import "./Home.css";

export const Home = () => {
  const [data, isPending, error] = useFetch(" http://localhost:8080/articles");
  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data &&
        data.map((articale) => {
          return (
            <div className="card" key={articale.id}>
              <h3>{articale.title}</h3>
              <p>{articale.author}</p>
              <Link to={`/articales/${articale.id}`}>Read More...</Link>
            </div>
          );
        })}
    </div>
  );
};
