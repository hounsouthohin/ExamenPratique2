//Movie Details component
import React from "react";  
import Link from "next/link";
//import MovieCard from "./MovieCard";
import {MovieCard} from "./MovieCard";

function MovieDetails({ movie }) {
    return (
        <div className="movie-details">    
            <MovieCard movie={movie} />
        </div>
    );
}    

export default MovieDetails;