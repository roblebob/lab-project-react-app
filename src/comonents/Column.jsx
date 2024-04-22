import "./Column.css";
import ItemCard from "./ItemCard";

const Column = ({ data, name, color }) => {
  console.log("data", data);
  return (
    <div
      className="Column"
      style={{ backgroundColor: color }}
    >
      <h2>{name}</h2>
      {data.map((item) => (
        <ItemCard item={item}/>
      ))}
    </div>
  );
};
export default Column;
