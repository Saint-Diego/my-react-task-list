import React, { useState } from "react";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import FormTask from "../FormTask/FormTask";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <Header />
        </div>
        <div className="card-body">
          <FormTask tasks={tasks} setTasks={setTasks} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default Home;
