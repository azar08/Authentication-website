// src/components/Navbar.js
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Jarvis</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
