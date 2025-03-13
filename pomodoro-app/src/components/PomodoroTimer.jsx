import { useState, useEffect } from "react";
import { usePomodoro } from "../context/PomodoroContext";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("pomodoro"); // pomodoro, shortBreak, longBreak
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [customTimes, setCustomTimes] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      resetTimer(mode); // Автоматический сброс при истечении времени
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);
  

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = (newMode) => {
    setMode(newMode);
    setTimeLeft(customTimes[newMode] * 60);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setCustomTimes((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const applySettings = () => {
    setTimeLeft(customTimes[mode] * 60);
    setIsSettingsOpen(false);
  };

  return (
    <div className="timer-container">
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <div className="timer-mode-buttons">
        <button onClick={() => resetTimer("pomodoro")} className={mode === "pomodoro" ? "active" : ""}>
          Pomodoro
        </button>
        <button onClick={() => resetTimer("shortBreak")} className={mode === "shortBreak" ? "active" : ""}>
          Short Break
        </button>
        <button onClick={() => resetTimer("longBreak")} className={mode === "longBreak" ? "active" : ""}>
          Long Break
        </button>
      </div>

        
      <h1>{formatTime(timeLeft)}</h1>
        <div className="timer-buttons">
     <button onClick={() => setIsRunning(!isRunning)}>
         {isRunning ? "Пауза" : "Старт"}
        </button>
        <button onClick={() => resetTimer(mode)}>Сброс</button>
        <button onClick={() => setIsSettingsOpen(true)}>⚙ Настройки</button>
        </div>
      </div>
      {isSettingsOpen && (
        <div className="settings-modal">
          <h2>Настройки таймера</h2>
          <label>
            Pomodoro (мин): 
            <input type="number" name="pomodoro" value={customTimes.pomodoro} onChange={handleSettingsChange} />
          </label>
          <label>
            Short Break (мин): 
            <input type="number" name="shortBreak" value={customTimes.shortBreak} onChange={handleSettingsChange} />
          </label>
          <label>
            Long Break (мин): 
            <input type="number" name="longBreak" value={customTimes.longBreak} onChange={handleSettingsChange} />
          </label>
          <button onClick={applySettings}>Сохранить</button>
          <button onClick={() => setIsSettingsOpen(false)}>Закрыть</button>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;
