import { Link } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const handleFavorite = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <div className="movie-card-image">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={handleFavorite}
        >
          <FaHeart />
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>
          <FaStar className="star-icon" /> {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </Link>
  );
}

export default MovieCard;
