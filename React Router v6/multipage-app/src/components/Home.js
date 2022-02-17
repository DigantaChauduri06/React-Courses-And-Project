import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>Welcome To My Home</h1>
      <Link className="btn" to="/myapps">
        Learn
      </Link>
    </div>
  );
};
