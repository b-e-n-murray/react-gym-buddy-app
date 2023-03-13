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
            currentTime.milliseconds === 0)
            return "Start"
        else return "Resume"
    }

    return (
        <>
            <div className="stopwatch-page">
                <div className="stopwatch-ctn">
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
                {!watchRunning && <button onClick={handleStart} className="sw-btn-start">{stopwatchInProgress(currentTime)}</button>}
                {watchRunning ? (
                    <div>
                        <button onClick={handleLap} className="sw-btn-lap">Lap</button>
                        <button onClick={handlePause} className="sw-btn-pause">Pause</button>
                    </div>
                ) : (
                    <button onClick={handleReset} className="sw-btn-reset">Reset</button>
                )}
                <div className="laps-ctn">
                    {laps.map((time) => {
                        return (
                            <div key={laps.indexOf(time)} className="lap">
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
            </div>
        </>
    );
}

export default Stopwatch;
