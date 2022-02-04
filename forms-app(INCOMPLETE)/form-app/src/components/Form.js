import React, { useState } from "react";
import "./Form.css";
import Event from "../components/Event";

export default function Form() {
  const [hide, setHide] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("kolkata");
  const [events, setEvents] = useState([]);

  const addEvents = (events) => {
    console.log("Cllinhg");
    return (e) => {
      return [...e, events];
    };
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !location) return;
    const events = {
      title,
      date,
      location,
      id: Math.floor(Math.random() * 100000),
    };
    console.log(events);
    addEvents(events);
    // displayEvents(events);
    // Reset the form
    setDate("");
    setTitle("");
    setLocation("kolkata");
  };

  const hideFormFunction = () => {
    setHide(false);
    setToggle(false);
  };

  const showFormFunction = () => {
    setHide(true);
    setToggle(true);
  };

  return (
    <div>
      {hide && (
        <form className="form" onSubmit={handleFormSubmit}>
          <label>
            <span>Event name : </span>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </label>
          <label>
            <span>Event Date</span>
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </label>
          <label>
            <span>Location : </span>
            <select onChange={(e) => setLocation(e.target.value)}>
              <option value="chennai">chennai</option>
              <option value="kolkata">kolkata</option>
              <option value="delhi">delhi</option>
            </select>
          </label>
          <button>Submit</button>
        </form>
      )}
      {toggle ? (
        <button onClick={hideFormFunction}>Hide Form</button>
      ) : (
        <button onClick={showFormFunction}>show Form</button>
      )}
    </div>
  );
}
