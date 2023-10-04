import React, { useContext, useEffect, useRef, useState } from "react";
import { TaskContext } from "../../context/createContextTask";
import { validateTask } from "../../utils/validate";
import { showAlertWithTimer } from "../../utils/alerts";
import TaskList from "../TaskList/TaskList";

const newInput = {
  id: 0,
  title: "",
  description: "",
  status: false,
};

const isObjectEmpty = (objectName) => {
  return JSON.stringify(objectName) === "{}";
};

const SAVE = "save";
const EDIT = "edit";

const FormTask = () => {
  const [input, setInput] = useState(newInput);
  const [error, setError] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [options, setOptions] = useState({ id: 0, action: SAVE });
  const { tasks, crear, actualizar } = useContext(TaskContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("task-list", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (input.title && input.description) setIsDisabled(false);
    else setIsDisabled(true);
  }, [input]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(validateTask({ ...input, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isObjectEmpty(error)) {
      if (options.action === SAVE) {
        crear(input);
        showAlertWithTimer(
          `<i class="bi bi-hand-thumbs-up text-primary"></i>
          Tarea guardada correctamente`,
          "",
          "success"
        );
      } else if (options.action === EDIT) {
        actualizar(options?.id, input);
        showAlertWithTimer(
          `<i class="bi bi-hand-thumbs-up text-primary"></i>
          Tarea actualizada correctamente`,
          "",
          "success"
        );
        setOptions({ ...options, action: SAVE });
      }
      clearInputs();
    }
  };

  const clearInputs = () => {
    setInput(newInput);
    inputRef.current.focus();
  };

  const showMessageError = (value) => (
    <div
      className="alert alert-danger alert-dismissible fade show my-2"
      role="alert"
    >
      <span>{value}</span>
    </div>
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control rounded my-1"
          type="text"
          id="task"
          name="title"
          ref={inputRef}
          value={input.title}
          placeholder="Ingrese tarea"
          onChange={handleChange}
          // required
        />
        {error.title && showMessageError(error.title)}
        <textarea
          className="form-control"
          id="description"
          name="description"
          cols="10"
          rows="3"
          value={input.description}
          placeholder="Ingrese una breve descripción"
          onChange={handleChange}
          // required
        ></textarea>
        {error.description && showMessageError(error.description)}
        <button
          className="btn btn-info rounded my-1 mx-0 w-100"
          type="submit"
          disabled={isDisabled}
        >
          {options.action === SAVE ? (
            <i className="bi bi-plus-lg text-white"></i>
          ) : (
            <i className="bi bi-pencil text-white"></i>
          )}
        </button>
      </form>
      <hr className="row mt-3" />
      <TaskList setInput={setInput} setOptions={setOptions} />
    </>
  );
};

export default FormTask;
