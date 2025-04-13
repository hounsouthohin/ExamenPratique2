'use client';
import { addMovie } from './Action';

export default function AddMovieForm() {
  return (
    <form action={addMovie}>
      <input name="title" placeholder="Titre" className="form-control mb-3" />
      <input name="posterPath" placeholder="URL de l'image" className="form-control mb-3" />
      <input name="duration" placeholder="Durée" className="form-control mb-3" />
      <textarea name="description" placeholder="Description" className="form-control mb-3" />
      <button type="submit" className="btn btn-primary">Ajouter</button>
    </form>
  );
}

