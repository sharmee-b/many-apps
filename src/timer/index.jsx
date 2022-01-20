import { useState, useEffect } from "react";

function Counter() {
  const [timer, setTimer] = useState(0);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    var startTicking = () => {
      setTimer(timer + 1);
    };
    if (tick) {
      setInterval(startTicking(), 1000);
    } else {
      setTimer(0);
    }
  }, [tick, timer]);
  return (
    <div>
      Timer
      <div>{timer}</div>
      <button onClick={() => setTick(true)}>Start</button>
      <button onClick={() => setTick(false)}>Refresh</button>
    </div>
  );
}

export default Counter;
