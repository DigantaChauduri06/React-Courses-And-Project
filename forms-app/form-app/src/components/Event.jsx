import React, { useState } from "react";
import { Form } from "./Form";
export default function Event({ events }) {
  const [name, setName] = useState("Diganta");
  const [lists, setLists] = useState([]);
  // Deleting
  const handleClick = (id) => {
    setLists((prevEvent) => {
      return prevEvent.filter((item) => {
        console.log(item.id, id);
        return item.id !== id;
      });
    });
  };
  // Add event
  const addEvent = (event) => {
    // This state is depending on previous state so we need to use that and return the new array of events
    setLists((prev) => {
      return [...prev, event];
    });
  };

  return (
    <div>
      <Form addEvent={addEvent} />
      <h1>Events are listed here {name}</h1>
      <button onClick={() => setName("Rivu")}>Change</button>
      <div>
        {lists.map((curr, idx) => {
          return (
            <React.Fragment key={idx}>
              <h2>Event Name: {curr.title}</h2>
              <p>Date -- {curr.date}</p>
              <p>Location -- {curr.location}</p>
              <button onClick={() => handleClick(curr.id)}>Delete</button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
