import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";

const TaskList = ({ tasks }) => {
  return (
    <div id="tasks-list" className="overflow-auto text-start">
      <ul className="list-group">
        {tasks?.map((task, index) => (
          <Task
            key={index}
            title={task.title}
            description={task.description}
            idx={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
