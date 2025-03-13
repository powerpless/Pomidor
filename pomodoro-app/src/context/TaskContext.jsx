import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("Все"); // Добавляем состояние фильтра

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: "В процессе" }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === "В процессе" ? "Выполнено" : "В процессе" }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTaskStatus, filter, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};
