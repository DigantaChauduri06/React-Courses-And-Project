import React from "react";

export default function Event({ events, handleClick }) {
  return events.map((item, idx) => (
    <React.Fragment key={item.id}>
      <h2>
        {idx} -- {item.title}
      </h2>
      <button onClick={() => handleClick(item.id)}>Delete Event</button>
    </React.Fragment>
  ));
}
