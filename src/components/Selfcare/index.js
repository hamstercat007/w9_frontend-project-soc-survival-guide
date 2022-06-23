import { useState } from "react";

import MyTimer from "../MyTimer";
function SelfCare() {
  const [timesUp, setTimesUp] = useState(false);

  if (timesUp === false) {
    return (
      <div>
        <h1>Take care of yourself</h1>
        <MyTimer setTimesUp={setTimesUp} />
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
