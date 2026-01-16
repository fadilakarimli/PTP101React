// components/Movies.jsx
import MovieCard from "./MovieCard";

import "../assets/css/moviescard.css";

const Movies = ({ movies }) => {
  return (
    <div>
      <h1>Movies</h1>

      <ul className="movies-grid">
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
