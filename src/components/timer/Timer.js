import React, { useContext, useState } from 'react';
import { SaveContext } from '../context/SaveContext';
import Controls from './Controls';
import "./Timer.scss";
import { parseTime } from '../../helpers/time';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [intervalId, setIntervalId] = useState('');
  const changeSaves = useContext(SaveContext);


  async function startTimer() {
    const timer = setInterval(() => {
      setTime(time => time + 1);
    }, 1);
    setIntervalId(timer);
  }

  async function start() {
    if (!running && !paused) {
      setRunning(true);
      setTime(0);
      startTimer();
    }
  }

  async function stop() {
    if (running && !paused) {
      clearInterval(intervalId);
      setRunning(false);
      setPaused(false);
    }
  }

  async function pause() {
    if (!paused && running) {
      setPaused(true);
      clearInterval(intervalId);
    } else if(running) {
      setPaused(false);
      startTimer();
    }
  }

  function handleSave(e) {
    e.preventDefault();
    changeSaves(e.target.form[0].value);
  }

  return (
  <div className="timer">
    <Controls start={start} stop={stop} pause={pause}/>
    <div className="time">
      <h1>{parseTime(time)}</h1>
    </div>
    <div className="save">
      <form onSubmit={handleSave}>
        <input type="text" placeholder="Title"></input>
        <button className="btn" onClick={handleSave}>save</button>
      </form>
    </div>
  </div>
  )
}