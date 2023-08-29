import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";

const TaskList = ({ setInput, setOptions, tasks, setTasks }) => {
  return (
    <div id="tasks-list" className="overflow-auto text-start">
      <ul className="list-group">
        {tasks?.map((task, index) => (
          <Task
            key={index}
            id={task.id}
            index={index}
            title={task.title}
            description={task.description}
            status={task.status}
            setInput={setInput}
            setOptions={setOptions}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
