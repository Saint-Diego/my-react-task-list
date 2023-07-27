import React from "react";
import Header from "../Header/Header";
import FormTask from "../FormTask/FormTask";

localStorage.setItem("task-list", JSON.stringify([]));

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <Header />
        </div>
        <div className="card-body">
          <FormTask />
        </div>
      </div>
    </div>
  );
};

export default Home;
