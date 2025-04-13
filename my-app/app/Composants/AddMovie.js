'use client';
import React, { useState } from "react";

export default function AddMovie({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, posterPath, duration, description };
    onSubmit(newMovie);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">🎬 Ajouter un Film</h1>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Titre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: Inception"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">URL de l'image</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: https://image.url/poster.jpg"
            value={posterPath}
            onChange={(e) => setPosterPath(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Durée</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: 2h 30min"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Résumé du film..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          ➕ Ajouter le Film
        </button>
      </form>
    </div>
  );
}
