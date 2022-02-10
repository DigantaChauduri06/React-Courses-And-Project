import "./Form.css";
import { useState } from "react";

export const Form = ({ addEvent }) => {
  // States
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("kolkata");

  // Handle Functions
  const resetForm = () => {
    setDate("");
    setTitle("");
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    // Creating Event
    const event = {
      title,
      date,
      location,
      id: Math.floor(Math.random() * 100000),
    };
    // Changes
    addEvent(event);
    console.log(event);

    resetForm();
  };
  //Return JSX
  return (
    <form className="form" onSubmit={handelSubmit}>
      <label>
        <span>Add Event </span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Add Date </span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>

      <select onChange={(e) => setLocation(e.target.value)}>
        <option value="kolkata">Kolkata</option>
        <option value="pune">pune</option>
        <option value="delhi">Delhi</option>
      </select>
      <button>Submit</button>
    </form>
  );
};
