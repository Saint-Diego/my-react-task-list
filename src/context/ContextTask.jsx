import { useHandleProcedure } from "../hooks/useHandleProcedure";
import { TaskContext } from "./createContextTask";

const ContextTask = ({ children }) => {
  const [tasks, crear, actualizar, eliminar, limpiar] = useHandleProcedure();

  return (
    <TaskContext.Provider
      value={{ tasks, crear, actualizar, eliminar, limpiar }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default ContextTask;
