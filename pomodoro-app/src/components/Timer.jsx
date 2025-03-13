import { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 минут в секундах
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <h2>Таймер Pomodoro</h2>
      <h1>{formatTime(timeLeft)}</h1>
      <button onClick={toggleTimer}>{isRunning ? "Пауза" : "Старт"}</button>
      <button onClick={resetTimer}>Сброс</button>
    </div>
  );
};

exp
