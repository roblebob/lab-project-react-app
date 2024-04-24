import "./Column.css";
import { v4 as uuidv4 } from 'uuid';
import ItemCard from "./ItemCard";

const Column = ({ data, name, color, addCard, deleteCard }) => {
  const submitCard = () => {
    addCard({
      _id: uuidv4(), 
      status: name,
      content: "",
    });
  };

  return (
    <div className="Column" style={{ backgroundColor: color }}>
      <h2>{name}</h2>;
      {data.length !== 0 &&
        data.map((item) => {
          return (
            <ItemCard key={item._id} item={item} deleteCard={deleteCard} />
          );
        })}
      <button className="AddCard" onClick={submitCard}>
        +
      </button>
    </div>
  );
};
export default Column;
