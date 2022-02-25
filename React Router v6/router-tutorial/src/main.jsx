import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./routes/Invoices";
import Expences from "./routes/Expences";
import Error404Page from "./routes/Error404Page";
import Invoice from "./components/Invoice";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":id" element={<Invoice />} />
        </Route>
        <Route path="expences" element={<Expences />} />
        <Route path="*" element={<Error404Page />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
