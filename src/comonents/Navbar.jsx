import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/"> Home </Link>
        <Link to="/board"> Board </Link>
        <Link to="/about"> About </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
