import "../css/NewEventFomCSS.css";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewEventForm({ addEvents }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("kolkata");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) {
      return;
    }
    const events = {
      title: title,
      date: date,
      id: uuidv4().toString(),
      location,
    };
    console.log(events);
    addEvents(events);
    // Reset The form
    setTitle("");
    setDate("");
    setLocation("kolkata");
  };
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event tilte</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
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
      <span>
        Event Location
        <select name="" id="" onChange={(e) => setLocation(e.target.value)}>
          <option value="kolkata">Kolkata</option>
          <option value="madrid">madrid</option>
          <option value="sydney">sydney</option>
        </select>
      </span>
      <div className="btn-wrapper">
        <button>Submit</button>
      </div>
    </form>
  );
}
