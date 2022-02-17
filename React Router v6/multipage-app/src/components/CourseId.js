import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const CourseId = () => {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const { name, price } = location.state;
  // console.log();
  return (
    <div>
      <h1>Welcome to {name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus
        eum vel maiores sed. Ratione eius provident animi, eaque a odio pariatur
        alias perspiciatis modi, ea ullam, dolor et saepe?
      </p>
      <h2>Discount!!!</h2>
      <h3>You can get this course @{price} only</h3>
      <button className="">Buy Now</button>
    </div>
  );
};
