import React, { useEffect, useState } from "react";
import TaskList from "../TaskList/TaskList";
import { store } from "../../store";

const newInput = {
  title: "",
  description: "",
};

const FormTask = () => {
  const [input, setInput] = useState(newInput);
  const [tasks, setTasks] = useState(JSON.parse(store));

  useEffect(() => {
    setTasks(JSON.parse(store));
  }, []);

  useEffect(() => {
    localStorage.setItem("task-list", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, input]);
    clearInputs();
  };

  const clearInputs = () => {
    setInput(newInput);
  };

  return (
    <>
      <form className="d-block" onSubmit={handleSubmit}>
        <input
          className="form-control rounded my-1"
          type="text"
          name="title"
          value={input.title}
          placeholder="Ingrese tarea"
          onChange={handleChange}
        />
        <textarea
          className="w-100"
          name="description"
          id="description"
          cols="10"
          rows="3"
          value={input.description}
          placeholder="Ingrese una breve descripción"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          role="button"
          className="btn btn-primary rounded m-1"
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </form>
      <TaskList tasks={tasks} />
    </>
  );
};

export default FormTask;
