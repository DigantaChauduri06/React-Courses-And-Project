import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const Display = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
ReactDOM.render(<Display />, document.getElementById("root"));
