//List Movie
import React from "react";
import MovieCard from "./MovieCard";

function ListMovie({ movies }) {
    const filteredMovies = movies.filter((movie) => !movie.deleted);

    return (
        <div className="movie-list">
            {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default ListMovie;
