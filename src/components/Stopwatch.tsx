import { useEffect, useState } from "react";

function Stopwatch(): JSX.Element {
    const [watchRunning, setWatchRunning] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [intervalID, setIntervalID] = useState<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (watchRunning) {
            const id = setInterval(() => {
                setMilliseconds(milliseconds + 1)
            }, 10)
            setIntervalID(id)
        }
    }, [watchRunning, milliseconds])

    function handlePause() {
        setWatchRunning(false);
        if (intervalID) {
          clearInterval(intervalID)
        }
      }

    function handleStart() {
        setWatchRunning(true);
    }
    function handleReset() {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setMilliseconds(0);
    }

    console.log(watchRunning);
    console.log(`hrs: ${hours}, mins: ${minutes}, secs: ${seconds}, ms: ${milliseconds}`)
    return (
        <>
            <h2>Stopwatch</h2>
            <div className="stopwatch-ctn">
                <div>
                    {hours}hrs {minutes}mins {seconds}secs 
                    {milliseconds}ms
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
