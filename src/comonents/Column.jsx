import "./Column.css";
import { v4 as uuidv4 } from "uuid";
import ItemCard from "./ItemCard";

const Column = ({ data, name, color, addCard, deleteCard, edit }) => {
  const submitCard = () => {
    addCard({
      _id: uuidv4(),
      status: name,
      content: "",
    });
  };

  return (
    <div>
      <div className="Column" style={{ backgroundColor: color }}>
        <h2>{name}</h2>;
        {data.length !== 0 &&
          data.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                deleteCard={deleteCard}
                edit={edit}
              />
            );
          })}
      </div>

      <button
        className="AddCard"
        onClick={submitCard}
        style={{
          minWidth: "50px",
          minHeight: "10px",
          borderRadius: "1rem",
          backgroundColor: "transparent",
          marginBottom: "5px",
          textAlign: "center",
          fontSize: "1.5rem",
          position: "relative",
          bottom: "0%",
          backgroundColor: color,
          margin: "5px",
        }}
      >
        +
      </button>
    </div>
  );
};
export default Column;
