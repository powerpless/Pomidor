import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    
    addTask({ title }); // Передаём объект, а не строку
    
    setTitle("");
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Название задачи" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TaskForm;
