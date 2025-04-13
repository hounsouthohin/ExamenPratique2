"use client";
import React, { useEffect, useState } from "react";
import ListMovie from "./Composants/ListMovie";
import Link from "next/link";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [lastMovie, setLastMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5501/movies");
        const data = await response.json();
        console.log("data reçu:", data);
        setMovies(data.movies ?? data);
      } catch (error) {
        console.error("Erreur lors de la récupération des films :", error.message);
      }
    };

    fetchMovies();

    // Charger le dernier film consulté depuis le localStorage
    const saved = localStorage.getItem("lastConsultedMovie");
    if (saved) {
      try {
        setLastMovie(JSON.parse(saved));
      } catch (err) {
        console.error("Erreur lors de la lecture du dernier film consulté :", err);
      }
    }
  }, []);

  return (
    <div className="container mt-4">
      {lastMovie && (
        <div className="mb-4">
          <h5>🎬 Dernier film consulté :</h5>
          <div className="card shadow-sm">
            <div className="row g-0 align-items-center">
              <div className="col-md-2">
                <img
                  src={lastMovie.poster_path}
                  alt={lastMovie.title}
                  className="img-fluid rounded-start"
                  style={{ height: "120px", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">{lastMovie.title}</h6>
                  <p className="card-text">
                    <small className="text-muted">{lastMovie.duration} minutes</small>
                  </p>
                </div>
              </div>
              <div className="col-md-2 text-end pe-3">
                <Link href={`/Movie/${lastMovie.id}`}>
                  <button className="btn btn-outline-primary btn-sm">Voir détails</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <h3 className="mb-3">🎞️ Liste des films</h3>
      <ListMovie movies={movies} />
    </div>
  );
}
