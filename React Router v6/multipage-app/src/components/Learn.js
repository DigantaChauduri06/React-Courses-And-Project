import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Learn = () => {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All the courses are listed here</h4>
      <Link to="/learn/course" className="btn">
        Courses
      </Link>
      <Link to="/learn/bundle" className="btn">
        bundles
      </Link>
      <Link to="/" className="btn">
        Home
      </Link>
      <Outlet></Outlet>
    </div>
  );
};
