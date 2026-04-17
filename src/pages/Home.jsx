import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/api";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchResults, isSearching } = useMovieContext();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading && !isSearching) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const displayMovies = isSearching ? searchResults : movies;

  return (
    <div>
      {isSearching && displayMovies.length === 0 ? (
        <p className="no-results">No movies found</p>
      ) : null}
      <div className="movies-grid">
        {displayMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
