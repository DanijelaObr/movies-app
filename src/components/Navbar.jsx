import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav>
      <div className="navbar-brand">🎬 MoviesApp</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <SearchBar />
      </div>
    </nav>
  );
}

export default Navbar;
