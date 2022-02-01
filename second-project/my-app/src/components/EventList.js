import React from "react";
import style from "../css/Eventlist.module.css";
export default function Event({ events, handleClick }) {
  return events.map((item, idx) => (
    <div>
      <div className={style.card} key={item.id}>
        <h2>
          {idx} -- {item.title}
        </h2>
        <button className={style.btn} onClick={() => handleClick(item.id)}>
          Delete Event
        </button>
      </div>
    </div>
  ));
}
