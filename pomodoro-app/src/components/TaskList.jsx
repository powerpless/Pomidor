import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, filter } = useContext(TaskContext);

  const filteredTasks = filter === "Все" ? tasks : tasks.filter(task => task.status === filter);

  return (
    <ul>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>Задач нет</p>
      )}
    </ul>
  );
};

export default TaskList;
