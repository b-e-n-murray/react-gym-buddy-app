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
  const [laps, setLaps] = useState<Time[]>([]);
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

  function handleLap() {
    setLaps([
      ...laps,
      {
        hours: currentTime.hours,
        minutes: currentTime.minutes,
        seconds: currentTime.seconds,
        milliseconds: currentTime.milliseconds,
      },
    ]);
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
    setLaps([]);
  }

  function stopwatchInProgress(currentTime: Time): string {
    if (
      currentTime.hours === 0 &&
      currentTime.minutes === 0 &&
      currentTime.seconds === 0 &&
      currentTime.milliseconds === 0
    )
      return "Start";
    else return "Resume";
  }

  return (
    <>
      <div className="flex justify-center mx-auto mt-3 mb-3">
        <span className="time-msr">
          {currentTime.hours < 10 ? "0" + currentTime.hours : currentTime.hours}
        </span>
        <p className="text-4xl mt-6">:</p>
        <span className="time-msr">
          {currentTime.minutes < 10
            ? "0" + currentTime.minutes
            : currentTime.minutes}
        </span>
        <p className="text-4xl mt-6">:</p>
        <span className="time-msr">
          {currentTime.seconds < 10
            ? "0" + currentTime.seconds
            : currentTime.seconds}
        </span>
        <p className="text-4xl mt-6">:</p>
        <span className="time-msr">
          {currentTime.milliseconds < 10
            ? "0" + currentTime.milliseconds
            : currentTime.milliseconds}
        </span>
      </div>
      <div className="flex justify-center">
        <div className="stop-btns">
          {!watchRunning && (
            <button onClick={handleStart} className="bg-race-blue">
              {stopwatchInProgress(currentTime)}
            </button>
          )}
          {watchRunning ? (
            <div>
              <button onClick={handleLap} className="bg-dark-blue">
                Lap
              </button>
              <button onClick={handlePause} className="bg-dark-blue">
                Pause
              </button>
            </div>
          ) : (
            <button onClick={handleReset} className="bg-obsidian">
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="font-ubuntu text-3xl text-center">
        {laps.map((time) => {
          return (
            <div key={laps.indexOf(time)}>
              Lap {laps.indexOf(time) + 1}:{" "}
              {time.hours < 10 ? "0" + time.hours : time.hours}:
              {time.minutes < 10 ? "0" + time.minutes : time.minutes}:
              {time.seconds < 10 ? "0" + time.seconds : time.seconds}:
              {time.milliseconds < 10
                ? "0" + time.milliseconds
                : time.milliseconds}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Stopwatch;
