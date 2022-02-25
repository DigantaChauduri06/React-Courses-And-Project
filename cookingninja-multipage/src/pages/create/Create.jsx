import React, { useState, useRef } from "react";

import "./Create.css";

function Create() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [method, setMethod] = useState("");
  const [newIngridents, setNewIngridents] = useState("");
  const [ingridents, setIngridents] = useState([]);
  const ingridentInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, time, method, ingridents);
  };

  const handleAdd = function (e) {
    e.preventDefault();
    const ing = newIngridents.trim();
    const alreadyExist = ingridents.includes(ing);
    console.log(ingridents, alreadyExist);
    if (!ing || alreadyExist) {
      return;
    } else {
      setIngridents((prev) => [...prev, ing]);
      setNewIngridents("");
      ingridentInput.current.focus();
    }
  };

  return (
    <div className="create">
      <h2>Add A New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title: </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Cooking Time (In minutes): </span>
          <input
            type="number"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
          />
        </label>
        <label>
          <span>Recipe Ingridients</span>
          <div className="ingidrients">
            <input
              type="text"
              onChange={(e) => setNewIngridents(e.target.value)}
              value={newIngridents}
              ref={ingridentInput}
            />
            <button className="ingi-but" onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        <p className="ingi-list">
          {ingridents.map((ingi, idx) => {
            return (
              <span key={idx} className="ingi-list-items">
                {ingi}
              </span>
            );
          })}
        </p>
        <label>
          <span>Cooking method: </span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <div className="button-area">
          <button button className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
