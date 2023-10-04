import React, { useContext, useEffect, useState } from "react";
import "./Task.css";
import { TaskContext } from "../../context/createContextTask";
import { showAlertDelete, showAlertWithTimer } from "../../utils/alerts";

// const joinTitle = (value) => {
//   return value.toLowerCase().split(" ").join("-");
// };

const Task = ({
  id,
  index,
  title,
  description,
  status,
  setInput,
  setOptions,
}) => {
  const [isChecked, setIsChecked] = useState(status);
  const { actualizar, eliminar } = useContext(TaskContext);

  useEffect(() => {
    actualizar(id, { status: isChecked });
  }, [isChecked]);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleClickUpdate = (e) => {
    e.preventDefault();
    setInput((prevInput) => ({ ...prevInput, title, description }));
    setOptions((prevOptios) => ({ ...prevOptios, id, action: "edit" }));
  };

  const handleClickDelete = async (e) => {
    e.preventDefault();
    const action = await showAlertDelete(
      "Advertencia",
      "¿Estás seguro de eliminarla?",
      "warning",
      true
    );
    if (action.isConfirmed) {
      eliminar(id);
      showAlertWithTimer(
        `<i class="bi bi-hand-thumbs-up text-primary"></i>
      Tarea eliminada correctamente`,
        "",
        "success"
      );
    }
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center rounded my-1 ${
        isChecked ? "bg-success-subtle" : "bg-light"
      }`}
    >
      <div className="me-auto text-dark-emphasis">
        <div className="fw-bold">
          <input
            className="form-check-input me-1"
            type="checkbox"
            id={`task-${index}`}
            checked={isChecked}
            onChange={handleCheck}
          />
          <label
            className={`form-check-label ${
              isChecked && "text-decoration-line-through"
            }`}
            htmlFor={`task-${index}`}
          >
            {title}
          </label>
        </div>
        <span className="fw-light fst-italic">{description}</span>
      </div>
      <div className="badge options">
        <button
          className="bg-transparent border-0"
          // data-bs-toggle="modal"
          // data-bs-target="#editTask"
          onClick={handleClickUpdate}
        >
          <i className="bi bi-pencil-square text-info"></i>
        </button>
        <button className="bg-transparent border-0" onClick={handleClickDelete}>
          <i className="bi bi-trash3 text-danger"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
