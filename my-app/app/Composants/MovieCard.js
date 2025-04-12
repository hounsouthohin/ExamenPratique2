//Movie Card component with Soft Deleting
import React from "react";
import Link from "next/link";

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <Link href={`./Movie/${movie.id}`}>
                <img    
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}    
                />
            </Link>    
            <h2>{movie.title}</h2>
            <p>{movie.duration}</p>
            <p>Description: {movie.description}</p>
        </div>
    );
}    

export default MovieCard;         


