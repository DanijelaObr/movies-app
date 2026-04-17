import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { searchMovies, getPopularMovies } from "../services/api";
import { useMovieContext } from "../context/MovieContext";

function SearchBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const { setSearchResults, setIsSearching, query, setQuery } =
    useMovieContext();
  const location = useLocation();

  useEffect(() => {
    if (query.trim().length < 3) {
      if (query.trim().length === 0) {
        setIsSearching(false);
        getPopularMovies().then((data) => setSearchResults(data));
      }
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const data = await searchMovies(query);
        setSearchResults(data);
      } catch (err) {
        console.error(err);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    setSearchVisible(false);
    setQuery("");
    setIsSearching(false);
  }, [location.pathname]);

  if (location.pathname.startsWith("/movie/")) return null;

  return searchVisible ? (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
        autoFocus
        onBlur={() => {
          if (!query.trim()) setSearchVisible(false);
        }}
      />
    </form>
  ) : (
    <FaSearch className="search-icon" onClick={() => setSearchVisible(true)} />
  );
}

export default SearchBar;
