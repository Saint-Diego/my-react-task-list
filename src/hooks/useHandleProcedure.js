import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { store } from "../store";

export const useHandleProcedure = () => {
  const [tasks, setTasks] = useState(JSON.parse(store));

  useEffect(() => {
    localStorage.setItem("task-list", JSON.stringify(tasks));
  }, [tasks]);

  const crear = (input) => {
    setTasks([...tasks, { id: uuidv4(), ...input, status: false }]);
  };

  const actualizar = (id, input) => {
    const index = tasks.findIndex((task) => task.id == id);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...input };
      setTasks([...tasks]);
    }
  };

  const eliminar = (id) => {
    const tasksUpdate = tasks.filter((task) => task.id != id);
    setTasks([...tasksUpdate]);
  };

  const limpiar = () => {
    setTasks([]);
  };

  return [tasks, crear, actualizar, eliminar, limpiar];
};
