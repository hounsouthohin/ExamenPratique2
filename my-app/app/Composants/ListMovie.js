import React from "react";
import MovieCard from "./MovieCard";

export default function ListMovie({ movies }) {
  if (!Array.isArray(movies)) {
    return <p className="text-center mt-5">Chargement des films...</p>;
  }

  const filteredMovies = movies.filter((movie) => !movie.deleted);

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}


