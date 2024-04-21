import "./Column.css";

const Column = ({ children, name, color }) => {
    console.log("screen width", screen.width);
  return (
    <div
      className="Column"
      style={{ backgroundColor: color }}
    >
      <h2>{name}</h2>
      {children}
    </div>
  );
};
export default Column;
