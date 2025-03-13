import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

const Home = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h1>Список задач</h1>
      <TaskForm />
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
