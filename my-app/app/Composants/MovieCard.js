import React from "react";
import Link from "next/link";

export default function MovieCard({ movie, onDelete }) {
  if (movie.deleted) return null;

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5501/movies/${movie.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deleted: true }),
      });

      if (response.ok) {
        onDelete(movie.id); // Appelle le parent pour mettre à jour la liste localement
      } else {
        console.error("Erreur lors de la suppression");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <div className="card col-lg-3 mb-4 shadow-sm  w-50 my-auto">
      <div className="card-body"> 
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title">{movie.title}</h5>
          <button onClick={handleDelete} className="btn btn-sm btn-danger">
            <i className="bi bi-trash"></i>
          </button>
        </div>
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="img-fluid mb-2"
          style={{ height: "150px", objectFit: "cover", borderRadius: "10px" }}
        />
        <p className="card-text"><strong>Durée :</strong> {movie.duration}</p>
        <p className="card-text">{movie.description}</p>
        <Link href={`/Movie/${movie.id}`}>
          <button className="btn btn-primary btn-sm">Détails</button>
        </Link>
      </div>
    </div>
  );
}
