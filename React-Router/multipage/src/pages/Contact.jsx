import { useLocation } from "react-router-dom";
import React from "react";

export const Contact = () => {
  const queryString = useLocation().search;
  console.log(queryString);

  const quereyParams = new URLSearchParams(queryString);
  let name = quereyParams.get("name");
  name = name?.toUpperCase();

  return (
    <div>
      <h2>Contact to {name} 🖐🖐</h2>
    </div>
  );
};
