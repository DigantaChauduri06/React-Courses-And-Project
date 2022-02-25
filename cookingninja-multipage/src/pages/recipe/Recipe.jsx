import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Recipe.css";

function Recipe() {
  const params = useParams();
  const { id } = params;
  const { data, isPending, error } = useFetch(
    `http://localhost:8080/recipes/${id}`
  );
  return (
    <div className="single-recipe">
      {isPending && <div className="loading">Hang On...</div>}
      {error && <div className="error">{error}</div>}
      {data && (
        <>
          <h1>{data.title}</h1>
          <div>
            {data && (
              <ul>
                {data.ingredients.map((item, idx) => {
                  return <li key={idx}>{item}</li>;
                })}
              </ul>
            )}
          </div>
          <p>{data.method}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
