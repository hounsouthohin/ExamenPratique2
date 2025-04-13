// app/Movie/[id]/page.js
import MovieDetails from "../../Composants/MovieDetails";

export default async function MovieDetailsPage({ params }) {
  const { id } = params;

  return (
    <div>
      <h1>Movie Details</h1>
      <MovieDetails movieId={id} />
    </div>
  );
}
