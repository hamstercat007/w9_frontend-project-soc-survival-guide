import MyTimer from "../MyTimer";
import {useState} from "react"
import "./index.css"

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
      <div className="sub-headings"> 
        <h3>Mind</h3>
        <h3>Body</h3>
      </div>
      <div className="activites">
        <ul>
          <a href="https://www.youtube.com/watch?v=QM8NjfCfOg0" target="_blank" rel="noreferrer"><li>Yoga</li></a>
          <a href="https://www.youtube.com/watch?v=y2RAEnWreoE" target="_blank" rel="noreferrer" ><li>Qi Gong</li></a>
          <a href="https://www.youtube.com/watch?v=8plwv25NYRo" target="_blank" rel="noreferrer"><li>Meditation</li></a>
        </ul>
        <ul>
          
          <li>Squats</li>
          <li>Lunges</li>
          <li>Star Jumps</li>

        </ul>
      </div>
    </div>
  );
}

export default SelfCare;
