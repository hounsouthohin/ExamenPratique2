"use client";

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieDetails({ movieId }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5501/movies")
      .then((res) => res.json())
      .then((data) => {
        const foundMovie = data.find((m) => m.id === parseInt(movieId));
        setMovie(foundMovie);
      })
      .catch((err) => console.error("Erreur de chargement :", err));
  }, [movieId]);

  if (!movie) return <p>Chargement du film...</p>;

  return (
    <div className="movie-details">
      <MovieCard movie={movie} />
    </div>
  );
}


