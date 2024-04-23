import "./BoardPage.css";
import Column from "../comonents/Column";
import colorTheme from "../colorTheme.jsx";
import dataDefault from "../assets/defaultData.json";
import { useState } from "react";

const BoardPage = () => {
  const [data, setData] = useState(dataDefault);

  const addCard = (item) => setData([...data, item]);
  const deleteCard = (id) => setData(data.filter((item) => item._id !== id));

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
        />
        <Column
          name="Doing"
          color={colorTheme.doing}
          data={data.filter((item) => item.status === "Doing")}
          addCard={addCard}
          deleteCard={deleteCard}
        />
        <Column
          name="Review"
          color={colorTheme.review}
          data={data.filter((item) => item.status === "Review")}
          addCard={addCard}
          deleteCard={deleteCard}
        />
        <Column
          name="Done"
          color={colorTheme.done}
          data={data.filter((item) => item.status === "Done")}
          addCard={addCard}
          deleteCard={deleteCard}
        />
      </div>
    </div>
  );
};
export default BoardPage;
