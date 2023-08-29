import React, { useEffect, useState } from "react";
import "./App.css";
import { showAlertDelete, showAlertWithTimer } from "./utils/alerts";
import Header from "./components/Header/Header";
import FormTask from "./components/FormTask/FormTask";

localStorage.setItem("task-list", JSON.stringify([]));

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksFilter = tasks.filter((task) => !task.status);
    setCount(tasksFilter.length);
    localStorage.setItem("task-list", JSON.stringify(tasks));
  }, [tasks]);

  const handleClickClearAll = async (e) => {
    e.preventDefault();
    const action = await showAlertDelete(
      "Advertencia",
      "¿Estás seguro de eliminar todo?",
      "warning",
      true
    );
    if (action.isConfirmed) {
      setTasks([]);
      showAlertWithTimer("Tareas eliminadas correctamente", "", "success");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <Header />
        </div>
        <div className="card-body">
          <FormTask tasks={tasks} setTasks={setTasks} setCount={setCount} />
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-dark-emphasis">{`Tienes ${count} tareas pendientes`}</span>
            <button className="btn btn-danger" onClick={handleClickClearAll}>
              Limpiar Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
