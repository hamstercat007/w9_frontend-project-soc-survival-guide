import {useTimer} from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div style={{textAlign: 'center'}}>
          <h1> Self Care </h1>
          <p>Timer Demo</p>
          <div style={{fontSize: '100px'}}>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          </div>
          <p>{isRunning ? 'Running' : 'Break is over' }</p>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={resume}>Resume</button>
          <button onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 10);
            restart(time)
          }}>Restart</button>
        </div>
      );
    }
    

export default MyTimer



// function SelfCare() {
//   return (
//   <div>
//     <h1>Take care of yourself</h1>
//     <h2>"Timer: 00:00"</h2>
//   <form>
//     <input type="number"></input>
//   </form></div>
    
//   )
// }

// export default SelfCare

