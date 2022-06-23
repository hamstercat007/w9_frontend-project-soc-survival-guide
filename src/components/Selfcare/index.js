import MyTimer from "../MyTimer";
import { useState } from "react";

function SelfCare() {
  const [customTime, setCustomTime] = useState(20);

  function calculateTime(sec, min, hour) {
    console.log("I'm being calculated in calculateTime");
    setCustomTime(Number(hour) * 3600 + Number(min) * 60 + Number(sec));
  }

  const time = new Date();

  console.log("time set seconds function")
  // console.log(typeof(time.setSeconds(time.getSeconds() + 300)));
  let newTime = time.setSeconds(time.getSeconds() + 300)
  // console.log(newTime)

  return (
    <div>
      <h1>Take care of yourself</h1>
      <MyTimer
        expiryTimestamp={time}
        calculateTime={calculateTime}
        customTime={customTime}
      />
      <p>Timer set for:</p>
      <h2>{customTime}</h2>
      <p>{newTime}</p>
    </div>
  );
}

export default SelfCare;
