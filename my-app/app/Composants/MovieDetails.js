"use client";

import React from "react";
import MovieCard from "./MovieCard";

export default function MovieDetails({ movie }) {
  if (!movie) return <p>Chargement du film...</p>;

  return (
    <div className="movie-card">
      
        <img
          src={movie.poster_path} 
          alt={movie.title}
          style={{ width: "100%", borderRadius: "10px" }}
        />
      <h2>{movie.title}</h2>
      <p><strong>Duration:</strong> {movie.duration}</p>
      <p><strong>Description:</strong> {movie.description}</p>
    </div>
  );
}
