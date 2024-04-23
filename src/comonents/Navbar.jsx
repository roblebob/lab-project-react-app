import "./Navbar.css"; 
import { Link, NavLink } from "react-router-dom";
import colorTheme from "../colorTheme.jsx";

function Navbar() {
  return (
    <nav className="Navbar" style={{ background: colorTheme.primary }}>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/board"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Kanban Board
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          About Us
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
