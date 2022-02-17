import "./App.css";
import { Home } from "./components/Home";
import { Learn } from "./components/Learn";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Courses } from "./components/Courses";
import { Bundles } from "./components/Bundles";
import { CourseId } from "./components/CourseId";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*This is for redirect*/}
          <Route path="/myapps" element={<Navigate replace to="/learn" />} />
          <Route path="/learn" element={<Learn />}>
            <Route path="course" element={<Courses />}></Route>
            <Route path="bundle" element={<Bundles />} />
          </Route>
          <Route path="/learn/course/:id" element={<CourseId />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
