import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { usePomodoro } from "../context/PomodoroContext"; // Подключаем PomodoroContext

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTaskStatus } = useContext(TaskContext);
  const { startTimer, stopTimer, activeTask } = usePomodoro();

  const handleTaskClick = () => {
    if (task.id !== activeTask) {
      startTimer(task.id); // Запускаем таймер при выборе задачи
    }
  };

  const handleTaskCompletion = () => {
    if (task.id === activeTask) {
      stopTimer(); // Останавливаем таймер, если это активная задача
    }
    toggleTaskStatus(task.id);
  };

  return (
    <li>
      <h3>{task.title || "Без названия"}</h3>
      <p><strong>Статус:</strong> {task.status}</p>

      {task.status === "В процессе" ? (
        <button onClick={handleTaskCompletion}>Завершить</button>
      ) : (
        <button onClick={handleTaskClick}>Начать</button>
      )}

      <button onClick={() => deleteTask(task.id)}>Удалить</button>
    </li>
  );
};

export default TaskItem;
