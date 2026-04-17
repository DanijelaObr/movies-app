import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaFilm } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <div className="navbar-brand">
        <FaFilm className="brand-icon" /> Cinescape
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <SearchBar />
      </div>
    </nav>
  );
}

export default Navbar;
