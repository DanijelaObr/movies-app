import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
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
