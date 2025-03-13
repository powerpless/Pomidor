import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Добавление новой задачи
  const addTask = (title, description) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status: "В процессе", // По умолчанию задача не завершена
    };
    setTasks([...tasks, newTask]);
  };

  // Изменение задачи
  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  // Удаление задачи
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Переключение статуса задачи
  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, status: task.status === "В процессе" ? "Выполнено" : "В процессе" } 
        : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, toggleTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};
