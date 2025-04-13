'use server';

export async function addMovie(formData) {
  const title = formData.get('title');
  const posterPath = formData.get('posterPath');
  const duration = formData.get('duration');
  const description = formData.get('description');

  const response = await fetch('http://localhost:5501/movies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, posterPath, duration, description }),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de l'ajout du film");
  }

  // Optionnel : redirection
}
