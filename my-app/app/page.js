// app/page.js
"use client";
import React, { useEffect, useState } from "react";
import ListMovie from "./Composants/ListMovie";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5501/movies");
        const data = await response.json();

        // ⚠️ adapte cette ligne selon la vraie structure de ta réponse
        console.log("data reçu:", data);
        setMovies(data.movies ?? data); // si jamais c'est un tableau directement
      } catch (error) {
        console.error("Erreur lors de la récupération des films :", error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <ListMovie movies={movies} />
    </div>
  );
}
