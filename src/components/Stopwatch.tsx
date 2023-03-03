import { useState } from "react";

function Stopwatch(): JSX.Element {
    const [watchRunning ,setWatchRunning] = useState(false)
  const currentTime = { milliseconds: 0, seconds: 0, minutes: 0, hours: 0 };
  function handlePause() {
    setWatchRunning(false)
  }
  function handleStart() {
    setWatchRunning(true)
    while(watchRunning) {
        runStopwatch()
    }
  }
  function handleReset() {
    currentTime.hours = 0;
    currentTime.minutes = 0;
    currentTime.seconds = 0;
    currentTime.milliseconds = 0;
  }
  function runStopwatch() {
    currentTime.milliseconds ++
    setInterval(() => 10)
  }
  console.log(watchRunning)
  return (
    <>
      <h2>Stopwatch</h2>
      <div className="stopwatch-ctn">
        <div>
          {currentTime.milliseconds}ms{currentTime.seconds}s
          {currentTime.minutes}mins{currentTime.hours}hrs
        </div>
      </div>
      {!watchRunning &&
      <button onClick={handleStart}>Start</button>
}
      <button>Lap</button>
      {watchRunning ? <button onClick={handlePause}>Pause</button> : <button onClick={handleReset}>Reset</button>}
    </>
  );
}

export default Stopwatch;
