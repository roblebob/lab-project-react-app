import React, { useState, useRef } from "react";
import "./TaskForm.css";

function TaskForm() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();

    if (!value) return;

    const newTask = {
      id: Date.now(),
      text: value,
    };

    setTasks([...tasks, newTask]);

    inputRef.current.value = "";
  };

  return (
    <form id="task-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="New Task..." ref={inputRef} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;

// import React from "react";
// import "./TaskForm.css";

// function TaskForms() {
//   const form = document.getElementById("task-form");
//   const input = document.getElementById("task-input");
//   const backlog = document.getElementById("backlog");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const value = input.value;

//     if (!value) return;

//     const newTask = document.createElement("p");
//     newTask.classList.add("task");
//     newTask.setAttribute("draggable", "true");
//     newTask.innerText = value;

//     newTask.addEventListener("dragstart", () => {
//       newTask.classList.add("is-dragging");
//     });

//     newTask.addEventListener("dragend", () => {
//       newTask.classList.remove("is-dragging");
//     });

//     backlog.appendChild(newTask);

//     input.value = "";
//   });

//   return (
//     <form id="task-form">
//       <input type="text" placeholder="New Task..." id="task-input" />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// }

// export default TaskForms;
