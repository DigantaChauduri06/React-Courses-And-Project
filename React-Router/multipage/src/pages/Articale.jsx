import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const Articale = () => {
  const { id } = useParams();
  const url = `http://localhost:8080/articles/${id}`;
  const [data, isPending, error] = useFetch(url);
  const history = useHistory();
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error, history]);
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <h3>{data.author}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};
