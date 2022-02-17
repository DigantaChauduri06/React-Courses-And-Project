import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Courses.css";
export const Courses = () => {
  const [courses, setCourses] = useState([
    { name: "React Course", prices: 499, id: 1 },
    { name: "Node Js Course", prices: 299, id: 2 },
    { name: "Javascript for everyone", prices: 199, id: 3 },
    { name: "No-sql with Mongodb", prices: 2999, id: 4 },
  ]);
  return (
    <div>
      <h1>Courses List</h1>
      <ul>
        {courses &&
          courses.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.id.toString()}
                state={{ name: item.name, price: item.prices }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};
