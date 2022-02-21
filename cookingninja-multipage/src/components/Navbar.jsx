import { NavLink } from "react-router-dom";
import React from "react";

//Style
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="nav-heading">
        <h1>Cooking Ninja</h1>
      </NavLink>
      <NavLink to="/create" className="btn btn-create-recipe">
        Create Recipe
      </NavLink>
    </div>
  );
}

export default Navbar;
