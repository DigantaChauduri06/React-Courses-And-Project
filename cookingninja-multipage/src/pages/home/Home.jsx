import useFetch from "../../hooks/useFetch";
//Components
import RecipeList from "../../components/RecipeList";
// Style
import "./Home.css";

function Home() {
  const { data, isPending, error } = useFetch("http://localhost:8080/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <h3>Hang on...</h3>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Home;
