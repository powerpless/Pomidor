import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTaskStatus } = useContext(TaskContext);

  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Статус:</strong> {task.status}</p>
      <button onClick={() => toggleTaskStatus(task.id)}>
        {task.status === "В процессе" ? "Завершить" : "Вернуть в процесс"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Удалить</button>
    </li>
  );
};

export default TaskItem;
