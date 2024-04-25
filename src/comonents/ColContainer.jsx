import React, { useState, useEffect } from "react";
import "./ColContainer.css";

const ColumnsContainer = () => {
  const [draggingTask, setDraggingTask] = useState(null);

  useEffect(() => {
    const handleDragStart = (e) => {
      setDraggingTask(e.target);
      e.target.classList.add("is-dragging");
    };
    const handleDragEnd = (e) => {
      setDraggingTask(null);
      e.target.classList.remove("is-dragging");
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      const curTask = draggingTask;
      if (!curTask) return;

      const zone = e.currentTarget;
      const bottomTask = insertAboveTask(zone, e.clientY);

      if (!bottomTask) {
        zone.appendChild(curTask);
      } else {
        zone.insertBefore(curTask, bottomTask);
      }
    };

    const draggables = document.querySelectorAll(".task");
    draggables.forEach((task) => {
      task.addEventListener("dragstart", handleDragStart);
      task.addEventListener("dragend", handleDragEnd);
    });

    const droppables = document.querySelectorAll(".column");
    droppables.forEach((zone) => {
      zone.addEventListener("dragover", handleDragOver);
    });

    return () => {
      draggables.forEach((task) => {
        task.removeEventListener("dragstart", handleDragStart);
        task.removeEventListener("dragend", handleDragEnd);
      });
      droppables.forEach((zone) => {
        zone.removeEventListener("dragover", handleDragOver);
      });
    };
  }, [draggingTask]);

  const insertAboveTask = (zone, mouseY) => {
    const els = zone.querySelectorAll(".task:not(.is-dragging)");
    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    els.forEach((task) => {
      const { top } = task.getBoundingClientRect();
      const offset = mouseY - top;

      if (offset < 0 && offset > closestOffset) {
        closestOffset = offset;
        closestTask = task;
      }
    });

    return closestTask;
  };

  return (
    <div className="columns-container">
      <div className="column" id="backlog">
        <h3>Backlog</h3>
        <p className="task" draggable="true">
          Task1
        </p>
        <p className="task" draggable="true">
          Task2
        </p>
        <p className="task" draggable="true">
          Task3
        </p>
      </div>

      <div className="column" id="doing">
        <h3>Doing</h3>
        <p className="task" draggable="true">
          Task4
        </p>
        <p className="task" draggable="true">
          Task5
        </p>
        <p className="task" draggable="true">
          Task6
        </p>
      </div>

      <div className="column" id="review">
        <h3>Review</h3>
        <p className="task" draggable="true">
          Task7
        </p>
        <p className="task" draggable="true">
          Task8
        </p>
        <p className="task" draggable="true">
          Task9
        </p>
      </div>

      <div className="column" id="done">
        <h3>Done</h3>
        <p className="task" draggable="true">
          Task10
        </p>
        <p className="task" draggable="true">
          Task11
        </p>
        <p className="task" draggable="true">
          Task12
        </p>
      </div>
    </div>
  );
};

export default ColumnsContainer;

// import React from "react";
// import "./ColContainer.css";

// const ColumnsContainer = () => {
//   const draggables = document.querySelectorAll(".task");
//   const droppables = document.querySelectorAll(".column");

//   draggables.forEach((task) => {
//     task.addEventListener("dragstart", () => {
//       task.classList.add("is-dragging");
//     });
//     task.addEventListener("dragend", () => {
//       task.classList.remove("is-dragging");
//     });
//   });

//   droppables.forEach((zone) => {
//     zone.addEventListener("dragover", (e) => {
//       e.preventDefault();

//       const bottomTask = insertAboveTask(zone, e.clientY);
//       const curTask = document.querySelector(".is-dragging");

//       if (!bottomTask) {
//         zone.appendChild(curTask);
//       } else {
//         zone.insertBefore(curTask, bottomTask);
//       }
//     });
//   });

//   const insertAboveTask = (zone, mouseY) => {
//     const els = zone.querySelectorAll(".task:not(.is-dragging)");

//     let closestTask = null;
//     let closestOffset = Number.NEGATIVE_INFINITY;

//     els.forEach((task) => {
//       const { top } = task.getBoundingClientRect();

//       const offset = mouseY - top;

//       if (offset < 0 && offset > closestOffset) {
//         closestOffset = offset;
//         closestTask = task;
//       }
//     });

//     return closestTask;
//   };
//   return (
//     <div className="columns-container">
//       {/* 1st Column: Backlog list */}

//       <div className="column" id="backlog">
//         <h3>Backlog</h3>

//         <p className="task" draggable="true">
//           Task1
//         </p>
//         <p className="task" draggable="true">
//           Task1
//         </p>
//         <p className="task" draggable="true">
//           Task1
//         </p>
//       </div>

//       {/* Second Column: Doing list */}

//       <div className="column" id="doing">
//         <h3>Doing</h3>

//         <p className="task" draggable="true">
//           Task1
//         </p>
//         <p className="task" draggable="true">
//           Task1
//         </p>
//         <p className="task" draggable="true">
//           Task1
//         </p>
//       </div>

//       {/* 3rd Column: Review list */}

//       <div className="column" id="review">
//         <h3>Review</h3>

//         <p className="task" draggable="true">
//           Task1
//         </p>
//         <p className="task" draggable="true">
//           Task1
//         </p>
//         <p className="task" draggable="true">
//           Task1
//         </p>
//       </div>

//       {/* 4th Column: Done list */}

//       <div className="column" id="done">
//         <h3>Done</h3>

//         <p className="task" draggable="true">
//           Task1
//         </p>
//         <p className="task" draggable="true">
//           Task1
//         </p>
//         <p className="task" draggable="true">
//           Task1
//         </p>
//       </div>

//       {/* End of Columns */}
//     </div>
//   );
// };

// export default ColumnsContainer;
