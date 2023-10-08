import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/createContextTask";
import { showAlertDelete, showAlertWithTimer } from "../../utils/alerts";
import { Button, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  const [count, setCount] = useState(0);
  const { tasks, limpiar } = useContext(TaskContext);

  useEffect(() => {
    const tasksFilter = tasks.filter((task) => !task?.status);
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
    <Flex justifyContent="space-between" alignItems="center" w="100%">
      <Text m={0} color="#495057">{`Tienes ${count} tareas pendientes`}</Text>
      <Button colorScheme="red" onClick={handleClickClearAll}>
        Limpiar Todo
      </Button>
    </Flex>
  );
};

export default Footer;
