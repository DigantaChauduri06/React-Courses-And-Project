import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Book keeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          padding: "1rem",
        }}
      >
        <Link className="links" to="/invoices">
          Invoices
        </Link>
        <Link className="links" to="/expences">
          Expences
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
