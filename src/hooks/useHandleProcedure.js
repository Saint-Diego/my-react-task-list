import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { store } from "../store";

export const useHandleProcedure = () => {
  const [tasks, setTasks] = useState(JSON.parse(store));

  const crear = (input) => {
    input.id = uuidv4();
    setTasks([...tasks, input]);
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
