import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalid, setIntervalId] = useState(null); 
  
  

  useEffect(() => {
    let timer;

    if (isRunning && !isPaused) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, isPaused]);

  const handleStart = () => {
    setTime(0);
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
    setIsPaused(false);
  };

  return (
    <div style={styles.container}>
      <h1>Stopwatch</h1>
      <h2>{time} seconds</h2>
      <div style={styles.buttons}>
        {!isRunning && (
          <button onClick={handleStart}>Start</button>
        )}
        {isRunning && !isPaused && (
          <button onClick={handlePause}>Pause</button>
        )}
        {isRunning && isPaused && (
          <button onClick={handleResume}>Resume</button>
        )}
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: 30,
    fontFamily: 'Arial',
  },
  buttons: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    gap: 10
  }
};

export default Stopwatch;