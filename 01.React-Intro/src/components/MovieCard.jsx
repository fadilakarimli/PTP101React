// components/MovieCard.jsx
const MovieCard = ({ movie }) => {
  return (
    <div className={movie.isTopRated ? "movie-card top-rated" : "movie-card"}>
      <img src={movie.image} alt={movie.title} />

      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <p>⭐ Rating: {movie.imDbRating}</p>

      {movie.isTopRated && <span className="badge">Top Rated</span>}
    </div>
  );
};

export default MovieCard;
