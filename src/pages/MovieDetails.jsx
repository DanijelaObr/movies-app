import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import { FaStar, FaCalendar } from "react-icons/fa";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError("Failed to fetch movie details");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movie-details-container">
      <div className="movie-details-top">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-details-info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <div className="movie-meta">
            <span>
              <FaStar className="star-icon" /> {movie.vote_average.toFixed(1)}
            </span>
            <span>
              <FaCalendar className="calendar-icon" /> {movie.release_date}
            </span>
          </div>
        </div>
      </div>

      <div className="movie-cast">
        <h2>Cast</h2>
        <div className="cast-list">
          {movie.credits.cast.slice(0, 6).map((actor) => (
            <div key={actor.id} className="cast-member">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/100x150?text=No+Image"
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p className="character">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
