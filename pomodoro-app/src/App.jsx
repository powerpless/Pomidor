import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Todo List с Pomodoro</h1>
      <Timer />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
