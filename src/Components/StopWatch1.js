import { useRef, useState } from "react";
const StopWatch1 = () => {
  const [timer, setTimer] = useState(0);
  //   isActive is defined to see if the timer is active or not.
  const [isActive, setIsActive] = useState(false);
  // isPaused is defined to see if the timer is paused or not.
  const [isPaused, setIsPaused] = useState(false);
  // useRef helps us to get or control any element's reference.
  const countRef = useRef(null);

  const handleStart = () => {
    // start button logic here
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    // Pause button logic here
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    // Resume button logic here
  };

  const handleReset = () => {
    // Reset button logic here
  };

  return (
    <div className="app">
      <h3>React Stopwatch</h3>
      <div className="stopwatch-card">
        <p ref={countRef}>{timer}</p> {/* here we will show timer */}
        <div className="buttons">
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleResume}>Resume</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch1;
