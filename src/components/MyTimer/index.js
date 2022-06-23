import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { useState } from "react";


function MyTimer({setTimesUp}) {
  const [customHour, setCustomHour] = useState(0);
  const [customMinute, setCustomMinute] = useState(0);
  const [customSecond, setCustomSecond] = useState(0);
  const [customTime, setCustomTime] = useState(600);

  const expiryTimestamp = new Date(); //there is no plus 300 seconds

  function calculateTime() {
    setCustomTime(
      Number(customHour) * 3600 +
        Number(customMinute) * 60 +
        Number(customSecond)
    );
  }

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
    autoStart: false,
    expiryTimestamp: expiryTimestamp, //expire at this time, which is now, so it won't start.
    onExpire: () => setTimesUp(true)
  });

  useEffect(() => {
    calculateTime();
    secondsToHms();
  }, [customSecond, customMinute, customHour]);

  function secondsToHms() {
    let d = customTime;
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  }

  // console.log("customTime", customTime)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>My Timer </h1>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      {/* <button onClick={start}>Start</button>  */}
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + customTime); //300 secons = 5 mins.
          restart(time);
        }}
      >
        Start
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
        </form>
      </div>
      <p>Timer set for:</p>
      <h2>{secondsToHms()}</h2>
    </div>
  );
}

export default MyTimer;
