const ItemCard = ({ item }) => {
  console.log("item", item);
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};
export default ItemCard;
