import React from "react";
import TaskForms from "../comonents/TaskForm.jsx";
import ColumnsContainer from "../comonents/ColContainer.jsx";
import "./BoardT.css";

const BoardT = () => {
  return (
    <div className="board">
      <TaskForms />
      <ColumnsContainer />
    </div>
  );
};

export default BoardT;
