import React, { useState, useEffect } from "react";

const ProgressBar = ({ timer }) => {
  const [remainigTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainigTime} max={timer} />;
};

export default ProgressBar;
