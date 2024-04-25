// import "./ItemCard.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react"; 

const ItemCard = ({ item, deleteCard, edit }) => {
  const [formContent, setFormContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setFormContent(item.content);
  }, [item.content]);

  return (
    <div
      className="ItemCard"
      draggable="true"
      style={{
        display: "flex",
        flexDirection: "column", 
        width: "80%",
        height: "auto",
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#fff", 
        marginBottom: "5px",
        textAlign: "left"
      }}

      onDoubleClick={(e) => {
        e.preventDefault();
        console.log("double click");
        setIsEditing(true);
      }}
 
    >
      <img
        className="DeleteBtn"
        src="src/assets/garbage.png"
        alt="delete"
        style={{ width: "20px", position: "relative", left: "96%" }}
        onClick={() => deleteCard(item._id)}
      />

      {!isEditing && (
        <div className="ItemCardContent" style={{paddingLeft: "25px"}} >
          <Markdown remarkPlugins={[remarkGfm]}>{item.content}</Markdown>
        </div>
      )}
      {isEditing && (
        // <form>
          // <div className={`ItemCardInput`}
          // >
            <textarea
              className={`ItemCardInputTextArea`}
              style={{width:"100%", height:"auto", boxSizing: "border-box", fontSize: "1rem"}}
              value={formContent}
              placeholder="Enter your content here"
              onChange={(e) => { 
                setFormContent(e.target.value);
              }}
              onBlur={() => {
                edit(item._id, formContent);
                setIsEditing(false);
              }}
            />
          // </div>
        // </form>
      )}
    </div>
  );
};
export default ItemCard;
