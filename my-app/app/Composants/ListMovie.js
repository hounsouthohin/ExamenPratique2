"use client";

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function ListMovie({ movies }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (Array.isArray(movies)) {
      const filtered = movies.filter((movie) => !movie.deleted);
      setMovieList(filtered);
    }
  }, [movies]);

  const handleDelete = (id) => {
    setMovieList((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    
      <div className="row mb-4 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onDelete={handleDelete} />
        ))}
      </div>
  
  );
}

