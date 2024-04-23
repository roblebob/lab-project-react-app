import "./Column.css";
import ItemCard from "./ItemCard";

const Column = ({ data, name, color, addCard, deleteCard }) => {
  const submitCard = () => {
    addCard({
      _id: Math.ceil(Math.random() * 1000),
      title: "New Card",
      status: name,
      comments: [],
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
