import { useState } from "react";
import { TripList } from "./components/TripList";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow(false)}>Hide</button>
      {show && <TripList />}
    </div>
  );
}

export default App;
