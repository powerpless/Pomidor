import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterButtons from "./components/FilterButtons";
import { PomodoroProvider } from "./context/PomodoroContext";
import PomodoroTimer from "./components/PomodoroTimer";
import "./index.css";

function App() {
  return (
    <PomodoroProvider> 
      <div>
      <h1>To-Do List x Pomodoro</h1>
        <PomodoroTimer /> 
        <TaskForm />
        <FilterButtons />
        <TaskList />
      </div>
    </PomodoroProvider>
  );
}

export default App;
