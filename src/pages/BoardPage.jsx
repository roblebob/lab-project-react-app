import "./BoardPage.css";
import Column from "../comonents/Column";
import colorTheme from "../colorTheme.jsx";
import dataDefault from "../assets/defaultData.json";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const BoardPage = () => {
  const [data, setData] = useState(dataDefault);

  const addCard = (item) => setData([...data, item]);

  const deleteCard = (id) => setData(data.filter((item) => item._id !== id));

  const edit = (id, content) => {
    //const content = document.querySelector(`.ItemCardInputTextArea${id}`).value;
    const obj = data.find((item) => item._id === id);
    obj.content = content;
  };

  ////////////////////////////////////////////////////////////////////////////////

  const [draggingTask, setDraggingTask] = useState(null);

  //////


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

    //////////////////////////////////
    const draggables = document.querySelectorAll(".ItemCard");
    draggables.forEach((task) => {
      task.addEventListener("dragstart", handleDragStart);
      task.addEventListener("dragend", handleDragEnd);
    });

    const droppables = document.querySelectorAll(".Column");
    droppables.forEach((zone) => {
      zone.addEventListener("dragover", handleDragOver);
    });

    //////////////////////////////////
    return () => {
      // Clean up
      draggables.forEach((task) => {
        task.removeEventListener("dragstart", handleDragStart);
        task.removeEventListener("dragend", handleDragEnd);
      });
      droppables.forEach((zone) => {
        zone.removeEventListener("dragover", handleDragOver);
      });
    };
  }, [draggingTask]);

  ////////////////////////////////////////////
  const insertAboveTask = (zone, mouseY) => {
    const els = zone.querySelectorAll(".ItemCard:not(.is-dragging)");
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


////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <div className="Board">
      <div
        className="ColumnContainer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Column
          name="Backlog"
          color={colorTheme.backlog}
          data={data.filter((item) => item.status === "Backlog")}
          addCard={addCard}
          deleteCard={deleteCard}
          edit={edit}
        />
        <Column
          name="Doing"
          color={colorTheme.doing}
          data={data.filter((item) => item.status === "Doing")}
          addCard={addCard}
          deleteCard={deleteCard}
          edit={edit}
        />
        <Column
          name="Review"
          color={colorTheme.review}
          data={data.filter((item) => item.status === "Review")}
          addCard={addCard}
          deleteCard={deleteCard}
          edit={edit}
        />
        <Column
          name="Done"
          color={colorTheme.done}
          data={data.filter((item) => item.status === "Done")}
          addCard={addCard}
          deleteCard={deleteCard}
          edit={edit}
        />
      </div>
    </div>
  );
};
export default BoardPage;
