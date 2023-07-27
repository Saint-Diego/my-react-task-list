import React, { useState } from "react";

const Task = ({ title, description, idx }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className="list-group-item bg-light">
      <label
        className={`form-check-label stretched-link ${
          isChecked && "text-decoration-line-through"
        }`}
        htmlFor={`${title}${idx}`}
      >
        <input
        className="form-check-input me-1"
        type="checkbox"
        id={`${title}${idx}`}
        checked={isChecked}
        onChange={handleCheck}
      />
        {title}
      </label>
      <p className="fw-light fst-italic">{description}</p>
    </li>
  );
};

export default Task;
