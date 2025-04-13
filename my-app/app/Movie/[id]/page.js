import MovieDetails from "../../Composants/MovieDetails";

export default async function MovieDetailsPage({ params }) {
  const { id } = params;

  console.log("params.id =", id);

  // Fetch côté serveur
  try {
    const res = await fetch("http://localhost:5501/movies", {
      next: { revalidate: 0 }, // pour éviter le cache (optionnel mais utile en dev)
    });
    const data = await res.json();

    const movie = data.find((m) => m.id === id);

    if (!movie) {
      return <p>Film introuvable</p>;
    }

    return (
      <div>
        <h1>Détails du Film</h1>
        <MovieDetails movie={movie} />
      </div>
    );
  } catch (error) {
    console.error("Erreur de chargement :", error);
    return <p>Erreur lors du chargement du film.</p>;
  }
}

