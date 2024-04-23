import "./ItemCard.css";

const ItemCard = ({ item, deleteCard }) => {
  return (
    <div className="ItemCard">
      <img
        className="DeleteBtn"
        src="src/assets/garbage.png"
        alt="delete"
        style={{ width: "20px", position: "relative", left: "90%" }}
        onClick={() => {
          console.log("delete", item._id);
          deleteCard(item._id);
        }}
      />

      <h1>{item.title}</h1>
      <div className="ItemCardCommentsContainer">
        {(item.comments.length !== 0) &&
          item.comments.map((comment, index) => {
            return (
              <div key={comment + index}>
                <p>{comment}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ItemCard;
