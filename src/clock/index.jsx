import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(0);
  const [hh, setHour] = useState(0);
  const [mm, setMinute] = useState(0);
  const [ss, setSecond] = useState(0);
  useEffect(() => {
    var currentTime = () => {
      let d = new Date();
      setHour(d.getHours());
      setMinute(d.getMinutes());
      setSecond(d.getSeconds());
    };
    setDate(new Date());
    setInterval(currentTime(), 1000);
  }, [date]);

  return (
    <div>
      {hh} : {mm} : {ss}
    </div>
  );
}

export default Clock;
