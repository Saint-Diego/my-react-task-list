import React, { useState } from "react";

const FormTask = (props) => {
  const { tasks, setTasks } = props;
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, input]);
    clearInputs();
  };

  const clearInputs = () => {
    setInput("");
  };

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input
        className="form-control rounded my-1"
        type="text"
        name="name"
        value={input}
        placeholder="Ingrese tarea"
        onChange={handleChange}
      />
      <button type="submit" role="button" className="btn btn-primary rounded m-1">
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default FormTask;
