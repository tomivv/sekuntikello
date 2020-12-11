import React from "react";
import "./Controls.scss";

export default function Controls({ start, stop, pause, paused }) {
  return (
    <div className="controls">
      <button className="btn" onClick={start}>
        Start
      </button>
      <button className="btn" onClick={stop}>
        Stop
      </button>
      <button className="btn" onClick={pause}>
        {paused ? <p>continue</p> : <p>pause</p>}
      </button>
    </div>
  );
}
