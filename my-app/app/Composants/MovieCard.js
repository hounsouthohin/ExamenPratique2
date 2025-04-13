import React from "react";
import Link from "next/link";

export default function MovieCard({ movie }) {
  // Si le film est "soft deleted", on peut choisir de ne pas l'afficher du tout :
  if (movie.deleted) return null;

  return (
    <div className="movie-card">
      <Link href={`/Movie/${movie.id}`}>
        <img
          src={movie.poster_path} // l’URL est déjà complète
          alt={movie.title}
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </Link>
      <h2>{movie.title}</h2>
      <p><strong>Duration:</strong> {movie.duration}</p>
      <p><strong>Description:</strong> {movie.description}</p>
    </div>
  );
}

         


