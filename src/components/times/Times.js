import React from 'react';
import "./Times.scss";

export default function Times({savedTimes}) {
  return (
    <div className="times">
      <h1>Saved times</h1>
      <div className="time-list">
      {savedTimes.map((time, index) => {
          return (
            <p key={index}>{time}</p>
          )
        })}
      </div>
      <button className="btn">clear list</button>
    </div>
  )
}