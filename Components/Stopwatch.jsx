import React, { useRef, useState } from "react";

function Stopwatch() {
  const [elapsedMs, setElapsedMs] = useState(0);
  const timerRef = useRef(null);
  const elapsedRef = useRef(0);
  const startedAtRef = useRef(0);

  const start = () => {
    if (timerRef.current !== null) return;

    startedAtRef.current = performance.now();
    timerRef.current = setInterval(() => {
      setElapsedMs(elapsedRef.current + performance.now() - startedAtRef.current);
    }, 16);
  };

  const stop = () => {
    if (timerRef.current === null) return;

    clearInterval(timerRef.current);
    timerRef.current = null;
    elapsedRef.current += performance.now() - startedAtRef.current;
    setElapsedMs(elapsedRef.current);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    elapsedRef.current = 0;
    setElapsedMs(0);
  };

  const totalMilliseconds = Math.floor(elapsedMs);
  const hours = Math.floor(totalMilliseconds / 3600000);
  const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
  const milliseconds = totalMilliseconds % 1000;
  const format = (value) => String(value).padStart(2, "0");

  return (
    <div className="stopwatch-controls">
      <div className="time-readout" role="timer" aria-label={`${hours} hours, ${minutes} minutes, ${seconds} seconds, ${milliseconds} milliseconds`}>
        <span className="time-unit">{format(hours)}<small>HRS</small></span>
        <span className="time-separator">:</span>
        <span className="time-unit">{format(minutes)}<small>MIN</small></span>
        <span className="time-separator">:</span>
        <span className="time-unit">{format(seconds)}<small>SEC</small></span>
        <span className="time-fraction">.{String(milliseconds).padStart(3, "0")}<small>MS</small></span>
      </div>
      <div className="control-buttons">
        <button className="control-button control-start" onClick={start}>
          <span aria-hidden="true">▶</span> Start
        </button>
        <button className="control-button control-pause" onClick={stop}>
          <span aria-hidden="true">Ⅱ</span> Pause
        </button>
        <button className="control-button control-reset" onClick={reset}>
          <span aria-hidden="true">↻</span> Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
