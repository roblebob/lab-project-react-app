import "./BoardPage.css";
import Column from "../comonents/Column";
import colorTheme from "../colorTheme.jsx";
import data from "../assets/data.json";

const BoardPage = () => {
  console.log("data", data);
  return (
    <div className="Board">
      <div
        className="ColumnContainer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Column
          name="Backlog"
          color={colorTheme.backlog}
          data={data.filter((item) => item.status === "Blacklog")}
        />
        <Column
          name="Doing"
          color={colorTheme.doing}
          data={data.filter((item) => item.status === "Doing")}
        />
        <Column
          name="Review"
          color={colorTheme.review}
          data={data.filter((item) => item.status === "Review")}
        />
        <Column
          name="Done"
          color={colorTheme.done}
          data={data.filter((item) => item.status === "Done")}
        />
      </div>
    </div>
  );
};
export default BoardPage;
