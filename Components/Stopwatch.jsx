import React, { useRef, useState } from "react";

function Stopwatch() {
  // State to store the seconds displayed on the screen
  const [seconds, setSeconds] = useState(0);

  // Ref to store the interval ID
  const timerRef = useRef(null);

  // Start the stopwatch
  const start = () => {
    // Prevent multiple intervals
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  // Stop the stopwatch
  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  // Reset the stopwatch
  const reset = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{seconds} sec</h1>

      <button onClick={start}>Start</button>

      <button onClick={stop}>Stop</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;