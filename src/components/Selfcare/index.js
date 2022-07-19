import { useState } from "react";
import squats from "./squats.jpg";
import "./index.css";

import MyTimer from "../MyTimer";
function SelfCare() {
  const [timesUp, setTimesUp] = useState(false);

  if (timesUp === false) {
    return (
      <div>
        <h1 style={{ fontSize: "3rem" }}>Take care of yourself</h1>
        <div style={{ display: "flex" }}>
          <div>
            <img style={{ height: "45vh" }} src={squats} alt="squats" />
            <p>Do your 2 minutes of squats before hitting the resources!</p>
          </div>
          <div style={{ marginLeft: "2rem" }}>
            <MyTimer setTimesUp={setTimesUp} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column"}}>
          <h2>Other Resources</h2>
          <ul>
            <a
              href="https://www.youtube.com/watch?v=ngQxxLnJ-5I"
              >
              <button style={{marginRight: "2rem"}}>
                Yoga: 10 mins of yoga
                </button>
            </a>
            <a href="https://www.youtube.com/watch?v=EvTJqhVfBR4">
            <button>
              Qigong - aids breathing and calms the mind
            </button>
            </a>
          </ul>
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
