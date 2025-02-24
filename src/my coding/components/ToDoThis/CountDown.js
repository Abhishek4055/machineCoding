import React, { useEffect, useRef, useState } from "react";

function CountDown() {
  const [timeLeft, setTimeLeft] = useState(5); // Start from 60 seconds
  const idRef = useRef(null);

  // Count  down with useRef
  const starTimer = () => {
    if (idRef.current) {
      clearInterval(idRef.current);
    }
    idRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(idRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    starTimer();
  }, []);

  return <div>{timeLeft}</div>;
}

export default CountDown;
