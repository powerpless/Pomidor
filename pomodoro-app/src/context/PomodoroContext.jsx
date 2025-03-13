import { createContext, useState, useContext, useEffect } from "react";

const PomodoroContext = createContext();

export function PomodoroProvider({ children }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 минут
  const [activeTask, setActiveTask] = useState(null);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = (taskId) => {
    setActiveTask(taskId);
    setTimeLeft(25 * 60); // Сброс таймера при запуске новой задачи
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
    setActiveTask(null);
  };

  return (
    <PomodoroContext.Provider
      value={{ isRunning, timeLeft, activeTask, startTimer, stopTimer }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}

export function usePomodoro() {
  return useContext(PomodoroContext);
}
