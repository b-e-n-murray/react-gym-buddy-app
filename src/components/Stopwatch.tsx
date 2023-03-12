import { useState } from "react";

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

function Stopwatch(): JSX.Element {
  const [watchRunning, setWatchRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState<Time>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();

  function handlePause() {
    setWatchRunning(false);
    clearInterval(intervalID);
    setIntervalID(undefined);
  }

  function handleStart() {
    setWatchRunning(true);
    const newIntervalID = setInterval(() => {
      setCurrentTime((prevTime) => {
        let milliseconds = prevTime.milliseconds + 1;
        let seconds = prevTime.seconds;
        let minutes = prevTime.minutes;
        let hours = prevTime.hours;
        if (milliseconds >= 100) {
          seconds += 1;
          milliseconds = 0;
        }
        if (seconds >= 60) {
          minutes += 1;
          seconds = 0;
        }
        if (minutes >= 60) {
          hours += 1;
          minutes = 0;
        }
        return { hours, minutes, seconds, milliseconds };
      });
    }, 10);
    setIntervalID(newIntervalID);
  }

  function handleReset() {
    setCurrentTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
    setWatchRunning(false);
    clearInterval(intervalID);
    setIntervalID(undefined);
  }

  return (
    <>
      <h2>Stopwatch</h2>
      <div className="stopwatch-ctn">
        <div>
          <span className="time-msr">
            {currentTime.hours < 10
              ? "0" + currentTime.hours
              : currentTime.hours}
          </span>
          :
          <span className="time-msr">
            {currentTime.minutes < 10
              ? "0" + currentTime.minutes
              : currentTime.minutes}
          </span>
          :
          <span className="time-msr">
            {currentTime.seconds < 10
              ? "0" + currentTime.seconds
              : currentTime.seconds}
          </span>
          :
          <span className="time-msr">
            {currentTime.milliseconds < 10
              ? "0" + currentTime.milliseconds
              : currentTime.milliseconds}
          </span>
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
