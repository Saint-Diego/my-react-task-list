import React from "react";
import Task from "../Task/Task";

const TaskList = (props) => {
  const { tasks } = props;
  return (
    <div className="text-start">
      <ul className="list-group">
        {tasks?.map((task, index) => (
          <Task key={index} value={task} idx={index} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
