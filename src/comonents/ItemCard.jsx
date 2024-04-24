import "./ItemCard.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react";

const ItemCard = ({ item, deleteCard, edit }) => {
  const [formContent, setFormContent] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    setFormContent(item.content);
  }, [item.content]);

  return (
    <div className="ItemCard">
      <img
        className="DeleteBtn"
        src="src/assets/garbage.png"
        alt="delete"
        style={{ width: "20px", position: "relative", left: "90%" }}
        onClick={() => deleteCard(item._id)}
      />

      {!isEditing && (
        <div className="ItemCardContent" style={{ textAlign: "left" }}>
          <Markdown remarkPlugins={[remarkGfm]}>{item.content}</Markdown>
        </div>
      )}

      {isEditing && (
        <div className={`ItemCardInput${item._id}`}>
          <textarea
            className={`ItemCardInputTextArea${item._id}`}
            value={formContent}
            placeholder="Enter your content here"
            onChange={(e) => setFormContent(e.target.value)}
            onBlur={() => {
              edit(item._id, formContent);
              setIsEditing(!isEditing);
            }}
          />
        </div>
      )}
    </div>
  );
};
export default ItemCard;
