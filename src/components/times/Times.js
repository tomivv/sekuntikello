import React from "react";
import "./Times.scss";

export default function Times({ savedTimes, clearSaved }) {
  function handleClear(e) {
    e.preventDefault();
    clearSaved();
  }
  if (savedTimes.length === 0) {
    return (
      <div className="times">
        <h1>Saved times</h1>
        <div className="time-list">
          <p>Currently there are no times!</p>
        </div>
        <div className="flex">
          <button className="btn center" onClick={handleClear}>
            clear list
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="times">
        <h1>Saved times</h1>
        <div className="time-list">
          {savedTimes.map((time, index) => {
            return <p key={index}>{time}</p>;
          })}
        </div>
        <div className="flex">
          <button className="btn center" onClick={handleClear}>
            clear list
          </button>
        </div>
      </div>
    );
  }
}
