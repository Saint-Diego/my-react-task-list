import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/createContextTask";
import { showAlertDelete, showAlertWithTimer } from "../../utils/alerts";

const Footer = () => {
  const [count, setCount] = useState(0);
  const { tasks, limpiar } = useContext(TaskContext);

  useEffect(() => {
    const tasksFilter = tasks.filter((task) => !task.status);
    setCount(tasksFilter.length);
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
      limpiar();
      showAlertWithTimer("Tareas eliminadas correctamente", "", "success");
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <span className="text-dark-emphasis">{`Tienes ${count} tareas pendientes`}</span>
      <button className="btn btn-danger" onClick={handleClickClearAll}>
        Limpiar Todo
      </button>
    </div>
  );
};

export default Footer;
