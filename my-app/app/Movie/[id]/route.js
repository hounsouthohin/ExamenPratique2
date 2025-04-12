//display movie details

import React from "react";
import Link from "next/link";
import { MovieDetails } from "../../Composants/MovieDetails";

export default function MovieDetailsPage({ params }) {
    return (
        <div>
            <h1>Movie Details</h1>
            <Link href={`/movies/${params.id}/edit`}>Edit</Link>
            <MovieDetails movie={params} />
        </div>
    );
}                                       