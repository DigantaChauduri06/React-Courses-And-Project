import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getOneInvoice, deletingInvoice } from "../data";

export default function Invoice() {
  let params = useParams();
  const { id } = params;
  const Person = getOneInvoice(id);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div style={{ padding: "30px" }}>
      <h3>Invoice #{id}</h3>
      {Person && (
        <div>
          <h1>{Person.name}</h1>
          <p>
            Due Date: <strong>{Person.due}</strong>. || Amount: {Person.amount}
          </p>
          <p>{location.state}</p>
          <button
            onClick={() => {
              deletingInvoice(id);
              navigate("/invoices");
            }}
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
}
