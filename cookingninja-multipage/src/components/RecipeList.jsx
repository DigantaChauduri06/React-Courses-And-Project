import React from "react";
import { Link } from "react-router-dom";

import "./RecipieList.css";

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id} className="card">
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make</p>
            <div>{recipe.method.substr(0, 100)}...</div>
            <Link to={`/recipe/${recipe.id}`}>Cook this</Link>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeList;
