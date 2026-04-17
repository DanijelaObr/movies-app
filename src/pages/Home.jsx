import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/api";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { searchResults, isSearching } = useMovieContext();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = await getPopularMovies(currentPage);
        setMovies(data.results);
        setTotalPages(Math.min(data.totalPages, 500));
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage]);

  if (loading && !isSearching) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const displayMovies = isSearching ? searchResults : movies;

  return (
    <div>
      {isSearching && displayMovies.length === 0 && (
        <p className="no-results">No movies found</p>
      )}
      <div className="movies-grid">
        {displayMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {!isSearching && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export default Home;
