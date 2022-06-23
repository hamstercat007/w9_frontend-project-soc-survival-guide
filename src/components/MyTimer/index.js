import React from "react";
import { useTimer } from "react-timer-hook";
import { useState } from "react";

//create input field to ask the user how long would they like in minutes
//get time, update time = state

function MyTimer({ expiryTimestamp, calculateTime, customTime }) {
  const [customHour, setCustomHour] = useState(0);
  const [customMinute, setCustomMinute] = useState(0);
  const [customSecond, setCustomSecond] = useState(0);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>My Timer </h1>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = customTime;
          console.log("I'm being clicked");
          time.setSeconds(time.getSeconds() + customTime); //300 secons = 5 mins.
          // time.setSeconds(customTime); //300 secons = 5 mins.
          restart(time);
        }}
      >
        Restart
      </button>
      <div style={{ marginTop: "1rem" }}>
        <form>
          <label htmlFor="hour">Hour</label>
          <input
            type="number"
            id="hour"
            name="hour"
            value={customHour}
            onChange={(e) => setCustomHour(e.target.value)}
          />
          <label htmlFor="minute">Minutes</label>
          <input
            type="number"
            id="minute"
            name="minute"
            value={customMinute}
            onChange={(e) => setCustomMinute(e.target.value)}
          />
          <label htmlFor="second">Seconds</label>
          <input
            type="number"
            id="second"
            name="second"
            value={customSecond}
            onChange={(e) => setCustomSecond(e.target.value)}
          />
          <input
            type="button"
            value="Set my time"
            style={{ marginLeft: "1rem" }}
            onClick={() => {
              calculateTime(customSecond, customMinute, customHour);
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default MyTimer;
