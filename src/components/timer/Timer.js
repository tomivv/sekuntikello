import React, { useContext, useState } from "react";
import { SaveContext } from "../context/SaveContext";
import Controls from "./Controls";
import "./Timer.scss";
import { parseTime } from "../../helpers/time";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [intervalId, setIntervalId] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [nameInput, setNameInput] = useState("");
  const changeSaves = useContext(SaveContext);
  let startTime = 0;

  function startTimer() {
    const timer = setInterval(() => {
      setElapsed(elapsed + (Date.now() - startTime));
      setTime(elapsed + (Date.now() - startTime));
    }, 1);
    setIntervalId(timer);
  }

  function start() {
    startTime = Date.now();
    if (!running && !paused) {
      setRunning(true);
      setTime(0);
      startTimer();
    }
  }

  function stop() {
    if (running && !paused) {
      clearInterval(intervalId);
      setRunning(false);
      setPaused(false);
      setElapsed(0);
    }
  }

  function pause() {
    if (!paused && running) {
      setPaused(true);
      clearInterval(intervalId);
    } else if (running) {
      startTime = Date.now();
      setPaused(false);
      startTimer();
    }
  }

  function handleSave(e) {
    e.preventDefault();
    if (nameInput !== "") {
      changeSaves(`${nameInput}  ${parseTime(time)}`);
      setErrorMsg("");
      clearInterval(intervalId);
      setRunning(false);
      setPaused(false);
      setElapsed(0);
      // setTime(0);
      setNameInput("");
    } else {
      setErrorMsg("Title cannot be empty!");
    }
  }

  return (
    <div className="timer">
      <Controls start={start} stop={stop} pause={pause} paused={paused} />
      <div className="time">
        <h1 data-testid="time">{parseTime(time)}</h1>
      </div>
      <div className="save">
        <form onSubmit={handleSave}>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              required
            ></input>
            <p>{errorMsg}</p>
          </div>
          <div className="flex">
            <button className="btn center" onClick={handleSave}>
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
