import "./ItemCard.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ItemCard = ({ item, deleteCard }) => {
  return (
    <div className="ItemCard">
      <img
        className="DeleteBtn"
        src="src/assets/garbage.png"
        alt="delete"
        style={{ width: "20px", position: "relative", left: "90%" }}
        onClick={() => deleteCard(item._id)}
      />

      <div className="ItemCardContent" style={{ textAlign: "left" }}>
        <Markdown remarkPlugins={[remarkGfm]}>{item.content}</Markdown>
      </div>
    </div>
  );
};
export default ItemCard;
