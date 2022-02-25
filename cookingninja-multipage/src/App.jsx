import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page components
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
// Component Imports
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
