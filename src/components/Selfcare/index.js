import { useState } from "react";
import squats from "./squats.jpg";

import MyTimer from "../MyTimer";
function SelfCare() {
  const [timesUp, setTimesUp] = useState(false);

  if (timesUp === false) {
    return (
      <div>
        <h1>Take care of yourself</h1>
        <div style={{ display: "flex" }}>
          <div>
            <img style={{ height: "45vh" }} src={squats} alt="squats" />
            <p>Do your 2 minutes of squats before hitting the resources!</p>
          </div>
          <div style={{marginLeft: "2rem"}}>
          <MyTimer setTimesUp={setTimesUp} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Take a break</h1>
        <button
          onClick={() => {
            setTimesUp(false);
          }}
        >
          Ok - Got it. Break done
        </button>
      </div>
    );
  }
}

export default SelfCare;
