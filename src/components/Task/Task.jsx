import React, { useState } from "react";

const Task = ({ value, idx }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className="list-group-item bg-light">
      <input
        className="orm-check-input me-1"
        type="checkbox"
        id={`${value}${idx}`}
        checked={isChecked}
        onChange={handleCheck}
      />
      <label
        className={`form-check-label stretched-link ${
          isChecked && "text-decoration-line-through"
        }`}
        htmlFor={`${value}${idx}`}
      >
        {value}
      </label>
    </li>
  );
};

export default Task;
