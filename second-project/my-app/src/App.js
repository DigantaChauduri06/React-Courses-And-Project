import { useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState("Diganta");
  const [show, setShow] = useState(true);
  const [events, setEvents] = useState([
    { title: "This is Title No 1 Nothing.........", id: 1 },
    { title: "This is Title No 2 And This is jubriish", id: 2 },
    { title: "This is Title No 3 And We are going to Kolkata", id: 3 },
  ]);
  // Best Practice to change state in an array
  console.log(show);
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((item) => {
        return item.id !== id;
      });
    });
    console.log(id);
  };
  return (
    <div className="App">
      {!show && (
        <div>
          <button onClick={() => setShow(true)}>show Events</button>
        </div>
      )}
      {show && (
        <div>
          <button onClick={() => setShow(false)}>Hide Events</button>
        </div>
      )}
      {show
        ? events.map((item, idx) => (
            <div key={item.id}>
              <h2>
                {idx} -- {item.title}
              </h2>
              <button onClick={() => handleClick(item.id)}>Delete Event</button>
            </div>
          ))
        : ""}
    </div>
  );
}

export default App;
