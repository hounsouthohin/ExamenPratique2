// app/Composants/ListMovie.js
import React from "react";
import MovieCard from "./MovieCard";

export default function ListMovie({ movies }) {
  if (!Array.isArray(movies)) {
    return <p>Chargement des films...</p>;
  }

  const filteredMovies = movies.filter((movie) => !movie.deleted);

  return (
    <div className="movie-list">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}


