import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      Step Counter
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;
