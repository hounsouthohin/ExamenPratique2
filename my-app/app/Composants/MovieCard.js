import React from "react";
import Link from "next/link";

export default function MovieCard({ movie }) {
  if (movie.deleted) return null;

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={movie.poster_path}
        alt={movie.title}
        className="card-img-top"
        style={{
          height: "250px",
          objectFit: "cover",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem"
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text mb-1"><strong>Durée :</strong> {movie.duration}</p>
        <p className="card-text text-muted flex-grow-1">
          {movie.description?.length > 100
            ? movie.description.slice(0, 100) + "..."
            : movie.description}
        </p>
        <Link href={`/Movie/${movie.id}`} className="mt-2">
          <button className="btn btn-primary w-100">Détails</button>
        </Link>
      </div>
    </div>
  );
}
