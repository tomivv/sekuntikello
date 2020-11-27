import React from 'react';
import './Controls.scss';

export default function Controls({ start, stop, pause }) {
  return (
    <div className="controls">
      <button className="btn" onClick={start}>Start</button>
      <button className="btn" onClick={stop}>Stop</button>
      <button className="btn" onClick={pause}>Pause</button>
    </div>
  )
}