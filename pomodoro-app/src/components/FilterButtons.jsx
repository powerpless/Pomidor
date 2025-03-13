import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const FilterButtons = () => {
  const { filter, setFilter } = useContext(TaskContext);

  return (
    <div>
      <button onClick={() => setFilter("Все")} className={filter === "Все" ? "active" : ""}>Все</button>
      <button onClick={() => setFilter("В процессе")} className={filter === "В процессе" ? "active" : ""}>В процессе</button>
      <button onClick={() => setFilter("Выполнено")} className={filter === "Выполнено" ? "active" : ""}>Выполнено</button>
    </div>
  );
};

export default FilterButtons;
