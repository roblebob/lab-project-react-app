import "./BoardPage.css"; 
import Column from "../comonents/Column";
import colorTheme  from "../colorTheme.jsx";

const BoardPage = () => {
  return (
    <div className="Board"> 
      <div
        className="ColumnContainer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Column name="Backlog" color={colorTheme.backlog}/>
        <Column name="Doing" color={colorTheme.doing} />
        <Column name="Review" color={colorTheme.review} />
        <Column name="Done" color={colorTheme.done} />
      </div>
    </div>
  );
};
export default BoardPage;
