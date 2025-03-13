import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskProvider } from "./context/TaskContext";  // ✅ Проверяем импорт

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>   {/* ✅ Здесь должен быть TaskProvider */}
      <App />
    </TaskProvider>
  </React.StrictMode>
);
