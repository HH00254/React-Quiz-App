import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {

        const activeTimer = setTimeout(onTimeout, timeout);

        console.log('timeout');
        // Clean up call
        return () => {
            clearTimeout(activeTimer);
        }
    }, [timeout, onTimeout]);


    useEffect(() => {
        const interval = setInterval(() => {
            console.log('interval');
            setRemainingTime(prevTime => prevTime - 100);
        }, 100); // we execute this 100 time per one secone IE 1000 seconds / 10 = 100

        //clean up Call
        return () => {
            console.log('interval clean');
            clearInterval(interval);
        }
    }, []);

    return <progress
        id="question-time"
        value={remainingTime}
        max={timeout}
        className={mode}
    />;
}
