"use client";

import React from "react";

export default function MovieDetails({ movie }) {
  if (!movie) return <p>Chargement du film...</p>;

  return (
    <div className="container mt-4">
      <div className="card shadow-lg">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="img-fluid rounded-start"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p className="card-text">
                <strong>Durée :</strong> {movie.duration}
              </p>
              <p className="card-text">
                <strong>Description :</strong> {movie.description}
              </p>
              <p className="card-text">
                <small className="text-muted">ID : {movie.id}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

