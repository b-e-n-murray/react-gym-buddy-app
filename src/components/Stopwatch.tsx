import { useEffect, useState } from "react";

function Stopwatch(): JSX.Element {
  const [watchRunning, setWatchRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState<Record<string, number>>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();
  function handlePause() {
    setWatchRunning(false);
    clearInterval(intervalID);
  }

  function handleStart() {
    setWatchRunning(true);
    setIntervalID(
      setInterval(() => {
        setCurrentTime({
          hours: currentTime.hours,
          minutes: currentTime.minutes,
          seconds: currentTime.seconds,
          milliseconds: currentTime.milliseconds + 1,
        });
      }, 10)
    );
  }
  function handleReset() {
    setCurrentTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
  }

  console.log(watchRunning);
  console.log(
    `hrs: ${currentTime.hours}, mins: ${currentTime.minutes}, secs: ${currentTime.seconds}, ms: ${currentTime.milliseconds}`
  );
  return (
    <>
      <h2>Stopwatch</h2>
      <div className="stopwatch-ctn">
        <div>
          {currentTime.hours}hrs {currentTime.minutes}mins {currentTime.seconds}
          secs
          {currentTime.milliseconds}ms
        </div>
      </div>
      {!watchRunning && <button onClick={handleStart}>Start</button>}
      {watchRunning ? (
        <div>
          <button>Lap</button>
          <button onClick={handlePause}>Pause</button>
        </div>
      ) : (
        <button onClick={handleReset}>Reset</button>
      )}
    </>
  );
}

export default Stopwatch;
