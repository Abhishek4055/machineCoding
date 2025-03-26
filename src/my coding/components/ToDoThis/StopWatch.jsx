import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startHandler = () => {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1);
  };

  const resetHandler = () => {
    clearInterval(timerRef.current);
    setTime(0);
  };

  const formatTime = (time) => {
    const min = Math.floor(time / 60000);
    const sec = Math.floor((time % 60000) / 1000);
    const ms = Math.floor((time % 1000) / 10);
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}:${String(ms).padStart(2, "0")}`;
  };

  console.log(time);
  return (
    <div className="App">
      <h1>{formatTime(time)}</h1>
      <button onClick={startHandler}> start</button>
      <button onClick={resetHandler}> Reset </button>
    </div>
  );
}
