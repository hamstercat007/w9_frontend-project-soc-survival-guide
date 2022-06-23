import MyTimer from "../MyTimer";
import {useState} from "react"

function SelfCare() {
  const [customTime, setCustomTime] = useState(20)
  function calculateTime(sec, min, hour) {
    setCustomTime(hour * 3600 + min * 60 + sec)
  }

  const time = new Date();

  time.setSeconds(time.getSeconds() + customTime);
  return (
    <div>
      <h1>Take care of yourself</h1>
      <MyTimer expiryTimestamp={time} calculateTime={calculateTime} />
      <p>Timer set for:</p>
      <h2>{customTime}</h2>
    </div>
  );
}

export default SelfCare;
